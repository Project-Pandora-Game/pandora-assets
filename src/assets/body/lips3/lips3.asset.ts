import { ItemInteractionType } from 'pandora-common';
import { DefineAsset } from '../../../tools';

DefineAsset({
	name: 'Lips 3',
	bodypart: 'lips',
	graphics: 'graphics.json',
	colorization: [
		{
			name: 'Lips',
			default: '#F39989',
		},
	],
	modules: {
		mouth: {
			type: 'typed',
			name: 'Mouth expressions',
			expression: 'Mouth',
			interactionType: ItemInteractionType.ACCESS_ONLY,
			variants: [
				{
					id: 'neutral',
					name: 'Neutral',
					default: true,
				},
				{
					id: 'faint',
					name: 'Faint Smile',
				},
			],
		},
	},
});
