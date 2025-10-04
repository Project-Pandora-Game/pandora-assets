DefineRoomDeviceAsset({
	name: 'Poster',
	size: 'large',
	colorization: {
		passe_partout: {
			name: 'Passe-partout',
			default: '#FFFFFF',
		},
		background_1: {
			name: 'Background 1',
			default: '#FEF9F3',
		},
		color_1: {
			name: 'Color 1',
			default: '#AD3B3B',
		},
		color_2: {
			name: 'Color 2',
			default: '#283593',
		},
	},
	staticAttributes: ['Wall'],
	preview: 'advert_preview.png',
	slots: {},
	modules: {
		size: {
			type: 'typed',
			name: 'Poster size',
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
		posterType: {
			type: 'typed',
			name: 'Poster type',
			staticConfig: { slotName: null },
			variants: [
				{
					id: 'TowelAndTowelAdvert',
					name: 'Towel and Towel advert',
					default: true,
				},
			],
		},
	},
	pivot: {
		x: 700,
		y: 1630,
	},
	graphics: 'roomDeviceGraphics.json',
	ownership: {
		responsibleContributor: 'Sandrine <118102950+SandrinePDR@users.noreply.github.com>',
		credits: ['Taja'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'Advert',
				source: 'Self-Made',
				copyrightHolder: 'Taja',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
