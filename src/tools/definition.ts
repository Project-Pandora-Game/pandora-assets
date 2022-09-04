import { AssetDefinition, AssetId, GetLogger, HexColorStringSchema } from 'pandora-common';
import { AssetDatabase } from './assetDatabase';
import { AssetSourcePath, DefaultId } from './context';
import { LoadAssetsGraphics } from './graphics';
import { GraphicsDatabase } from './graphicsDatabase';
import { join } from 'path';

const logger = GetLogger('DefineAsset');

export function DefineAsset(def: IntermediateAssetDefinition): void {
	const id: AssetId = `a/${def.id ?? DefaultId()}` as const;

	if (def.colorization) {
		let colorValid = true;
		for (let i = 0; i < def.colorization.length; i++) {
			const valid = HexColorStringSchema.safeParse(def.colorization[i].default).success;
			if (!valid) {
				colorValid = false;
				logger.error(`Asset ${id} invalid default in colorization[${i}]: '${def.colorization[i].default}' is not a valid color, use full hex format, like '#ffffff'`);
			}
		}
		if (!colorValid) {
			throw new Error('Invalid color');
		}
	}

	const asset: AssetDefinition = {
		id,
		name: def.name,
		actionMessages: def.actionMessages,
		bodypart: def.bodypart,
		colorization: def.colorization,
		hasGraphics: def.graphics !== undefined,
	};

	if (def.graphics) {
		GraphicsDatabase.registerAsset(id, LoadAssetsGraphics(join(AssetSourcePath, def.graphics)));
	}
	AssetDatabase.registerAsset(id, asset);
}
