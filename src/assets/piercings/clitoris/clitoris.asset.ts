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
	// size:150, y:309, centered
	preview: null, // 'preview.png',
	attributes: {
		provides: [
			'Piercing',
			'Accessory',
		],
		requires: [
			'!Vulva_cover',
		],
	},
	modules: {
		piercingType: {
			type: 'typed',
			name: 'Piercing Type',
			interactionType: ItemInteractionType.ADD_REMOVE,
			variants: [
				{
					id: 'single',
					name: 'Single Stud',
					default: true,
				},
				{
					id: 'double',
					name: 'Double Stud',
				},
				{
					id: 'ring',
					name: 'Clitoris Ring',
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
