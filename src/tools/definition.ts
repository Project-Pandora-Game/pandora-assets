import { AssetId, GetLogger, PersonalAssetDefinition } from 'pandora-common';
import { AssetDatabase } from './assetDatabase';
import { AssetSourcePath, DefaultId } from './context';
import { LoadAssetsGraphics } from './graphics';
import { GraphicsDatabase } from './graphicsDatabase';
import { join } from 'path';
import { pick } from 'lodash';
import { LoadAssetColorization } from './load_helpers/color';
import { ValidateOwnershipData } from './licensing';
import { PropertiesValidationMetadata, ValidateAssetProperties } from './validation/properties';
import { ValidateAllModules } from './validation/modules';

const DEFINITION_FALLTHROUGH_PROPERTIES = [
	// Properties
	'poseLimits',
	'effects',
	'attributes',
	'stateFlags',
	'blockAddRemove',
	'blockSelfAddRemove',
	'blockModules',
	'blockSelfModules',
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
	'preview',
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

	const propertiesValidationMetadata: PropertiesValidationMetadata = {
		getModuleNames: () => Object.keys(def.modules ?? {}),
		getBaseAttributes: () => (def.attributes?.provides ?? []),
	};

	// Validate base properties
	ValidateAssetProperties(logger, '#', propertiesValidationMetadata, def);

	// Validate all modules
	ValidateAllModules(logger, '#.modules', {
		baseAssetDefinition: asset,
		validateProperties: ValidateAssetProperties,
		propertiesValidationMetadata,
	}, def.modules);

	// Validate ownership data
	ValidateOwnershipData(def.ownership, logger, def.graphics != null);

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
