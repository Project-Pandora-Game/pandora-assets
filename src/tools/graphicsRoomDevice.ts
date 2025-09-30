import { Immutable } from 'immer';
import {
	AssetManager,
	LoadAssetRoomDeviceLayer,
	Logger,
	type AssetGraphicsRoomDeviceDefinition,
	type AssetSourceGraphicsInfo,
	type AssetSourceGraphicsRoomDeviceDefinition,
	type GraphicsBuildContext,
	type GraphicsBuildContextRoomDeviceData,
} from 'pandora-common';
import { boneDefinition } from '../bones.ts';
import { IS_PRODUCTION_BUILD, OPTIMIZE_TEXTURES } from '../config.ts';
import { GENERATED_RESOLUTIONS } from './graphicsConstants.ts';
import { GraphicsDatabase } from './graphicsDatabase.ts';
import { DefineImageResource } from './resources.ts';

export async function LoadRoomDeviceAssetGraphics(
	source: Immutable<AssetSourceGraphicsRoomDeviceDefinition>,
	builtAssetData: Immutable<GraphicsBuildContextRoomDeviceData>,
	logger: Logger,
): Promise<{ graphics: Immutable<AssetGraphicsRoomDeviceDefinition>; graphicsSource: Immutable<AssetSourceGraphicsInfo>; }> {
	const originalImagesMap: Record<string, string> = {};

	const assetLoadContext: GraphicsBuildContext<Immutable<GraphicsBuildContextRoomDeviceData>> = {
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

	const layers = (await Promise.all(source.layers.map((l) => LoadAssetRoomDeviceLayer(l, assetLoadContext, logger)))).flat();

	return {
		graphics: {
			type: 'roomDevice',
			layers,
		},
		graphicsSource: {
			type: 'roomDevice',
			definition: source,
			originalImagesMap,
		},
	};
}
