import { AppearanceRandomizationData } from 'pandora-common';

export const APPEARANCE_RANDOMIZATION_CONFIG: AppearanceRandomizationData<AssetRepoExtraArgs> = {
	// Make sure the order matches BODYPART_ORDER from src/bodyparts.ts!
	body: [
		'Body_base',
		'Nose',
		'Blush',
		'Eyes',
		'Eyebrows',
		'Mouth',
		'Sex',
		'Hair_back',
		'Hair_front',
	],
	clothes: [
		'Panties',
		'Bra',
	],
};
