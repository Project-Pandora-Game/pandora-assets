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
	slots: {},
	modules: {
		type: {
			type: 'typed',
			name: 'Type of plant',
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
	graphicsLayers: [
		{
			type: 'sprite',
			image: '',
			imageOverrides: [
				{
					image: 'split_leaf_plant.png',
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'normal',
							},
							{
								module: 'type',
								operator: '=',
								value: 'leaf',
							},
						],

					],
				},
				{
					image: 'split_leaf_plant.png@500x514',
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'small',
							},
							{
								module: 'type',
								operator: '=',
								value: 'leaf',
							},
						],

					],
				},
			],
			offsetOverrides: [
				{
					offset: { x: 256, y: 440 },
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'small',
							},
						],
					],
				},
			],
			colorizationKey: 'plant',
		},
		{
			type: 'sprite',
			image: '',
			imageOverrides: [
				{
					image: 'rose_bush_plant.png',
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'normal',
							},
							{
								module: 'type',
								operator: '=',
								value: 'rose',
							},
						],

					],
				},
				{
					image: 'rose_bush_plant.png@500x514',
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'small',
							},
							{
								module: 'type',
								operator: '=',
								value: 'rose',
							},
						],

					],
				},
			],
			offsetOverrides: [
				{
					offset: { x: 256, y: 440 },
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'small',
							},
						],
					],
				},
			],
			colorizationKey: 'plant',
		},
		{
			type: 'sprite',
			image: '',
			imageOverrides: [
				{
					image: 'saintpaulias_plant.png',
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'normal',
							},
							{
								module: 'type',
								operator: '=',
								value: 'paulia',
							},
						],

					],
				},
				{
					image: 'saintpaulias_plant.png@500x514',
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'small',
							},
							{
								module: 'type',
								operator: '=',
								value: 'paulia',
							},
						],

					],
				},
			],
			offsetOverrides: [
				{
					offset: { x: 256, y: 440 },
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'small',
							},
						],
					],
				},
			],
			colorizationKey: 'plant',
		},
		{
			type: 'sprite',
			image: '',
			imageOverrides: [
				{
					image: 'rose_bush_flower1.png',
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'normal',
							},
							{
								module: 'type',
								operator: '=',
								value: 'rose',
							},
						],

					],
				},
				{
					image: 'rose_bush_flower1.png@500x514',
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'small',
							},
							{
								module: 'type',
								operator: '=',
								value: 'rose',
							},
						],

					],
				},
			],
			offsetOverrides: [
				{
					offset: { x: 256, y: 440 },
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'small',
							},
						],
					],
				},
			],
			colorizationKey: 'flower1',
		},
		{
			type: 'sprite',
			image: '',
			imageOverrides: [
				{
					image: 'saintpaulias_flower1.png',
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'normal',
							},
							{
								module: 'type',
								operator: '=',
								value: 'paulia',
							},
						],

					],
				},
				{
					image: 'saintpaulias_flower1.png@500x514',
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'small',
							},
							{
								module: 'type',
								operator: '=',
								value: 'paulia',
							},
						],

					],
				},
			],
			offsetOverrides: [
				{
					offset: { x: 256, y: 440 },
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'small',
							},
						],
					],
				},
			],
			colorizationKey: 'flower1',
		},
		{
			type: 'sprite',
			image: '',
			imageOverrides: [
				{
					image: 'rose_bush_flower2.png',
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'normal',
							},
							{
								module: 'type',
								operator: '=',
								value: 'rose',
							},
						],

					],
				},
				{
					image: 'rose_bush_flower2.png@500x514',
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'small',
							},
							{
								module: 'type',
								operator: '=',
								value: 'rose',
							},
						],

					],
				},
			],
			offsetOverrides: [
				{
					offset: { x: 256, y: 440 },
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'small',
							},
						],
					],
				},
			],
			colorizationKey: 'flower2',
		},
		{
			type: 'sprite',
			image: '',
			imageOverrides: [
				{
					image: 'saintpaulias_flower2.png',
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'normal',
							},
							{
								module: 'type',
								operator: '=',
								value: 'paulia',
							},
						],

					],
				},
				{
					image: 'saintpaulias_flower2.png@500x514',
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'small',
							},
							{
								module: 'type',
								operator: '=',
								value: 'paulia',
							},
						],

					],
				},
			],
			offsetOverrides: [
				{
					offset: { x: 256, y: 440 },
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'small',
							},
						],
					],
				},
			],
			colorizationKey: 'flower2',
		},
		{
			type: 'sprite',
			image: '',
			imageOverrides: [
				{
					image: 'rose_bush_flower3.png',
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'normal',
							},
							{
								module: 'type',
								operator: '=',
								value: 'rose',
							},
						],

					],
				},
				{
					image: 'rose_bush_flower3.png@500x514',
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'small',
							},
							{
								module: 'type',
								operator: '=',
								value: 'rose',
							},
						],

					],
				},
			],
			offsetOverrides: [
				{
					offset: { x: 256, y: 440 },
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'small',
							},
						],
					],
				},
			],
			colorizationKey: 'flower3',
		},
		{
			type: 'sprite',
			image: '',
			imageOverrides: [
				{
					image: 'saintpaulias_flower3.png',
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'normal',
							},
							{
								module: 'type',
								operator: '=',
								value: 'paulia',
							},
						],

					],
				},
				{
					image: 'saintpaulias_flower3.png@500x514',
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'small',
							},
							{
								module: 'type',
								operator: '=',
								value: 'paulia',
							},
						],

					],
				},
			],
			offsetOverrides: [
				{
					offset: { x: 256, y: 440 },
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'small',
							},
						],
					],
				},
			],
			colorizationKey: 'flower3',
		},
		{
			type: 'sprite',
			image: 'split_leaf_pot.png',
			imageOverrides: [
				{
					image: 'split_leaf_pot.png@500x514',
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'small',
							},
						],
					],
				},
			],
			offsetOverrides: [
				{
					offset: { x: 256, y: 440 },
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'small',
							},
						],
					],
				},
			],
			colorizationKey: 'pot',
		},
	],
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
				license: 'Pandora-Use-Only',
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
