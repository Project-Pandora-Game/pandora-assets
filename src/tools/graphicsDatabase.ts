import { GetLogger, AssetId, AssetGraphicsDefinition } from 'pandora-common';

const logger = GetLogger('GraphicsDatabase');

export const GraphicsDatabase = new class GraphicsDatabase {
	private assets: Map<AssetId, AssetGraphicsDefinition> = new Map();

	public registerAsset(id: AssetId, asset: AssetGraphicsDefinition, allowOverride: boolean = false): void {
		if (this.assets.has(id) && !allowOverride) {
			throw new Error(`Duplicate asset definition, asset '${id}' already exists`);
		}

		this.assets.set(id, asset);
		logger.debug('Registered asset graphics', id);
	}

	export(): Record<AssetId, AssetGraphicsDefinition> {
		const result: Record<AssetId, AssetGraphicsDefinition> = {};
		for (const [id, graphics] of this.assets.entries()) {
			result[id] = graphics;
		}
		return result;
	}

	clear(): void {
		this.assets.clear();
	}
};
