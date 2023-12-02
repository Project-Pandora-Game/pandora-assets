import { cloneDeep } from 'lodash';
import { AssetAttributeDefinition, AttributeNameSchema, GetLogger, SCHEME_OVERRIDE } from 'pandora-common';
import { join } from 'path';
import { SRC_DIR } from './constants';
import { SetCurrentContext } from './tools';
import { DefineResource } from './tools/resources';
import { ZodIssueCode } from 'zod';

//#region Attribute definitions - an attribute defines a role

const ATTRIBUTES_DEFINITION_BASE = {
	// Bodypart attributes
	Body_base: {
		name: 'Base body',
		description: 'A body',
		icon: 'body',
	},
	Head_base: {
		name: 'Base head',
		description: 'A head',
		icon: 'body',
	},
	Ears: {
		name: 'Ears',
		description: 'A pair of ears for the body',
		useAsWardrobeFilter: {
			tab: 'body',
		},
		icon: 'ear',
	},
	Body_texture: {
		name: 'Body texture',
		description: 'A texture for the body',
		icon: 'body',
	},
	Face: {
		name: 'Face texture',
		description: 'A face texture',
		icon: 'body',
	},
	Blush: {
		name: 'Blush',
		description: 'A facial reddening',
		icon: 'body',
	},
	Bodymark: {
		name: 'Bodymark',
		description: 'A mark on the body',
		icon: 'body',
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
		icon: 'hair_front',
		parentAttributes: ['Hair'],
	},
	Hair_back: {
		name: 'Back hair',
		description: 'Hair on the back of the head',
		useAsWardrobeFilter: {
			tab: 'body',
		},
		icon: 'hair_back',
		parentAttributes: ['Hair'],
	},
	Hair_extension: {
		name: 'Hair extension',
		description: 'A hair part separating from the main hair',
		useAsWardrobeFilter: {
			tab: 'body',
		},
		icon: 'hair_extension',
		parentAttributes: ['Hair'],
	},
	Eyebrows: {
		name: 'Eyebrows',
		description: 'A pair of eyebrows',
		useAsWardrobeFilter: {
			tab: 'body',
		},
		icon: 'eyebrow',
	},
	Eyes: {
		name: 'Eyes',
		description: 'A pair of eyes',
		useAsWardrobeFilter: {
			tab: 'body',
		},
		icon: 'eye',
	},
	Nose: {
		name: 'Nose',
		description: 'A nose',
		useAsWardrobeFilter: {
			tab: 'body',
		},
		icon: 'nose',
	},
	Mouth: {
		name: 'Mouth',
		description: 'A mouth',
		useAsWardrobeFilter: {
			tab: 'body',
		},
		icon: 'lips',
	},
	Mouth_open_wide: {
		name: 'Wide open mouth',
		description: 'A wide open mouth',
		parentAttributes: ['Mouth'],
	},
	Mouth_open_teeth: {
		name: 'Wide open mouth showing teeth',
		description: 'A wide open mouth showing teeth',
		parentAttributes: ['Mouth'],
	},
	Mouth_tongue_out: {
		name: 'Tongue out',
		description: 'A wide open mouth with its tongue out',
		parentAttributes: ['Mouth'],
	},
	Sex: {
		name: 'Sex',
		description: 'A sexual organ',
		icon: 'body',
	},
	Vagina: {
		name: 'Vagina',
		description: 'A female sexual organ',
		parentAttributes: ['Sex'],
	},
	Vagina_spread: {
		name: 'Spread vagina',
		description: 'A spread female sex',
		parentAttributes: ['Vagina'],
	},
	Penis: {
		name: 'Penis',
		description: 'A male sexual organ',
		parentAttributes: ['Sex'],
	},
	Penis_flaccid: {
		name: 'Flaccid Penis',
		description: 'A flaccid male sexual organ',
		parentAttributes: ['Penis'],
	},
	Penis_erect: {
		name: 'Erect Penis',
		description: 'An erect male sexual organ',
		parentAttributes: ['Penis'],
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
		parentAttributes: ['Clothing'],
	},
	Clothing_lower: {
		name: 'Lower clothing',
		description: 'A skirt, pants, or similar item worn on the hips',
		useAsWardrobeFilter: {
			tab: 'item',
			excludeAttributes: ['Clothing_large', 'Clothing_outer'],
		},
		icon: 'lower',
		parentAttributes: ['Clothing'],
	},
	Clothing_large: {
		name: 'Large clothing',
		description: 'A dress, suit, or similar item worn over large parts of the body',
		useAsWardrobeFilter: {
			tab: 'item',
			excludeAttributes: ['Clothing_outer'],
		},
		icon: 'dress',
		parentAttributes: ['Clothing'],
	},
	Clothing_outer: {
		name: 'Outer clothing',
		description: 'A jacket, coat, or similar item worn as outer clothing layer',
		useAsWardrobeFilter: {
			tab: 'item',
		},
		icon: 'outer',
		parentAttributes: ['Clothing'],
	},
	Underwear: {
		name: 'Underwear',
		description: 'A bra, panties, underpants, or similar item worn as lowest clothing layer',
		useAsWardrobeFilter: {
			tab: 'item',
		},
		icon: 'underwear',
		parentAttributes: ['Clothing'],
	},
	Underwear_bra: {
		name: 'Bra',
		description: 'A bra',
		parentAttributes: ['Underwear'],
	},
	Underwear_panties: {
		name: 'Panties',
		description: 'A pair of panties',
		parentAttributes: ['Underwear'],
	},
	Underwear_corset: {
		name: 'Corset',
		description: 'A corset',
		parentAttributes: ['Underwear'],
	},
	Underwear_pants: {
		name: 'Underpants',
		description: 'A pair of underpants, briefs, or shorts',
		parentAttributes: ['Underwear'],
	},
	Fantasy: {
		name: 'Fantasy',
		description: 'A tail, pair of ears, or similar cosplay/fantasy item',
	},
	Fantasy_ears: {
		name: 'Fantasy ears',
		description: 'A pair of animal or fantasy ears',
		parentAttributes: ['Fantasy'],
	},
	Fantasy_tail: {
		name: 'Fantasy tail',
		description: 'An animal or fantasy tail',
		parentAttributes: ['Fantasy'],
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
		parentAttributes: ['Facewear'],
	},
	Facewear_glasses: {
		name: 'Glasses',
		description: 'A pair of glasses',
		parentAttributes: ['Facewear'],
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
		parentAttributes: ['Headgear'],
	},
	Gloves: {
		name: 'Gloves',
		description: 'A pair of gloves',
		useAsWardrobeFilter: {
			tab: 'item',
		},
		icon: 'gloves',
	},
	Mittens: {
		name: 'Mittens',
		description: 'A pair of bondage mittens',
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
		parentAttributes: ['Restraint'],
	},
	Wrist_cuffs: {
		name: 'Wrist cuffs',
		description: 'A pair of wrist cuffs',
		parentAttributes: ['Restraint_arms'],
	},
	Restraint_legs: {
		name: 'Leg restraint',
		description: 'An item that restricts or restraints legs or feet',
		useAsWardrobeFilter: {
			tab: 'item',
		},
		icon: 'restraint_legs',
		parentAttributes: ['Restraint'],
	},
	Ankle_cuffs: {
		name: 'Ankle cuffs',
		description: 'A pair of ankle cuffs',
		parentAttributes: ['Restraint_legs'],
	},
	Restraint_eyes: {
		name: 'Sight restraint',
		description: 'An item that decreases the ability to see',
		useAsWardrobeFilter: {
			tab: 'item',
		},
		icon: 'blindfold',
		parentAttributes: ['Restraint'],
	},
	Restraint_ears: {
		name: 'Hearing restraint',
		description: 'An item that decreases the ability to hear',
		useAsWardrobeFilter: {
			tab: 'item',
		},
		icon: 'headphones',
		parentAttributes: ['Restraint'],
	},
	Toy: {
		name: 'Toy',
		description: 'A sexual toy',
		useAsWardrobeFilter: {
			tab: 'item',
		},
		icon: 'toy',
	},
	Toy_clamps_genital: {
		name: 'Genital clamps',
		description: 'A set of genital clamps',
		parentAttributes: ['Toy'],
	},

	//#region Mouth items
	Mouth_item: {
		name: 'An item used on the mouth or lips',
		description: 'Any item that is positioned on the mouth (either outside or inside)',
	},
	Restraint_mouth: {
		name: 'Speech restraint',
		description: 'An item that decreases the ability to speak',
		useAsWardrobeFilter: {
			tab: 'item',
		},
		icon: 'gag',
		parentAttributes: ['Restraint', 'Mouth_item'],
	},
	Mouth_insert: {
		name: 'An item inserted in the mouth',
		description: 'An item that is inserted in the mouth (in the area between the lips)',
		parentAttributes: ['Mouth_item'],
	},
	Mouth_insert_deep: {
		name: 'An item inserted deep in the mouth',
		description: 'An item that is inserted deep inside the mouth (in the area not usually visible from outside)',
		parentAttributes: ['Mouth_item'],
	},
	Mouth_protruding: {
		name: 'An item protruding outside of the mouth',
		description: 'An item that is protruding outside of the mouth',
		parentAttributes: ['Mouth_item'],
	},
	Mouth_cover: {
		name: 'An item covering the mouth',
		description: 'An item that is covering the mouth',
	},

	//#endregion

	//#region Vagina items
	Vagina_item: {
		name: 'An item used on the vagina',
		description: 'Any item that is positioned on the vagina (either outside or inside)',
	},
	Vagina_insert: {
		name: 'An item inserted in the vagina',
		description: 'An item that is inserted in the vagina (in the area between the lips)',
		parentAttributes: ['Vagina_item'],
	},
	Vagina_insert_deep: {
		name: 'An item inserted deep in the vagina',
		description: 'An item that is inserted deep inside the vagina (in the area not usually visible from outside)',
		parentAttributes: ['Vagina_item'],
	},
	Vagina_protruding: {
		name: 'An item protruding outside of the vagina',
		description: 'An item that is protruding outside of the vagina',
		parentAttributes: ['Vagina_item'],
	},
	Vagina_cover: {
		name: 'An item covering the vagina',
		description: 'An item that is covering the vagina',
	},
	//#endregion

	//#region Anus items
	Anus_item: {
		name: 'An item used on the anus',
		description: 'Any item that is positioned on the anus (either outside or inside)',
	},
	Anus_insert: {
		name: 'An item inserted in the anus',
		description: 'An item that is inserted in the anus (in the area of the sphincter)',
		parentAttributes: ['Anus_item'],
	},
	Anus_insert_deep: {
		name: 'An item inserted deep in the anus',
		description: 'An item that is inserted deep inside the anus (in the area not usually visible from outside)',
		parentAttributes: ['Anus_item'],
	},
	Anus_protruding: {
		name: 'An item protruding outside of the anus',
		description: 'An item that is protruding outside of the anus',
		parentAttributes: ['Anus_item'],
	},
	Anus_cover: {
		name: 'An item covering the anus',
		description: 'An item that is covering the anus',
	},
	//#endregion

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
		parentAttributes: ['Collar'],
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
	Room_device: {
		name: 'Room device',
		description: 'A cage, cross, bed, couch, or similar room-level item',
		useAsWardrobeFilter: {
			tab: 'room',
		},
		icon: 'room_device',
	},
	// Locks
	Lock: {
		name: 'Lock',
		description: 'A lock',
		icon: 'lock',
	},
} as const satisfies Record<string, AssetRepoAttributeDefinition>;

//#endregion

export type AttributeNames = (keyof typeof ATTRIBUTES_DEFINITION_BASE) & string;
export const ATTRIBUTES_DEFINITION: Readonly<Record<AttributeNames, AssetRepoAttributeDefinition>> = ATTRIBUTES_DEFINITION_BASE;

type AssetRepoAttributeDefinition = AssetAttributeDefinition & {
	parentAttributes?: readonly string[];
};

export function LoadAttributes(): Record<AttributeNames, AssetAttributeDefinition> {
	const logger = GetLogger('LoadAttributes');
	const result: Record<AttributeNames, AssetRepoAttributeDefinition> = cloneDeep(ATTRIBUTES_DEFINITION);
	const unknownAttributeLookup: Partial<Readonly<Record<string, AssetRepoAttributeDefinition>>> = result;

	for (const [id, attribute] of Object.entries(result)) {
		for (const parentAttribute of (attribute.parentAttributes ?? [])) {
			if (unknownAttributeLookup[parentAttribute] == null) {
				logger.error(`Attribute '${id}' has unknown parent '${parentAttribute}'`);
			}
		}

		SetCurrentContext('attributes', id, join(SRC_DIR, 'icons'));
		if (attribute.icon != null) {
			attribute.icon = DefineResource(attribute.icon + '.svg').resultName;
		}
	}

	return result;
}

export function LoadAttributeNameValidation() {
	const attributes: readonly string[] = Object.keys(ATTRIBUTES_DEFINITION);

	AttributeNameSchema[SCHEME_OVERRIDE]((attribute, ctx) => {
		if (!attributes.includes(attribute)) {
			ctx.addIssue({
				code: ZodIssueCode.custom,
				message: `Attribute '${attribute}' is not a valid attribute name`,
			});
		}
	});
}
