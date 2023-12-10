import { AssetId, GetLogger, LockAssetDefinition } from 'pandora-common';
import { DefaultId } from './context';
import { pick } from 'lodash';
import { AssetDatabase } from './assetDatabase';
import { ValidateOwnershipData } from './licensing';

const LOCK_DEFINITION_FALLTHROUGH_PROPERTIES = [
	// Asset definition
	'name',
	'chat',
	'locked',
	'unlocked',
	'lockedText',
	'password',
	'preview',
] as const satisfies readonly (keyof LockAssetDefinition)[];

export type LockAssetDefinitionFallthroughProperties = typeof LOCK_DEFINITION_FALLTHROUGH_PROPERTIES[number];

export function GlobalDefineLockAsset(def: IntermediateLockAssetDefinition): void {
	const id: AssetId = `a/${def.id ?? DefaultId()}` as const;

	const logger = GetLogger(`DefineLockAsset`, `[Asset ${id}]`);

	const definitionValid = true;

	// Validate ownership data
	ValidateOwnershipData(def.ownership, logger, false);

	if (!definitionValid) {
		logger.error('Invalid asset definition, asset skipped');
		return;
	}

	const asset: LockAssetDefinition<AssetRepoExtraArgs> = {
		...pick(def, LOCK_DEFINITION_FALLTHROUGH_PROPERTIES),
		type: 'lock',
		id,
		size: 'small',
		hasGraphics: false,
	};

	AssetDatabase.registerAsset(id, asset);
}
