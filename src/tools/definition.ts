import { AssetDefinition, AssetId } from 'pandora-common';
import { AssetDatabase } from './assetDatabase';
import { AssetSourcePath, DefaultId } from './context';
import { LoadAssetsGraphics } from './graphics';
import { GraphicsDatabase } from './graphicsDatabase';
import { join } from 'path';

export function DefineAsset(def: IntermediateAssetDefinition): void {
	const id: AssetId = `a/${def.id ?? DefaultId()}` as const;

	const asset: AssetDefinition = {
		id,
		name: def.name,
		bodypart: def.bodypart,
		hasGraphics: def.graphics !== undefined,
	};

	if (def.graphics) {
		GraphicsDatabase.registerAsset(id, LoadAssetsGraphics(join(AssetSourcePath, def.graphics)));
	}
	AssetDatabase.registerAsset(id, asset);
}
