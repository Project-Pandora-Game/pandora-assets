import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'X Leather Blindfold',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		blindfold: {
			name: 'Blindfold',
			default: '#B90000',
		},
		straps: {
			name: 'Straps',
			default: '#2A2A2A',
		},
		bolts: {
			name: 'Bolts',
			default: '#E0E0E0',
		},
	},
	// size:180, y:200, centered
	preview: 'preview.png',
	roomDeployment: {
		autoDeployRelativePosition: [-50, -100, 0],
	},
	attributes: {
		provides: [
			'Restraint',
			'Restraint_eyes',
		],
	},
	modules: {
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			lockedProperties: {
				blockAddRemove: true,
			},
		},
		blinding: {
			type: 'typed',
			name: 'Blinding Strictness',
			interactionType: ItemInteractionType.ADD_REMOVE,
			variants: [
				{
					id: 'light',
					name: 'Thin Padding',
					default: true,
					properties: {
						effects: {
							blind: 9,
						},
					},
				},
				{
					id: 'full',
					name: 'Thick Padding',
					properties: {
						effects: {
							blind: 10,
						},
					},
				},
			],
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER strapped ITEM_ASSET_NAME around TARGET_CHARACTER_DYNAMIC_POSSESSIVE head, covering the eyes.',
		actionRemove: 'SOURCE_CHARACTER removed ITEM_ASSET_NAME from TARGET_CHARACTER_DYNAMIC_POSSESSIVE head.',
	},
	ownership: {
		responsibleContributor: 'Shikifet <shikifet@gmail.com>',
		credits: ['Shikifet'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Shikifet',
				editedBy: 'Shikifet',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
