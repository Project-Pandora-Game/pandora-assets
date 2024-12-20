DefineRoomDeviceAsset({
	name: 'Christmas Presents',
	size: 'huge',
	staticAttributes: ['Floor'],
	preview: 'preview.png',
	slots: {},
	modules: {
		content: {
			type: 'storage',
			name: 'Gifts',
			staticConfig: { slotName: null },
			maxCount: 3,
			maxAcceptedSize: 'large',
		},
	},
	pivot: {
		x: 350,
		y: 400,
	},
	graphicsLayers: [
		{
			type: 'sprite',
			image: 'presents.png',
		},
	],
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
				source: 'https://creazilla.com/media/clipart/7813296/present',
				copyrightHolder: 'Creative Commons: https://creativecommons.org/licenses/by/4.0/',
				editedBy: 'Sandrine',
				license: 'CC BY-SA',
			},
		],
	},
});
