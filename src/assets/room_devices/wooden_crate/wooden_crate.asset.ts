DefineRoomDeviceAsset({
	name: 'Wooden Crate',
	size: 'huge',
	colorization: {
		crate: {
			name: 'Crate',
			default: '#9E7144',
		},
	},
	staticAttributes: ['Storage'],
	preview: 'crate_preview.png',
	slots: {},
	modules: {
		content: {
			type: 'storage',
			name: 'Crate contents',
			staticConfig: { slotName: null },
			maxCount: 15,
			maxAcceptedSize: 'large',
		},
	},
	storageModule: 'content',
	pivot: {
		x: 530,
		y: 666,
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
				source: 'https://skfb.ly/6RvDJ',
				copyrightHolder: 'DZs',
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
