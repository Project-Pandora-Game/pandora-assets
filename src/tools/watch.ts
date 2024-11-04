import { watchFile } from 'fs';
import { GetLogger } from 'pandora-common';
import { StartHttpServer } from './devServer.js';

let runner: (() => Promise<void>) | undefined;
let hadChanges = false;
let running = false;

const logger = GetLogger('Watch');

function WatchRun() {
	hadChanges = true;
	if (!runner || running)
		return;
	running = true;
	hadChanges = false;
	runner()
		.then(() => {
			logger.info('Watching for changes...');
		}, (error) => {
			logger.error('Error during run, waiting for changes:\n', error);
		})
		.finally(() => {
			running = false;
			// If something changed while we were running, rerun
			if (hadChanges) {
				WatchRun();
			}
		});
}

export async function RunDev(runFn: () => Promise<void>): Promise<void> {
	await StartHttpServer();
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
