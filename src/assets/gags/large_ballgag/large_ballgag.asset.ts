import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Large Ball Gag',
	size: 'medium',
	graphics: 'graphics.json',
	colorization: {
		ball: {
			name: 'Ball',
			default: '#C99AF8',
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
		lipsTouch: 7,
		jawMove: 10,
		tongueRoof: 6,
		mouthBreath: 3,
		throatBreath: 2,
		coherency: 4,
		stimulus: 2,
	},
	coverSlots: ['mouth', 'outsideMouthArea'],
	blockSlots: ['mouth'],
	occupySlots: {
		'outsideMouthArea': 2,
		'mouth': 7,
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER strapped a Large Ball Gag tightly between TARGET_CHARACTER_DYNAMIC_POSSESSIVE lips.',
		actionRemove: 'SOURCE_CHARACTER loosened and then removed the Large Ball Gag from TARGET_CHARACTER_DYNAMIC_POSSESSIVE mouth.',
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
