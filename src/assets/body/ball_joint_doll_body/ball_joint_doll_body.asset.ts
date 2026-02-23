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
			'Body_texture',
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
								'Wrist_cuffs',
								'Wrist_cuffs_chainable',
								'Elbow_cuffs',
								'Restraint_legs',
								'Ankle_cuffs',
								'Ankle_cuffs_chainable',
								'Thigh_cuffs',
								'Belt_chainable',
							],
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
