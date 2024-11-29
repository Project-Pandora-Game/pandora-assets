DefineAsset({
	name: 'Tea cup',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		china: {
			name: 'China',
			default: '#F2EEEE',
		},
		content: {
			name: 'Content',
			default: '#FEFCFC',
		},
	},
	// size:260, y:364, X:0
	preview: null, //'preview.png',
	attributes: {
		provides: [
			'Handheld',
		],
		requires: [
			'!Mittens',
		],
	},
	modules: {
		usage_l: {
			type: 'typed',
			name: 'Left hand',
			variants: [
				{
					id: 'no',
					name: 'No cup',
					default: true,
				},
				{
					id: 'hold',
					name: 'Holding',
					properties: {
						poseLimits: {
							leftArm: {
								fingers: 'fist',
								rotation: 'up',
								position: 'front',
							},
							bones: {
								arm_l: 44,
								elbow_l: 116,
							},
						},
					},
				},
				{
					id: 'sip',
					name: 'Sipping',
					properties: {
						poseLimits: {
							leftArm: {
								fingers: 'fist',
								rotation: 'up',
								position: 'front',
							},
							bones: {
								arm_l: -21,
								elbow_l: -156,
							},
						},
					},
				},
			],
		},
		usage_r: {
			type: 'typed',
			name: 'Left hand',
			variants: [
				{
					id: 'no',
					name: 'No mug',
					default: true,
				},
				{
					id: 'hold',
					name: 'Holding',
					properties: {
						poseLimits: {
							rightArm: {
								fingers: 'fist',
								rotation: 'up',
								position: 'front',
							},
							bones: {
								arm_r: 44,
								elbow_r: 116,
							},
						},
					},
				},
				{
					id: 'sip',
					name: 'Sipping',
					properties: {
						poseLimits: {
							rightArm: {
								fingers: 'fist',
								rotation: 'up',
								position: 'front',
							},
							bones: {
								arm_r: -21,
								elbow_r: -156,
							},
						},
					},
				},
			],
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER picked up the delicate cup carefully.',
		actionRemove: 'SOURCE_CHARACTER put down the cup carefully.',
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
