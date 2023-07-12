import { AssetDefinitionPoseLimit, AssetDefinitionPoseLimits, AssetId, BONE_MAX, BONE_MIN, GetLogger, Logger, PersonalAssetDefinition } from 'pandora-common';
import { AssetDatabase } from './assetDatabase';
import { AssetSourcePath, DefaultId } from './context';
import { LoadAssetsGraphics } from './graphics';
import { GraphicsDatabase } from './graphicsDatabase';
import { join } from 'path';
import { pick } from 'lodash';
import { LoadAssetColorization } from './load_helpers/color';
import { ValidateOwnershipData } from './licensing';

const DEFINITION_FALLTHROUGH_PROPERTIES = [
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
	'colorRibbonGroup',
	// Asset definition
	'name',
	'wearable',
	'allowRandomizerUsage',
	'size',
	'chat',
	'bodypart',
	'modules',
] as const satisfies readonly (keyof PersonalAssetDefinition)[];

export type AssetDefinitionFallthroughProperties = (typeof DEFINITION_FALLTHROUGH_PROPERTIES)[number] & string;

export function GlobalDefineAsset(def: IntermediatePersonalAssetDefinition): void {
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

	const {
		colorization,
		valid: colorizationValid,
	} = LoadAssetColorization(logger, def.colorization);
	definitionValid &&= colorizationValid;

	if (def.colorRibbonGroup != null && colorization?.[def.colorRibbonGroup] == null) {
		definitionValid = false;
		logger.error(`Invalid color ribbon group: It must match one of the colorization groups.`);
	}

	if (def.poseLimits) {
		ValidateAssetDefinitionPoseLimits(logger, 'poseLimits', def.poseLimits);
	}

	// Validate ownership data
	ValidateOwnershipData(def.ownership, logger, def.graphics != null);

	if (!definitionValid) {
		logger.error('Invalid asset definition, asset skipped');
		return;
	}

	const asset: PersonalAssetDefinition<AssetRepoExtraArgs> = {
		...pick(def, DEFINITION_FALLTHROUGH_PROPERTIES),
		type: 'personal',
		id,
		colorization,
		hasGraphics: def.graphics !== undefined,
	};

	// Load and verify graphics
	if (def.graphics) {
		const graphics = LoadAssetsGraphics(join(AssetSourcePath, def.graphics), Object.keys(asset.modules ?? {}));

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

export function ValidateAssetDefinitionPoseLimits(logger: Logger, context: string, limits: AssetDefinitionPoseLimits): void {
	ValidateAssetDefinitionPoseLimit(logger, context, limits);
	if (!limits.options) {
		return;
	}
	for (let i = 0; i < limits.options.length; i++) {
		ValidateAssetDefinitionPoseLimits(logger, `${context}[${i}]`, limits.options[i]);
	}
}

export function ValidateAssetDefinitionPoseLimit(logger: Logger, context: string, { bones, arms, leftArm, rightArm }: AssetDefinitionPoseLimit): void {
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
