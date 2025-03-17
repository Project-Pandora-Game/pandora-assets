DefineAsset({
	name: 'Pet Crawler Armbinders',
	size: 'medium',
	graphics: 'graphics.json',
	requireFreeHandsToUseDefault: false,
	colorization: {
		binders: {
			name: 'Binders',
			default: '#1D1C20ff',
			minAlpha: 0,
		},
		shine: {
			name: 'Shine',
			default: '#ccccccdd',
			minAlpha: 0,
		},
		belts: {
			name: 'Belts',
			default: '#030303',
		},
		rings: {
			name: 'Metallic parts',
			default: '#cccccc',
		},
	},
	// size:280, y:370, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Restraint_arms',
		],
	},
	modules: {
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			lockedProperties: {
				blockAddRemove: true,
			},
		},
	},
	posePresets: [
		{
			name: 'Arms inwards',
			arms: {
				rotation: 'down',
			},
			bones: {
				elbow_l: 168,
				elbow_r: 168,
			},
		},
		{
			name: 'Arms outwards',
			arms: {
				rotation: 'up',
			},
			bones: {
				elbow_l: -160,
				elbow_r: -160,
			},
		},
	],
	poseLimits: [
		// Left arm
		{
			options: [
				{
					leftArm: {
						rotation: ['up', 'backward'],
					},
					bones: {
						elbow_l: -160,
					},
				},
				{
					leftArm: {
						rotation: ['down', 'forward'],
					},
					bones: {
						arm_l: [[0, 130]],
						elbow_l: 168,
					},
				},
			],
		},
		// Right arm
		{
			options: [
				{
					rightArm: {
						rotation: ['up', 'backward'],
					},
					bones: {
						elbow_r: -160,
					},
				},
				{
					rightArm: {
						rotation: ['down', 'forward'],
					},
					bones: {
						arm_r: [[0, 130]],
						elbow_r: 168,
					},
				},
			],
		},
	],
	effects: {
		blockHands: true,
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER slipped ITEM_ASSET_NAME over each of TARGET_CHARACTER_DYNAMIC_POSSESSIVE arms and tightened them into pet leg position.',
		actionRemove: 'SOURCE_CHARACTER loosened and then slipped off ITEM_ASSET_NAME from TARGET_CHARACTER_DYNAMIC_POSSESSIVE arms.',
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
