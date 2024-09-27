DefineRoomDeviceAsset({
	name: 'Towel & Towel advertisement',
	size: 'large',
	colorization: {
		passe_partout: {
			name: 'Passe-partout',
			default: '#FFFFFF',
		},
		background: {
			name: 'Background',
			default: '#FEF9F3',
		},
		slogan: {
			name: 'Slogan',
			default: '#AD3B3B',
		},
		worship: {
			name: 'Worship sponsors',
			default: '#283593',
		},
	},
	staticAttributes: ['Wall'],
	preview: 'advert_preview.png',
	slots: {},
	modules: {
		size: {
			type: 'typed',
			name: 'Advert size',
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
		x: 700,
		y: 1630,
	},
	graphicsLayers: [
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'background',
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
			colorizationKey: 'slogan',
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
			colorizationKey: 'worship',
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
