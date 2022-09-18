import { ArmsPose } from 'pandora-common';

DefineAsset({
	name: 'Armbinder',
	graphics: 'graphics.json',
	colorization: [
		{
			name: 'Glove',
			default: '#444444',
		},
		{
			name: 'Straps',
			default: '#444444',
		},
		{
			name: 'Small Rings',
			default: '#FFFFFF',
		},
		{
			name: 'Big Rings',
			default: '#FFFFFF',
		},
		{
			name: 'Strings',
			default: '#FF0000',
		},
	],
	modules: {
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
		forceArms: ArmsPose.BACK,
		forcePose: {
			arm_r: 104,
			arm_l: 104,
			elbow_r: -4,
			elbow_l: -4,
		},
	},
	effects: {
		blockHands: true,
	},
	allowSelfEquip: false,
	actionMessages: {
		itemAdd: 'SOURCE_CHARACTER slipped an armbinder over TARGET_CHARACTER_DYNAMIC arms, lacing it tightly.',
		itemRemove: 'SOURCE_CHARACTER loosened and then slipped off the armbinder from TARGET_CHARACTER_DYNAMIC arms.',
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
