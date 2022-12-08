import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Metal Collar',
	size: 'small',
	graphics: 'graphics.json',
	colorization: [
		{
			name: 'Collar',
			default: '#FFFFFF',
		},
		{
			name: 'Ring',
			default: '#FFFFFF',
		},
		{
			name: 'Chains',
			default: '#FFFFFF',
		},
		{
			name: 'Socket',
			default: '#FFFFFF',
		},
	],
	attributes: [
		'Restraint',
		'Collar',
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
		lockCollar: {
			type: 'lockSlot',
			name: 'Lock for collar configuration',
			lockRequirements: ['Lock'],
			occupiedEffects: {
				blockModules: ['collarConfig'],
			},
		},
		collarConfig: {
			type: 'typed',
			name: 'Collar Configuration',
			variants: [
				{
					id: 'collar',
					name: 'Collar Only',
					default: true,
				},
				{
					id: 'ring',
					name: 'Collar + Ring',
					attributes: [
						'Collar_front_ring',
					],
				},
				{
					id: 'left',
					name: 'Chain Leash Left',
					attributes: [
						'Collar_front_ring',
					],
				},
				{
					id: 'right',
					name: 'Chain Leash Right',
					attributes: [
						'Collar_front_ring',
					],
				},
				{
					id: 'fixed',
					name: 'Long Floor Chain',
					poseLimits: {
						forcePose: {
							sitting: 0,
						},
					},
					effects: {
						blockRoomMovement: true,
					},
					attributes: [
						'Collar_front_ring',
					],
				},
				{
					id: 'fixedShort',
					name: 'Short Floor Chain',
					poseLimits: {
						forcePose: {
							sitting: 0,
							kneeling: 180,
						},
					},
					effects: {
						blockRoomMovement: true,
					},
					attributes: [
						'Collar_front_ring',
					],
				},
			],
		},
		collarType: {
			type: 'typed',
			name: 'Collar Type',
			interactionType: ItemInteractionType.ADD_REMOVE,
			variants: [
				{
					id: 'normal',
					name: 'Normal Collar',
					default: true,
				},
				{
					id: 'thick',
					name: 'Thick Collar',
				},
			],
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER fitted and closed a Metal Collar around TARGET_CHARACTER_DYNAMIC_POSSESSIVE neck.',
		actionRemove: 'SOURCE_CHARACTER opened and then removed the Metal Collar from TARGET_CHARACTER_DYNAMIC_POSSESSIVE neck.',
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
