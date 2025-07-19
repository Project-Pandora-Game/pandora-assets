DefineRoomDeviceAsset({
	name: 'Winch Body',
	size: 'huge',
	//preview: 'preview.png',
	colorization: {
		shell: {
			name: 'Shell',
			default: '#D20000',
		},
		engine: {
			name: 'Engine',
			default: '#ECECEC',
		},
		cable: {
			name: 'Cable',
			default: '#8E8E8E',
		},
	},
	staticAttributes: ['Play_furniture'],
	slots: {

	},
	modules: {

	},
	graphicsLayers: [
		{
			type: 'sprite',
			image: 'cable_drum.png',
			colorizationKey: 'cable',
			imageOverrides: [
			],
		},
		{
			type: 'sprite',
			image: 'engine.png',
			colorizationKey: 'engine',
			imageOverrides: [
			],
		},
		{
			type: 'sprite',
			image: 'shell.png',
			colorizationKey: 'shell',
			imageOverrides: [
			],
		},
		{
			type: 'sprite',
			image: 'shell_shine.png',
		},
	],
	pivot: {
		x: 200,
		y: 2000,
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
