DefineRoomDeviceAsset({
	name: 'Shapes',
	size: 'medium',
	colorization: {
		color: {
			name: 'Color',
			default: '#FFFFFFFF',
			minAlpha: 0,
		},
	},
	staticAttributes: ['Wall'],
	preview: 'preview.png',
	slots: {},
	modules: {
		square: {
			type: 'typed',
			name: 'Square',
			staticConfig: { slotName: null },
			variants: [
				{
					id: 'none',
					name: 'None',
				},
				{
					id: 'small',
					name: 'Small',
					default: true,
				},
				{
					id: 'medium',
					name: 'Medium',
				},
				{
					id: 'big',
					name: 'Big',
				},
				{
					id: 'huge',
					name: 'Huge',
				},
			],
		},
	},
	pivot: {
		x: 800,
		y: 1600,
	},
	graphics: 'roomDeviceGraphics.json',
	ownership: {
		responsibleContributor: 'DoppelChest1 <doppelchest@op.pl>',
		credits: ['DoppelChest'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'Shape graphics',
				source: 'Self-Made',
				copyrightHolder: 'DoppelChest',
				editedBy: 'DoppelChest',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
