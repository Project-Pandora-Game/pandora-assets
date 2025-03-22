import { freeze } from 'immer';
import { cloneDeep, omit, pick } from 'lodash-es';
import { AssetId, GetLogger, PersonalAssetDefinition } from 'pandora-common';
import { join } from 'path';
import { AssetDatabase } from './assetDatabase.ts';
import { AssetSourcePath, DefaultId } from './context.ts';
import { LoadAssetGraphicsFile } from './graphics.ts';
import { GraphicsDatabase } from './graphicsDatabase.ts';
import { RegisterImportContextProcess } from './importContext.ts';
import { ValidateOwnershipData } from './licensing.ts';
import { LoadAssetColorization } from './load_helpers/color.ts';
import { DefinePngResource, PREVIEW_SIZE } from './resources.ts';
import { ValidateAssetChatMessages } from './validation/chatMessages.ts';
import { ValidateAllModules } from './validation/modules.ts';
import { PropertiesValidationMetadata, ValidateAssetProperties, ValidateAssetPropertiesFinalize } from './validation/properties.ts';

const PERSONAL_DEFINITION_FALLTHROUGH_PROPERTIES = [
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
	'posePresets',
	'modules',
	'preview',
	'assetPreferenceDefault',
	'requireFreeHandsToUseDefault',
] as const satisfies readonly (keyof PersonalAssetDefinition)[];

export type PersonalAssetDefinitionFallthroughProperties = (typeof PERSONAL_DEFINITION_FALLTHROUGH_PROPERTIES)[number] & string;

export function GlobalDefineAsset(def: IntermediatePersonalAssetDefinition): IntermediatePersonalAssetDefinition {
	freeze(def, true);
	RegisterImportContextProcess(() => GlobalDefineAssetProcess(cloneDeep(def)));
	return def;
}

async function GlobalDefineAssetProcess(def: IntermediatePersonalAssetDefinition): Promise<void> {
	const id: AssetId = `a/${def.id ?? DefaultId()}` as const;

	const logger = GetLogger('DefineAsset', `[Asset ${id}]`);

	let definitionValid = true;

	if (def.size === 'bodypart') {
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

	if (def.preview === undefined) {
		logger.warning(`Missing preview. It should be a ${PREVIEW_SIZE}x${PREVIEW_SIZE} png image or \`null\` if the asset shouldn't have one.`);
	}

	const asset: PersonalAssetDefinition<AssetRepoExtraArgs> = {
		...pick(def, PERSONAL_DEFINITION_FALLTHROUGH_PROPERTIES),
		type: 'personal',
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
	ValidateAssetChatMessages(logger, '#.chat', omit(def.chat, ['chatDescriptor']));

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
		const { graphics, graphicsSource } = await LoadAssetGraphicsFile(
			join(AssetSourcePath, def.graphics),
			asset.modules,
			new Set(Object.keys(colorization ?? {})),
		);

		GraphicsDatabase.registerAssetGraphics(id, graphics, graphicsSource);
	}
	AssetDatabase.registerAsset(id, asset);
}
