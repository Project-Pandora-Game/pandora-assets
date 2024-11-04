import { GetLogger } from 'pandora-common';

export let CurrentCategory: string = '';
export let CurrentAsset: string = '';
export let AssetSourcePath: string = '';

export function DefaultId(): string {
	return `${CurrentCategory}/${CurrentAsset}`;
}

export function SetCurrentContext(category: string, asset: string, assetSourcePath: string): void {
	CurrentCategory = category;
	CurrentAsset = asset;
	AssetSourcePath = assetSourcePath;
}

const pendingProcesses: Promise<void>[] = [];

export function RegisterProcess(process: Promise<void>) {
	pendingProcesses.push(process);
}

export async function AwaitPendingProcesses(): Promise<void> {
	const pending = pendingProcesses.splice(0, pendingProcesses.length);
	const results = await Promise.allSettled(pending);
	for (const result of results) {
		if (result.status === 'rejected') {
			GetLogger('AsyncProcessing').error('Async process failed:\n', result.reason);
		}
	}
}
