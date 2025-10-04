import { freeze } from 'immer';
import { cloneDeep, omit, pick } from 'lodash-es';
import { AssetId, GetLogger, LockAssetDefinition } from 'pandora-common';
import { AssetDatabase } from './assetDatabase.ts';
import { DefaultId, GetAssetRepositoryPath } from './context.ts';
import { RegisterImportContextProcess } from './importContext.ts';
import { ValidateOwnershipData } from './licensing.ts';
import { DefinePngResource, PREVIEW_SIZE } from './resources.ts';
import { ValidateAssetChatMessages } from './validation/chatMessages.ts';

const LOCK_DEFINITION_FALLTHROUGH_PROPERTIES = [
	// Asset definition
	'name',
	'chat',
	'lockedText',
	'lockSetup',
	'preview',
	'assetPreferenceDefault',
] as const satisfies readonly (keyof LockAssetDefinition)[];

export type LockAssetDefinitionFallthroughProperties = typeof LOCK_DEFINITION_FALLTHROUGH_PROPERTIES[number];

export function GlobalDefineLockAsset(def: IntermediateLockAssetDefinition): IntermediateLockAssetDefinition {
	freeze(def, true);
	RegisterImportContextProcess(() => GlobalDefineLockAssetProcess(cloneDeep(def)));
	return def;
}

// eslint-disable-next-line @typescript-eslint/require-await
async function GlobalDefineLockAssetProcess(def: IntermediateLockAssetDefinition): Promise<void> {
	const id: AssetId = `a/${def.id ?? DefaultId()}` as const;

	const logger = GetLogger(`DefineLockAsset`, `[Asset ${id}]`);

	// Validate properties
	ValidateAssetChatMessages(logger, '#.chat', omit(def.chat, ['chatDescriptor']));

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
		credits: {
			credits: def.ownership.credits,
			sourcePath: GetAssetRepositoryPath(),
		},
	};

	AssetDatabase.registerAsset(id, asset);
}
