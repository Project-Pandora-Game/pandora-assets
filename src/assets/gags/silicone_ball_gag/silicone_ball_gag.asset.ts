import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Silicone Ball Gag',
	size: 'small',
	requireFreeHandsToUseDefault: true,
	graphics: 'graphics.json',
	colorization: {
		ball: {
			name: 'Ball',
			default: '#C91F1F',
		},
		straps: {
			name: 'Straps',
			default: '#3b3b3b',
		},
		bolts: {
			name: 'Bolts',
			default: '#C1C1C1',
		},
		reflection: {
			name: 'Reflection',
			default: '#ffffff',
		},
		lips: {
			name: 'Lips',
			group: 'lips',
		},
	},
	//overrideColorKey: ['lips'],
	roomDeployment: {
		autoDeployRelativePosition: [-50, -100, 0],
	},
	// size:180, y:200, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Restraint_mouth',
			'Mouth_item',
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
		gagType: {
			type: 'typed',
			name: 'Gag Type',
			interactionType: ItemInteractionType.ADD_REMOVE,
			variants: [
				{
					id: 'standard',
					name: 'Standard',
					default: true,
					properties: {
						stateFlags: {
							provides: ['gagged'],
						},
					},
				},
				{
					id: 'harness',
					name: 'Harness',
					properties: {
						stateFlags: {
							provides: ['gagged'],
						},
					},
				},
				{
					id: 'neck',
					name: 'Standard around the neck',
				},
			],
		},
	},

	stateFlagCombinations: [
		{
			requiredFlags: ['gagged'],
			properties: {
				effects: {
					lipsTouch: 8,
					jawMove: 9,
					tongueRoof: 7,
					mouthBreath: 4,
					throatBreath: 3,
					coherency: 5,
					stimulus: 2,
				},
				attributes: {
					provides: [
						'Mouth_insert',
						'Mouth_cover',
					],
					requires: [
						'Mouth_open_wide',
						'!Mouth_tongue_out',
						'!Mouth_protruding',
						'!Mouth_cover',
					],
					covers: [
						'Mouth_item',
					],
				},
			},
		},
	],
	chat: {
		actionAdd: 'SOURCE_CHARACTER tied ITEM_ASSET_NAME tightly between TARGET_CHARACTER_DYNAMIC_POSSESSIVE teeth.',
		actionRemove: 'SOURCE_CHARACTER loosened and then removed ITEM_ASSET_NAME from TARGET_CHARACTER_DYNAMIC_POSSESSIVE mouth.',
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
