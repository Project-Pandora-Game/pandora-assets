DefineAsset({
	name: 'Steel Ring Ankle Cuffs',
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
		chains: {
			name: 'Chains',
			default: '#FFFFFF',
		},
	},
	// size:350, y:1015, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Restraint_legs',
			'Ankle_cuffs',
			'Ankle_cuffs_chainable',
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
			name: 'Lock for cuff chain',
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
					id: 'chainNormal',
					name: 'Chained',
					properties: {
						poseLimits: {
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
					id: 'short',
					name: 'Short Chain',
					properties: {
						poseLimits: {
							bones: {
								leg_r: [[0, 3]],
								leg_l: [[0, 3]],
							},
						},
						stateFlags: {
							provides: ['chain'],
						},
					},
				},
				{
					id: 'clipped',
					name: 'Clipped together',
					properties: {
						poseLimits: {
							options: [
								{
									legs: {
										pose: 'standing',
									},
									bones: {
										leg_r: 2,
										leg_l: 2,
									},
								},
								{
									legs: {
										pose: 'sitting',
									},
									bones: {
										leg_r: 2,
										leg_l: 2,
									},
								},
								{
									legs: {
										pose: 'kneeling',
									},
									bones: {
										leg_r: 5,
										leg_l: 5,
									},
								},
							],
						},
						stateFlags: {
							provides: ['chain'],
						},
						effects: {
							blockRoomMovement: true,
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
