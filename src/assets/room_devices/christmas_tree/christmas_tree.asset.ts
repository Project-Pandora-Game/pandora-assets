DefineRoomDeviceAsset({
	name: 'Christmas Tree',
	size: 'huge',
	colorization: {
		tree: {
			name: 'Tree',
			default: '#354E25',
		},
		accent: {
			name: 'Accent color',
			default: '#D1CA9B',
		},
	},
	staticAttributes: ['Floor'],
	preview: 'tree_preview.png',
	slots: {},
	modules: {
		size: {
			type: 'typed',
			name: 'Tree size',
			staticConfig: { slotName: null },
			variants: [
				{
					id: 'large',
					name: 'Large',
					default: true,
				},
				{
					id: 'small',
					name: 'Small',
				},
			],
		},
	},
	pivot: {
		x: 673,
		y: 1790,
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
				source: 'https://skfb.ly/oBNuB',
				copyrightHolder: 'anybody',
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
