
DefineBodypart({
	name: 'Joint Ball Doll Body',
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
		}
	},
	// size:320, y:383, centered
	preview: null,//'preview.png',
	attributes: {
		provides: [
			'Body_texture',
		],
	},
	modules: {
		pattern: {
			type: 'typed',
			name: 'Body posing limits: Legs',
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'dried',
					name: 'Dried',
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
