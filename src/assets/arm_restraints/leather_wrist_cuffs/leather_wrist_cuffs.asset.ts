import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Leather Wrist Cuffs',
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
					id: 'front',
					name: 'Chained In Front',
					poseLimits: {
						forcePose: {
							arm_r: 74,
							arm_l: 74,
							elbow_r: 43,
							elbow_l: 43,
						},
					},
				},
				{
					id: 'overhead',
					name: 'Chained Overhead',
					poseLimits: {
						forcePose: {
							arm_r: -74,
							arm_l: -74,
							elbow_r: -43,
							elbow_l: -43,
						},
					},
				},
			],
		},
	},
	actionMessages: {
		itemAdd: 'SOURCE_CHARACTER fastened the leather cuffs around TARGET_CHARACTER_DYNAMIC wrists.',
		itemRemove: 'SOURCE_CHARACTER loosened and slipped off the leather cuffs from TARGET_CHARACTER_DYNAMIC wrists.',
	},
});
