DefineAsset({
	name: 'Spreader Bar',
	size: 'medium',
	graphics: 'graphics.json',
	colorization: [
		{
			name: 'Bar',
			default: '#FFFFFF',
		},
		{
			name: 'Cuffs',
			default: '#FFFFFF',
		},
	],
	attributes: [
		'Restraint',
		'Restraint_legs',
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
		lockChain: {
			type: 'lockSlot',
			name: 'Lock for bar width',
			lockRequirements: ['Lock'],
			occupiedEffects: {
				blockModules: ['barWidth'],
			},
		},
		barWidth: {
			type: 'typed',
			name: 'Bar Width',
			variants: [
				{
					id: 'normal',
					name: 'Normal',
					default: true,
					poseLimits: {
						forcePose: {
							leg_r: -18,
							leg_l: -18,
							sitting: 0,
							kneeling: 0,
						},
					},
				},
				{
					id: 'narrow',
					name: 'Narrow',
					poseLimits: {
						forcePose: {
							leg_r: -10,
							leg_l: -10,
							sitting: 0,
							kneeling: 0,
						},
					},
				},
				{
					id: 'wide',
					name: 'Wide',
					poseLimits: {
						forcePose: {
							leg_r: -30,
							leg_l: -30,
							sitting: 0,
							kneeling: 0,
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
				license: 'Pandora-Use-Only',
			},
		],
	},
});
