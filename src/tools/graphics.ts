import { AssetGraphicsDefinition, ExtractLayerImageOverride, ExtractPointDefinition, LayerDefinition, LayerImageOverride } from 'pandora-common';
import { DefinePngResource } from './resources';

export function LoadAssetsGraphics(layers: IntermediateLayerDefinition[]): AssetGraphicsDefinition {
	// TODO: Typecheck
	return {
		layers: layers.map(LoadAssetLayer),
	};
}

function LoadAssetLayer(layer: IntermediateLayerDefinition): LayerDefinition {
	const [x, y, width, height] = layer.rect;
	const rect = { x, y, width, height };
	const imageOverrides: LayerImageOverride[] = (layer.imageOverrides?.map(ExtractLayerImageOverride) ?? [])
		.map((override) => ({
			...override,
			image: DefinePngResource(override.image).resultName,
		}));
	return {
		...rect,
		mirror: layer.mirror,
		priority: layer.priority,
		points: typeof layer.points === 'number' ? layer.points : layer.points.map(ExtractPointDefinition),
		image: DefinePngResource(layer.image).resultName,
		imageOverrides,
		pointType: layer.pointType,
	};
}
