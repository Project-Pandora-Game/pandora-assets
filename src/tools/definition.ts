import { AssetDefinition, AssetId, BONE_MAX, BONE_MIN, GetLogger, HexColorStringSchema } from 'pandora-common';
import { AssetDatabase } from './assetDatabase';
import { AssetSourcePath, DefaultId } from './context';
import { LoadAssetsGraphics } from './graphics';
import { GraphicsDatabase } from './graphicsDatabase';
import { join } from 'path';
import { Contributors, CurrentCommitter, GitDataAvailable } from './git';
import { IS_PRODUCTION_BUILD } from '../constants';
import * as fs from 'fs';
import { pick } from 'lodash';

const DEFINITION_FALLTHOUGH_PROPERTIES = [
	// Properties
	'poseLimits',
	'effects',
	'attributes',
	'requirements',
	'hides',
	'blockAddRemove',
	'blockSelfAddRemove',
	'blockModules',
	'blockSelfModules',
	// Asset definition
	'name',
	'wearable',
	'allowRandomizerUsage',
	'size',
	'chat',
	'bodypart',
	'colorization',
	'modules',
] as const;

export type AssetDefinitionFallthoughProperties = (typeof DEFINITION_FALLTHOUGH_PROPERTIES)[number] & string;

export function GlobalDefineAsset(def: IntermediateAssetDefinition): void {
	const id: AssetId = `a/${def.id ?? DefaultId()}` as const;

	const logger = GetLogger('DefineAsset', `[Asset ${id}]`);

	let definitionValid = true;

	if (def.bodypart != null && def.size !== 'bodypart') {
		definitionValid = false;
		logger.error(`Invalid size: Bodyparts must use the 'bodypart' size`);
	} else if (def.size === 'bodypart' && def.bodypart == null) {
		definitionValid = false;
		logger.error(`Invalid size: Only bodyparts can use the 'bodypart' size`);
	}

	if (def.colorization) {
		for (let i = 0; i < def.colorization.length; i++) {
			const valid = HexColorStringSchema.safeParse(def.colorization[i].default).success;
			if (!valid) {
				definitionValid = false;
				logger.error(`Invalid default in colorization[${i}]: '${def.colorization[i].default}' is not a valid color, use full hex format, like '#ffffff'`);
			}
		}
	}
	const colorizationMaxIndex = def.colorization ? def.colorization.length - 1 : -1;

	for (const [bone, value] of Object.entries(def.poseLimits?.forcePose ?? {})) {
		if (value == null)
			continue;
		const [min, max] = typeof value === 'number' ? [value, value] : value;

		if (!Number.isInteger(min) || min < BONE_MIN || min > BONE_MAX) {
			logger.error(`Invalid min limit for poseLimits.forcePose.${bone}, must be a whole number in range [${BONE_MIN}, ${BONE_MAX}]`);
			definitionValid = false;
		}
		if (!Number.isInteger(max) || max < BONE_MIN || max > BONE_MAX) {
			logger.error(`Invalid max limit for poseLimits.forcePose.${bone}, must be a whole number in range [${BONE_MIN}, ${BONE_MAX}]`);
			definitionValid = false;
		}
		if (min > max) {
			logger.error(`Invalid range for poseLimits.forcePose.${bone}, min must not be greater than max`);
			definitionValid = false;
		}
	}

	//#region Validate ownership data

	// Validate responsible contributor
	const contributor = def.ownership.responsibleContributor.toLowerCase();
	if (GitDataAvailable &&
		!Contributors.has(contributor) &&
		(!CurrentCommitter || CurrentCommitter.toLowerCase() !== contributor)
	) {
		if (IS_PRODUCTION_BUILD || !CurrentCommitter) {
			logger.warning('The responsible contributor was not found in the Git history.');
		} else {
			logger.warning(
				'The responsible contributor was not found in the Git history.\n' +
				`If you commit with current settings, this is your commit signature: '${CurrentCommitter}'`,
			);
		}
	}

	// Validate presence of licensing data
	if (def.graphics !== undefined && def.ownership.licensing.length === 0) {
		logger.warning('Asset has graphics, but no licensing info');
	}

	for (const license of def.ownership.licensing) {
		// Validate that custom license exists and is a file
		if (license.license.startsWith('./')) {
			const path = join(AssetSourcePath, license.license);
			if (!fs.existsSync(path) || !fs.statSync(path).isFile()) {
				// TODO: Change from `alert` to `warning` once ready
				logger.alert(`Custom license '${license.license}' doesn't exist or is not a file.`);
			}
		}
	}
	// Check that CHANGE_ME was replaced
	if (def.ownership.licensing
		.flatMap((l) => [l.part, l.copyrightHolder, l.editedBy])
		.includes('CHANGE_ME')
	) {
		logger.warning(`Licensing data includes fields with 'CHANGE_ME' template data that need to be changed.`);
	}

	//#endregion

	if (!definitionValid) {
		logger.error('Invalid asset definition, asset skipped');
		return;
	}

	const asset: AssetDefinition = {
		...pick(def, DEFINITION_FALLTHOUGH_PROPERTIES),
		id,
		hasGraphics: def.graphics !== undefined,
	};

	// Load and verify graphics
	if (def.graphics) {
		const graphics = LoadAssetsGraphics(join(AssetSourcePath, def.graphics));

		const loggerGraphics = logger.prefixMessages('[Graphics]');

		for (let i = 0; i < graphics.layers.length; i++) {
			const layer = graphics.layers[i];

			if (layer.colorizationIndex != null && layer.colorizationIndex > colorizationMaxIndex) {
				loggerGraphics.warning(`Layer #${i} has colorizationIndex ${layer.colorizationIndex} outside of defined colorization (0-${colorizationMaxIndex})`);
			}
		}

		GraphicsDatabase.registerAsset(id, graphics);
	}
	AssetDatabase.registerAsset(id, asset);
}
