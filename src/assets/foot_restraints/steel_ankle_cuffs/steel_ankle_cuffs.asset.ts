DefineAsset({
	name: 'Steel Ankle Cuffs',
	size: 'small',
	requireFreeHandsToUseDefault: false,
	graphics: 'graphics.json',
	colorization: {
		cuffs: {
			name: 'Cuffs',
			default: '#FFFFFF',
		},
		bar: {
			name: 'Bar',
			default: '#FFFFFF',
		},
		chains: {
			name: 'Chains',
			default: '#FFFFFF',
		},
	},
	// size:560, y:808, centered
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
		lockBar: {
			type: 'lockSlot',
			name: 'Lock for bar width',
			lockedProperties: {
				blockModules: ['barWidth'],
				stateFlags: {
					requires: {
						chain: 'Locking requires a bar to lock.',
					},
				},
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
								leg_r: [[0, 2]],
								leg_l: [[0, 2]],
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
										leg_r: 6,
										leg_l: 6,
									},
								},
							],
						},
						stateFlags: {
							provides: ['chain'],
						},
						effects: {
							blockSpaceLeave: true,
							blockRoomMovement: true,
						},
					},
				},
			],
		},
		barWidth: {
			type: 'typed',
			name: 'Bar Width',
			variants: [
				{
					id: 'unbarred',
					name: 'No bar',
				},
				{
					id: 'barNarrow',
					name: 'Narrow',
					properties: {
						poseLimits: {
							bones: {
								leg_r: -10,
								leg_l: -10,
							},
						},
					},
				},
				{
					id: 'barNormal',
					name: 'Normal',
					properties: {
						poseLimits: {
							bones: {
								leg_r: -18,
								leg_l: -18,
							},
						},
					},
				},
				{
					id: 'barWide',
					name: 'Wide (no kneeling)',
					properties: {
						poseLimits: {
							bones: {
								leg_r: -30,
								leg_l: -30,
							},
							legs: {
								pose: 'standing',
							},
						},
						effects: {
							blockSpaceLeave: true,
							blockRoomMovement: true,
						},
					},
				},
			],
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER fastened ITEM_ASSET_NAME around TARGET_CHARACTER_DYNAMIC_POSSESSIVE ankles.',
		actionRemove: 'SOURCE_CHARACTER removed ITEM_ASSET_NAME from TARGET_CHARACTER_DYNAMIC_POSSESSIVE ankles.',
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
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
