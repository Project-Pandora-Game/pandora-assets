import { AssetDefinition, AssetId } from 'pandora-common';
import { AssetDatabase } from './assetDatabase';
import { DefaultId } from './context';
import { GraphicsDatabase } from './graphicsDatabase';

export function DefineAsset(def: IntermediateAssetDefinition): void {
	const id: AssetId = `a/${def.id ?? DefaultId()}`;

	const asset: AssetDefinition = {
		id,
		name: def.name,
		hasGraphics: def.graphics !== undefined,
	};

	if (def.graphics) {
		GraphicsDatabase.registerAsset(id, def.graphics);
	}
	AssetDatabase.registerAsset(id, asset);
}
