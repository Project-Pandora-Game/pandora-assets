import { freeze } from 'immer';
import { cloneDeep, pick } from 'lodash-es';
import { AssetId, BodypartAssetDefinition, GetLogger } from 'pandora-common';
import { join } from 'path';
import { AssetDatabase } from './assetDatabase.js';
import { AssetSourcePath, DefaultId } from './context.js';
import { LoadAssetsGraphics } from './graphics.js';
import { GraphicsDatabase } from './graphicsDatabase.js';
import { RegisterImportContextProcess } from './importContext.js';
import { ValidateOwnershipData } from './licensing.js';
import { LoadAssetColorization } from './load_helpers/color.js';
import { DefinePngResource, PREVIEW_SIZE } from './resources.js';
import { ValidateAllModules } from './validation/modules.js';
import { PropertiesValidationMetadata, ValidateAssetProperties, ValidateAssetPropertiesFinalize } from './validation/properties.js';

const BODYPART_DEFINITION_FALLTHROUGH_PROPERTIES = [
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
	'bodypart',
	'allowRandomizerUsage',
	'chat',
	'posePresets',
	'modules',
	'preview',
	'assetPreferenceDefault',
] as const satisfies readonly (keyof BodypartAssetDefinition)[];

export type BodypartDefinitionFallthroughProperties = (typeof BODYPART_DEFINITION_FALLTHROUGH_PROPERTIES)[number] & string;

export function GlobalDefineBodypart(def: IntermediateBodypartAssetDefinition): IntermediateBodypartAssetDefinition {
	freeze(def, true);
	RegisterImportContextProcess(() => GlobalDefineBodypartProcess(cloneDeep(def)));
	return def;
}

async function GlobalDefineBodypartProcess(def: IntermediateBodypartAssetDefinition): Promise<void> {
	const id: AssetId = `a/${def.id ?? DefaultId()}` as const;

	const logger = GetLogger('DefineAsset', `[Asset ${id}]`);

	let definitionValid = true;

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

	if (def.preview === undefined) {
		logger.warning(`Missing preview. It should be a ${PREVIEW_SIZE}x${PREVIEW_SIZE} png image or \`null\` if the asset shouldn't have one.`);
	}

	const asset: BodypartAssetDefinition<AssetRepoExtraArgs> = {
		...pick(def, BODYPART_DEFINITION_FALLTHROUGH_PROPERTIES),
		type: 'bodypart',
		size: 'bodypart',
		id,
		preview: def.preview != null ? DefinePngResource(def.preview, 'preview') : null,
		colorization,
		hasGraphics: def.graphics !== undefined,
	};

	const propertiesValidationMetadata: PropertiesValidationMetadata = {
		getModuleNames: () => Object.keys(def.modules ?? {}),
		getBaseAttributes: () => (def.attributes?.provides ?? []),
		context: 'base',
		providedStateFlags: new Set(),
		requiredStateFlags: new Set(),
	};

	// Validate base properties
	ValidateAssetProperties(logger, '#', propertiesValidationMetadata, def);

	// Validate all modules
	propertiesValidationMetadata.context = 'module';
	ValidateAllModules(logger, '#.modules', {
		baseAssetDefinition: asset,
		validateProperties: ValidateAssetProperties,
		propertiesValidationMetadata,
	}, def.modules);

	ValidateAssetPropertiesFinalize(logger, propertiesValidationMetadata);

	// Validate ownership data
	ValidateOwnershipData(def.ownership, logger, def.graphics != null);

	// Load and verify graphics
	if (def.graphics) {
		const graphics = await LoadAssetsGraphics(join(AssetSourcePath, def.graphics), Object.keys(asset.modules ?? {}));

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
