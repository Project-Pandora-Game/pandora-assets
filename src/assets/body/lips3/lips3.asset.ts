import { ItemInteractionType } from 'pandora-common';
import { DefineAsset } from '../../../tools';

DefineAsset({
	name: 'Lips 3',
	bodypart: 'lips',
	graphics: 'graphics.json',
	colorization: [
		{
			name: 'Lips',
			default: '#FCB6B4',
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
					id: 'serious',
					name: 'Serious',
				},
				{
					id: 'smile',
					name: 'Faint Smile',
				},
				{
					id: 'big',
					name: 'Big Smile',
				},
				{
					id: 'grin',
					name: 'Grinning',
				},
				{
					id: 'happy',
					name: 'Happy',
				},
				{
					id: 'laugh',
					name: 'Open',
				},
				{
					id: 'open',
					name: 'Open Wide',
				},
				{
					id: 'tongue',
					name: 'Tongue Out',
				},
				{
					id: 'tongueLong',
					name: 'Tongue Out Fully',
				},
				{
					id: 'pout',
					name: 'Pouting',
				},
			],
		},
	},
});
