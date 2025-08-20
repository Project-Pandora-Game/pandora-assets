DefineRoomDeviceAsset({
	name: 'Floor Hatch 3',
	size: 'huge',
	colorization: {
		base: {
			name: 'Primary',
			default: '#AABBB8',
		},
	},
	staticAttributes: ['Floor'],
	preview: 'preview.png',
	slots: {},
	modules: {},
	pivot: {
		x: 526,
		y: 110,
	},
	graphicsLayers: [
		{
			type: 'sprite',
			image: 'floor_hatch_3.png',
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
				source: 'https://skfb.ly/oK7ot',
				copyrightHolder: 'Stridity',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
		],
	},
});
