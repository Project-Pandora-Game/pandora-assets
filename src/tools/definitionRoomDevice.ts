import { pick } from 'lodash';
import { AssertNever, AssetId, GetLogger, RoomDeviceAssetDefinition, RoomDeviceModuleStaticData, RoomDeviceProperties, RoomDeviceWearablePartAssetDefinition } from 'pandora-common';
import { join } from 'path';
import { AssetDatabase } from './assetDatabase';
import { AssetSourcePath, DefaultId } from './context';
import { GENERATED_RESOLUTIONS, LoadAssetsGraphics } from './graphics';
import { GraphicsDatabase } from './graphicsDatabase';
import { ValidateOwnershipData } from './licensing';
import { LoadRoomDeviceColorization } from './load_helpers/color';
import { DefineImageResource, DefinePngResource, PREVIEW_SIZE } from './resources';
import { ValidateAllModules } from './validation/modules';
import { ValidateAssetProperties } from './validation/properties';
import { RoomDevicePropertiesValidationMetadata, ValidateRoomDeviceProperties } from './validation/roomDeviceProperties';

const ROOM_DEVICE_WEARABLE_PART_DEFINITION_FALLTHROUGH_PROPERTIES = [
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
	'staticAttributes',
	'posePresets',
	'preview',
	'assetPreferenceDefault',

	// Graphics definition
	'colorization',
	'colorRibbonGroup',
	'pivot',
	'graphicsLayers',
	'assetPreferenceDefault',
] as const satisfies readonly (keyof RoomDeviceAssetDefinition)[];

export type AssetRoomDeviceDefinitionFallthroughProperties = (typeof ROOM_DEVICE_DEFINITION_FALLTHROUGH_PROPERTIES)[number] & string;

function DefineRoomDeviceWearablePart(
	baseId: AssetId,
	slot: string,
	def: IntermediateRoomDeviceWearablePartDefinition,
	colorizationKeys: ReadonlySet<string>,
	propertiesValidationMetadata: RoomDevicePropertiesValidationMetadata,
	preview: string | null,
): AssetId | null {
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

	if (!definitionValid) {
		logger.error('Invalid asset definition, asset skipped');
		return null;
	}

	const asset: RoomDeviceWearablePartAssetDefinition<AssetRepoExtraArgs> = {
		...pick(def, ROOM_DEVICE_WEARABLE_PART_DEFINITION_FALLTHROUGH_PROPERTIES),
		type: 'roomDeviceWearablePart',
		id,
		preview,
		hasGraphics: def.graphics !== undefined,
	};

	// Load and verify graphics
	if (def.graphics) {
		const graphics = LoadAssetsGraphics(join(AssetSourcePath, def.graphics), propertiesValidationMetadata.getModuleNames());

		const loggerGraphics = logger.prefixMessages('[Graphics]');

		for (let i = 0; i < graphics.layers.length; i++) {
			const layer = graphics.layers[i];

			if (layer.colorizationKey != null && !colorizationKeys.has(layer.colorizationKey)) {
				loggerGraphics.warning(`Layer #${i} has colorizationKey ${layer.colorizationKey} outside of defined colorization keys [${[...colorizationKeys].join(', ')}]`);
			}
		}

		GraphicsDatabase.registerAsset(id, graphics);
	}
	AssetDatabase.registerAsset(id, asset);

	return id;
}

export function GlobalDefineRoomDeviceAsset(def: IntermediateRoomDeviceDefinition): void {
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
	};

	if (def.preview === undefined) {
		logger.warning(`Missing preview. It should be a ${PREVIEW_SIZE}x${PREVIEW_SIZE} png image or \`null\` if the asset shouldn't have one.`);
	}
	const preview = def.preview != null ? DefinePngResource(def.preview, 'preview') : null;

	//#region Load slots

	for (const [k, v] of Object.entries(def.slots)) {
		slotIds.add(k);

		const slotWearableId = DefineRoomDeviceWearablePart(id, k, v.asset, colorizationKeys, propertiesValidationMetadata, preview);
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

	//#region Load graphics

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

	function loadLayerImage(image: string): string {
		const resource = DefineImageResource(image, 'roomDevice', 'png');

		for (const resolution of GENERATED_RESOLUTIONS) {
			resource.addDownscaledImage(resolution);
		}

		return resource.resultName;
	}

	def.graphicsLayers.forEach((layer, index) => {
		if (layer.type === 'sprite') {
			layer.image = layer.image && loadLayerImage(layer.image);
			layer.imageOverrides = layer.imageOverrides
				?.map((override) => ({
					...override,
					image: override.image && loadLayerImage(override.image),
				}));

			if (layer.colorizationKey != null && !colorizationKeys.has(layer.colorizationKey)) {
				logger.warning(`Layer #${index} has colorizationKey ${layer.colorizationKey} outside of defined colorization keys [${[...colorizationKeys].join(', ')}]`);
			}
		} else if (layer.type === 'slot') {
			if (!slotIds.has(layer.slot)) {
				definitionValid = false;
				logger.error(`Layer #${index} links to unknown slot '${layer.slot}'`);
			}
		} else {
			AssertNever(layer);
		}
	});

	//#endregion

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
	};

	// Validate all modules
	ValidateAllModules<RoomDeviceProperties<AssetRepoExtraArgs>, RoomDeviceModuleStaticData, RoomDevicePropertiesValidationMetadata>(logger, '#.modules', {
		baseAssetDefinition: asset,
		validateProperties: ValidateRoomDeviceProperties,
		propertiesValidationMetadata,
	}, def.modules);

	for (const module of Object.values(def.modules ?? {})) {
		if (module.staticConfig.slotName == null) {
			continue;
		}
		if (!slotIds.has(module.staticConfig.slotName)) {
			logger.error(`Module '${module.name}' references unknown slot '${module.staticConfig.slotName}'`);
		}
	}

	// Validate ownership data
	ValidateOwnershipData(def.ownership, logger, true);

	asset.staticAttributes ??= [];
	if (!asset.staticAttributes.includes('Room_device')) {
		asset.staticAttributes.push('Room_device');
	}

	AssetDatabase.registerAsset(id, asset);
}
