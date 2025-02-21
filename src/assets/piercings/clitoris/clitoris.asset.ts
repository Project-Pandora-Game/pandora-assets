import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Clitoris Piercing',
	size: 'small',
	graphics: 'graphics.json',
	requireFreeHandsToUseDefault: true,
	colorization: {
		piercing: {
			name: 'Piercing',
			default: '#BBBBBB',
		},
	},
	// size:100, y:700, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Piercing',
		],
		requires: [
			'!Vulva_cover',
			'Vulva',
			'!Penis',
		],
	},
	modules: {
		studType: {
			type: 'typed',
			name: 'Piercing Type',
			interactionType: ItemInteractionType.ADD_REMOVE,
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'single',
					name: 'Single Stud',
				},
				{
					id: 'double',
					name: 'Double Stud',
				},
				{
					id: 'both',
					name: 'Single & Double Stud',
				},
			],
		},
		ring: {
			type: 'typed',
			name: 'Clitoris Ring',
			interactionType: ItemInteractionType.ADD_REMOVE,
			variants: [
				{
					id: 'none',
					name: 'No',
					default: true,
				},
				{
					id: 'ring',
					name: 'Yes',
					properties: {
						attributes: {
							provides: [
								'Piercing_chainable',
							],
						},
					},
				},
			],
		},
	},
	ownership: {
		responsibleContributor: 'Sandrine <118102950+SandrinePDR@users.noreply.github.com>',
		credits: ['Taja'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'body',
				source: 'Self-Made',
				copyrightHolder: 'Taja',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
