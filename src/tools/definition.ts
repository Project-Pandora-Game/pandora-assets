import { AssetDefinitionCompressed, LayerDefinitionCompressed } from 'pandora-common';
import { AssetDatabase } from './assetDatabase';
import { DefaultId } from './context';

export function DefineAsset(def: IntermediateAssetDefinition): void {
	const asset: AssetDefinitionCompressed = {
		name: def.name,
		layers: def.layers?.map(LayerExtractRsource) ?? [],
	};

	AssetDatabase.registerAsset(`a/${def.id ?? DefaultId()}`, asset);
}

function LayerExtractRsource(layer: IntermediateLayerDefinition): LayerDefinitionCompressed {
	return {
		...layer,
		image: layer.image.resultName,
		imageOverrides: layer.imageOverrides?.map(([image, overrides]) => [image.resultName, overrides]),
	};
}
