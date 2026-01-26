DefineAsset({
	name: 'Handcuffs',
	size: 'small',
	requireFreeHandsToUseDefault: true,
	graphics: 'graphics.json',
	colorization: {
		cuffs: {
			name: 'Cuff',
			default: '#FFFFFF',
		},
	},
	roomDeployment: {
		autoDeployRelativePosition: [0, -100, 0],
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
	effects: {
		blockHands: true,
	},
	posePresets: [
		{
			name: 'Down 1',
			bones: {
				arm_r: 88,
				arm_l: 88,
				elbow_r: 20,
				elbow_l: 20,
			},
		},
		{
			name: 'Down 2',
			bones: {
				arm_r: 100,
				arm_l: 100,
				elbow_r: -4,
				elbow_l: -4,
			},
		},
		{
			name: 'Overhead 1',
			bones: {
				arm_r: 85,
				arm_l: 85,
				elbow_r: 164,
				elbow_l: 164,
			},
			optional: { arms: { position: 'front' } },
		},
		{
			name: 'Overhead 2',
			bones: {
				arm_r: -84,
				arm_l: -84,
				elbow_r: -30,
				elbow_l: -30,
			},
			optional: { arms: { position: 'front' } },
		},
		{
			name: 'Wiggling left',
			arms: {
				rotation: 'forward',
				fingers: 'spread',
			},
			bones: {
				arm_l: 96,
				arm_r: 37,
				elbow_l: 56,
				elbow_r: 124,
			},
		},
		{
			name: 'Wiggling right',
			arms: {
				rotation: 'forward',
				fingers: 'spread',
			},
			bones: {
				arm_l: 37,
				arm_r: 96,
				elbow_l: 124,
				elbow_r: 56,
			},
		},
	],
	modules: {
		cuffState: {
			type: 'typed',
			name: 'Cuff states',
			variants: [
				{
					id: 'front',
					name: 'Cuffed in front',
					default: true,
					properties: {
						poseLimits: {
							armsOrder: { upper: 'right' },
							options: [
								{
									bones: {
										arm_r: 88,
										arm_l: 88,
										elbow_r: 20,
										elbow_l: 20,
									},
									options: [
										{ arms: { position: 'front_above_hair' } },
										{ arms: { position: 'front' } },
									],
								},
								{
									bones: {
										arm_r: 85,
										arm_l: 85,
										elbow_r: 164,
										elbow_l: 164,
									},
									options: [
										{ arms: { position: 'front_above_hair' } },
										{ arms: { position: 'front' } },
									],
								},
								{
									bones: {
										arm_r: -84,
										arm_l: -84,
										elbow_r: -30,
										elbow_l: -30,
									},
									options: [
										{ arms: { position: 'front_above_hair' } },
										{ arms: { position: 'front' } },
									],
								},
								{ // Supporting thumb cuffs
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
							],
						},
					},
				},
				{
					id: 'back',
					name: 'Cuffed behind',
					properties: {
						poseLimits: {
							armsOrder: { upper: 'right' },
							options: [
								{ // Down
									bones: {
										arm_r: 88,
										arm_l: 88,
										elbow_r: 20,
										elbow_l: 20,
									},
									options: [
										{ arms: { position: 'back_below_hair' } },
										{ arms: { position: 'back' } },
									],
								},
								{ // Down - supporting thumb cuffs
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
								{ // left up
									bones: {
										arm_l: 96,
										arm_r: 37,
										elbow_l: 56,
										elbow_r: 124,
									},
									options: [
										{ arms: { position: 'back_below_hair' } },
										{ arms: { position: 'back' } },
									],
								},
								{ // right up
									bones: {
										arm_l: 37,
										arm_r: 96,
										elbow_l: 124,
										elbow_r: 56,
									},
									options: [
										{ arms: { position: 'back_below_hair' } },
										{ arms: { position: 'back' } },
									],
								},
								{ // reverse prayer
									bones: {
										arm_r: 85,
										arm_l: 85,
										elbow_r: 164,
										elbow_l: 164,
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
	chat: {
		actionAdd: 'SOURCE_CHARACTER fastened ITEM_ASSET_NAME around TARGET_CHARACTER_DYNAMIC_POSSESSIVE wrists.',
		actionRemove: 'SOURCE_CHARACTER opened and slipped off ITEM_ASSET_NAME from TARGET_CHARACTER_DYNAMIC_POSSESSIVE wrists.',
	},
	ownership: {
		responsibleContributor: 'Sandrine <118102950+SandrinePDR@users.noreply.github.com>',
		credits: ['taja'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'taja',
				editedBy: 'SandrinePDR',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
