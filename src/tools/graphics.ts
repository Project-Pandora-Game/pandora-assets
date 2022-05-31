import { AssetGraphicsDefinition, ExtractLayerImageOverride, ExtractPointDefinition, LayerDefinition, LayerDefinitionCompressed, LayerImageOverride } from 'pandora-common';
import { DefinePngResource } from './resources';

export function LoadAssetsGraphics(layers: LayerDefinitionCompressed[]): AssetGraphicsDefinition {
	// TODO: Typecheck
	return {
		layers: layers.map(LoadAssetLayer),
	};
}

function LoadAssetLayer(layer: LayerDefinitionCompressed): LayerDefinition {
	const [x, y, width, height] = layer.rect;
	const rect = { x, y, width, height };
	const imageOverrides: LayerImageOverride[] = (layer.imageOverrides?.map(ExtractLayerImageOverride) ?? [])
		.map((override) => ({
			...override,
			image: override.image && DefinePngResource(override.image).resultName,
		}));
	return {
		...rect,
		name: layer.name,
		mirror: layer.mirror,
		priority: layer.priority,
		points: typeof layer.points === 'number' ? layer.points : layer.points.map(ExtractPointDefinition),
		image: layer.image && DefinePngResource(layer.image).resultName,
		imageOverrides,
		pointType: layer.pointType,
	};
}
