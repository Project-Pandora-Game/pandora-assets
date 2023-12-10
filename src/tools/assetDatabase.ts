import { GetLogger, AssetId, AssetDefinition, AssetType } from 'pandora-common';
import { DefinePngResource } from './resources';

const logger = GetLogger('AssetDatabase');

export const AssetDatabase = new class AssetDatabase {
	private assets: Map<AssetId, AssetDefinition> = new Map();

	public registerAsset(id: AssetId, asset: AssetDefinition<AssetType, AssetRepoExtraArgs>, allowOverride: boolean = false): void {
		if (this.assets.has(id) && !allowOverride) {
			throw new Error(`Duplicate asset definition, asset '${id}' already exists`);
		}

		if (asset.preview != null) {
			asset.preview = DefinePngResource(asset.preview, 'preview');
		} else if (asset.preview === undefined) {
			// TODO: should be a warning once we have all preview defined
			logger.verbose(`Asset '${id}' has no preview, it should be defined as null or a png file`);
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
