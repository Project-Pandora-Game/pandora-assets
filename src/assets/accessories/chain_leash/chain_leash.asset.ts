DefineAsset({
	name: 'Chain Leash',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		chains: {
			name: 'Chains',
			default: '#FFFFFF',
		},
		socket: {
			name: 'Socket',
			default: '#FFFFFF',
		},
	},
	attributes: [
		'Restraint',
		'Accessory',
	],
	requirements: [
		'Collar_front_ring',
	],
	modules: {
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			occupiedProperties: {
				blockAddRemove: true,
			},
		},
		lockCollar: {
			type: 'lockSlot',
			name: 'Lock for chain configuration',
			occupiedProperties: {
				blockModules: ['collarConfig'],
			},
		},
		collarConfig: {
			type: 'typed',
			name: 'Chain Configuration',
			variants: [
				{
					id: 'hanging',
					name: 'Chain Leash Hanging',
					default: true,
				},
				{
					id: 'left',
					name: 'Chain Leash Held Left',
				},
				{
					id: 'right',
					name: 'Chain Leash Held Right',
				},
				{
					id: 'fixed',
					name: 'Long Floor Chain',
					properties: {
						poseLimits: {
							legs: ['standing', 'kneeling'],
						},
						effects: {
							blockRoomMovement: true,
							blockRoomLeave: true,
						},
					},
				},
				{
					id: 'fixedShort',
					name: 'Short Floor Chain',
					properties: {
						poseLimits: {
							legs: 'kneeling',
						},
						effects: {
							blockRoomMovement: true,
							blockRoomLeave: true,
						},
					},
				},
			],
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER hooked and closed a Chain Leash onto TARGET_CHARACTER_DYNAMIC_POSSESSIVE neck ring.',
		actionRemove: 'SOURCE_CHARACTER opened and then removed the Chain Leash from TARGET_CHARACTER_DYNAMIC_POSSESSIVE neck ring.',
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
