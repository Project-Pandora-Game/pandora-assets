import { GetLogger, IChatroomBackgroundInfo } from 'pandora-common';

const logger = GetLogger('RoomDatabase');

export const RoomDatabase = new class RoomDatabase {
	private backgrounds: Map<string, IChatroomBackgroundInfo> = new Map();

	public registerBackground(background: IChatroomBackgroundInfo, allowOverride: boolean = false): void {
		if (this.backgrounds.has(background.id) && !allowOverride) {
			throw new Error(`Duplicate background definition, background '${background.id}' already exists`);
		}

		this.backgrounds.set(background.id, background);
		logger.debug('Registered background', background.id);
	}

	export(): IChatroomBackgroundInfo[] {
		const result = Array.from(this.backgrounds.values());
		result.sort((a, b) => a.name.localeCompare(b.name));

		return result;
	}

	clear(): void {
		this.backgrounds.clear();
	}
};
