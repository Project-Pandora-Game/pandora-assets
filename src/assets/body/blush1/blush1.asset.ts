import { ItemInteractionType } from 'pandora-common';
import { DefineAsset } from '../../../tools';

DefineAsset({
	name: 'Blush 1',
	bodypart: 'blush',
	graphics: 'graphics.json',
	colorization: [
		{
			name: 'Blush',
			default: '#FFFFFF',
		},
	],
	modules: {
		blush: {
			type: 'typed',
			name: 'Blush Strength',
			expression: 'Blush',
			interactionType: ItemInteractionType.ACCESS_ONLY,
			variants: [
				{
					id: 'noBlush',
					name: 'None',
					default: true,
				},
				{
					id: 'faint',
					name: 'Faint',
				},
				{
					id: 'medium',
					name: 'Medium',
				},
				{
					id: 'strong',
					name: 'Strong',
				},
				{
					id: 'full',
					name: 'Full',
				},
				{
					id: 'deep',
					name: 'Deeply',
				},
			],
		},
	},
});
