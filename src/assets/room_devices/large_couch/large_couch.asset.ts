DefineRoomDeviceAsset({
	name: 'Large Couch',
	size: 'huge',
	colorization: {
		couch: {
			name: 'Couch',
			default: '#ffffff',
		},
	},
	slots: {},
	pivot: {
		x: 1400,
		y: 1000,
	},
	graphicsLayers: [
		{
			type: 'sprite',
			image: 'couch.png',
			colorizationKey: 'couch',
		},
	],
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'used 3D model',
				source: 'https://skfb.ly/oCDoA',
				copyrightHolder: 'vasycrukov',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'images',
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only',
			},
		],
	},
});
