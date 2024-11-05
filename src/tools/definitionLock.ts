import { cloneDeep, pick } from 'lodash-es';
import { AssetId, GetLogger, LockAssetDefinition } from 'pandora-common';
import { AssetDatabase } from './assetDatabase.js';
import { DefaultId } from './context.js';
import { RegisterImportContextProcess } from './importContext.js';
import { ValidateOwnershipData } from './licensing.js';
import { DefinePngResource, PREVIEW_SIZE } from './resources.js';

const LOCK_DEFINITION_FALLTHROUGH_PROPERTIES = [
	// Asset definition
	'name',
	'chat',
	'locked',
	'unlocked',
	'lockedText',
	'password',
	'preview',
	'assetPreferenceDefault',
] as const satisfies readonly (keyof LockAssetDefinition)[];

export type LockAssetDefinitionFallthroughProperties = typeof LOCK_DEFINITION_FALLTHROUGH_PROPERTIES[number];

export function GlobalDefineLockAsset(def: IntermediateLockAssetDefinition): void {
	RegisterImportContextProcess(() => GlobalDefineLockAssetProcess(cloneDeep(def)));
}

// eslint-disable-next-line @typescript-eslint/require-await
async function GlobalDefineLockAssetProcess(def: IntermediateLockAssetDefinition): Promise<void> {
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
