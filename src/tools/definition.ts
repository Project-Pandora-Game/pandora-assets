import { AssetDefinition } from 'pandora-common';
import { AssetDatabase } from './assetDatabase';
import { DefaultId } from './context';

export interface IntermediateAssetDefinition {
	id?: string;
	name: string;
}

export function DefineAsset(def: IntermediateAssetDefinition): void {
	const asset: AssetDefinition = {
		name: def.name,
	};

	AssetDatabase.registerAsset(`a/${def.id ?? DefaultId()}`, asset);
}
