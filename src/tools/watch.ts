import { watchFile } from 'fs';
import { GetLogger } from 'pandora-common';

let runner: (() => Promise<void>) | undefined;

const logger = GetLogger('Watch');

function WatchRun() {
	if (!runner)
		return;
	runner().then(() => {
		logger.info('Waiting for changes...');
	}, (error) => {
		logger.error('Error during run, waiting for changes:\n', error);
	});
}

export function RunWithWatch(runFn: () => Promise<void>): void {
	runner = runFn;
	WatchRun();
}

const alreadyWatched: Set<string> = new Set();

export function WatchFile(path: string): void {
	if (!runner || alreadyWatched.has(path))
		return;
	alreadyWatched.add(path);
	watchFile(path, {
		persistent: true,
	}, () => {
		logger.alert(`File change detected: ${path}\n\n`);
		WatchRun();
	});
}
