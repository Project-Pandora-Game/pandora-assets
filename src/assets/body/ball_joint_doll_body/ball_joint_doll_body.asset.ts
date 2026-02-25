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
					},
				},
			],
		},
		arms: {
			type: 'typed',
			name: 'Arms',
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
						poseLimits: {
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
					id: 'clipArmbinder',
					name: 'Clipped Armbinder',
					properties: {
						poseLimits: {
							bones: {
								arm_r: 104,
								arm_l: 104,
								elbow_r: -4,
								elbow_l: -4,
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
