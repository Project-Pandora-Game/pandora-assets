DefineRoomDeviceAsset({
	name: 'Floor Hatch 2',
	size: 'huge',
	colorization: {
		base: {
			name: 'Primary',
			default: '#B88766',
		},
	},
	staticAttributes: ['Floor'],
	preview: 'preview.png',
	slots: {},
	modules: {},
	pivot: {
		x: 513,
		y: 80,
	},
	graphicsLayers: [
		{
			type: 'sprite',
			image: 'floor_hatch_2.png',
			colorizationKey: 'base',
		},
	],
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'images',
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only-v1-or-later',
			},
			{
				part: 'used 3D model',
				source: 'https://skfb.ly/oDAEt',
				copyrightHolder: 'LeeMoorhead',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
		],
	},
});
