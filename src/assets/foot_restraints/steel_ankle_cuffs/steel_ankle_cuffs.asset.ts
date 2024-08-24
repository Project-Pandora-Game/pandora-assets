DefineAsset({
	name: 'Steel Ankle Cuffs',
	size: 'small',
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
		lockBar: {
			type: 'lockSlot',
			name: 'Lock for bar width',
			occupiedProperties: {
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
							legs: ['standing', 'sitting'],
						},
					},
				},
			],
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER fastened the steel cuffs around TARGET_CHARACTER_DYNAMIC_POSSESSIVE ankles.',
		actionRemove: 'SOURCE_CHARACTER removed the steel cuffs from TARGET_CHARACTER_DYNAMIC_POSSESSIVE ankles.',
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
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
