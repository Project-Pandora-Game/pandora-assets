import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Nose Piercing',
	size: 'small',
	graphics: 'graphics.json',
	requireFreeHandsToUseDefault: true,
	colorization: {
		piercing: {
			name: 'Piercing',
			default: '#BBBBBB',
		},
	},
	// size:150, y:309, centered
	preview: null, //'preview.png',
	attributes: {
		provides: [
			'Piercing',
			'Accessory',
		],
		requires: [
			'!Facewear_mask',
		]
	},
	modules: {
		piercingType: {
			type: 'typed',
			name: 'Piercing Type',
			interactionType: ItemInteractionType.ADD_REMOVE,
			variants: [
				{
					id: 'left',
					name: 'Left Stud',
					default: true,
				},
				{
					id: 'right',
					name: 'Right Stud',
				},
				{
					id: 'ring',
					name: 'Nose Ring',
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
