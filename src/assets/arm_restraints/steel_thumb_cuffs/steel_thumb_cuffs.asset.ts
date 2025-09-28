DefineAsset({
	name: 'Steel Thumb Cuffs',
	size: 'small',
	graphics: 'graphics.json',
	requireFreeHandsToUseDefault: true,
	colorization: {
		cuffs: {
			name: 'Cuffs',
			default: '#7B8E94',
		},
	},
	// size:220, y:630, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Restraint_arms',
			'Hand_item',
		],
		requires: [
			'!Hand_restricting_cover',
		],
	},
	effects: {
		blockHands: true,
	},
	posePresets: [
		{
			name: 'Down 1',
			arms: {
				rotation: 'forward',
				fingers: 'spread',
			},
			bones: {
				arm_r: 74,
				arm_l: 74,
				elbow_r: 43,
				elbow_l: 43,
			},
		},
		{
			name: 'Down 2',
			arms: {
				rotation: 'forward',
				fingers: 'spread',
			},
			bones: {
				arm_r: 100,
				arm_l: 100,
				elbow_r: -4,
				elbow_l: -4,
			},
		},
		{
			name: 'Up 1',
			arms: {
				rotation: 'backward',
				fingers: 'spread',
			},
			bones: {
				arm_r: -74,
				arm_l: -74,
				elbow_r: -45,
				elbow_l: -46,
			},
			optional: { arms: { position: 'front' } },
		},
		{
			name: 'Up 2',
			arms: {
				rotation: 'backward',
				fingers: 'spread',
			},
			bones: {
				arm_r: -81,
				arm_l: -81,
				elbow_r: -30,
				elbow_l: -30,
			},
			optional: { arms: { position: 'front' } },
		},
	],
	modules: {
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			lockedProperties: {
				blockAddRemove: true,
			},
		},
		position: {
			type: 'typed',
			name: 'Arm position',
			variants: [
				{
					id: 'front',
					name: 'Cuffed in front',
					properties: {
						poseLimits: {
							options: [
								{
									arms: {
										rotation: 'forward',
										fingers: 'spread',
									},
									bones: {
										arm_r: 74,
										arm_l: 74,
										elbow_r: 43,
										elbow_l: 43,
									},
									options: [
										{ arms: { position: 'front_above_hair' } },
										{ arms: { position: 'front' } },
									],
								},
								{
									arms: {
										rotation: 'forward',
										fingers: 'spread',
									},
									bones: {
										arm_r: 100,
										arm_l: 100,
										elbow_r: -4,
										elbow_l: -4,
									},
									options: [
										{ arms: { position: 'front_above_hair' } },
										{ arms: { position: 'front' } },
									],
								},
								{
									arms: {
										rotation: 'backward',
										fingers: 'spread',
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
								{
									arms: {
										rotation: 'backward',
										fingers: 'spread',
									},
									bones: {
										arm_r: -81,
										arm_l: -81,
										elbow_r: -30,
										elbow_l: -30,
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
					},
				},
				{
					id: 'back',
					name: 'Cuffed behind',
					properties: {
						poseLimits: {
							options: [
								{
									arms: {
										rotation: 'forward',
										fingers: 'spread',
									},
									bones: {
										arm_r: 74,
										arm_l: 74,
										elbow_r: 43,
										elbow_l: 43,
									},
									options: [
										{ arms: { position: 'back_below_hair' } },
										{ arms: { position: 'back' } },
									],
								},
								{
									arms: {
										rotation: 'forward',
										fingers: 'spread',
									},
									bones: {
										arm_r: 100,
										arm_l: 100,
										elbow_r: -4,
										elbow_l: -4,
									},
									options: [
										{ arms: { position: 'back_below_hair' } },
										{ arms: { position: 'back' } },
									],
								},
							],
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
		],
	},
});
