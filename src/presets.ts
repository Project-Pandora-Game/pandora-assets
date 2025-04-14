import { AppearanceRandomizationData } from 'pandora-common';

export const APPEARANCE_RANDOMIZATION_CONFIG: AppearanceRandomizationData<AssetRepoExtraArgs> = {
	// Make sure the order matches BODYPART_ORDER from src/bodyparts.ts!
	body: [
		'Body_base',
		'Head_base',
		'Ears',
		'Nose',
		'Blush',
		'Bodymark',
		'Eyes',
		'Eyebrows',
		'Mouth',
		'Sex',
		'Hair_back',
		'Hair_front',
	],
	clothes: [
		'Underwear_panties',
		'Underwear_bra',
		'Legwear',
		'Footwear',
		'Clothing_upper',
		'Clothing_lower',
	],
	pose: {
		view: 'front',
		arms: {
			position: 'front',
			rotation: 'forward',
			fingers: 'spread',
		},
		legs: 'standing',
		bones: {
			arm_r: 74,
			arm_l: 74,
			elbow_r: 15,
			elbow_l: 15,
		},
	},
};
