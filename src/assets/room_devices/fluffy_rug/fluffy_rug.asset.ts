DefineRoomDeviceAsset({
	name: 'Fluffy Rug',
	size: 'large',
	colorization: {
		rug: {
			name: 'Rug',
			default: '#DDCA8B',
		},
	},
	staticAttributes: ['Floor'],
	preview: 'preview.png',
	slots: {},
	modules: {
		size: {
			type: 'typed',
			name: 'Rug size',
			staticConfig: { slotName: null },
			variants: [
				{
					id: 'small',
					name: 'Small',
					default: true,
				},
				{
					id: 'large',
					name: 'Large',
				},
			],
		},
	},
	pivot: {
		x: 650,
		y: -50,
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
				source: 'https://skfb.ly/6QYzw',
				copyrightHolder: 'misha yast71',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
		],
	},
});
