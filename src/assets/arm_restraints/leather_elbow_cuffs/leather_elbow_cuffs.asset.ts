DefineAsset({
	name: 'Leather Elbow Cuffs',
	size: 'small',
	requireFreeHandsToUseDefault: true,
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
	// size:320, y:377, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Restraint_arms',
			'Elbow_cuffs',
		],
	},
	modules: {
		lock: {
			type: 'lockSlot',
			name: 'Lock for cuffs',
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
					id: 'chained_back',
					name: 'Chained behind',
					properties: {
						poseLimits: {
							options: [
								{
									bones: {
										arm_r: 100,
										arm_l: 100,
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
									},
									options: [
										{ arms: { position: 'back' } },
										{ arms: { position: 'back_below_hair' } },
									],
								},
								{
									bones: {
										arm_r: 110,
										arm_l: 110,
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
					id: 'chained_back_strict',
					name: 'Chained behind strict',
					properties: {
						poseLimits: {
							bones: {
								arm_r: 110,
								arm_l: 110,
							},
							options: [
								{ arms: { position: 'back' } },
								{ arms: { position: 'back_below_hair' } },
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
		actionAdd: 'SOURCE_CHARACTER fastened ITEM_ASSET_NAME above TARGET_CHARACTER_DYNAMIC_POSSESSIVE elbows.',
		actionRemove: 'SOURCE_CHARACTER loosened and slipped off ITEM_ASSET_NAME from TARGET_CHARACTER_DYNAMIC_POSSESSIVE arms.',
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
