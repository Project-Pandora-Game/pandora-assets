import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Plug Gag',
	size: 'medium',
	graphics: 'graphics.json',
	colorization: [
		{
			name: 'Gag',
			default: '#3C3E42',
		},
		{
			name: 'Straps',
			default: '#444444',
		},
		{
			name: 'Plug',
			default: '#FFFFFF',
		},
	],
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
		lockPlug: {
			type: 'lockSlot',
			name: 'Lock for the plug',
			lockRequirements: ['Lock'],
			occupiedEffects: {
				blockModules: ['plugState'],
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
		plugState: {
			type: 'typed',
			name: 'Plug Addon',
			variants: [
				{
					id: 'noPlug',
					name: 'No Plug',
					default: true,
					effects: {
						lipsTouch: 9,
						jawMove: 0,
						tongueRoof: 0,
						mouthBreath: 0,
						throatBreath: 0,
						coherency: 0,
						stimulus: 0,
					},
				},
				{
					id: 'plug',
					name: 'Plugged',
					effects: {
						lipsTouch: 9,
						jawMove: 4,
						tongueRoof: 1,
						mouthBreath: 4,
						throatBreath: 3,
						coherency: 5,
						stimulus: 3,
					},

				},
				{
					id: 'dildoplug',
					name: 'Plugged with inside Dildo',
					effects: {
						lipsTouch: 9,
						jawMove: 9,
						tongueRoof: 8,
						mouthBreath: 6,
						throatBreath: 4,
						coherency: 7,
						stimulus: 6,
					},
				},
			],
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER strapped a Plug Gag tightly between TARGET_CHARACTER_DYNAMIC_POSSESSIVE lips.',
		actionRemove: 'SOURCE_CHARACTER loosened and then removed the Plug Gag from TARGET_CHARACTER_DYNAMIC_POSSESSIVE mouth.',
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
