DefineRoomDeviceAsset({
	name: 'Camera On Tripod',
	size: 'huge',
	requireFreeHandsToUseDefault: false,
	colorization: {
		module: {
			name: 'Mounted module',
			default: '#878686',
		},
		tripod: {
			name: 'Tripod',
			default: '#B5B3B3',
		},
	},
	staticAttributes: ['Floor'],
	preview: 'preview.png',
	slots: {},
	modules: {
		type: {
			type: 'typed',
			name: 'Mounted module',
			staticConfig: { slotName: null },
			variants: [
				{
					id: 'photo',
					name: 'Photo',
					default: true,
				},
				{
					id: 'video',
					name: 'Video',
				},
				{
					id: 'spotlight',
					name: 'Spotlight',
				},
			],
		},
		orientation: {
			type: 'typed',
			name: 'Camera orientation',
			staticConfig: { slotName: null },
			variants: [
				{
					id: 'left',
					name: 'Left',
					default: true,
				},
				{
					id: 'right',
					name: 'Right',
				},
			],
		},
	},
	pivot: {
		x: 348,
		y: 990,
	},
	graphics: 'roomDeviceGraphics.json',
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'used 3D model - cinema camera',
				source: 'https://skfb.ly/p8MKM',
				copyrightHolder: 'jmadden64',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'used 3D model - Camera With Tripod',
				source: 'https://skfb.ly/p8Ly9',
				copyrightHolder: 'FatWasHere',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'used 3D model - Spotlight',
				source: 'https://skfb.ly/6Vr7S',
				copyrightHolder: 'Katsiaryna Kruhlenia',
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
