import { cloneDeep } from 'lodash';
import { AssetAttributeDefinition, Satisfies } from 'pandora-common';
import { join } from 'path';
import { SRC_DIR } from './constants';
import { SetCurrentContext } from './tools';
import { DefineResource } from './tools/resources';

//#region Attribute definitions - an attribute defines a role

const ATTRIBUTES_DEFINITION = {
	// Bodypart attributes
	Body_base: {
		name: 'Base body',
		description: 'A body',
	},
	Head_base: {
		name: 'Base head',
		description: 'A head',
	},
	Ears: {
		name: 'Ears',
		description: 'A pair of ears for the body',
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
	Hair_front: {
		name: 'Front hair',
		description: 'Hair on the front of the head',
		useAsWardrobeFilter: {
			tab: 'body',
		},
	},
	Hair_back: {
		name: 'Back hair',
		description: 'Hair on the back of the head',
		useAsWardrobeFilter: {
			tab: 'body',
		},
	},
	Hair_extension: {
		name: 'Hair extension',
		description: 'A hair part separating from the main hair',
		useAsWardrobeFilter: {
			tab: 'body',
		},
	},
	Eyebrows: {
		name: 'Eyebrows',
		description: 'A pair of eyebrows',
		useAsWardrobeFilter: {
			tab: 'body',
		},
	},
	Eyes: {
		name: 'Eyes',
		description: 'A pair of eyes',
		useAsWardrobeFilter: {
			tab: 'body',
		},
	},
	Nose: {
		name: 'Nose',
		description: 'A nose',
		useAsWardrobeFilter: {
			tab: 'body',
		},
	},
	Mouth: {
		name: 'Mouth',
		description: 'A mouth',
		useAsWardrobeFilter: {
			tab: 'body',
		},
	},
	Mouth_open_wide: {
		name: 'Wide open mouth',
		description: 'A wide open mouth',
	},
	Mouth_open_teeth: {
		name: 'Wide open mouth showing teeth',
		description: 'A wide open mouth showing teeth',
	},
	Mouth_tongue_out: {
		name: 'Tongue out',
		description: 'A wide open mouth with its tongue out',
	},
	// Items or attachment points from items
	Clothing: {
		name: 'Clothing',
		description: 'An article of clothing',
	},
	Clothing_upper: {
		name: 'Upper clothing',
		description: 'A top, shirt, or similar item worn over the upper body',
		useAsWardrobeFilter: {
			tab: 'item',
			excludeAttributes: ['Clothing_large', 'Clothing_outer'],
		},
		icon: 'upper',
	},
	Clothing_lower: {
		name: 'Lower clothing',
		description: 'A skirt, pants, or similar item worn on the hips',
		useAsWardrobeFilter: {
			tab: 'item',
			excludeAttributes: ['Clothing_large', 'Clothing_outer'],
		},
		icon: 'lower',
	},
	Clothing_large: {
		name: 'Large clothing',
		description: 'A dress, suit, or similar item worn over large parts of the body',
		useAsWardrobeFilter: {
			tab: 'item',
			excludeAttributes: ['Clothing_outer'],
		},
		icon: 'dress',
	},
	Clothing_outer: {
		name: 'Outer clothing',
		description: 'A jacket, coat, or similar item worn as outer clothing layer',
		useAsWardrobeFilter: {
			tab: 'item',
		},
		icon: 'outer',
	},
	Underwear: {
		name: 'Underwear',
		description: 'A bra, panties, underpants, or similar item worn as lowest clothing layer',
		useAsWardrobeFilter: {
			tab: 'item',
		},
		icon: 'underwear',
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
		description: 'A corset',
	},
	Underwear_pants: {
		name: 'Underpants',
		description: 'A pair of underpants, briefs, or shorts',
	},
	Fantasy: {
		name: 'Fantasy',
		description: 'A tail, pair of ears, or similar cosplay/fantasy item',
	},
	Fantasy_ears: {
		name: 'Fantasy ears',
		description: 'A pair of animal or fantasy ears',
	},
	Fantasy_tail: {
		name: 'Fantasy tail',
		description: 'An animal or fantasy tail',
	},
	Facewear: {
		name: 'Facewear',
		description: 'A mask, glasses, or similar item worn over the face',
		useAsWardrobeFilter: {
			tab: 'item',
		},
		icon: 'facewear',
	},
	Facewear_mask: {
		name: 'Mask',
		description: 'A mask',
	},
	Facewear_glasses: {
		name: 'Glasses',
		description: 'A pair of glasses',
	},
	Accessory: {
		name: 'Accessory',
		description: 'A necklace, bracelet, ring, hair accessory, or similar body or clothing addon',
		useAsWardrobeFilter: {
			tab: 'item',
		},
		icon: 'accessory',
	},
	Legwear: {
		name: 'Legwear',
		description: 'A pair of socks, stockings, tights, or similar leg covering clothing',
		useAsWardrobeFilter: {
			tab: 'item',
		},
		icon: 'legwear',
	},
	Footwear: {
		name: 'Footwear',
		description: 'A pair of shoes, boots, sandals, or similar item',
		useAsWardrobeFilter: {
			tab: 'item',
		},
		icon: 'footwear',
	},
	Shoe_top_strap: {
		name: 'Shoe strap',
		description: 'A pair of shoes with straps that keep the shoes in place',
	},
	Headgear: {
		name: 'Headgear',
		description: 'A hat, cap, hood, helmet, or similar head gear',
		useAsWardrobeFilter: {
			tab: 'item',
		},
		icon: 'headgear',
	},
	Headgear_hood: {
		name: 'Hood',
		description: 'A hood',
	},
	Gloves: {
		name: 'Gloves',
		description: 'A pair of gloves',
		useAsWardrobeFilter: {
			tab: 'item',
		},
		icon: 'gloves',
	},
	Restraint: {
		name: 'Restraint',
		description: 'An item that restricts or restraints the character in some form',
	},
	Restraint_arms: {
		name: 'Arms restraint',
		description: 'An item that restricts or restraints arms or hands',
		useAsWardrobeFilter: {
			tab: 'item',
		},
		icon: 'restraint_arms',
	},
	Wrist_cuffs_chain: {
		name: 'Wrist cuff chain',
		description: 'A chain between a pair of wrist cuffs',
	},
	Restraint_legs: {
		name: 'Leg restraint',
		description: 'An item that restricts or restraints legs or feet',
		useAsWardrobeFilter: {
			tab: 'item',
		},
		icon: 'restraint_legs',
	},
	Ankle_cuffs_chain: {
		name: 'Ankle cuff chain',
		description: 'A chain between a pair of ankle cuffs',
	},
	Restraint_eyes: {
		name: 'Sight restraint',
		description: 'An item that decreases the ability to see',
		useAsWardrobeFilter: {
			tab: 'item',
		},
		icon: 'blindfold',
	},
	Restraint_mouth: {
		name: 'Speech restraint',
		description: 'An item that decreases the ability to speak',
		useAsWardrobeFilter: {
			tab: 'item',
		},
		icon: 'gag',
	},
	Restraint_ears: {
		name: 'Hearing restraint',
		description: 'An item that decreases the ability to hear',
		useAsWardrobeFilter: {
			tab: 'item',
		},
		icon: 'headphones',
	},
	Toy: {
		name: 'Toy',
		description: 'A sexual toy',
		useAsWardrobeFilter: {
			tab: 'item',
		},
		icon: 'toy',
	},
	Piercing: {
		name: 'Piercing',
		description: 'A body piercing',
	},
	Collar: {
		name: 'Collar',
		description: 'A Collar',
		useAsWardrobeFilter: {
			tab: 'item',
		},
		icon: 'collar',
	},
	Collar_front_ring: {
		name: 'Collar ring',
		description: 'A front ring on a collar',
	},
	Chastity: {
		name: 'Chastity',
		description: 'An item, typically a bra or belt, used for chastity play',
		useAsWardrobeFilter: {
			tab: 'item',
		},
		icon: 'chastity',
	},
	Handheld: {
		name: 'Hand-held item',
		description: 'A crop, whip, paddle, wand or similar hand-held item',
		useAsWardrobeFilter: {
			tab: 'item',
		},
		icon: 'handheld',
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

export function LoadAttributes(): Record<AttributeNames, AssetAttributeDefinition> {
	const result: Record<AttributeNames, AssetAttributeDefinition> = cloneDeep(ATTRIBUTES_DEFINITION);

	for (const [id, attribute] of Object.entries(result)) {
		SetCurrentContext('attributes', id, join(SRC_DIR, 'icons'));
		if (attribute.icon != null) {
			attribute.icon = DefineResource(attribute.icon + '.svg').resultName;
		}
	}

	return result;
}
