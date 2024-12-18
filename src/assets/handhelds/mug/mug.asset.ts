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
	modules: {
		handUsage_r: {
			type: 'typed',
			name: 'Right hand',
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
								rotation: 'down',
								position: 'front',
							},
							bones: {
								arm_r: 44,
								elbow_r: 136,
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
								rotation: 'down',
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
		handUsage_l: {
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
							leftArm: {
								fingers: 'fist',
								rotation: 'down',
								position: 'front',
							},
							bones: {
								arm_l: 44,
								elbow_l: 136,
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
								rotation: 'down',
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
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER picked up the mug.',
		actionRemove: 'SOURCE_CHARACTER put down the mug.',
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
