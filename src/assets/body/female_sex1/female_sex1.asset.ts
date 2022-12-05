import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Female Sex 1',
	size: 'bodypart',
	bodypart: 'sex',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: [
		{
			name: 'Vulva',
			default: '#FFFFFF',
		},
		{
			name: 'Hair',
			default: '#A96B61',
		},
	],
	attributes: [
		'Sex',
		'Vagina',
	],
	modules: {
		hair: {
			type: 'typed',
			name: 'Pubic Hair',
			variants: [
				{
					id: 'noHair',
					name: 'Shaved',
					default: true,
				},
				{
					id: 'trimmed',
					name: 'Trimmed',
				},
				{
					id: 'stripe',
					name: 'Trimmed Stripe',
				},
				{
					id: 'natural',
					name: 'Trimmed Natural',
				},
			],
		},
		vagina: {
			type: 'typed',
			name: 'Vagina',
			expression: 'Vagina',
			interactionType: ItemInteractionType.ACCESS_ONLY,
			variants: [
				{
					id: 'normal',
					name: 'Normal',
					default: true,
				},
				{
					id: 'spread',
					name: 'Spread',
					attributes: ['Vagina_spread'],
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
