import { AssetAttributeDefinition, Satisfies } from 'pandora-common';

//#region Attribute definitions

export const ATTRIBUTES_DEFINITION = {
	// Bodypart attributes
	Body_base: {
		description: 'A body',
	},
	Body_texture: {
		description: 'A texture for the body',
	},
	Face: {
		description: 'A face texture',
	},
	Blush: {
		description: 'A facial reddening',
	},
	Sex: {
		description: 'A sexual organ',
	},
	Vagina: {
		description: 'A female sexual organ',
	},
	Vagina_spread: {
		description: 'A spread female sex',
	},
	Penis: {
		description: 'A male sexual organ',
	},
	Hair: {
		description: 'Hair',
	},
	Hair_back: {
		description: 'Hair on the back of the head',
	},
	Hair_front: {
		description: 'Hair on the front of the head',
	},
	Hair_extension: {
		description: 'A hair part separating from the main hair',
	},
	Eyebrows: {
		description: 'A pair of eyebrows',
	},
	Eyes: {
		description: 'A pair of eyes',
	},
	Mouth: {
		description: 'A mouth',
	},
	Nose: {
		description: 'A nose',
	},
	// Items or attachment points from items
	Underwear: {
		description: 'An underwear',
	},
	Bra: {
		description: 'A bra',
	},
	Panties: {
		description: 'A pair of panties',
	},
	Underpants: {
		description: 'A pair of underpants',
	},
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
