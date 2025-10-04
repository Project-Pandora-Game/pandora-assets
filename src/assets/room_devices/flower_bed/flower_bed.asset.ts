DefineRoomDeviceAsset({
	name: 'Flower Bed',
	size: 'large',
	colorization: {
		leafs: {
			name: 'Leafs',
			default: '#38674C',
		},
		flowers: {
			name: 'Flowers',
			default: '#4F75C7',
		},
	},
	staticAttributes: ['Floor'],
	preview: 'flower_preview.png',
	slots: {},
	pivot: {
		x: 400,
		y: 250,
	},
	graphics: 'roomDeviceGraphics.json',
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'used 3D model',
				source: 'https://skfb.ly/oMnAG',
				copyrightHolder: 'E.A.Cornell (eb78)',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'images',
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
