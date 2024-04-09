DefineAsset({
	name: 'Spreader Bar',
	size: 'medium',
	graphics: 'graphics.json',
	colorization: {
		bar: {
			name: 'Bar',
			default: '#FFFFFF',
		},
		cuffs: {
			name: 'Cuffs',
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
		lockChain: {
			type: 'lockSlot',
			name: 'Lock for bar width',
			occupiedProperties: {
				blockModules: ['barWidth'],
			},
		},
		barWidth: {
			type: 'typed',
			name: 'Bar Width',
			variants: [
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
					},
				},
				{
					id: 'normal',
					name: 'Normal',
					default: true,
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
					id: 'wide',
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
		actionAdd: 'SOURCE_CHARACTER fastened the spreader bar around TARGET_CHARACTER_DYNAMIC_POSSESSIVE ankles.',
		actionRemove: 'SOURCE_CHARACTER removed the spreader bar from TARGET_CHARACTER_DYNAMIC_POSSESSIVE ankles.',
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
