
DefineBodypart({
	name: 'Joint Ball Doll Body',
	bodypart: 'base',
	allowRandomizerUsage: false,
	graphics: 'graphics.json',
	colorization: {
		template: {
			name: 'Body',
			default: '#ffffff',
		},
		body: {
			name: 'Body',
			default: '#FFE3D2',
		},
		joints: {
			name: 'Joints',
			default: '#F0CAB4',
		},
	},
	// size:320, y:383, centered
	preview: null,//'preview.png',
	attributes: {
		provides: [
			'Body_texture',
		],
	},
	modules: {

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
