import type { AssetSlotDefinition } from 'pandora-common';

export const ASSET_SLOTS = {
	mouth: {
		description: 'Mouth',
		capacity: 10,
	},
	outsideMouthArea: {
		description: 'Outside mouth area',
		capacity: 10,
	},
	vagina: {
		description: 'Vagina',
		capacity: 10,
	},
	outsideVaginaArea: {
		description: 'Outside vagina area',
		capacity: 10,
	},
	anus: {
		description: 'Anus',
		capacity: 10,
	},
	outsideAnusArea: {
		description: 'Outside anus area',
		capacity: 10,
	},
} satisfies Record<string, AssetSlotDefinition>;

export type AssetSlotNames = keyof typeof ASSET_SLOTS & string;
