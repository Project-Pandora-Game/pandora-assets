DefineRoomDeviceAsset({
	name: 'Christmas Presents',
	size: 'huge',
	colorization: {
		color_1: {
			name: 'Color 1',
			default: '#FFFFFF',
		},
		color_2: {
			name: 'Color 2',
			default: '#33922C',
		},
		color_3: {
			name: 'Color 3',
			default: '#EF5151',
		},
	},

	staticAttributes: ['Floor'],
	preview: 'preview.png',
	slots: {},
	modules: {
		content: {
			type: 'storage',
			name: 'Gifts',
			staticConfig: { slotName: null },
			maxCount: 7,
			maxAcceptedSize: 'large',
		},
		lock: {
			type: 'lockSlot',
			name: 'Seal that guarantees the original wrapping',
			staticConfig: { slotName: null },
			lockedProperties: {
				blockModules: ['content'],
			},
		},
	},
	storageModule: 'content',
	pivot: {
		x: 660,
		y: 400,
	},
	graphics: 'roomDeviceGraphics.json',
	ownership: {
		responsibleContributor: 'Sandrine <118102950+SandrinePDR@users.noreply.github.com>',
		credits: ['Sandrine'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'Present',
				source: 'Self-Made',
				copyrightHolder: 'Sandrine',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
			{
				part: 'Christmas present base image',
				source: 'https://sketchfab.com/3d-models/game-ready-free-christmas-gifts-ad99e7faf07c45d9b57324b4a0e94c53',
				copyrightHolder: 'Saritasa',
				editedBy: 'Sandrine',
				license: 'CC BY',
			},
		],
	},
});
