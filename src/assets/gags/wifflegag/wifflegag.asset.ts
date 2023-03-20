import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Wiffle Gag',
	size: 'small',
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
			lockRequirements: ['Lock'],
			occupiedEffects: {
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
		lipsTouch: 7,
		jawMove: 10,
		tongueRoof: 6,
		mouthBreath: 2,
		throatBreath: 2,
		coherency: 4,
		stimulus: 2,
	},
	coverSlots: ['mouth', 'outsideMouthArea'],
	blockSlots: ['mouth'],
	occupySlots: {
		'outsideMouthArea': 2,
		'mouth': 6,
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER strapped a Wiffle Gag tightly between TARGET_CHARACTER_DYNAMIC_POSSESSIVE lips.',
		actionRemove: 'SOURCE_CHARACTER loosened and then removed the Wiffle Gag from TARGET_CHARACTER_DYNAMIC_POSSESSIVE mouth.',
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
