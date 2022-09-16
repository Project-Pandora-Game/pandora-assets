import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Female Sex 1',
	bodypart: 'sex',
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
				},
			],
		},
	},
});
