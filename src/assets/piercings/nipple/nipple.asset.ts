import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Nipple Piercing(s)',
	size: 'small',
	graphics: 'graphics.json',
	requireFreeHandsToUseDefault: true,
	colorization: {
		piercing: {
			name: 'Piercing',
			default: '#BBBBBB',
		},
	},
	// size:200, y:400, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Piercing',
		],
		requires: [
			'!Breast_cover',
		],
	},
	modules: {
		left: {
			type: 'typed',
			name: 'Left Nipple',
			interactionType: ItemInteractionType.ADD_REMOVE,
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'double',
					name: 'Double Stud',
				},
				{
					id: 'ring',
					name: 'Nipple Ring',
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
		right: {
			type: 'typed',
			name: 'Right Nipple',
			interactionType: ItemInteractionType.ADD_REMOVE,
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'double',
					name: 'Double Stud',
				},
				{
					id: 'ring',
					name: 'Nipple Ring',
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
