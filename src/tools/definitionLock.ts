import { AssetId, GetLogger, LockAssetDefinition } from 'pandora-common';
import { DefaultId } from './context';
import { pick } from 'lodash';
import { AssetDatabase } from './assetDatabase';
import { ValidateOwnershipData } from './licensing';
import { DefinePngResource, PREVIEW_SIZE } from './resources';

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

	// Validate ownership data
	ValidateOwnershipData(def.ownership, logger, false);

	// TODO: Remove once locks support having graphics
	if (!def.preview) {
		def.preview = null;
	}

	if (def.preview === undefined) {
		logger.warning(`Missing preview. It should be a ${PREVIEW_SIZE}x${PREVIEW_SIZE} png image or \`null\` if the asset shouldn't have one.`);
	}

	const asset: LockAssetDefinition<AssetRepoExtraArgs> = {
		...pick(def, LOCK_DEFINITION_FALLTHROUGH_PROPERTIES),
		type: 'lock',
		id,
		size: 'small',
		preview: def.preview != null ? DefinePngResource(def.preview, 'preview') : null,
		hasGraphics: false,
	};

	AssetDatabase.registerAsset(id, asset);
}
