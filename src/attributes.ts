import { AssetAttributeDefinition, Satisfies } from 'pandora-common';

//#region Attribute definitions - an attribute defines a role

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
	Clothing: {
		description: 'An article of clothing'
	},
	Clothing_upper: {
		description: 'A top, shirt, dress, or similar item worn over the upper body'
	},
	Clothing_lower: {
		description: 'A skirt, pants, dress, or similar item worn on the hips'
	},
	Clothing_outer: {
		description: 'A jacket, coat, or similar item worn as outer clothing layer'
	},
	Underwear: {
		description: 'A bra, panties, underpants, or similar item worn as lowest clothing layer',
	},
	Underwear_bra: {
		description: 'A bra',
	},
	Underwear_panties: {
		description: 'A pair of panties',
	},
	Underwear_corset: {
		description: 'A corset'
	},
	Underwear_pants: {
		description: 'A pair of underpants, briefs, or shorts',
	},
	Fantasy: {
		description: 'A tail, pair of ears, or similar cosplay/fantasy item'
	},
	Fantasy_ears: {
		description: 'A pair of animal or fantasy ears'
	},
	Fantasy_tail: {
		description: 'An animal or fantasy tail'
	},
	Facewear: {
		description: 'A mask, glasses, or similar item worn over the face'
	},
	Facewear_mask: {
		description: 'A mask'
	},
	Facewear_glasses: {
		description: 'A pair of glasses'
	},
	Accessory: {
		description: 'A necklace, bracelet, ring, hair accessory, or similar body or clothing addon'
	},
	Legwear: {
		description: 'A pair of socks, stockings, tights, or similar leg covering clothing'
	},
	Footwear: {
		description: 'A pair of shoes, boots, sandals, or similar item'
	},
	Shoe_top_strap: {
		description: 'A pair of shoes with straps that keep the shoes in place',
	},
	Headgear: {
		description: 'A hat, cap, hood, helmet, or similar head gear'
	},
	Headgear_hood: {
		description: 'A hood'
	},
	Gloves: {
		description: 'A pair of gloves'
	},
	Restraint: {
		description: 'An item that restricts or restraints the character in some form'
	},
	Restraint_arms: {
		description: 'An item that restricts or restraints arms or hands'
	},
	Wrist_cuffs_chain: {
		description: 'A chain between a pair of wrist cuffs',
	},
	Restraint_legs: {
		description: 'An item that restricts or restraints legs or feet'
	},
	Ankle_cuffs_chain: {
		description: 'A chain between a pair of ankle cuffs',
	},
	Restraint_eyes: {
		description: 'An item that decreases the ability to see'
	},
	Restraint_mouth: {
		description: 'An item that decreases the ability to speak'
	},
	Toy: {
		description: 'A sexual toy',
	},
	Piercing: {
		description: 'A body piercing',
	},
	Collar: {
		description: 'A Collar',
	},
	Collar_front_ring: {
		description: 'A front ring on a collar',
	},
	Chastity: {
		description: 'An item, typically a bra or belt, used for chastity play'
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
