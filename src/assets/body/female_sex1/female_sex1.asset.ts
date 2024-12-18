import { ItemInteractionType } from 'pandora-common';
import { CreateHairColor } from '../../../helpers/hair_base.js';
const { colorization, modules } = CreateHairColor(false);

DefineBodypart({
	name: 'Female Sex 1',
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
	preview: null,
	attributes: {
		provides: [
			'Sex',
			'Vulva',
		],
	},
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
		vulva: {
			type: 'typed',
			name: 'Vulva',
			expression: 'Vulva',
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
						attributes: {
							provides: ['Vulva_spread'],
						},
					},
				},
			],
		},
	},
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Free to use',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
