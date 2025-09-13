DefineAsset({
	name: 'Steel ring wrist cuffs',
	size: 'small',
	graphics: 'graphics.json',
	requireFreeHandsToUseDefault: true,
	colorization: {
		collar: {
			name: 'Cuff',
			default: '#7B8E94',
		},
		nub: {
			name: 'Ring nub',
			default: '#4B565A',
		},
		ring: {
			name: 'Ring',
			default: '#7B8E94',
		},
		chain: {
			name: 'Chain',
			default: '#FFFFFF',
		},
	},
	// size:320, y:550, centered
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
			name: 'Lock',
			lockedProperties: {
				blockAddRemove: true,
			},
		},
		lockChain: {
			type: 'lockSlot',
			name: 'Lock for cuff chains',
			lockedProperties: {
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
										rotation: 'up',
									},
									bones: {
										arm_r: -74,
										arm_l: -74,
										elbow_r: -45,
										elbow_l: -46,
									},
									options: [
										{ arms: { position: 'front_above_hair' } },
										{ arms: { position: 'front' } },
										{ arms: { position: 'back' } },
										{ arms: { position: 'back_below_hair' } },
									],
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
										rotation: 'down',
									},
									bones: {
										arm_r: 74,
										arm_l: 74,
										elbow_r: 43,
										elbow_l: 43,
									},
									options: [
										{ arms: { position: 'back' } },
										{ arms: { position: 'back_below_hair' } },
									],
								},
								{
									bones: {
										arm_r: 104,
										arm_l: 104,
										elbow_r: -4,
										elbow_l: -4,
									},
									options: [
										{ arms: { position: 'back' } },
										{ arms: { position: 'back_below_hair' } },
									],
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
	ownership: {
		responsibleContributor: 'Jomshir98 <jomshir98@protonmail.com>',
		credits: ['Jomshir'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Jomshir98',
				license: 'Pandora-Use-Only-v1-or-later',
			},
			{
				part: 'chains',
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
