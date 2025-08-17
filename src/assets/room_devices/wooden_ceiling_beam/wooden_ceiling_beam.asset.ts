DefineRoomDeviceAsset({
	name: 'Wooden Ceiling Beam',
	size: 'huge',
	preview: 'preview.png',
	colorization: {
		hashira: {
			name: 'Wooden Ceiling Beam',
			default: '#AC784E',
		},
	},
	staticAttributes: ['Floor'],
	slots: {},
	graphicsLayers: [
		{
			type: 'sprite',
			image: 'ceiling_beam.png',
			colorizationKey: 'hashira',
			clipToRoom: true,
			offset: { x: -3072, y: -40 },
		},
	],
	pivot: {
		x: 0,
		y: 0,
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
