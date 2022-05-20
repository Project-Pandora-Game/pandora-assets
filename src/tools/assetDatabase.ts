import { GetLogger, AssetId, AssetDefinitionCompressed } from 'pandora-common';

const logger = GetLogger('AssetDatabase');

export const AssetDatabase = new class AssetDatabase {
	public assets: Map<AssetId, AssetDefinitionCompressed> = new Map();

	public registerAsset(id: AssetId, asset: AssetDefinitionCompressed, allowOverride: boolean = false): void {
		if (this.assets.has(id) && !allowOverride) {
			throw new Error(`Duplicate asset definition, asset '${id}' already exists`);
		}

		this.assets.set(id, asset);
		logger.debug('Registered asset', id);
	}

	export(): Record<AssetId, AssetDefinitionCompressed> {
		const result: Record<AssetId, AssetDefinitionCompressed> = {};
		for (const [id, definition] of this.assets.entries()) {
			result[id] = definition;
		}
		return result;
	}
};
