import { ItemInteractionType } from 'pandora-common';
import { CreateHairColor } from '../../../helpers/hair_base';
const { colorization, modules } = CreateHairColor(false);

DefineAsset({
	name: 'Female Sex 1',
	size: 'bodypart',
	bodypart: 'sex',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		vulva: {
			name: 'Vulva',
			default: '#FFFFFF',
		},
		...colorization,
	},
	attributes: [
		'Sex',
		'Vagina',
	],
	modules: {
		...modules,
		hair: {
			type: 'typed',
			name: 'Pubic Hair',
			variants: [
				{
					id: 'noHair',
					name: 'Shaved',
					default: true,
					properties: {
						excludeFromColorInheritance: ['hair'],
					},
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
					properties: {
						attributes: ['Vagina_spread'],
					},
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
