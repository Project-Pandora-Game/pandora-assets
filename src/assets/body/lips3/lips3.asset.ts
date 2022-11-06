import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Lips 3',
	size: 'bodypart',
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
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only',
			},
		],
	},
});
