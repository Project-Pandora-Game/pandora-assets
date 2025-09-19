import path from 'node:path';
import { BASE_DIR } from '../config.ts';

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

export function GetAssetRepositoryPath(): string {
	return path.relative(BASE_DIR, AssetSourcePath);
}
