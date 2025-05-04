import { GetLogger, RoomBackgroundInfo, type AssetsTileTextureInfo } from 'pandora-common';

const logger = GetLogger('RoomDatabase');

export const RoomDatabase = new class RoomDatabase {
	private backgrounds: Map<string, RoomBackgroundInfo> = new Map();
	private tileTextures: Map<string, AssetsTileTextureInfo> = new Map();

	public registerBackground(background: RoomBackgroundInfo, allowOverride: boolean = false): void {
		if (this.backgrounds.has(background.id) && !allowOverride) {
			throw new Error(`Duplicate background definition, background '${background.id}' already exists`);
		}

		this.backgrounds.set(background.id, background);
		logger.debug('Registered background', background.id);
	}

	public registerTileTexture(tileTexture: AssetsTileTextureInfo, allowOverride: boolean = false): void {
		if (this.tileTextures.has(tileTexture.id) && !allowOverride) {
			throw new Error(`Duplicate tile texture definition, '${tileTexture.id}' already exists`);
		}

		this.tileTextures.set(tileTexture.id, tileTexture);
		logger.debug('Registered tile texture', tileTexture.id);
	}

	public exportBackgrounds(): RoomBackgroundInfo[] {
		const result = Array.from(this.backgrounds.values());
		// Do NOT sort the exported backgrounds! Order matters.

		return result;
	}

	public exportTileTextures(): AssetsTileTextureInfo[] {
		// Do NOT sort the export! Order matters.
		return Array.from(this.tileTextures.values());
	}

	public clear(): void {
		this.backgrounds.clear();
		this.tileTextures.clear();
	}
};
