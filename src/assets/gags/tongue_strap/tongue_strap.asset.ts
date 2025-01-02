import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Tongue Strap',
	size: 'small',
	requireFreeHandsToUseDefault: true,
	graphics: 'graphics.json',
	colorization: {
		straps: {
			name: 'Straps',
			default: '#444444',
		},
	},
	preview: 'tongue_preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Restraint_mouth',
			'Mouth_item',
			'Mouth_protruding',
		],
		requires: [
			'Mouth_tongue_out',
		],
	},
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
		lipsTouch: 8,
		jawMove: 2,
		tongueRoof: 9,
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
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
