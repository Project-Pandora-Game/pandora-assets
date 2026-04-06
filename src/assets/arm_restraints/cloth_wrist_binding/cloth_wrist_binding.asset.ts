DefineAsset({
	name: 'Cloth Wrist Binding',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		cloth: {
			name: 'Cloth',
			default: '#FFFFFF',
		},
	},
	roomDeployment: {
		autoDeployRelativePosition: [-210, -30, 0],
	},
	// size:260, y:575, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Restraint_arms',
		],
	},
	posePresets: [
		{
			name: 'Down 1',
			bones: {
				arm_r: 96,
				arm_l: 96,
				elbow_r: 12,
				elbow_l: 12,
			},
		},
		{
			name: 'Down 2',
			bones: {
				arm_r: 104,
				arm_l: 104,
				elbow_r: -4,
				elbow_l: -4,
			},
		},
		{
			name: 'Overhead',
			bones: {
				arm_r: -86,
				arm_l: -86,
				elbow_r: -34,
				elbow_l: -35,
			},
			optional: { arms: { position: 'front' } },
		},
	],
	modules: {
		cuffState: {
			type: 'typed',
			name: 'Binding position',
			variants: [
				{
					id: 'front',
					name: 'Tied in front',
					default: true,
					properties: {
						poseLimits: {
							armsOrder: { upper: 'right' },
							options: [
								{
									bones: {
										arm_r: 96,
										arm_l: 96,
										elbow_r: 12,
										elbow_l: 12,
									},
									options: [
										{ arms: { position: 'front_above_hair' } },
										{ arms: { position: 'front' } },
									],
								},
								{
									bones: {
										arm_r: -86,
										arm_l: -86,
										elbow_r: -34,
										elbow_l: -35,
									},
									options: [
										{ arms: { position: 'front_above_hair' } },
										{ arms: { position: 'front' } },
									],
								},
								{
									bones: {
										arm_r: 104,
										arm_l: 104,
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
					name: 'Tied behind',
					properties: {
						poseLimits: {
							armsOrder: { upper: 'right' },
							options: [
								{
									bones: {
										arm_r: 96,
										arm_l: 96,
										elbow_r: 12,
										elbow_l: 12,
									},
									options: [
										{ arms: { position: 'back_below_hair' } },
										{ arms: { position: 'back' } },
									],
								},
								{
									bones: {
										arm_r: 104,
										arm_l: 104,
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
