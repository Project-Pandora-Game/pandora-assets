import { AssetGraphicsDefinition, IsAssetGraphicsDefinition, LayerDefinition, LayerImageOverride } from 'pandora-common';
import { DefinePngResource } from './resources';
import { readFileSync } from 'fs';

export function LoadAssetsGraphics(path: string): AssetGraphicsDefinition {
	const definition = JSON.parse(readFileSync(path, { encoding: 'utf-8' })) as AssetGraphicsDefinition;
	if (!IsAssetGraphicsDefinition(definition)) {
		throw new Error(`Graphics in '${path}' are not AssetGraphicsDefinition`);
	}

	return {
		layers: definition.layers.map(LoadAssetLayer),
	};
}

function LoadAssetLayer(layer: LayerDefinition): LayerDefinition {
	const { x, y, width, height } = layer;
	const imageOverrides: LayerImageOverride[] = layer.imageOverrides
		.map((override) => ({
			...override,
			image: override.image && DefinePngResource(override.image).resultName,
		}));
	return {
		x,
		y,
		width,
		height,
		name: layer.name,
		mirror: layer.mirror,
		priority: layer.priority,
		points: layer.points,
		image: layer.image && DefinePngResource(layer.image).resultName,
		imageOverrides,
		pointType: layer.pointType,
	};
}
