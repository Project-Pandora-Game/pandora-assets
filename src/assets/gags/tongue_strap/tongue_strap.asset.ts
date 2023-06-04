import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Tongue Strap',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		straps: {
			name: 'Straps',
			default: '#444444',
		},
	},
	attributes: [
		'Restraint',
		'Restraint_mouth',
	],
	requirements: ['Mouth_tongue_out'],
	modules: {
		lock: {
			type: 'lockSlot',
			name: 'Lock',
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
	occupySlots: {
		'outsideMouthArea': 1,
	},
	effects: {
		lipsTouch: 2,
		jawMove: 0,
		tongueRoof: 8,
		mouthBreath: 0,
		throatBreath: 0,
		coherency: 0,
		stimulus: 3,
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER strapped a Tongue Strap securely around TARGET_CHARACTER_DYNAMIC_POSSESSIVE tongue.',
		actionRemove: 'SOURCE_CHARACTER loosened and then removed the Tongue Strap from TARGET_CHARACTER_DYNAMIC_POSSESSIVE mouth.',
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
