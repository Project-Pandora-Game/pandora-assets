import { AssetId, GetLogger, LockAssetDefinition } from 'pandora-common';
import { AssetSourcePath, DefaultId } from './context';
import { Contributors, CurrentCommitter, GitDataAvailable } from './git';
import { IS_PRODUCTION_BUILD } from '../constants';
import { join } from 'path';
import * as fs from 'fs';
import { pick } from 'lodash';
import { AssetDatabase } from './assetDatabase';

const LOCK_DEFINITION_FALLTHROUGH_PROPERTIES = [
	// Asset definition
	'name',
	'chat',
	'locked',
	'unlocked',
] as const satisfies readonly (keyof LockAssetDefinition)[];

export type LockAssetDefinitionFallthroughProperties = typeof LOCK_DEFINITION_FALLTHROUGH_PROPERTIES[number];

export function GlobalDefineLockAsset(def: IntermediateLockAssetDefinition): void {
	const id: AssetId = `a/${def.id ?? DefaultId()}` as const;

	const logger = GetLogger(`DefineLockAsset`, `[Asset ${id}]`);

	const definitionValid = true;

	//#region Validate ownership data

	// Validate responsible contributor
	const contributor = def.ownership.responsibleContributor.toLowerCase();
	if (GitDataAvailable &&
		!Contributors.has(contributor) &&
		(!CurrentCommitter || CurrentCommitter.toLowerCase() !== contributor)
	) {
		if (IS_PRODUCTION_BUILD || !CurrentCommitter) {
			logger.warning('The responsible contributor was not found in the Git history.');
		} else {
			logger.warning(
				'The responsible contributor was not found in the Git history.\n' +
				`If you commit with current settings, this is your commit signature: '${CurrentCommitter}'`,
			);
		}
	}

	// Validate presence of licensing data
	// if (def.ownership.licensing.length === 0) {
	// 	logger.warning('Asset is missing licensing info 2');
	// }

	for (const license of def.ownership.licensing) {
		// Validate that custom license exists and is a file
		if (license.license.startsWith('./')) {
			const path = join(AssetSourcePath, license.license);
			if (!fs.existsSync(path) || !fs.statSync(path).isFile()) {
				logger.warning(`Custom license '${license.license}' doesn't exist or is not a file.`);
			}
		}
	}
	// Check that CHANGE_ME was replaced
	if (def.ownership.licensing
		.flatMap((l) => [l.part, l.copyrightHolder, l.editedBy])
		.includes('CHANGE_ME')
	) {
		logger.warning(`Licensing data includes fields with 'CHANGE_ME' template data that need to be changed.`);
	}

	//#endregion

	if (!definitionValid) {
		logger.error('Invalid asset definition, asset skipped');
		return;
	}

	const asset: LockAssetDefinition<AssetRepoExtraArgs> = {
		...pick(def, LOCK_DEFINITION_FALLTHROUGH_PROPERTIES),
		id,
		size: 'small',
		type: 'lock',
		hasGraphics: false,
	};

	AssetDatabase.registerAsset(id, asset);
}
