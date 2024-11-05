import { Assert } from 'pandora-common';

export let CurrentImportContext: AssetImportContext | null = null;

export interface AssetImportContext {
	category: string;
	asset: string;
	assetSourcePath: string;
	processes: (() => Promise<void>)[];
}

export function SetCurrentImportContext(ctx: AssetImportContext | null): void {
	CurrentImportContext = ctx;
}

export function RegisterImportContextProcess(process: () => Promise<void>): void {
	Assert(CurrentImportContext != null, 'Attempt to register process outside of import context');
	CurrentImportContext.processes.push(process);
}
