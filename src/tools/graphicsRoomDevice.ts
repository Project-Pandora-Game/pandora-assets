import { Immutable } from 'immer';
import {
	Assert,
	AssertNever,
	AssetManager,
	CloneDeepMutable,
	Logger,
	type AssetGraphicsRoomDeviceDefinition,
	type AssetSourceGraphicsInfo,
	type GraphicsBuildContext,
	type GraphicsBuildContextAssetData,
	type ImageBoundingBox,
	type RoomDeviceGraphicsLayer,
} from 'pandora-common';
import { boneDefinition } from '../bones.ts';
import { IS_PRODUCTION_BUILD, OPTIMIZE_TEXTURES } from '../config.ts';
import { GENERATED_RESOLUTIONS } from './graphicsConstants.ts';
import { GraphicsDatabase } from './graphicsDatabase.ts';
import { DefineImageResource } from './resources.ts';

export async function LoadRoomDeviceAssetGraphics(
	source: Immutable<AssetGraphicsRoomDeviceDefinition>,
	builtAssetData: Immutable<GraphicsBuildContextAssetData>,
	slotIds: ReadonlySet<string>,
	logger: Logger,
): Promise<{ graphics: Immutable<AssetGraphicsRoomDeviceDefinition>; graphicsSource: Immutable<AssetSourceGraphicsInfo>; }> {
	const originalImagesMap: Record<string, string> = {};

	const assetLoadContext: GraphicsBuildContext = {
		runImageBasedChecks: IS_PRODUCTION_BUILD || OPTIMIZE_TEXTURES,
		generateOptimizedTextures: OPTIMIZE_TEXTURES,
		generateResolutions: GENERATED_RESOLUTIONS,
		getBones() {
			return Array.from(AssetManager.loadBones(boneDefinition).values());
		},
		getPointTemplate(name) {
			return GraphicsDatabase.getPointTemplate(name);
		},
		bufferToBase64(buffer) {
			return Buffer.from(buffer).toString('base64');
		},
		loadImage(image) {
			const resource = DefineImageResource(image, 'roomDevice', 'png');
			originalImagesMap[image] = resource.resultName;
			return resource;
		},
		builtAssetData,
	};

	function loadLayerImage(image: string, minX?: number, minY?: number, boundingBox?: ImageBoundingBox): string {
		let resource = assetLoadContext.loadImage(image);

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

	// TODO: Rework
	const graphicsLayers: RoomDeviceGraphicsLayer[] = CloneDeepMutable(source.layers);
	await Promise.all(graphicsLayers.map(async (layer, index): Promise<void> => {
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
					images.map((i) => assetLoadContext.loadImage(i).getContentBoundingBox().then((box) => [i, box] as const)),
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

			if (layer.colorizationKey != null && !builtAssetData.colorizationKeys.has(layer.colorizationKey)) {
				logger.warning(`Layer #${index} has colorizationKey ${layer.colorizationKey} outside of defined colorization keys [${[...builtAssetData.colorizationKeys].join(', ')}]`);
			}
		} else if (layer.type === 'slot') {
			if (!slotIds.has(layer.slot)) {
				logger.error(`Layer #${index} links to unknown slot '${layer.slot}'`);
			}
		} else if (layer.type === 'text') {
			if (builtAssetData.modules?.[layer.dataModule]?.type !== 'text') {
				logger.error(`Layer #${index} links module '${layer.dataModule}', but it is not a text module`);
			}
			if (layer.colorizationKey != null && !builtAssetData.colorizationKeys.has(layer.colorizationKey)) {
				logger.warning(`Layer #${index} has colorizationKey ${layer.colorizationKey} outside of defined colorization keys [${[...builtAssetData.colorizationKeys].join(', ')}]`);
			}
		} else {
			AssertNever(layer);
		}
	}));

	return {
		graphics: {
			type: 'roomDevice',
			layers: graphicsLayers,
		},
		graphicsSource: {
			type: 'roomDevice',
			definition: source,
			originalImagesMap,
		},
	};
}
