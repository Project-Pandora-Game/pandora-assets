DefineRoomDeviceAsset({
	name: 'Wooden Fence',
	size: 'huge',
	colorization: {
		fence: {
			name: 'Fence',
			default: '#924A2D',
		},
	},
	staticAttributes: ['Floor'],
	preview: 'fence_preview.png',
	slots: {},
	pivot: {
		x: 800,
		y: 680,
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
				source: 'https://skfb.ly/6rNUp',
				copyrightHolder: 'DmitriyGDS',
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
