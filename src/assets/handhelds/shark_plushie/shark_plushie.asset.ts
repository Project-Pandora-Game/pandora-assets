DefineAsset({
	name: 'Shark Plushie',
	size: 'medium',
	graphics: 'graphics.json',
	requireFreeHandsToUseDefault: false,
	colorization: {
		belly: {
			name: 'Belly',
			default: '#F0F3F5',
		},
		body: {
			name: 'Body',
			default: '#567890',
		},
		pupil: {
			name: 'Pupil',
			default: '#25252d',
		},
		iris: {
			name: 'Iris',
			default: '#BF5249',
		},
		sclera: {
			name: 'Sclera',
			default: '#e6e7ea',
		},
		cavity: {
			name: 'Cavity',
			default: '#873f39',
		},
		teeth: {
			name: 'Teeth',
			default: '#e1e3e5',
		},
	},
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
			name: 'Hug tightly',
			bones: {
				arm_l: 85,
				arm_r: 90,
				elbow_l: 53,
				elbow_r: 88,
			},
			leftArm: {
				fingers: 'spread',
				rotation: 'forward',
				position: 'front',
			},
			rightArm: {
				fingers: 'fist',
				rotation: 'down',
				position: 'front_above_hair',
			},
		},
		{
			name: 'Hug Normal',
			bones: {
				arm_l: 84,
				arm_r: 85,
				elbow_l: 53,
				elbow_r: 85,
			},
			leftArm: {
				fingers: 'spread',
				rotation: 'forward',
				position: 'front',
			},
			rightArm: {
				fingers: 'fist',
				rotation: 'down',
				position: 'front_above_hair',
			},
		},
		{
			name: 'Hug loosely',
			bones: {
				arm_l: 76,
				arm_r: 79,
				elbow_l: 67,
				elbow_r: 88,
			},
			leftArm: {
				fingers: 'spread',
				rotation: 'forward',
				position: 'front',
			},
			rightArm: {
				fingers: 'fist',
				rotation: 'down',
				position: 'front_above_hair',
			},
		},
	],
	roomDeployment: {
		autoDeployRelativePosition: [330, -150, 0],
	},
	poseLimits: {
		options: [
			{
				bones: {
					arm_l: [[76, 85]],
					elbow_l: [[53, 88]],
				},
				leftArm: {
					fingers: 'spread',
					rotation: 'forward',
					position: 'front',
				},
			},
			{
				bones: {
					arm_r: [[79, 90]],
					elbow_r: [[85, 88]],
				},
				rightArm: {
					fingers: 'fist',
					rotation: 'down',
					position: 'front_above_hair',
				},
			},
		],
	},
	ownership:
        {
        	responsibleContributor: 'smallelise <elise21dev@proton.me>',
        	credits:
                ['smallelise'],
        	modificationPolicy:
                'Fixes only, otherwise ask',
        	reusePolicy:
                'Free to use',
        	licensing:
                [
                	{
                		part: 'Shark-Plush',
                		source: 'Self-Made',
                		copyrightHolder: 'smallelise',
                		editedBy: 'smallelise',
                		license: 'CC BY-SA',
                	},
                ],
        },
});

