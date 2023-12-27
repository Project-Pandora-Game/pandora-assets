import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Top Hat',
	size: 'medium',
	graphics: 'graphics.json',
	colorization: {
		hat: {
			name: 'Hat',
			default: '#FFFFFF',
		},
		band: {
			name: 'Accent Band',
			default: '#653859',
		},
	},
	// size:256, y:120, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Headgear',
		],
	},
	modules: {
		hatType: {
			type: 'typed',
			name: 'Hat Type',
			interactionType: ItemInteractionType.ADD_REMOVE,
			variants: [
				{
					id: 'high',
					name: 'High',
				},
				{
					id: 'medium',
					name: 'Medium',
					default: true,
				},
				{
					id: 'low',
					name: 'Low',
				},
			],
		},
		hatColor: {
			type: 'typed',
			name: 'Hat Base Color',
			interactionType: ItemInteractionType.ADD_REMOVE,
			variants: [
				{
					id: 'black',
					name: 'Black Top Hat',
					default: true,
				},
				{
					id: 'white',
					name: 'White Top Hat',
				},
			],
		},
		hair: {
			type: 'typed',
			name: 'Hide Hair',
			variants: [
				{
					id: 'no',
					name: 'No',
					default: true,
				},
				{
					id: 'yes',
					name: 'Hide extra/side hair extensions',
					properties: {
						attributes: {
							hides: [
								'Hair_extension',
							],
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
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'used 3D model',
				source: 'https://skfb.ly/6RwyR',
				copyrightHolder: 'PartyBreaker',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'images',
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only',
			},
		],
	},
});
