import { GetLogger, RoomBackgroundInfo } from 'pandora-common';

const logger = GetLogger('RoomDatabase');

export const RoomDatabase = new class RoomDatabase {
	private backgrounds: Map<string, RoomBackgroundInfo> = new Map();

	public registerBackground(background: RoomBackgroundInfo, allowOverride: boolean = false): void {
		if (this.backgrounds.has(background.id) && !allowOverride) {
			throw new Error(`Duplicate background definition, background '${background.id}' already exists`);
		}

		this.backgrounds.set(background.id, background);
		logger.debug('Registered background', background.id);
	}

	public export(): RoomBackgroundInfo[] {
		const result = Array.from(this.backgrounds.values());
		// Do NOT sort the exported backgrounds! Order matters.

		return result;
	}

	public clear(): void {
		this.backgrounds.clear();
	}
};
