import { AssetId, GetLogger } from 'pandora-common';
import { BUILD_FOR_TEST } from '../config.ts';
import { AssetDatabase } from './assetDatabase.ts';
import { DefaultId } from './context.ts';
import { RegisterImportContextProcess } from './importContext.ts';

export function GlobalDefineAssetAlias(aliasedAsset: string, targetAsset?: string, useForTesting?: 'useForTesting'): void {
	if (BUILD_FOR_TEST && useForTesting !== 'useForTesting') {
		// Do not use this alias when building for test
	} else {
		RegisterImportContextProcess(() => GlobalDefineAssetAliasProcess(aliasedAsset, targetAsset));
	}
}

function GlobalDefineAssetAliasProcess(aliasedAsset: string, targetAsset?: string): Promise<void> {
	const aliasedAssetId: AssetId = `a/${aliasedAsset}` as const;
	const targetAssetId: AssetId = `a/${targetAsset ?? DefaultId()}` as const;

	const logger = GetLogger('DefineAssetAlias', `[Asset ${aliasedAssetId}]`);

	if (aliasedAssetId === targetAssetId) {
		logger.error('Alias cannot target itself');
		return Promise.resolve();
	}

	AssetDatabase.registerAsset(aliasedAssetId, targetAssetId);

	return Promise.resolve();
}

/** Check if asset aliases are properly linked. Should be done after processing finishes. */
export function VerifyAssetAliasLinkage(): void {
	// Go through all registered assets and if they are an alias, verify that the target is valid
	for (const [assetId, definition] of AssetDatabase.assets) {
		if (typeof definition === 'string') {
			// This is an alias
			const logger = GetLogger('VerifyAssetAlias', `[Asset ${assetId}]`);

			const aliasTarget = AssetDatabase.assets.get(definition);
			if (aliasTarget == null) {
				logger.error(`Alias target '${definition}' not found`);
			} else if (typeof aliasTarget === 'string') {
				logger.warning(`Alias target '${definition}' is by itself an alias for ${aliasTarget}. Use this asset directly instead (alias should not point to another alias).`);
			}
		}
	}
}
