import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Dildo Gag',
	size: 'medium',
	graphics: 'graphics.json',
	colorization: {
		gag: {
			name: 'Gag',
			default: '#484F5B',
		},
		straps: {
			name: 'Straps',
			default: '#444444',
		},
	},
	attributes: [
		'Restraint',
		'Restraint_mouth',
	],
	requirements: [
		'Mouth_open_wide',
		'!Mouth_tongue_out',
	],
	modules: {
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			occupiedProperties: {
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
				},
				{
					id: 'thigh',
					name: 'Harness',
				},
			],
		},
	},
	effects: {
		lipsTouch: 9,
		jawMove: 9,
		tongueRoof: 8,
		mouthBreath: 6,
		throatBreath: 4,
		coherency: 7,
		stimulus: 6,
	},
	coverSlots: ['mouth', 'outsideMouthArea'],
	blockSlots: ['mouth'],
	occupySlots: {
		'outsideMouthArea': 1,
		'mouth': 9,
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER pushed a Dildo Gag into TARGET_CHARACTER_DYNAMIC_POSSESSIVE mouth, strapping it tight.',
		actionRemove: 'SOURCE_CHARACTER loosened and then removed the Dildo Gag from TARGET_CHARACTER_DYNAMIC_POSSESSIVE mouth.',
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
