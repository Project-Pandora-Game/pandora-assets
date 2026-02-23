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
