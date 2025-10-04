import { freeze, type Immutable } from 'immer';
import { cloneDeep, omit, pick } from 'lodash-es';
import { AssetId, GetLogger, RoomDeviceAssetDefinition, RoomDeviceModuleStaticData, RoomDeviceProperties, RoomDeviceWearablePartAssetDefinition, type AssetCreditsInfo, type AssetModuleDefinition, type GraphicsBuildContextAssetData, type GraphicsBuildContextRoomDeviceData } from 'pandora-common';
import { join } from 'path';
import { AssetDatabase } from './assetDatabase.ts';
import { AssetSourcePath, DefaultId, GetAssetRepositoryPath } from './context.ts';
import { LoadAssetGraphicsFile } from './graphics.ts';
import { GraphicsDatabase } from './graphicsDatabase.ts';
import { LoadRoomDeviceAssetGraphics } from './graphicsRoomDevice.ts';
import { RegisterImportContextProcess } from './importContext.ts';
import { ValidateOwnershipData } from './licensing.ts';
import { LoadRoomDeviceColorization } from './load_helpers/color.ts';
import { DefinePngResource, PREVIEW_SIZE } from './resources.ts';
import { ValidateAssetChatMessages } from './validation/chatMessages.ts';
import { ValidateAllModules } from './validation/modules.ts';
import { ValidateAssetProperties, ValidateAssetPropertiesFinalize } from './validation/properties.ts';
import { RoomDevicePropertiesValidationMetadata, ValidateRoomDeviceProperties } from './validation/roomDeviceProperties.ts';

const ROOM_DEVICE_WEARABLE_PART_DEFINITION_FALLTHROUGH_PROPERTIES = [
	// Properties
	'poseLimits',
	'effects',
	'attributes',
	'stateFlags',
	'blockAddRemove',
	'blockModules',
	'overrideColorKey',
	'excludeFromColorInheritance',

	// Asset definition
	'name',
	'size',
	'chat',
	'posePresets',
	'assetPreferenceDefault',
] as const satisfies readonly (keyof RoomDeviceWearablePartAssetDefinition)[];

export type RoomDeviceWearablePartAssetDefinitionFallthroughProperties = (typeof ROOM_DEVICE_WEARABLE_PART_DEFINITION_FALLTHROUGH_PROPERTIES)[number] & string;

const ROOM_DEVICE_DEFINITION_FALLTHROUGH_PROPERTIES = [
	// Asset definition
	'name',
	'size',
	'chat',
	'modules',
	'storageModule',
	'staticAttributes',
	'posePresets',
	'preview',
	'assetPreferenceDefault',
	'requireFreeHandsToUseDefault',

	// Graphics definition
	'colorization',
	'colorRibbonGroup',
	'pivot',
] as const satisfies readonly (keyof RoomDeviceAssetDefinition)[];

export type AssetRoomDeviceDefinitionFallthroughProperties = (typeof ROOM_DEVICE_DEFINITION_FALLTHROUGH_PROPERTIES)[number] & string;

async function DefineRoomDeviceWearablePart(
	baseId: AssetId,
	slot: string,
	def: IntermediateRoomDeviceWearablePartDefinition,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	modules: Record<string, AssetModuleDefinition<unknown, any>> | undefined,
	colorizationKeys: ReadonlySet<string>,
	propertiesValidationMetadata: RoomDevicePropertiesValidationMetadata,
	preview: string | null,
	credits: AssetCreditsInfo,
): Promise<AssetId | null> {
	const id: AssetId = `${baseId}/${slot}` as const;

	const logger = GetLogger('RoomDeviceWearablePart', `[Asset ${id}]`);

	let definitionValid = true;

	if (def.size === 'bodypart') {
		definitionValid = false;
		logger.error(`Invalid size: Only bodyparts can use the 'bodypart' size`);
	}

	// All room device parts must be marked as a room device
	def.attributes ??= {};
	def.attributes.provides ??= [];
	if (!def.attributes.provides.includes('Room_device')) {
		def.attributes.provides.push('Room_device');
	}

	propertiesValidationMetadata = {
		...propertiesValidationMetadata,
		getBaseAttributes: () => (def.attributes?.provides ?? []),
	};

	ValidateAssetProperties(logger, '#', propertiesValidationMetadata, def);
	ValidateAssetChatMessages(logger, '#.chat', omit(def.chat, ['chatDescriptor']));

	if (!definitionValid) {
		logger.error('Invalid asset definition, asset skipped');
		return null;
	}

	const asset: RoomDeviceWearablePartAssetDefinition<AssetRepoExtraArgs> = {
		...pick(def, ROOM_DEVICE_WEARABLE_PART_DEFINITION_FALLTHROUGH_PROPERTIES),
		type: 'roomDeviceWearablePart',
		id,
		preview,
		credits,
	};

	// Load and verify graphics
	if (def.graphics) {
		const builtAssetData: Immutable<GraphicsBuildContextAssetData> = {
			modules,
			colorizationKeys,
		};

		const { graphics, graphicsSource } = await LoadAssetGraphicsFile(
			join(AssetSourcePath, def.graphics),
			builtAssetData,
		);

		GraphicsDatabase.registerAssetGraphics(id, graphics, graphicsSource);
	}
	AssetDatabase.registerAsset(id, asset);

	return id;
}

export function GlobalDefineRoomDeviceAsset(def: IntermediateRoomDeviceDefinition): IntermediateRoomDeviceDefinition {
	freeze(def, true);
	RegisterImportContextProcess(() => GlobalDefineRoomDeviceAssetProcess(cloneDeep(def)));
	return def;
}

async function GlobalDefineRoomDeviceAssetProcess(def: IntermediateRoomDeviceDefinition): Promise<void> {
	const id: AssetId = `a/${def.id ?? DefaultId()}` as const;

	const logger = GetLogger('DefineRoomDeviceAsset', `[Asset ${id}]`);

	let definitionValid = true;

	const slots: RoomDeviceAssetDefinition<AssetRepoExtraArgs>['slots'] = {};
	const slotIds = new Set<string>();

	const colorizationKeys = new Set<string>(Object.keys(def.colorization ?? {}));

	const propertiesValidationMetadata: RoomDevicePropertiesValidationMetadata = {
		getModuleNames: () => Object.keys(def.modules ?? {}),
		getBaseAttributes: () => [],
		getSlotNames: () => Object.keys(def.slots),
		context: 'base',
		providedStateFlags: new Set(),
		requiredStateFlags: new Set(),
	};

	if (def.preview === undefined) {
		logger.warning(`Missing preview. It should be a ${PREVIEW_SIZE}x${PREVIEW_SIZE} png image or \`null\` if the asset shouldn't have one.`);
	}
	const preview = def.preview != null ? DefinePngResource(def.preview, 'preview') : null;

	const credits: AssetCreditsInfo = {
		credits: def.ownership.credits,
		sourcePath: GetAssetRepositoryPath(),
	};

	//#region Load slots

	for (const [k, v] of Object.entries(def.slots)) {
		slotIds.add(k);

		const slotWearableId = await DefineRoomDeviceWearablePart(id, k, v.asset, def.modules, colorizationKeys, propertiesValidationMetadata, preview, credits);
		if (slotWearableId == null) {
			definitionValid = false;
			logger.error(`Failed to process asset for slot '${k}'`);
			continue;
		}

		slots[k] = {
			name: v.name,
			wearableAsset: slotWearableId,
		};
	}

	//#endregion

	const {
		colorization,
		valid: colorizationValid,
	} = LoadRoomDeviceColorization(logger, def.colorization);
	def.colorization = colorization;
	definitionValid &&= colorizationValid;

	if (def.colorRibbonGroup != null && colorization?.[def.colorRibbonGroup] == null) {
		definitionValid = false;
		logger.error(`Invalid color ribbon group: It must match one of the colorization groups.`);
	}

	if (!definitionValid) {
		logger.error('Invalid asset definition, asset skipped');
		return;
	}

	const asset: RoomDeviceAssetDefinition<AssetRepoExtraArgs> = {
		...pick(def, ROOM_DEVICE_DEFINITION_FALLTHROUGH_PROPERTIES),
		type: 'roomDevice',
		id,
		preview,
		slots,
		credits,
	};

	// Validate properties
	ValidateAssetChatMessages(logger, '#.chat', omit(def.chat, ['chatDescriptor']));

	// Validate all modules
	propertiesValidationMetadata.context = 'module';
	ValidateAllModules<RoomDeviceProperties<AssetRepoExtraArgs>, RoomDeviceModuleStaticData, RoomDevicePropertiesValidationMetadata>(logger, '#.modules', {
		baseAssetDefinition: asset,
		validateProperties: ValidateRoomDeviceProperties,
		propertiesValidationMetadata,
	}, def.modules);
	if (def.storageModule != null) {
		if (def.modules?.[def.storageModule] == null) {
			logger.warning(`#.storageModule refers to an unknown module '${def.storageModule}'`);
		}
	}

	for (const module of Object.values(def.modules ?? {})) {
		if (module.staticConfig.slotName == null) {
			continue;
		}
		if (!slotIds.has(module.staticConfig.slotName)) {
			logger.error(`Module '${module.name}' references unknown slot '${module.staticConfig.slotName}'`);
		}
	}

	ValidateAssetPropertiesFinalize(logger, propertiesValidationMetadata);

	// Validate ownership data
	ValidateOwnershipData(def.ownership, logger, true);

	asset.staticAttributes ??= [];
	if (!asset.staticAttributes.includes('Room_device')) {
		asset.staticAttributes.push('Room_device');
	}

	// Load and verify graphics
	{
		const builtAssetData: Immutable<GraphicsBuildContextRoomDeviceData> = {
			modules: asset.modules,
			colorizationKeys: new Set(Object.keys(colorization ?? {})),
			slotIds,
		};

		const { graphics, graphicsSource } = await LoadRoomDeviceAssetGraphics(
			{ layers: def.graphicsLayers },
			builtAssetData,
			logger.prefixMessages(`Graphics definition:\n\t`),
		);

		GraphicsDatabase.registerAssetGraphics(id, graphics, graphicsSource);
	}

	AssetDatabase.registerAsset(id, asset);
}
