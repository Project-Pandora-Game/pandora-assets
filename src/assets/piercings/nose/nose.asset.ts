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
	// size:100, y:265, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Piercing',
		],
		requires: [
			'!Facewear_mask',
		],
	},
	modules: {
		studType: {
			type: 'typed',
			name: 'Piercing Type',
			interactionType: ItemInteractionType.ADD_REMOVE,
			variants: [
				{
					id: 'noStud',
					name: 'None',
					default: true,
				},
				{
					id: 'left',
					name: 'Left Stud',
				},
				{
					id: 'right',
					name: 'Right Stud',
				},
				{
					id: 'both',
					name: 'Both Sides',
				},
			],
		},
		ring: {
			type: 'typed',
			name: 'Nose Ring',
			interactionType: ItemInteractionType.ADD_REMOVE,
			variants: [
				{
					id: 'noRing',
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
		lock: {
			type: 'lockSlot',
			name: 'Opening mechanism block',
			lockedProperties: {
				blockAddRemove: true,
			},
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
