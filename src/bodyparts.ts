import { AssetBodyPart, AssetsDefinitionFile } from 'pandora-common';

export const BODYPART_ORDER = [
	'base',
	'head',
	'ears',
	'nose',
	'blush',
	'bodymarks',
	'eyes',
	'eyebrows',
	'lips',
	'sex',
	'backhair',
	'fronthair',
] as const;

const BODYPART_DEFINITIONS: Record<BodypartName, Partial<Omit<AssetBodyPart, 'name'>>> = {
	base: {
		required: true,
	},
	head: {
		required: true,
	},
	ears: {
		required: true,
	},
	nose: {
		required: true,
	},
	blush: {
		required: true,
	},
	bodymarks: {
		allowMultiple: true,
		adjustable: true,
	},
	eyes: {
		required: true,
	},
	eyebrows: {
		required: true,
	},
	lips: {
		required: true,
	},
	sex: {
		required: true,
	},
	backhair: {
		allowMultiple: true,
		adjustable: true,
	},
	fronthair: {
		allowMultiple: true,
		adjustable: true,
	},
};

const BODYPART_DEFAULT: Omit<AssetBodyPart, 'name'> = {
	required: false,
	allowMultiple: false,
	adjustable: false,
};

// Validation and export

export type BodypartName = string & (typeof BODYPART_ORDER)[number];

export const BODYPARTS: AssetBodyPart[] = BODYPART_ORDER
	.map((name) => ({
		...BODYPART_DEFAULT,
		...BODYPART_DEFINITIONS[name],
		name,
	}));

export function ValidateBodyparts(result: AssetsDefinitionFile): void {
	for (const part of result.bodyparts) {
		// For each required bodypart there must exist an asset without conditions
		if (part.required) {
			if (
				!Array.from(Object.values(result.assets))
					.some((asset) => asset.type === 'personal' && asset.bodypart === part.name && asset.allowRandomizerUsage === true)
			) {
				throw new Error(`Bodypart '${part.name}' has no asset with 'allowRandomizerUsage: true' to always fulfill 'required' condition`);
			}
		}
	}
}
