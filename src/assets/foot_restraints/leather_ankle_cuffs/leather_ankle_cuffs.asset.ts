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
			name: 'Eyelets',
			default: '#FFFFFF',
		},
		largeRings: {
			name: 'D-Rings',
			default: '#FFFFFF',
		},
		chains: {
			name: 'Chains',
			default: '#FFFFFF',
		},
		bar: {
			name: 'Spreader-bar',
			default: '#FFFFFF',
		},
	},
	// size:350, y:1013, centered
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
			name: 'Lock cuffs',
			occupiedProperties: {
				blockAddRemove: true,
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
		lockBar: {
			type: 'lockSlot',
			name: 'Lock for bar width',
			occupiedProperties: {
				blockModules: ['barWidth'],
				stateFlags: {
					requires: {
						bar: 'Locking requires a bar to lock.',
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
									legs: 'standing',
									bones: {
										leg_r: 2,
										leg_l: 2,
									},
								},
								{
									legs: 'sitting',
									bones: {
										leg_r: 2,
										leg_l: 2,
									},
								},
								{
									legs: 'kneeling',
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
					},
				},
			],
		},
		barWidth: {
			type: 'typed',
			name: 'Bar width',
			variants: [
				{
					id: 'unbarred',
					name: 'No Bar',
				},
				{
					id: 'narrow',
					name: 'Narrow',
					properties: {
						poseLimits: {
							bones: {
								leg_r: -10,
								leg_l: -10,
							},
						},
						stateFlags: {
							provides: ['bar'],
						},
					},
				},
				{
					id: 'normal',
					name: 'Normal',
					properties: {
						poseLimits: {
							bones: {
								leg_r: -18,
								leg_l: -18,
							},
						},
						stateFlags: {
							provides: ['bar'],
						},
					},
				},
				{
					id: 'wide',
					name: 'Wide (no kneeling)',
					properties: {
						poseLimits: {
							bones: {
								leg_r: -30,
								leg_l: -30,
							},
							legs: 'standing',
						},
						stateFlags: {
							provides: ['bar'],
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
				license: 'Pandora-Use-Only-v1-or-later',
			},
			{
				part: 'Spreader-Bar',
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
