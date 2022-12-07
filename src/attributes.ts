import { AssetAttributeDefinition, Satisfies } from 'pandora-common';

//#region Attribute definitions - an attribute defines a role

export const ATTRIBUTES_DEFINITION = {
	// Bodypart attributes
	Body_base: {
		name: 'Base body',
		description: 'A body',
	},
	Body_texture: {
		name: 'Body texture',
		description: 'A texture for the body',
	},
	Face: {
		name: 'Face texture',
		description: 'A face texture',
	},
	Blush: {
		name: 'Blush',
		description: 'A facial reddening',
	},
	Sex: {
		name: 'Sex',
		description: 'A sexual organ',
	},
	Vagina: {
		name: 'Vagina',
		description: 'A female sexual organ',
	},
	Vagina_spread: {
		name: 'Spread vagina',
		description: 'A spread female sex',
	},
	Penis: {
		name: 'Penis',
		description: 'A male sexual organ',
	},
	Hair: {
		name: 'Hair',
		description: 'Hair',
	},
	Hair_back: {
		name: 'Back hair',
		description: 'Hair on the back of the head',
	},
	Hair_front: {
		name: 'Front hair',
		description: 'Hair on the front of the head',
	},
	Hair_extension: {
		name: 'Hair extension',
		description: 'A hair part separating from the main hair',
	},
	Eyebrows: {
		name: 'Eyebrows',
		description: 'A pair of eyebrows',
	},
	Eyes: {
		name: 'Eyes',
		description: 'A pair of eyes',
	},
	Mouth: {
		name: 'Mouth',
		description: 'A mouth',
	},
	Nose: {
		name: 'Nose',
		description: 'A nose',
	},
	// Items or attachment points from items
	Clothing: {
		name: 'Clothing',
		description: 'An article of clothing'
	},
	Clothing_upper: {
		name: 'Upper clothing',
		description: 'A top, shirt, dress, or similar item worn over the upper body'
	},
	Clothing_lower: {
		name: 'Lower clothing',
		description: 'A skirt, pants, dress, or similar item worn on the hips'
	},
	Clothing_outer: {
		name: 'Outer clothing',
		description: 'A jacket, coat, or similar item worn as outer clothing layer'
	},
	Underwear: {
		name: 'Underwear',
		description: 'A bra, panties, underpants, or similar item worn as lowest clothing layer',
	},
	Underwear_bra: {
		name: 'Bra',
		description: 'A bra',
	},
	Underwear_panties: {
		name: 'Panties',
		description: 'A pair of panties',
	},
	Underwear_corset: {
		name: 'Corset',
		description: 'A corset'
	},
	Underwear_pants: {
		name: 'Underpants',
		description: 'A pair of underpants, briefs, or shorts',
	},
	Fantasy: {
		name: 'Fantasy',
		description: 'A tail, pair of ears, or similar cosplay/fantasy item'
	},
	Fantasy_ears: {
		name: 'Fantasy ears',
		description: 'A pair of animal or fantasy ears'
	},
	Fantasy_tail: {
		name: 'Fantasy tail',
		description: 'An animal or fantasy tail'
	},
	Facewear: {
		name: 'Facewear',
		description: 'A mask, glasses, or similar item worn over the face'
	},
	Facewear_mask: {
		name: 'Mask',
		description: 'A mask'
	},
	Facewear_glasses: {
		name: 'Glasses',
		description: 'A pair of glasses'
	},
	Accessory: {
		name: 'Accessory',
		description: 'A necklace, bracelet, ring, hair accessory, or similar body or clothing addon'
	},
	Legwear: {
		name: 'Legwear',
		description: 'A pair of socks, stockings, tights, or similar leg covering clothing'
	},
	Footwear: {
		name: 'Footwear',
		description: 'A pair of shoes, boots, sandals, or similar item'
	},
	Shoe_top_strap: {
		name: 'Shoe strap',
		description: 'A pair of shoes with straps that keep the shoes in place',
	},
	Headgear: {
		name: 'Headgear',
		description: 'A hat, cap, hood, helmet, or similar head gear'
	},
	Headgear_hood: {
		name: 'Hood',
		description: 'A hood'
	},
	Gloves: {
		name: 'Gloves',
		description: 'A pair of gloves'
	},
	Restraint: {
		name: 'Restraint',
		description: 'An item that restricts or restraints the character in some form'
	},
	Restraint_arms: {
		name: 'Arms restraint',
		description: 'An item that restricts or restraints arms or hands'
	},
	Wrist_cuffs_chain: {
		name: 'Wrist cuff chain',
		description: 'A chain between a pair of wrist cuffs',
	},
	Restraint_legs: {
		name: 'Leg restraint',
		description: 'An item that restricts or restraints legs or feet'
	},
	Ankle_cuffs_chain: {
		name: 'Ankle cuff chain',
		description: 'A chain between a pair of ankle cuffs',
	},
	Restraint_eyes: {
		name: 'Blindfold',
		description: 'An item that decreases the ability to see'
	},
	Restraint_mouth: {
		name: 'Gag',
		description: 'An item that decreases the ability to speak'
	},
	Toy: {
		name: 'Toy',
		description: 'A sexual toy',
	},
	Piercing: {
		name: 'Piercing',
		description: 'A body piercing',
	},
	Collar: {
		name: 'Collar',
		description: 'A Collar',
	},
	Collar_front_ring: {
		name: 'Collar ring',
		description: 'A front ring on a collar',
	},
	Chastity: {
		name: 'Chastity',
		description: 'An item, typically a bra or belt, used for chastity play'
	},
	// Locks
	Lock: {
		name: 'Lock',
		description: 'A lock',
	},
} as const;

//#endregion

export type AttributeNames = (keyof typeof ATTRIBUTES_DEFINITION) & string;

// eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-unused-vars
type __satisfies__EFFECTS_DEFAULT = Satisfies<typeof ATTRIBUTES_DEFINITION, Record<AttributeNames, AssetAttributeDefinition>>;
