import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Wiffle Gag',
	size: 'small',
	requireFreeHandsToUseDefault: true,
	graphics: 'graphics.json',
	colorization: {
		ball: {
			name: 'Ball',
			default: '#FF80C0',
		},
		straps: {
			name: 'Straps',
			default: '#444444',
		},
		buckles: {
			name: 'Buckles/Rings',
			default: '#FFFFFF',
		},
	},
	preview: 'wiffle_preview.png',
	attributes: {
		provides: [
			'Restraint',
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
						effects: {
							lipsTouch: 7,
							jawMove: 7,
							tongueRoof: 6,
							mouthBreath: 2,
							throatBreath: 2,
							coherency: 4,
							stimulus: 2,
						},
						attributes: {
							provides: [
								'Restraint_mouth',
								'Mouth_item',
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
				{
					id: 'neck',
					name: 'Standard around the neck',
				},
				{
					id: 'thigh',
					name: 'Harness',
					properties: {
						effects: {
							lipsTouch: 7,
							jawMove: 7,
							tongueRoof: 6,
							mouthBreath: 2,
							throatBreath: 2,
							coherency: 4,
							stimulus: 2,
						},
						attributes: {
							provides: [
								'Restraint_mouth',
								'Mouth_item',
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
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER strapped ITEM_ASSET_NAME tightly between TARGET_CHARACTER_DYNAMIC_POSSESSIVE lips.',
		actionRemove: 'SOURCE_CHARACTER loosened and then removed ITEM_ASSET_NAME from TARGET_CHARACTER_DYNAMIC_POSSESSIVE mouth.',
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
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
