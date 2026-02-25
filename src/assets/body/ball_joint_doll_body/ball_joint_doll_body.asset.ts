DefineBodypart({
	name: 'Ball-joint Doll Body',
	bodypart: 'base',
	allowRandomizerUsage: false,
	graphics: 'graphics.json',
	colorization: {
		body: {
			name: 'Body',
			default: '#FFE3D2',
		},
		joints: {
			name: 'Joints',
			default: '#F0CAB4',
		},
		nipples: {
			name: 'Nipples',
			default: '#BC8659',
		},
		handles: {
			name: 'Handles',
			default: '#8C8C8C',
		},
	},
	// size:1200, y:180, x:-100
	preview: 'preview.png',
	attributes: {
		provides: [
			'Body_base',
		],
	},
	modules: {
		pattern: {
			type: 'typed',
			name: 'Pattern',
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'cracked',
					name: 'Cracked',
				},
			],
		},
		nipples: {
			type: 'typed',
			name: 'Nipples',
			variants: [
				{
					id: 'show',
					name: 'Show',
					default: true,
				},
				{
					id: 'hide',
					name: 'Hide',
				},
			],
		},
		handles: {
			type: 'typed',
			name: 'Handles',
			variants: [
				{
					id: 'no',
					name: 'No',
					default: true,
				},
				{
					id: 'yes',
					name: 'Yes',
					properties: {
						attributes: {
							provides: [
								'Restraint',
								'Restraint_arms',
								'Wrist_cuffs_chainable',
								'Restraint_legs',
								'Ankle_cuffs_chainable',
								'Belt_chainable',
								'Back_knot_anchor_point',
							],
						},
						stateFlags: {
							provides: ['handles'],
						},
					},
				},
			],
		},
		elbows: {
			type: 'typed',
			name: 'Elbows',
			variants: [
				{
					id: 'free',
					name: 'Free',
					default: true,
				},
				{
					id: 'clipTogether',
					name: 'Clipped together',
					properties: {
						stateFlags: {
							requires: {
								handles: 'Tying elbows requires handles',
							},
						},
						poseLimits: {
							armsOrder: {
								upper: 'right',
							},
							arms: {
								position: 'back',
								rotation: 'forward',
							},
							bones: {
								arm_r: 110,
								arm_l: 110,
								elbow_l: [[-180, 105]],
								elbow_r: [[-180, 105]],
							},
						},
					},
				},
			],
		},
		wrists: {
			type: 'typed',
			name: 'Wrists',
			variants: [
				{
					id: 'free',
					name: 'Free',
					default: true,
				},
				{
					id: 'clipBack',
					name: 'Clipped to back handle',
					properties: {
						effects: {
							blockHands: true,
						},
						stateFlags: {
							requires: {
								handles: 'Tying wrists requires handles',
							},
						},
						poseLimits: {
							arms: {
								position: 'back',
								rotation: 'forward',
							},
							bones: {
								arm_l: 100,
								elbow_l: 138,
								arm_r: 100,
								elbow_r: 138,
							},
						},
					},
				},
				{
					id: 'clipTogether',
					name: 'Clipped together behind',
					properties: {
						effects: {
							blockHands: true,
						},
						stateFlags: {
							requires: {
								handles: 'Tying wrists requires handles',
							},
						},
						poseLimits: {
							arms: {
								position: 'back',
								rotation: 'forward',
							},
							bones: {
								arm_r: 110,
								arm_l: 110,
								elbow_r: -22,
								elbow_l: -22,
							},
						},
					},
				},
			],
		},
	},
	ownership: {
		responsibleContributor: 'Shikifet <shikifet@gmail.com>',
		credits: ['Shikifet'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Shikifet',
				editedBy: 'Shikifet',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
