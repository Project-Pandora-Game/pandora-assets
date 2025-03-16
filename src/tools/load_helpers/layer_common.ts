import type { Immutable } from 'immer';
import { CloneDeepMutable, type LayerImageOverride, type LayerImageSetting } from 'pandora-common';
import { GENERATED_RESOLUTIONS } from '../graphicsConstants.ts';
import { DefineImageResource, type IImageResource } from '../resources.ts';

export function LoadLayerImageResource(image: string): IImageResource {
	return DefineImageResource(image, 'asset', 'png');
}

export type LayerImageTrimArea = [left: number, top: number, right: number, bottom: number] | null;

export function LoadLayerImage(image: string, imageTrimArea: LayerImageTrimArea): string {
	let resource = LoadLayerImageResource(image);

	if (imageTrimArea != null) {
		resource = resource.addCutImageRelative(imageTrimArea[0], imageTrimArea[1], imageTrimArea[2], imageTrimArea[3]);
	}

	for (const resolution of GENERATED_RESOLUTIONS) {
		resource.addDownscaledImage(resolution);
	}

	return resource.resultName;
}

export function ListLayerImageSettingImages(setting: Immutable<LayerImageSetting>): IImageResource[] {
	const resources = new Set<IImageResource>();

	setting.overrides.forEach(({ image }) => {
		if (image) {
			resources.add(LoadLayerImageResource(image));
		}
	});

	if (setting.image) {
		resources.add(LoadLayerImageResource(setting.image));
	}

	return Array.from(resources);
}

export function LoadLayerImageSetting(setting: Immutable<LayerImageSetting>, imageTrimArea: LayerImageTrimArea): LayerImageSetting {
	const overrides: LayerImageOverride[] = setting.overrides
		.map((override): LayerImageOverride => ({
			image: override.image && LoadLayerImage(override.image, imageTrimArea),
			uvPose: override.uvPose,
			condition: CloneDeepMutable(override.condition),
		}));
	return {
		...setting,
		image: setting.image && LoadLayerImage(setting.image, imageTrimArea),
		overrides,
	};
}
