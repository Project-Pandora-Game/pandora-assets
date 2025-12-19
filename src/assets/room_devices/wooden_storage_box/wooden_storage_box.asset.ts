DefineRoomDeviceAsset({
	name: 'Wooden Storage Box',
	size: 'huge',
	colorization: {
		box: {
			name: 'Box',
			default: '#EBB284',
		},
		latch: {
			name: 'Toggle latch',
			default: '#E2B252',
		},
	},
	staticAttributes: ['Storage'],
	preview: 'box_preview.png',
	slots: {},
	modules: {
		content: {
			type: 'storage',
			name: 'Chest contents',
			staticConfig: { slotName: null },
			maxCount: 15,
			maxAcceptedSize: 'large',
		},
		lock: {
			type: 'lockSlot',
			name: 'Latch lock',
			staticConfig: { slotName: null },
			lockedProperties: {
				blockModules: ['content'],
			},
		},
	},
	storageModule: 'content',
	pivot: {
		x: 395,
		y: 390,
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
				source: 'https://skfb.ly/66u7Z',
				copyrightHolder: 'PepsiTetraHepta',
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
