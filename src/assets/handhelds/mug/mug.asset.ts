DefineAsset({
	name: 'Mug',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		china: {
			name: 'China',
			default: '#F2EEEE',
		},
	},
	// size:200, y:250, X:0
	preview: 'preview.png',
	attributes: {
		provides: [
			'Handheld',
		],
		requires: [
			'!Hand_restricting_cover',
		],
	},
	posePresets: [
		{
			name: 'Holding right hand',
			bones: {
				arm_r: 44,
				elbow_r: 136,
			},
			rightArm: {
				fingers: 'fist',
				rotation: 'down',
				position: 'front_above_hair',
			},
		},
		{
			name: 'Sipping right hand',
			bones: {
				arm_r: -21,
				elbow_r: -156,
			},
			rightArm: {
				fingers: 'fist',
				rotation: 'down',
				position: 'front_above_hair',
			},
		},
		{
			name: 'Holding left hand',
			bones: {
				arm_l: 44,
				elbow_l: 136,
			},
			leftArm: {
				fingers: 'fist',
				rotation: 'down',
				position: 'front_above_hair',
			},
		},
		{
			name: 'Sipping left hand',
			bones: {
				arm_l: -21,
				elbow_l: -156,
			},
			leftArm: {
				fingers: 'fist',
				rotation: 'down',
				position: 'front_above_hair',
			},
		},
	],
	modules: {
		handUsage_r: {
			type: 'typed',
			name: 'Right hand',
			variantMigration: {
				'hold': 'mug',
				'sip': 'mug',
			},
			variants: [
				{
					id: 'no',
					name: 'No mug',
					default: true,
				},
				{
					id: 'mug',
					name: 'Mug',
					properties: {
						poseLimits: {
							options: [
								{
									bones: {
										arm_r: 44,
										elbow_r: 136,
									},
									rightArm: {
										fingers: 'fist',
										rotation: 'down',
										position: 'front_above_hair',
									},
								},
								{
									rightArm: {
										fingers: 'fist',
										rotation: 'down',
										position: 'front_above_hair',
									},
									bones: {
										arm_r: -21,
										elbow_r: -156,
									},
								},
							],
						},
					},
				},
			],
		},
		handUsage_l: {
			type: 'typed',
			name: 'Left hand',
			variantMigration: {
				'hold': 'mug',
				'sip': 'mug',
			},
			variants: [
				{
					id: 'no',
					name: 'No mug',
					default: true,
				},
				{
					id: 'mug',
					name: 'Mug',
					properties: {
						poseLimits: {
							options: [
								{
									leftArm: {
										fingers: 'fist',
										rotation: 'down',
										position: 'front_above_hair',
									},
									bones: {
										arm_l: 44,
										elbow_l: 136,
									},
								},
								{
									leftArm: {
										fingers: 'fist',
										rotation: 'down',
										position: 'front_above_hair',
									},
									bones: {
										arm_l: -21,
										elbow_l: -156,
									},
								},
							],
						},
					},
				},
			],
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER put ITEM_ASSET_NAME into TARGET_CHARACTER_DYNAMIC_POSSESSIVE hand.',
		actionRemove: 'SOURCE_CHARACTER removed ITEM_ASSET_NAME from TARGET_CHARACTER_DYNAMIC_POSSESSIVE hand.',
	},
	ownership: {
		responsibleContributor: 'Sandrine <118102950+SandrinePDR@users.noreply.github.com>',
		credits: ['Taja'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'mug',
				source: 'Self-Made',
				copyrightHolder: 'Taja',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
