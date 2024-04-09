DefineRoomDeviceAsset({
	name: 'Storage chest',
	size: 'huge',
	colorization: {
		chest: {
			name: 'Chest',
			default: '#F4B013',
		},
		color: {
			name: 'Dominant color',
			default: '#922D2D',
		},
	},
	staticAttributes: ['Storage'],
	preview: 'chest_preview.png',
	slots: {},
	modules: {
		content: {
			type: 'storage',
			name: 'Chest contents',
			maxCount: 20,
			maxAcceptedSize: 'large',
		},
		lock: {
			type: 'lockSlot',
			name: 'Chest lock',
			lockedProperties: {
				blockModules: ['content'],
			},
		},
	},
	pivot: {
		x: 350,
		y: 400,
	},
	graphicsLayers: [
		{
			type: 'sprite',
			image: 'chest.png',
			colorizationKey: 'chest',
		},
		{
			type: 'sprite',
			image: 'chest_overlay.png',
			colorizationKey: 'color',
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
				source: 'https://skfb.ly/opGNQ',
				copyrightHolder: 'Zol4ik',
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
