DefineAsset({
	name: 'Steel Wrist Cuffs',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		cuff: {
			name: 'Cuff',
			default: '#FFFFFF',
		},
		largeRings: {
			name: 'D-Rings',
			default: '#FFFFFF',
		},
		chain: {
			name: 'Chain',
			default: '#FFFFFF',
		},
	},
	// size:320, y:549, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Restraint_arms',
			'Wrist_cuffs',
			'Wrist_cuffs_chainable',
		],
	},
	modules: {
		lock: {
			type: 'lockSlot',
			name: 'Lock for cuffs',
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
					id: 'chained_front',
					name: 'Chained in front',
					properties: {
						poseLimits: {
							options: [
								{
									arms: {
										position: 'front',
										rotation: 'down',
									},
									bones: {
										arm_r: 74,
										arm_l: 74,
										elbow_r: 43,
										elbow_l: 43,
									},
								},
								{
									arms: {
										position: 'front',
										rotation: 'up',
									},
									bones: {
										arm_r: -74,
										arm_l: -74,
										elbow_r: -46,
										elbow_l: -47,
									},
								},
								{
									arms: {
										position: 'back',
										rotation: 'up',
									},
									bones: {
										arm_r: -74,
										arm_l: -74,
										elbow_r: -46,
										elbow_l: -47,
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
					id: 'chained_back',
					name: 'Chained behind',
					properties: {
						poseLimits: {
							options: [
								{
									arms: {
										position: 'back',
										rotation: 'down',
									},
									bones: {
										arm_r: 74,
										arm_l: 74,
										elbow_r: 43,
										elbow_l: 43,
									},
								},
								{
									arms: {
										position: 'back',
									},
									bones: {
										arm_r: 104,
										arm_l: 104,
										elbow_r: -4,
										elbow_l: -4,
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
					id: 'reverse_prayer',
					name: 'Reverse prayer',
					properties: {
						effects: {
							blockHands: true,
						},
						poseLimits: {
							arms: {
								position: 'back',
							},
							bones: {
								arm_r: 100,
								arm_l: 100,
								elbow_r: 130,
								elbow_l: 130,
							},
						},
						stateFlags: {
							provides: ['chain'],
						},
					},
				},
			],
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER fastened the steel cuffs around TARGET_CHARACTER_DYNAMIC_POSSESSIVE wrists.',
		actionRemove: 'SOURCE_CHARACTER opened and slipped off the steel cuffs from TARGET_CHARACTER_DYNAMIC_POSSESSIVE wrists.',
	},
	ownership: {
		responsibleContributor: 'Sandrine <118102950+SandrinePDR@users.noreply.github.com>',
		credits: ['SandrinePDR'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'SandrinePDR',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
