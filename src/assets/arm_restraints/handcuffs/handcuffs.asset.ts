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
							arms: { position: 'front' },
							armsOrder: { upper: 'right' },
							options: [
								{
									bones: {
										arm_r: 88,
										arm_l: 88,
										elbow_r: 20,
										elbow_l: 20,
									},
								},
								{
									bones: {
										arm_r: 85,
										arm_l: 85,
										elbow_r: 164,
										elbow_l: 164,
									},
								},
								{
									bones: {
										arm_r: -84,
										arm_l: -84,
										elbow_r: -30,
										elbow_l: -30,
									},
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
							arms: { position: 'back' },
							armsOrder: { upper: 'right' },
							options: [
								{ // Down
									bones: {
										arm_r: 88,
										arm_l: 88,
										elbow_r: 20,
										elbow_l: 20,
									},
								},
								{ // left up
									bones: {
										arm_l: 96,
										arm_r: 37,
										elbow_l: 56,
										elbow_r: 124,
									},
								},
								{ // right up
									bones: {
										arm_l: 37,
										arm_r: 96,
										elbow_l: 124,
										elbow_r: 56,
									},
								},
								{ // reverse prayer
									bones: {
										arm_r: 85,
										arm_l: 85,
										elbow_r: 164,
										elbow_l: 164,
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
