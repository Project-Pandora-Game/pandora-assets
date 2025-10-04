DefineRoomDeviceAsset({
	name: 'Plant Pot',
	size: 'large',
	colorization: {
		plant: {
			name: 'Plant',
			default: '#5A9F46',
		},
		pot: {
			name: 'Pot',
			default: '#454047',
		},
		flower1: {
			name: 'Flowers 1',
			default: '#FFE500',
		},
		flower2: {
			name: 'Flowers 2',
			default: '#C21F1F',
		},
		flower3: {
			name: 'Flowers 3',
			default: '#F28DCD',
		},
	},
	staticAttributes: ['Floor'],
	preview: 'pot_preview.png',
	slots: {},
	modules: {
		type: {
			type: 'typed',
			name: 'Type of plant',
			staticConfig: { slotName: null },
			variants: [
				{
					id: 'rose',
					name: 'Rose bush',
				},
				{
					id: 'paulia',
					name: 'Saintpaulias',
				},
				{
					id: 'leaf',
					name: 'Split-leaf plant',
					default: true,
				},
			],
		},
		size: {
			type: 'typed',
			name: 'Plant size',
			staticConfig: { slotName: null },
			variants: [
				{
					id: 'normal',
					name: 'Normal',
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
		x: 512,
		y: 840,
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
			{
				part: 'used 3D model - split leaf plant',
				source: 'https://skfb.ly/oAEoM',
				copyrightHolder: 'Giora Nohl',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'used 3D model - saintpaulias',
				source: 'https://skfb.ly/6UMDx',
				copyrightHolder: 'Elena Ferfor',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'used 3D model - roses',
				source: 'https://skfb.ly/o6sLG',
				copyrightHolder: 'Makovetkyi Volodymyr',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
		],
	},
});
