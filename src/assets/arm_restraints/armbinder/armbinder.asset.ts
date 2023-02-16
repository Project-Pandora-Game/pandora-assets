import { ArmsPose } from 'pandora-common';

DefineAsset({
	name: 'Armbinder',
	size: 'medium',
	graphics: 'graphics.json',
	colorization: {
		glove: {
			name: 'Glove',
			default: '#444444',
		},
		straps: {
			name: 'Straps',
			default: '#444444',
		},
		smallRings: {
			name: 'Small Rings',
			default: '#FFFFFF',
		},
		bigRings: {
			name: 'Big Rings',
			default: '#FFFFFF',
		},
		strings: {
			name: 'Strings',
			default: '#FF0000',
		},
	},
	attributes: [
		'Restraint',
		'Restraint_arms',
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
		gloveRing: {
			type: 'typed',
			name: 'Glove Ring',
			variants: [
				{
					id: 'noRing',
					name: 'No Ring',
					default: true,
				},
				{
					id: 'ring',
					name: 'Ring At Glove End',

				},

			],
		},
	},
	poseLimits: {
		arms: { position: ArmsPose.BACK },
		bones: {
			arm_r: 104,
			arm_l: 104,
			elbow_r: -4,
			elbow_l: -4,
		},
	},
	effects: {
		blockHands: true,
	},
	blockSelfAddRemove: true,
	chat: {
		actionAdd: 'SOURCE_CHARACTER slipped an armbinder over TARGET_CHARACTER_DYNAMIC_POSSESSIVE arms, lacing it tightly.',
		actionRemove: 'SOURCE_CHARACTER loosened and then slipped off the armbinder from TARGET_CHARACTER_DYNAMIC_POSSESSIVE arms.',
	},
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia', 'Jomshir'],
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
