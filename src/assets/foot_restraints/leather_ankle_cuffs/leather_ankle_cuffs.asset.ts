DefineAsset({
	name: 'Leather Ankle Cuffs',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		cuff: {
			name: 'Cuff',
			default: '#222222',
		},
		belt: {
			name: 'Belt',
			default: '#000000',
		},
		smallRings: {
			name: 'Small Rings',
			default: '#FFFFFF',
		},
		chains: {
			name: 'Chains',
			default: '#FFFFFF',
		},
		sockets: {
			name: 'Sockets',
			default: '#FFFFFF',
		},
	},
	attributes: {
		provides: [
			'Restraint',
			'Restraint_legs',
			'Ankle_cuffs',
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
		lockChain: {
			type: 'lockSlot',
			name: 'Lock for cuff chains',
			occupiedProperties: {
				blockModules: ['cuffState'],
				stateFlags: {
					requires: {
						chain: 'Locking requires a chain to lock.',
					},
				},
			},
		},
		cuffState: {
			type: 'typed',
			name: 'Cuff states',
			variants: [
				{
					id: 'unchained',
					name: 'No Chain',
					default: true,
				},
				{
					id: 'normal',
					name: 'Chained',
					properties: {
						poseLimits: {
							legs: 'standing',
							options: [
								{
									bones: {
										leg_r: 0,
										leg_l: 0,
									},
								},
								{
									bones: {
										leg_r: -3,
										leg_l: -3,
									},
								},
								{
									bones: {
										leg_r: [[2, 6]],
										leg_l: [[2, 6]],
									},
								},
							],
						},
						stateFlags: {
							provides: ['chain'],
						},
					},
				},
				{
					id: 'floor',
					name: 'Spread Floor Chains',
					properties: {
						poseLimits: {
							bones: {
								leg_r: -18,
								leg_l: -18,
							},
							legs: 'standing',
						},
						stateFlags: {
							provides: ['chain'],
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
		actionAdd: 'SOURCE_CHARACTER fastened the leather cuffs around TARGET_CHARACTER_DYNAMIC_POSSESSIVE ankles.',
		actionRemove: 'SOURCE_CHARACTER loosened and slipped off the leather cuffs from TARGET_CHARACTER_DYNAMIC_POSSESSIVE ankles.',
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
