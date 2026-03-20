import { ItemInteractionType } from 'pandora-common';

DefineBodypart({
	name: 'Nails',
	bodypart: 'bodymarks',
	allowRandomizerUsage: false,
	graphics: 'graphics.json',
	colorization: {
		nails: {
			name: 'Nail Polish',
			default: '#D61800',
		},
	},
	preview: 'preview.png',
	attributes: {
		provides: [
			'Body_texture',
		],
	},
	modules: {
		fingernails: {
			type: 'typed',
			name: 'Fingernail Polish',
			expression: 'Fingernail Polish',
			interactionType: ItemInteractionType.ACCESS_ONLY,
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'painted',
					name: 'Painted',
				},
			],
		},
		toenails: {
			type: 'typed',
			name: 'Toenail Polish',
			expression: 'Toenail Polish',
			interactionType: ItemInteractionType.ACCESS_ONLY,
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'painted',
					name: 'Painted',
				},
			],
		},
	},
	ownership: {
		responsibleContributor: 'Shikifet <shikifet@gmail.com>',
		credits: ['Shikifet'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'fingernails',
				source: 'Self-Made',
				copyrightHolder: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
			{
				part: 'toenails',
				source: 'Self-Made',
				copyrightHolder: 'Shikifet',
				editedBy: 'Shikifet',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
