import { GetLogger, AssetId, AssetDefinition, AssetType } from 'pandora-common';

const logger = GetLogger('AssetDatabase');

export const AssetDatabase = new class AssetDatabase {
	private assets: Map<AssetId, AssetDefinition> = new Map();

	public registerAsset(id: AssetId, asset: AssetDefinition<AssetType, AssetRepoExtraArgs>, allowOverride: boolean = false): void {
		if (this.assets.has(id) && !allowOverride) {
			throw new Error(`Duplicate asset definition, asset '${id}' already exists`);
		}

		this.assets.set(id, asset);
		logger.debug('Registered asset', id);
	}

	public export(): Record<AssetId, AssetDefinition> {
		const result: Record<AssetId, AssetDefinition> = {};
		for (const [id, definition] of this.assets.entries()) {
			result[id] = definition;
		}
		return result;
	}

	public clear(): void {
		this.assets.clear();
	}
};
