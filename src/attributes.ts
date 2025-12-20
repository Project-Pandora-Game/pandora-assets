import { cloneDeep } from 'lodash-es';
import { AssetAttributeDefinition, AttributeNameSchema, GetLogger, SCHEME_OVERRIDE } from 'pandora-common';
import { join } from 'path';
import { SRC_DIR } from './config.ts';
import { SetCurrentContext } from './tools/context.ts';
import { DefineResource } from './tools/resources.ts';

//#region Attribute definitions - an attribute defines a role

const ATTRIBUTES_DEFINITION_BASE = DefineAttributes({
	// Bodypart attributes
	Body_base: {
		name: 'Base body',
		description: 'A body',
		icon: 'body',
		useAsAssetPreference: false,
	},
	Head_base: {
		name: 'Base head',
		description: 'A head',
		icon: 'body',
		useAsAssetPreference: false,
	},
	Ears: {
		name: 'Ears',
		description: 'A pair of ears for the body',
		useAsWardrobeFilter: {
			tabs: ['body'],
		},
		icon: 'ear',
		useAsAssetPreference: false,
	},
	Hair: {
		name: 'Hair',
		description: 'Hair',
		useAsAssetPreference: false,
	},
	Hair_front: {
		name: 'Front hair',
		description: 'Hair on the front of the head',
		useAsWardrobeFilter: {
			tabs: ['body'],
		},
		icon: 'hair_front',
		parentAttributes: ['Hair'],
		useAsAssetPreference: false,
	},
	Hair_back: {
		name: 'Back hair',
		description: 'Hair on the back of the head',
		useAsWardrobeFilter: {
			tabs: ['body'],
		},
		icon: 'hair_back',
		parentAttributes: ['Hair'],
		useAsAssetPreference: false,
	},
	Hair_extension: {
		name: 'Hair extension',
		description: 'A hair part separating from the main hair',
		useAsWardrobeFilter: {
			tabs: ['body'],
		},
		icon: 'hair_extension',
		parentAttributes: ['Hair'],
		useAsAssetPreference: false,
	},
	Eyebrows: {
		name: 'Eyebrows',
		description: 'A pair of eyebrows',
		useAsWardrobeFilter: {
			tabs: ['body'],
		},
		icon: 'eyebrow',
		useAsAssetPreference: false,
	},
	Eyes: {
		name: 'Eyes',
		description: 'A pair of eyes',
		useAsWardrobeFilter: {
			tabs: ['body'],
		},
		icon: 'eye',
		useAsAssetPreference: false,
	},
	Eyes_right_open: {
		name: 'Open right eye',
		description: 'A right eye, that is open',
		useAsAssetPreference: false,
		parentAttributes: ['Eyes'],
	},
	Eyes_left_open: {
		name: 'Open left eye',
		description: 'A left eye, that is open',
		useAsAssetPreference: false,
		parentAttributes: ['Eyes'],
	},
	Eyes_right_closed: {
		name: 'Closed right eye',
		description: 'A right eye, that is closed',
		useAsAssetPreference: false,
		parentAttributes: ['Eyes'],
	},
	Eyes_left_closed: {
		name: 'Closed left eye',
		description: 'A left eye, that is closed',
		useAsAssetPreference: false,
		parentAttributes: ['Eyes'],
	},
	Nose: {
		name: 'Nose',
		description: 'A nose',
		useAsWardrobeFilter: {
			tabs: ['body'],
		},
		icon: 'nose',
		useAsAssetPreference: false,
	},
	Mouth: {
		name: 'Mouth',
		description: 'A mouth',
		useAsWardrobeFilter: {
			tabs: ['body'],
		},
		icon: 'lips',
		useAsAssetPreference: false,
	},
	Mouth_open_wide: {
		name: 'Wide open mouth',
		description: 'A wide open mouth',
		parentAttributes: ['Mouth'],
		useAsAssetPreference: false,
	},
	Mouth_open_teeth: {
		name: 'Wide open mouth showing teeth',
		description: 'A wide open mouth showing teeth',
		parentAttributes: ['Mouth'],
		useAsAssetPreference: false,
	},
	Mouth_tongue_out: {
		name: 'Tongue out',
		description: 'A wide open mouth with its tongue out',
		parentAttributes: ['Mouth'],
		useAsAssetPreference: false,
	},
	Body_texture: {
		name: 'Body texture',
		description: 'A texture for the body',
		icon: 'body',
		useAsAssetPreference: false,
		useAsWardrobeFilter: {
			tabs: ['body'],
		},
	},
	Blush: {
		name: 'Blush',
		description: 'A facial reddening',
		icon: 'body',
		useAsAssetPreference: false,
	},
	Bodymark: {
		name: 'Bodymark',
		description: 'A mark on the body',
		icon: 'body',
	},
	Body_tattoo: {
		name: 'Body tattoo',
		description: 'A tattoo or similar body modification',
		useAsWardrobeFilter: {
			tabs: ['body'],
		},
		icon: 'tattoo',
	},
	Sex: {
		name: 'Sex',
		description: 'A sexual organ',
		icon: 'body',
	},
	Vulva: {
		name: 'Vulva',
		description: 'A female sexual organ',
		parentAttributes: ['Sex'],
	},
	Vulva_spread: {
		name: 'Spread vulva',
		description: 'A spread female sexual organ',
		parentAttributes: ['Vulva'],
		useAsAssetPreference: false,
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
		useAsAssetPreference: false,
	},
	Penis_erect: {
		name: 'Erect Penis',
		description: 'An erect male sexual organ',
		parentAttributes: ['Penis'],
		useAsAssetPreference: false,
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
			tabs: ['worn', 'storage'],
			excludeAttributes: ['Clothing_large', 'Clothing_outer'],
		},
		icon: 'upper',
		parentAttributes: ['Clothing'],
	},
	Clothing_lower: {
		name: 'Lower clothing',
		description: 'A skirt, pants, or similar item worn on the hips',
		useAsWardrobeFilter: {
			tabs: ['worn', 'storage'],
			excludeAttributes: ['Clothing_large', 'Clothing_outer'],
		},
		icon: 'lower',
		parentAttributes: ['Clothing'],
	},
	Clothing_large: {
		name: 'Large clothing',
		description: 'A dress, suit, or similar item worn over large parts of the body',
		useAsWardrobeFilter: {
			tabs: ['worn', 'storage'],
			excludeAttributes: ['Clothing_outer'],
		},
		icon: 'dress',
		parentAttributes: ['Clothing'],
	},
	Clothing_outer: {
		name: 'Outer clothing',
		description: 'A jacket, coat, or similar item worn as outer clothing layer',
		useAsWardrobeFilter: {
			tabs: ['worn', 'storage'],
		},
		icon: 'outer',
		parentAttributes: ['Clothing'],
	},
	Underwear: {
		name: 'Underwear',
		description: 'A bra, panties, underpants, or similar item worn as lowest clothing layer',
		useAsWardrobeFilter: {
			tabs: ['worn', 'storage'],
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
	Underwear_diaper: {
		name: 'Diapers',
		description: 'A pair absorbing undies',
		parentAttributes: ['Underwear'],
	},
	Fantasy: {
		name: 'Fantasy',
		description: 'A tail, pair of ears, or similar cosplay/fantasy item',
		useAsWardrobeFilter: {
			tabs: ['worn', 'storage', 'body'],
		},
		icon: 'fantasy',
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
			tabs: ['worn', 'storage'],
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
			tabs: ['worn', 'storage'],
		},
		icon: 'accessory',
	},
	Legwear: {
		name: 'Legwear',
		description: 'A pair of socks, stockings, tights, or similar leg covering clothing',
		useAsWardrobeFilter: {
			tabs: ['worn', 'storage'],
		},
		icon: 'legwear',
	},
	Footwear: {
		name: 'Footwear',
		description: 'A pair of shoes, boots, sandals, or similar item',
		useAsWardrobeFilter: {
			tabs: ['worn', 'storage'],
		},
		icon: 'footwear',
	},
	Headgear: {
		name: 'Headgear',
		description: 'A hat, cap, hood, helmet, or similar head gear',
		useAsWardrobeFilter: {
			tabs: ['worn', 'storage'],
		},
		icon: 'headgear',
	},
	Headgear_hood: {
		name: 'Hood',
		description: 'A hood',
		parentAttributes: ['Headgear'],
	},
	Wig: {
		name: 'Wig',
		description: 'Front and back wigs that hide the natural hair',
		useAsWardrobeFilter: {
			tabs: ['worn', 'storage'],
		},
		icon: 'hair_front',
	},
	Wig_front: {
		name: 'Front wig',
		description: 'A wig part on the front of the head',
		parentAttributes: ['Wig'],
	},
	Wig_back: {
		name: 'Back wig',
		description: 'A wig part on the back of the head',
		parentAttributes: ['Wig'],
	},
	Gloves: {
		name: 'Gloves',
		description: 'A pair of gloves',
		useAsWardrobeFilter: {
			tabs: ['worn', 'storage'],
		},
		icon: 'gloves',
	},
	Mittens: {
		name: 'Mittens',
		description: 'A pair of bondage mittens',
	},
	Restraint: {
		name: 'Restraint',
		description: 'An item that restricts or restrains the character in some form',
	},
	Restraint_arms: {
		name: 'Arms restraint',
		description: 'An item that restricts or restrains arms or hands',
		useAsWardrobeFilter: {
			tabs: ['worn', 'storage'],
		},
		icon: 'restraint_arms',
		parentAttributes: ['Restraint'],
	},
	Wrist_cuffs: {
		name: 'Wrist cuffs',
		description: 'A pair of wrist cuffs',
		parentAttributes: ['Restraint_arms'],
	},
	Elbow_cuffs: {
		name: 'Elbow cuffs',
		description: 'A pair of elbow cuffs',
		parentAttributes: ['Restraint_arms'],
	},
	Restraint_torso: {
		name: 'Torso restraint',
		description: 'An item that restrains the body\'s torso',
		useAsWardrobeFilter: {
			tabs: ['worn', 'storage'],
		},
		icon: 'harness',
		parentAttributes: ['Restraint'],
	},
	Restraint_legs: {
		name: 'Leg restraint',
		description: 'An item that restricts or restrains legs or feet',
		useAsWardrobeFilter: {
			tabs: ['worn', 'storage'],
		},
		icon: 'restraint_legs',
		parentAttributes: ['Restraint'],
	},
	Ankle_cuffs: {
		name: 'Ankle cuffs',
		description: 'A pair of ankle cuffs',
		parentAttributes: ['Restraint_legs'],
	},
	Thigh_cuffs: {
		name: 'Thigh cuffs',
		description: 'A pair of thigh cuffs',
		parentAttributes: ['Restraint_legs'],
	},
	Restraint_eyes: {
		name: 'Sight restraint',
		description: 'An item that decreases the ability to see',
		useAsWardrobeFilter: {
			tabs: ['worn', 'storage'],
		},
		icon: 'blindfold',
		parentAttributes: ['Restraint'],
	},
	Toy: {
		name: 'Toy',
		description: 'A sexual toy',
		useAsWardrobeFilter: {
			tabs: ['worn', 'storage'],
		},
		icon: 'toy',
	},
	Toy_clamps_genital: {
		name: 'Genital clamps',
		description: 'A set of genital clamps',
		parentAttributes: ['Toy'],
	},

	//#region Ear items
	Ear_item: {
		name: 'An item used on the ears or inside',
		description: 'Any item that is positioned on the ears (either outside or inside)',
	},
	Restraint_ears: {
		name: 'Hearing restraint',
		description: 'An item that decreases the ability to hear',
		useAsWardrobeFilter: {
			tabs: ['worn', 'storage'],
		},
		icon: 'headphones',
		parentAttributes: ['Restraint', 'Ear_item'],
	},
	Ear_insert: {
		name: 'An item inserted into the ears',
		description: 'An item that is inserted into the ears',
		parentAttributes: ['Ear_item'],
	},
	Ear_cover: {
		name: 'An item covering the ears',
		description: 'An item that is covering the ears',
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
			tabs: ['worn', 'storage'],
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

	//#region Hands items
	Hand_item: {
		name: 'An item used on the hands',
		description: 'An item that is used on the wearer\'s hands',
	},
	Hand_cover: {
		name: 'An item covering hands',
		description: 'An item that covers the wearer\'s hands without restricting them',
	},
	Hand_restricting_cover: {
		name: 'An item covering hands and restricting their usage',
		description: 'An item that covers and restricts the wearer\'s hands so they cannot be used to hold something with one hand',
		parentAttributes: ['Hand_cover'],
	},
	//#endregion

	//#region Breasts items
	Breast_item: {
		name: 'An item used over the breasts',
		description: 'Any item that is positioned over the breasts',
	},
	Breast_nipple: {
		name: 'An item used on the nipple',
		description: 'An item that is used on or over the nipples',
		parentAttributes: ['Breast_item'],
	},
	Breast_cover: {
		name: 'An item covering the breasts',
		description: 'An item that is covering the breasts',
	},
	//#endregion

	//#region Vulva items
	Vulva_item: {
		name: 'An item used on the vulva',
		description: 'Any item that is positioned on the vulva (either outside or inside)',
	},
	Vulva_insert: {
		name: 'An item inserted in the vulva',
		description: 'An item that is inserted in the vulva (in the area between the lips)',
		parentAttributes: ['Vulva_item'],
	},
	Vulva_insert_deep: {
		name: 'An item inserted deep in the vulva',
		description: 'An item that is inserted deep inside the vulva (in the area not usually visible from outside)',
		parentAttributes: ['Vulva_item'],
	},

	Vulva_cover: {
		name: 'An item covering the vulva',
		description: 'An item that is covering the vulva',
	},
	//#endregion
	Crotch_protruding: {
		name: 'An item protruding outside of the crotch',
		description: 'An item that is protruding outside of the crotch',
	},

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

	Collar: {
		name: 'Collar',
		description: 'A Collar',
		useAsWardrobeFilter: {
			tabs: ['worn', 'storage'],
		},
		icon: 'collar',
	},
	Collar_front_ring: {
		name: 'Collar ring',
		description: 'A front ring on a collar',
		parentAttributes: ['Collar'],
	},
	Leash: {
		name: 'Leash',
		description: 'A leash, usually attached to a collar',
	},
	Chastity: {
		name: 'Chastity',
		description: 'An item, typically a bra or belt, used for chastity play',
		useAsWardrobeFilter: {
			tabs: ['worn', 'storage'],
		},
		icon: 'chastity',
	},
	Handheld: {
		name: 'Hand-held item',
		description: 'A crop, whip, paddle, wand or similar hand-held item',
		useAsWardrobeFilter: {
			tabs: ['worn', 'storage'],
		},
		icon: 'handheld',
	},
	Piercing: {
		name: 'Piercing',
		description: 'A piercing or similar body modification',
		useAsWardrobeFilter: {
			tabs: ['worn', 'storage'],
		},
		icon: 'piercing',
	},
	// Room devices
	Room_device: {
		name: 'Room device',
		description: 'Any room-level item (a lamp, cross, table, plant, ...)',
		useAsWardrobeFilter: {
			tabs: ['room', 'storage'],
		},
		icon: 'room_device',
	},
	Play_furniture: {
		name: 'Play furniture',
		description: 'A cage, cross, frame, or similar toy-like room-level item',
		useAsWardrobeFilter: {
			tabs: ['room', 'storage'],
		},
		parentAttributes: ['Room_device'],
		icon: 'cross',
	},
	Furniture: {
		name: 'Furniture',
		description: 'A bed, chair, bench, or similar usable room-level item',
		useAsWardrobeFilter: {
			tabs: ['room', 'storage'],
		},
		parentAttributes: ['Room_device'],
		icon: 'furniture',
	},
	Wall: {
		name: 'Wall items',
		description: 'A picture, lamp, TV, or similar item to decorate a wall',
		useAsWardrobeFilter: {
			tabs: ['room', 'storage'],
		},
		parentAttributes: ['Room_device'],
		icon: 'wall',
	},
	Storage: {
		name: 'Storage items',
		description: 'A chest, box, barrel, or similar room-level storage item',
		useAsWardrobeFilter: {
			tabs: ['room', 'storage'],
		},
		parentAttributes: ['Room_device'],
		icon: 'storage',
	},
	Floor: {
		name: 'Floor items',
		description: 'A carpet, plant, fence, or similar item to decorate a floor',
		useAsWardrobeFilter: {
			tabs: ['room', 'storage'],
		},
		parentAttributes: ['Room_device'],
		icon: 'floor',
	},
	// Locks
	Lock: {
		name: 'Lock',
		description: 'A lock',
		useAsWardrobeFilter: {
			tabs: ['room', 'storage', 'lockSlot'],
		},
		icon: 'lock',
	},
	// Connectors
	Wrist_cuffs_chainable: {
		name: 'Chainable wrist cuffs',
		description: 'A cuff that is chainable to another item',
	},
	Belt_chainable: {
		name: 'A chainable belt',
		description: 'A belt that is chainable to another item',
	},
	Ankle_cuffs_chainable: {
		name: 'Chainable ankle cuffs',
		description: 'A cuff that is chainable to another item',
	},
	Armbinder_chainable: {
		name: 'A chainable armbinder',
		description: 'An armbinder that is chainable to another item',
	},
	Piercing_chainable: {
		name: 'A chainable piercing',
		description: 'A piercing that is chainable to another item',
		// Do NOT rely on this attribute for attachment points.
		// If any asset wants to be connectable to a specific piercing, that connection point should have a new attribute created.
		// FIXME: Make attributes for piercing-based anchor points and standardize and document their locations
		parentAttributes: ['Piercing'],
	},
	// Rope
	Rope_waist: {
		name: 'Rope around waist',
		description: 'A rope around the waist',
	},
	Back_knot_anchor_point: {
		name: 'Back knot',
		description: 'A knot on the back to which a connecting rope can be tied',
		useAsAssetPreference: false,
	},
	Rope_vulva_anchor_point: {
		name: 'Crotch rope',
		description: 'A crotch rope to which a connecting rope can be tied',
		useAsAssetPreference: false,
	},
	Rope_thighs_anchor_point: {
		name: 'Thighs rope',
		description: 'A rope over thighs to which a connecting rope can be tied',
		useAsAssetPreference: false,
	},
	Rope_above_knees_anchor_point: {
		name: 'Above Knees rope',
		description: 'A rope over knees to which a connecting rope can be tied',
		useAsAssetPreference: false,
	},
	Rope_ankles_anchor_point: {
		name: 'Ankle rope',
		description: 'A rope over ankles to which a connecting rope can be tied',
		useAsAssetPreference: false,
	},
	Gag_anchor_point: {
		name: 'Gag attachment point',
		description: 'A fix point behind the head to which a gag can be secured',
		useAsAssetPreference: false,
	},
	Frogtie: {
		name: 'Frogtie',
		description: 'A rope tying the legs to thighs in a frogtie',
		useAsAssetPreference: false,
	},
	Hashira: {
		name: 'Pillar',
		description: 'A pillar or pole where the model can be tied to',
		useAsAssetPreference: false,
	},
	Rope_strappado_anchor_point: {
		name: 'Armbinder rope tie',
		description: 'A rope tying the arms to which a strappado can be held',
		useAsAssetPreference: false,
	},
});

//#endregion

function DefineAttributes<const TAttributeName extends string>(
	definitions: Record<TAttributeName, NoInfer<AssetRepoAttributeDefinition<TAttributeName>>>,
): Readonly<Record<TAttributeName, AssetRepoAttributeDefinition<TAttributeName>>> {
	return definitions;
}

export type AttributeNames = (keyof typeof ATTRIBUTES_DEFINITION_BASE) & string;
export const ATTRIBUTES_DEFINITION: Readonly<Record<AttributeNames, AssetRepoAttributeDefinition<AttributeNames>>> = ATTRIBUTES_DEFINITION_BASE;

type AssetRepoAttributeDefinition<TAttributes> = AssetAttributeDefinition & {
	parentAttributes?: readonly TAttributes[];
};

export function LoadAttributes(): Record<AttributeNames, AssetAttributeDefinition> {
	const logger = GetLogger('LoadAttributes');
	const result: Record<AttributeNames, AssetRepoAttributeDefinition<AttributeNames>> = cloneDeep(ATTRIBUTES_DEFINITION);
	const unknownAttributeLookup: Partial<Readonly<Record<string, AssetRepoAttributeDefinition<AttributeNames>>>> = result;

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
		// Allow for negation of attribute to be used as well
		if (attribute.startsWith('!')) {
			attribute = attribute.substring(1);
		}
		if (!attributes.includes(attribute)) {
			ctx.addIssue({
				code: 'custom',
				message: `Attribute '${attribute}' is not a valid attribute name`,
			});
		}
	});
}
