DefineRoomDeviceAsset({
	name: 'Cotton Pillow',
	size: 'large',
	colorization: {
		pillow: {
			name: 'Pillow',
			default: '#1E5B99',
		},
	},
	staticAttributes: ['Floor'],
	preview: 'preview.png',
	slots: {},
	pivot: {
		x: 400,
		y: -80,
	},
	graphics: 'roomDeviceGraphics.json',
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
				source: 'https://skfb.ly/6wCnC',
				copyrightHolder: 'Vegar Svenning',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
		],
	},
});
