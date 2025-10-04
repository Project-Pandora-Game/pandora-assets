DefineRoomDeviceAsset({
	name: 'Floor Hatch 1',
	size: 'huge',
	colorization: {
		base: {
			name: 'Primary',
			default: '#BA9998',
		},
	},
	staticAttributes: ['Floor'],
	preview: 'preview.png',
	slots: {},
	modules: {
		orientation: {
			type: 'typed',
			name: 'Orientation',
			staticConfig: { slotName: null },
			variants: [
				{
					id: 'floor',
					name: 'Floor',
					default: true,
				},
				{
					id: 'ceiling',
					name: 'Ceiling (needs manual height adjustment)',
				},
			],
		},
	},
	pivot: {
		x: 567,
		y: 80,
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
				source: 'https://skfb.ly/oQ7y7',
				copyrightHolder: 'inheritan',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
		],
	},
});
