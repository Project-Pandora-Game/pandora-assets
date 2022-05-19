import { AssetDefinitionCompressed, LayerDefinitionCompressed } from 'pandora-common';
import { AssetDatabase } from './assetDatabase';
import { DefaultId } from './context';

export interface IntermediateAssetDefinition {
	id?: string;
	name: string;
	layers?: LayerDefinitionCompressed[];
}

export function DefineAsset(def: IntermediateAssetDefinition): void {
	const asset: AssetDefinitionCompressed = {
		name: def.name,
		layers: def.layers ?? [],
	};

	AssetDatabase.registerAsset(`a/${def.id ?? DefaultId()}`, asset);
}
