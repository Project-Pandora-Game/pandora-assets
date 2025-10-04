DefineRoomDeviceAsset({
	name: 'Hanging Chain Decor',
	size: 'large',
	colorization: {
		chain: {
			name: 'Chain',
			default: '#78665C',
		},
	},
	staticAttributes: ['Wall'],
	preview: 'chain_preview.png',
	slots: {},
	modules: {
		size: {
			type: 'typed',
			name: 'Chain thickness',
			staticConfig: { slotName: null },
			variants: [
				{
					id: 'large',
					name: 'Large',
					default: true,
				},
				{
					id: 'medium',
					name: 'Medium',
				},
				{
					id: 'small',
					name: 'Small',
				},
			],
		},
	},
	pivot: {
		x: 15,
		y: 2430,
	},
	graphics: 'roomDeviceGraphics.json',
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'pictures',
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
