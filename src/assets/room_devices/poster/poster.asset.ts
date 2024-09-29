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
	graphicsLayers: [
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'background_1',
			imageOverrides: [
				{
					image: 't-and-t_background.png',
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'large',
							},
							{
								module: 'posterType',
								operator: '=',
								value: 'TowelAndTowelAdvert',
							},
						],
					],
				},
				{
					image: 't-and-t_background.png@700x1000',
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'medium',
							},
							{
								module: 'posterType',
								operator: '=',
								value: 'TowelAndTowelAdvert',
							},
						],
					],
				},
				{
					image: 't-and-t_background.png@350x500',
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'small',
							},
							{
								module: 'posterType',
								operator: '=',
								value: 'TowelAndTowelAdvert',
							},
						],
					],
				},
			],
			offsetOverrides: [
				{
					offset: { x: 525, y: 300 },
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
				{
					offset: { x: 350, y: 150 },
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'medium',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: '',
			imageOverrides: [
				{
					image: 't-and-t_towel.png',
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'large',
							},
							{
								module: 'posterType',
								operator: '=',
								value: 'TowelAndTowelAdvert',
							},
						],
					],
				},
				{
					image: 't-and-t_towel.png@700x1000',
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'medium',
							},
							{
								module: 'posterType',
								operator: '=',
								value: 'TowelAndTowelAdvert',
							},
						],
					],
				},
				{
					image: 't-and-t_towel.png@350x500',
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'small',
							},
							{
								module: 'posterType',
								operator: '=',
								value: 'TowelAndTowelAdvert',
							},
						],
					],
				},
			],
			offsetOverrides: [
				{
					offset: { x: 525, y: 300 },
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
				{
					offset: { x: 350, y: 150 },
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'medium',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'color_1',
			imageOverrides: [
				{
					image: 't-and-t_slogan.png',
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'large',
							},
							{
								module: 'posterType',
								operator: '=',
								value: 'TowelAndTowelAdvert',
							},
						],
					],
				},
				{
					image: 't-and-t_slogan.png@700x1000',
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'medium',
							},
							{
								module: 'posterType',
								operator: '=',
								value: 'TowelAndTowelAdvert',
							},
						],
					],
				},
				{
					image: 't-and-t_slogan.png@350x500',
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'small',
							},
							{
								module: 'posterType',
								operator: '=',
								value: 'TowelAndTowelAdvert',
							},
						],
					],
				},
			],
			offsetOverrides: [
				{
					offset: { x: 525, y: 300 },
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
				{
					offset: { x: 350, y: 150 },
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'medium',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'color_2',
			imageOverrides: [
				{
					image: 't-and-t_worship.png',
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'large',
							},
							{
								module: 'posterType',
								operator: '=',
								value: 'TowelAndTowelAdvert',
							},
						],
					],
				},
				{
					image: 't-and-t_worship.png@700x1000',
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'medium',
							},
							{
								module: 'posterType',
								operator: '=',
								value: 'TowelAndTowelAdvert',
							},
						],
					],
				},
				{
					image: 't-and-t_worship.png@350x500',
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'small',
							},
							{
								module: 'posterType',
								operator: '=',
								value: 'TowelAndTowelAdvert',
							},
						],
					],
				},
			],
			offsetOverrides: [
				{
					offset: { x: 525, y: 300 },
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
				{
					offset: { x: 350, y: 150 },
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'medium',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: '',
			imageOverrides: [
				{
					image: 'passepartout1.png',
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'large',
							},
						],
					],
				},
				{
					image: 'passepartout1.png@700x1000',
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'medium',
							},
						],
					],
				},
				{
					image: 'passepartout1.png@350x500',
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
					offset: { x: 525, y: 300 },
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
				{
					offset: { x: 350, y: 150 },
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'medium',
							},
						],
					],
				},
			],
			colorizationKey: 'passe_partout',
		},
	],
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
