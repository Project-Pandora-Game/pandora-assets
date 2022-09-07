import { DefineAsset } from '../../../tools';

DefineAsset({
	name: 'Leather Ankle Cuffs',
	graphics: 'graphics.json',
	colorization: [
		{
			name: 'Cuff',
			default: '#222222',
		},
		{
			name: 'Belt',
			default: '#000000',
		},
		{
			name: 'Small Rings',
			default: '#FFFFFF',
		},
		{
			name: 'Chain',
			default: '#FFFFFF',
		},
	],
	poseLimits: {
		forcePose: {
			leg_r: 0,
			leg_l: 0,
			sitting: 0,
			kneeling: 0,
		},
	},
	actionMessages: {
		itemAdd: 'SOURCE_CHARACTER fastened the leather cuffs around TARGET_CHARACTER_DYNAMIC ankles.',
		itemRemove: 'SOURCE_CHARACTER loosened and slipped off the leather cuffs from TARGET_CHARACTER_DYNAMIC ankles.',
	},
});
