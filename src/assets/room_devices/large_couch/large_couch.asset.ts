DefineRoomDeviceAsset({
	name: 'Large Couch',
	size: 'huge',
	colorization: {
		couch: {
			name: 'Couch',
			default: '#ffffff',
		},
	},
	staticAttributes: ['Furniture'],
	preview: 'couch_preview.png',
	slots: {},
	modules: {
		storage: {
			type: 'storage',
			name: `Under the couch`,
			staticConfig: { slotName: null },
			maxAcceptedSize: 'medium',
			maxCount: 5,
		},
	},
	storageModule: 'storage',
	pivot: {
		x: 1400,
		y: 950,
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
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
