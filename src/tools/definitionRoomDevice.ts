import { cloneDeep, pick } from 'lodash-es';
import { Assert, AssertNever, AssetId, GetLogger, RoomDeviceAssetDefinition, RoomDeviceModuleStaticData, RoomDeviceProperties, RoomDeviceWearablePartAssetDefinition } from 'pandora-common';
import { join } from 'path';
import { OPTIMIZE_TEXTURES } from '../constants.js';
import { AssetDatabase } from './assetDatabase.js';
import { AssetSourcePath, DefaultId } from './context.js';
import { GENERATED_RESOLUTIONS, LoadAssetsGraphics } from './graphics.js';
import { GraphicsDatabase } from './graphicsDatabase.js';
import { RegisterImportContextProcess } from './importContext.js';
import { ValidateOwnershipData } from './licensing.js';
import { LoadRoomDeviceColorization } from './load_helpers/color.js';
import { DefineImageResource, DefinePngResource, IImageResource, ImageBoundingBox, PREVIEW_SIZE } from './resources.js';
import { ValidateAllModules } from './validation/modules.js';
import { ValidateAssetProperties, ValidateAssetPropertiesFinalize } from './validation/properties.js';
import { RoomDevicePropertiesValidationMetadata, ValidateRoomDeviceProperties } from './validation/roomDeviceProperties.js';

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
	'requireFreeHandsToUseDefault',

	// Graphics definition
	'colorization',
	'colorRibbonGroup',
	'pivot',
	'graphicsLayers',
] as const satisfies readonly (keyof RoomDeviceAssetDefinition)[];

export type AssetRoomDeviceDefinitionFallthroughProperties = (typeof ROOM_DEVICE_DEFINITION_FALLTHROUGH_PROPERTIES)[number] & string;

async function DefineRoomDeviceWearablePart(
	baseId: AssetId,
	slot: string,
	def: IntermediateRoomDeviceWearablePartDefinition,
	colorizationKeys: ReadonlySet<string>,
	propertiesValidationMetadata: RoomDevicePropertiesValidationMetadata,
	preview: string | null,
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
		const graphics = await LoadAssetsGraphics(join(AssetSourcePath, def.graphics), propertiesValidationMetadata.getModuleNames());

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
	RegisterImportContextProcess(() => GlobalDefineRoomDeviceAssetProcess(cloneDeep(def)));
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

	//#region Load slots

	for (const [k, v] of Object.entries(def.slots)) {
		slotIds.add(k);

		const slotWearableId = await DefineRoomDeviceWearablePart(id, k, v.asset, colorizationKeys, propertiesValidationMetadata, preview);
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

	function loadLayerImageResource(image: string): IImageResource {
		return DefineImageResource(image, 'roomDevice', 'png');
	}

	function loadLayerImage(image: string, minX?: number, minY?: number, boundingBox?: ImageBoundingBox): string {
		let resource = loadLayerImageResource(image);

		if (minX != null && minY != null && boundingBox != null) {
			Assert(minX <= boundingBox.left);
			Assert(minY <= boundingBox.top);
			resource = resource.addCutImageRelative(
				minX / boundingBox.width,
				minY / boundingBox.height,
				boundingBox.rightExclusive / boundingBox.width,
				boundingBox.bottomExclusive / boundingBox.height,
			);
		}

		for (const resolution of GENERATED_RESOLUTIONS) {
			resource.addDownscaledImage(resolution);
		}

		return resource.resultName;
	}

	await Promise.all(def.graphicsLayers.map(async (layer, index): Promise<void> => {
		if (layer.type === 'sprite') {
			const images = Array.from(new Set<string>([
				layer.image,
				...(layer.imageOverrides?.map((override) => override.image) ?? []),
			]
				.filter(Boolean),
			));

			let minX = Infinity;
			let minY = Infinity;
			const boundingBoxes = new Map<string, ImageBoundingBox>();
			if (OPTIMIZE_TEXTURES) {
				const boundingBoxesCalculation = await Promise.all(
					images.map((i) => loadLayerImageResource(i).getContentBoundingBox().then((box) => [i, box] as const)),
				);
				for (const [image, boundingBox] of boundingBoxesCalculation) {
					boundingBoxes.set(image, boundingBox);

					if (boundingBox.width === 0 || boundingBox.height === 0)
						continue;

					minX = Math.min(minX, boundingBox.left);
					minY = Math.min(minY, boundingBox.top);
				}

				Assert(minX >= 0);
				Assert(minY >= 0);
				if (!Number.isFinite(minX) || !Number.isFinite(minY)) {
					logger.warning('All layer\'s images are empty.');
					minX = 0;
					minY = 0;
				} else {
					layer.offset ??= { x: 0, y: 0 };
					layer.offset.x += minX;
					layer.offset.y += minY;
					for (const override of (layer.offsetOverrides ?? [])) {
						override.offset.x += minX;
						override.offset.y += minY;
					}
				}
			} else {
				minX = 0;
				minY = 0;
			}

			layer.image = layer.image && loadLayerImage(layer.image, minX, minY, boundingBoxes.get(layer.image));
			layer.imageOverrides = layer.imageOverrides
				?.map((override) => ({
					...override,
					image: override.image && loadLayerImage(override.image, minX, minY, boundingBoxes.get(override.image)),
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
	}));

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
	propertiesValidationMetadata.context = 'module';
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

	ValidateAssetPropertiesFinalize(logger, propertiesValidationMetadata);

	// Validate ownership data
	ValidateOwnershipData(def.ownership, logger, true);

	asset.staticAttributes ??= [];
	if (!asset.staticAttributes.includes('Room_device')) {
		asset.staticAttributes.push('Room_device');
	}

	AssetDatabase.registerAsset(id, asset);
}
