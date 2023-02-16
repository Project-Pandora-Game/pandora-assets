import { AssetDefinition, AssetDefinitionPoseLimit, AssetDefinitionPoseLimits, AssetId, BONE_MAX, BONE_MIN, GetLogger, HexColorStringSchema, Logger } from 'pandora-common';
import { AssetDatabase } from './assetDatabase';
import { AssetSourcePath, DefaultId } from './context';
import { LoadAssetsGraphics } from './graphics';
import { GraphicsDatabase } from './graphicsDatabase';
import { join } from 'path';
import { Contributors, CurrentCommitter, GitDataAvailable } from './git';
import { IS_PRODUCTION_BUILD } from '../constants';
import * as fs from 'fs';
import { pick } from 'lodash';
import { COLOR_GROUP_DEFINITION } from '../colorGroups';

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
	'blockSlots',
	'coverSlots',
	'occupySlots',
	'overrideColorKey',
	'excludeFromColorInheritance',
	// Asset definition
	'name',
	'wearable',
	'allowRandomizerUsage',
	'size',
	'chat',
	'bodypart',
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

	let colorization: Record<string, AssetColorization> | undefined;
	if (def.colorization) {
		colorization = {};
		for (const [key, value] of Object.entries(def.colorization)) {
			if (value.group) {
				colorization[key] = {
					...value,
					default: COLOR_GROUP_DEFINITION[value.group],
				};
			} else {
				if (!HexColorStringSchema.safeParse(value.default).success) {
					definitionValid = false;
					logger.error(`Invalid default in colorization.${key}: '${value.default}' is not a valid color, use full hex format, like '#ffffff'`);
				}
				colorization[key] = value;
			}
		}
	}

	if (def.poseLimits) {
		ValidateAssetDefinitionPoseLimits(logger, 'poseLimits', def.poseLimits);
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
				logger.warning(`Custom license '${license.license}' doesn't exist or is not a file.`);
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
		colorization,
		hasGraphics: def.graphics !== undefined,
	};

	// Load and verify graphics
	if (def.graphics) {
		const graphics = LoadAssetsGraphics(join(AssetSourcePath, def.graphics));

		const loggerGraphics = logger.prefixMessages('[Graphics]');

		for (let i = 0; i < graphics.layers.length; i++) {
			const layer = graphics.layers[i];

			if (layer.colorizationKey != null && colorization?.[layer.colorizationKey] == null) {
				const colorizationKeys = new Set(Object.keys(colorization ?? {}));
				loggerGraphics.warning(`Layer #${i} has colorizationKey ${layer.colorizationKey} outside of defined colorization keys [${[...colorizationKeys].join(', ')}]`);
			}
		}

		GraphicsDatabase.registerAsset(id, graphics);
	}
	AssetDatabase.registerAsset(id, asset);
}

function ValidateAssetDefinitionPoseLimits(logger: Logger, context: string, limits: AssetDefinitionPoseLimits): void {
	ValidateAssetDefinitionPoseLimit(logger, context, limits);
	if (!limits.options) {
		return;
	}
	for (let i = 0; i < limits.options.length; i++) {
		ValidateAssetDefinitionPoseLimits(logger, `${context}[${i}]`, limits.options[i]);
	}
}

function ValidateAssetDefinitionPoseLimit(logger: Logger, context: string, { bones, arms, leftArm, rightArm }: AssetDefinitionPoseLimit): void {
	for (const [name, range] of Object.entries(bones ?? {})) {
		if (typeof range === 'number') {
			if (range < BONE_MIN || range > BONE_MAX) {
				logger.error(`Invalid pose limit: ${context}.bones.${name} is not a valid bone range, must be in range [${BONE_MIN}, ${BONE_MAX}]`);
			}
			continue;
		} else if (!range) {
			logger.error(`Invalid pose limit: ${context}.bones.${name} is not a valid bone range, must be an array or number`);
			continue;
		}
		let lastMax = BONE_MIN - 1;
		for (const [min, max] of range) {
			if (!Number.isInteger(min) || min < BONE_MIN || min > BONE_MAX) {
				logger.error(`Invalid pose limit: ${context}.bones.${name} is not a valid bone range, must be in range [${BONE_MIN}, ${BONE_MAX}] of integers`);
			}
			if (!Number.isInteger(max) || max < BONE_MIN || max > BONE_MAX) {
				logger.error(`Invalid pose limit: ${context}.bones.${name} is not a valid bone range, must be in range [${BONE_MIN}, ${BONE_MAX}] of integers`);
			}
			if (min > max) {
				logger.error(`Invalid pose limit: ${context}.bones.${name} is not a valid bone range, min must not be greater than max`);
			}
			if (min <= lastMax) {
				logger.error(`Invalid pose limit: ${context}.bones.${name} is not a valid bone range, ranges must not overlap`);
			}
			lastMax = max;
		}
	}
	if (arms && Object.keys(arms).length === 0) {
		logger.error(`Invalid pose limit: ${context}.arms must be a non-empty object`);
	}
	if (leftArm && Object.keys(leftArm).length === 0) {
		logger.error(`Invalid pose limit: ${context}.leftArm must be a non-empty object`);
	}
	if (rightArm && Object.keys(rightArm).length === 0) {
		logger.error(`Invalid pose limit: ${context}.rightArm must be a non-empty object`);
	}
	for (const key of Object.keys(arms ?? {})) {
		if (leftArm && key in leftArm) {
			logger.error(`Invalid pose limit: ${context}.arms.${key} and ${context}.leftArm.${key} are both defined`);
		}
		if (rightArm && key in rightArm) {
			logger.error(`Invalid pose limit: ${context}.arms.${key} and ${context}.rightArm.${key} are both defined`);
		}
	}
}
