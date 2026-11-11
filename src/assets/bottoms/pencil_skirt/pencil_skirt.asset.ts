DefineAsset({
	name: 'Pencil Skirt',
	size: 'medium',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		skirt: {
			name: 'Skirt',
			default: '#FF0000FF',
			minAlpha: 0.25,
		},
	},
	// size:328, y:590, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Clothing_lower',
		],
	},
	modules: {
		position: {
			type: 'typed',
			name: 'Position',
			variants: [
				{
					id: 'waist',
					name: 'Waist',
					default: true,
					properties: {
						stateFlags: {
							provides: ['waist'],
						},
					},
				},
				{
					id: 'pulledDown',
					name: 'Pulled Down',
					properties: {
						stateFlags: {
							provides: ['pulledDown'],
						},
					},
				},
			],
		},
		waist: {
			type: 'typed',
			name: 'Waist',
			variants: [
				{
					id: 'high',
					name: 'High',
					default: true,
					properties: {
						stateFlags: {
							provides: ['high'],
						},
					},
				},
				{
					id: 'mid',
					name: 'Mid',
					properties: {
						stateFlags: {
							provides: ['mid'],
						},
					},
				},
				{
					id: 'low',
					name: 'Low',
					properties: {
						stateFlags: {
							provides: ['low'],
						},
					},
				},
			],
		},
		length: {
			type: 'typed',
			name: 'Length',
			variants: [
				// tight template only
				{
					id: 'aboveKnee',
					name: 'Above the knee',
					default: true,
					properties: {
						stateFlags: {
							provides: ['aboveKnee'],
						},
					},
				},
				// sitting + kneeling - tight; standing - short template
				{
					id: 'mini',
					name: 'Mini',
					properties: {
						stateFlags: {
							provides: ['mini'],
						},
					},
				},
				// sitting - tight; standing + kneeling - short template
				{
					id: 'micro',
					name: 'Micro',
					properties: {
						stateFlags: {
							provides: ['micro'],
						},
					},
				},
			],
		},
		cutout: {
			type: 'typed',
			name: 'Cutout on the back',
			variants: [
				{
					id: 'no',
					name: 'No',
					default: true,
				},
				{
					id: 'yes',
					name: 'Yes',
				},
			],
		},
		material: {
			type: 'typed',
			name: 'Material',
			variants: [
				{
					id: 'matte',
					name: 'Matte',
					default: true,
				},
				{
					id: 'glossy',
					name: 'Glossy',
				},
			],
		},
	},
	stateFlagCombinations: [
		{
			requiredFlags: ['waist', 'aboveKnee'],
			properties: {
				poseLimits: {
					bones: {
						leg_l: [[-3, 6]],
						leg_r: [[-3, 6]],
					},
				},
			},
		},
		{
			requiredFlags: ['waist', 'mini'],
			properties: {
				poseLimits: {
					options: [
						{
							legs: {
								pose: ['sitting', 'kneeling'],
							},
							bones: {
								leg_l: [[-3, 6]],
								leg_r: [[-3, 6]],
							},
						},
						{
							legs: {
								pose: 'standing',
							},
							bones: {
								leg_l: [[-100, 40]],
								leg_r: [[-100, 40]],
							},
						},
					],
				},
			},
		},
		{
			requiredFlags: ['waist', 'micro'],
			properties: {
				poseLimits: {
					options: [
						{
							legs: {
								pose: 'sitting',
							},
							bones: {
								leg_l: [[-3, 6]],
								leg_r: [[-3, 6]],
							},
						},
						{
							legs: {
								pose: ['standing', 'kneeling'],
							},
							bones: {
								leg_l: [[-100, 40]],
								leg_r: [[-100, 40]],
							},
						},
					],
				},
			},
		},
		{
			requiredFlags: ['pulledDown', 'high'],
			properties: {
				poseLimits: {
					options: [
						{
							legs: {
								pose: 'standing',
							},
							bones: {
								leg_l: [[3, 3]],
								leg_r: [[3, 3]],
							},
						},
						{
							legs: {
								pose: 'sitting',
							},
							bones: {
								leg_l: [[7, 7]],
								leg_r: [[7, 7]],
							},
						},
					]
				},
			},
		},
		{
			requiredFlags: ['pulledDown', 'mid'],
			properties: {
				poseLimits: {
					options: [
						{
							legs: {
								pose: 'standing',
							},
							bones: {
								leg_l: [[-3, -3]],
								leg_r: [[-3, -3]],
							},
						},
						{
							legs: {
								pose: 'sitting',
							},
							bones: {
								leg_l: [[-3, -3]],
								leg_r: [[-3, -3]],
							},
						},
					],
				},
			},
		},
		{
			requiredFlags: ['pulledDown', 'low'],
			properties: {
				poseLimits: {
					options: [
						{
							legs: {
								pose: 'standing',
							},
							bones: {
								leg_l: [[0, 0]],
								leg_r: [[0, 0]],
							},
						},
						{
							legs: {
								pose: 'sitting',
							},
							bones: {
								leg_l: [[-4, -4]],
								leg_r: [[-4, -4]],
							},
						},
					],
				},
			},
		},
	],
	ownership: {
		responsibleContributor: 'Nikky90506 <122885812+Nikky90506@users.noreply.github.com>',
		credits: ['Nikky'],
		modificationPolicy: 'Fixes and New uses, otherwise ask',
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'images',
				source: 'Self-Made',
				copyrightHolder: 'Nikky',
				editedBy: 'Nikky',
				license: 'Pandora-Use-Only-v1-or-later',
			},
			{
				part: 'Base skirt model',
				source: 'https://skfb.ly/oyuxJ',
				copyrightHolder: 'SayuriCreatesStuff',
				editedBy: 'Nikky',
				license: 'CC BY-SA',
			},
		],
	},
});
