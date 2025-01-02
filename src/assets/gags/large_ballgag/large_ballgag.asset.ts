import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Large Ball Gag',
	size: 'medium',
	requireFreeHandsToUseDefault: true,
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
	preview: 'large_ball_preview.png',
	attributes: {
		provides: [
			'Restraint',
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
		jawMove: 9,
		tongueRoof: 7,
		mouthBreath: 4,
		throatBreath: 3,
		coherency: 5,
		stimulus: 2,
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
				license: 'Pandora-Use-Only-v1-or-later',
			},
			{
				part: 'used 3D model',
				source: 'https://skfb.ly/6ZYZp',
				copyrightHolder: 'FlavorAitch',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
		],
	},
});
