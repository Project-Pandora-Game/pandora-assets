DefineRoomDeviceAsset({
	name: 'Ornate Rug',
	size: 'large',
	colorization: {
		base: {
			name: 'Base',
			default: '#DDCA8B',
		},
		center: {
			name: 'Center',
			default: '#DA4F4F',
		},
		decorations: {
			name: 'Decorations',
			default: '#6576C7',
		},
	},
	staticAttributes: ['Floor'],
	preview: 'preview.png',
	slots: {},
	modules: {
		rugState: {
			type: 'typed',
			name: 'Rug type',
			staticConfig: { slotName: null },
			variants: [
				{
					id: 'complete',
					name: 'With center and decorations',
					default: true,
				},
				{
					id: 'baseOnly',
					name: 'Plain carpet',
				},
				{
					id: 'baseCenter',
					name: 'With center piece',
				},
				{
					id: 'baseDeco',
					name: 'With decorations',
				},
			],
		},
	},
	pivot: {
		x: 353,
		y: -120,
	},
	graphics: 'roomDeviceGraphics.json',
	ownership: {
		responsibleContributor: 'Sandrine <118102950+SandrinePDR@users.noreply.github.com>',
		credits: ['SandrinePDR'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'rug',
				source: 'Self-Made',
				copyrightHolder: 'SandrinePDR',
				editedBy: 'SandrinePDR',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
