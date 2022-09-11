import { ItemInteractionType } from 'pandora-common';
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
	modules: {
		cuffState: {
			type: 'typed',
			name: 'Cuff states',
			interactionType: ItemInteractionType.ACCESS_ONLY,
			variants: [
				{
					id: 'unchained',
					name: 'No Chain',
					default: true,
				},
				{
					id: 'normal',
					name: 'Chained standing',
					poseLimits: {
						forcePose: {
							leg_r: 0,
							leg_l: 0,
							sitting: 0,
							kneeling: 0,
						},
					},
				},
				{
					id: 'spread',
					name: 'Chained Spread',
					poseLimits: {
						forcePose: {
							leg_r: -3,
							leg_l: -3,
							sitting: 0,
							kneeling: 0,
						},
					},
				},
				{
					id: 'closed',
					name: 'Chained Closed',
					poseLimits: {
						forcePose: {
							leg_r: 2,
							leg_l: 2,
							sitting: 0,
							kneeling: 0,
						},
					},
				},
			],
		},
	},
	actionMessages: {
		itemAdd: 'SOURCE_CHARACTER fastened the leather cuffs around TARGET_CHARACTER_DYNAMIC ankles.',
		itemRemove: 'SOURCE_CHARACTER loosened and slipped off the leather cuffs from TARGET_CHARACTER_DYNAMIC ankles.',
	},
});
