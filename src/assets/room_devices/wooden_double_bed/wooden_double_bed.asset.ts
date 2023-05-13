DefineRoomDeviceAsset({
	name: 'Wooden double bed',
	size: 'huge',
	colorization: {
		bed_frame: {
			name: 'Bed frame',
			default: '#FFE8E9',
		},
		mattress: {
			name: 'Mattress',
			default: '#ffffff',
		},
		pillows: {
			name: 'Pillows',
			default: '#ffffff',
		},
	},
	slots: {
		character_slot_left: {
			name: 'Bed - left side',
			asset: {
				name: 'Wooden double bed left side',
				size: 'huge',
				poseLimits: {
					bones: {
						sitting: 0,
					},
				},
			},
		},
		character_slot_right: {
			name: 'Bed - right side',
			asset: {
				name: 'Wooden double bed right side',
				size: 'huge',
				poseLimits: {
					bones: {
						sitting: 0,
					},
				},
			},
		},
	},
	pivot: {
		x: 916,
		y: 1750,
	},
	graphicsLayers: [
		{
			type: 'sprite',
			image: 'wooden_double_bed_base.png',
			colorizationKey: 'bed_frame',
		},
		{
			type: 'sprite',
			image: 'wooden_double_bed_mattress.png',
			colorizationKey: 'mattress',
		},
		{
			type: 'sprite',
			image: 'wooden_double_bed_pillows.png',
			colorizationKey: 'pillows',
		},
		{
			type: 'slot',
			slot: 'character_slot_left',
			characterPosition: {
				offsetX: -284,
				offsetY: 10,
				relativeScale: 1,
			},
		},
		{
			type: 'slot',
			slot: 'character_slot_right',
			characterPosition: {
				offsetX: 284,
				offsetY: 10,
				relativeScale: 1,
			},
		},
	],
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'used 3D model - base',
				source: 'https://skfb.ly/69vZE',
				copyrightHolder: 'Francesco Coldesina',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'used 3D model - mattress',
				source: 'https://skfb.ly/6RO9F',
				copyrightHolder: 'mspurlock1',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'used 3D model - pillow',
				source: 'https://skfb.ly/6ZJuI',
				copyrightHolder: 'Susidko Studio',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'images',
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only',
			},
		],
	},
});
