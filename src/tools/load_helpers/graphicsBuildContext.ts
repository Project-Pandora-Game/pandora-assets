import { AssetManager, type GraphicsBuildContext } from 'pandora-common';
import { boneDefinition } from '../../bones.ts';
import { IS_PRODUCTION_BUILD, OPTIMIZE_TEXTURES } from '../../config.ts';
import { GENERATED_RESOLUTIONS } from '../graphicsConstants.ts';
import { GraphicsDatabase } from '../graphicsDatabase.ts';
import { DefineImageResource, type ImageCategory } from '../resources.ts';

export function MakeGraphicsBuildContext<TAssetData>(
	builtAssetData: TAssetData,
	buildAssetManager: AssetManager,
	category: ImageCategory,
	originalImagesMap: Record<string, string>,
): GraphicsBuildContext<TAssetData> {

	return {
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
			const resource = DefineImageResource(image, category, 'png');
			originalImagesMap[image] = resource.resultName;
			return resource;
		},
		builtAssetData,
		assetManager: buildAssetManager,
	};
}
