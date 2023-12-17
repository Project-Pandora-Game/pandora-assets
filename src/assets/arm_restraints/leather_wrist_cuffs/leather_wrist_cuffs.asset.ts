DefineAsset({
	name: 'Leather Wrist Cuffs',
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
					id: 'chained',
					name: 'Chained',
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
										position: 'front',
										rotation: 'up',
									},
									bones: {
										arm_r: -74,
										arm_l: -74,
										elbow_r: -43,
										elbow_l: -43,
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
										elbow_r: -43,
										elbow_l: -43,
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
			],
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER fastened the leather cuffs around TARGET_CHARACTER_DYNAMIC_POSSESSIVE wrists.',
		actionRemove: 'SOURCE_CHARACTER loosened and slipped off the leather cuffs from TARGET_CHARACTER_DYNAMIC_POSSESSIVE wrists.',
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
