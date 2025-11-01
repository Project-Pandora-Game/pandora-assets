DefineRoomDeviceAsset({
	name: 'Clothing Pile',
	size: 'huge',
	requireFreeHandsToUseDefault: false,
	colorization: {
		top: {
			name: 'Top cloth',
			default: '#372934ff',
		},
		middle: {
			name: 'Middle cloth',
			default: '#587dd4ff',
		},
		bottom: {
			name: 'Bottom cloth',
			default: '#eeaaeaff',
		},
	},
	staticAttributes: ['Floor'],
	preview: 'preview.png',
	slots: {},
	modules: {
		type: {
			type: 'typed',
			name: 'Pile variant',
			staticConfig: { slotName: null },
			variants: [
				{
					id: 'unfolded',
					name: 'Unfolded',
					default: true,
				},
				{
					id: 'folded',
					name: 'Folded',
				},
			],
		},
	},
	pivot: {
		x: 175,
		y: 30,
	},
	graphics: 'roomDeviceGraphics.json',
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'used 3D model - folded',
				source: 'https://skfb.ly/oSnQX',
				copyrightHolder: 'vicente betoret ferrero',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'used 3D model - unfolded',
				source: 'https://skfb.ly/oMySv',
				copyrightHolder: 'orbis',
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
