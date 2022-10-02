import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'High Heels',
	graphics: 'graphics.json',
	colorization: [
		{
			name: 'Shoe',
			default: '#D20000',
		},
		{
			name: 'Soles',
			default: '#393939',
		},
	],
	modules: {
		heelLength: {
			type: 'typed',
			name: 'Heel Length',
			interactionType: ItemInteractionType.ADD_REMOVE,
			variants: [
				{
					id: 'normal',
					name: 'Normal',
					default: true,
					poseLimits: {
						forcePose: {
							tiptoeing: 30,
						},
					},
				},
				{
					id: 'high',
					name: 'High',
					poseLimits: {
						forcePose: {
							tiptoeing: 100,
						},
					},
				},
				{
					id: 'veryhigh',
					name: 'Very High',
					poseLimits: {
						forcePose: {
							tiptoeing: 160,
						},
					},
				},
			],
		},
		heelType: {
			type: 'typed',
			name: 'Heel Type',
			interactionType: ItemInteractionType.ADD_REMOVE,
			variants: [
				{
					id: 'noStrap',
					name: 'No Strap',
					default: true,
				},
				{
					id: 'strap',
					name: 'With Strap',
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
