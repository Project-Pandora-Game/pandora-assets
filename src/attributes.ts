import { AssetAttributeDefinition, Satisfies } from 'pandora-common';

//#region Attribute definitions

export const ATTRIBUTES_DEFINITION = {
	// Bodypart attributes
	Body: {
		description: 'A body',
	},
	Vagina_spread: {
		description: 'A spread female sex',
	},
	// Attachment points from items
	Collar: {
		description: 'A Collar',
	},
	Collar_front_ring: {
		description: 'A front ring on a collar',
	},
	Shoe_top_strap: {
		description: 'A pair of shoes with straps that keep the shoes in place',
	},
	Wrist_cuffs_chain: {
		description: 'A chain between a pair of wrist cuffs',
	},
	Ankle_cuffs_chain: {
		description: 'A chain between a pair of ankle cuffs',
	},
	// Locks
	Lock: {
		description: 'A lock',
	},
} as const;

//#endregion

export type AttributeNames = (keyof typeof ATTRIBUTES_DEFINITION) & string;

// eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-unused-vars
type __satisfies__EFFECTS_DEFAULT = Satisfies<typeof ATTRIBUTES_DEFINITION, Record<AttributeNames, AssetAttributeDefinition>>;
