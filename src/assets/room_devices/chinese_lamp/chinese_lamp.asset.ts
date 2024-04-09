DefineRoomDeviceAsset({
	name: 'Chinese Lamp',
	size: 'large',
	colorization: {
		lamp: {
			name: 'Lamp',
			default: '#EE8105',
		},
		shine: {
			name: 'Outer shine',
			default: '#FBA44180',
			minAlpha: 0,
		},
		shine_inner: {
			name: 'Brightness',
			default: '#FFFFFF80',
			minAlpha: 10,
		},
		pendulum: {
			name: 'Lamp pendulum',
			default: '#CEA278',
		},
	},
	staticAttributes: ['Wall'],
	preview: 'lamp_preview.png',
	slots: {},
	modules: {
		operation: {
			type: 'typed',
			name: 'Lamp operation',
			variants: [
				{
					id: 'on',
					name: 'Light on',
					default: true,
				},
				{
					id: 'off',
					name: 'Light off',
				},
			],
		},
		configuration: {
			type: 'typed',
			name: 'Lamp configuration',
			variants: [
				{
					id: 'wall',
					name: 'Wall-mounted',
					default: true,
				},
				{
					id: 'hanging',
					name: 'Hanging from the ceiling',
				},
			],
		},
		size: {
			type: 'typed',
			name: 'Lamp size',
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
		x: 250,
		y: 1800,
	},
	graphicsLayers: [
		{
			type: 'sprite',
			image: '',
			imageOverrides: [
				{
					image: 'lamp_shine_outer.png',
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'normal',
							},
							{
								module: 'operation',
								operator: '=',
								value: 'on',
							},
						],
					],
				},
				{
					image: 'lamp_shine_outer.png@375x525',
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'small',
							},
							{
								module: 'operation',
								operator: '=',
								value: 'on',
							},
						],

					],
				},
			],
			offsetOverrides: [
				{
					offset: { x: 62, y: 10 },
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
			colorizationKey: 'shine',
		},
		{
			type: 'sprite',
			image: 'lamp_base.png',
			imageOverrides: [
				{
					image: 'lamp_base.png@375x525',
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
					offset: { x: 62, y: 10 },
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
			colorizationKey: 'lamp',
		},
		{
			type: 'sprite',
			image: '',
			imageOverrides: [
				{
					image: 'lamp_shine_inner.png',
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'normal',
							},
							{
								module: 'operation',
								operator: '=',
								value: 'on',
							},
						],
					],
				},
				{
					image: 'lamp_shine_inner.png@375x525',
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'small',
							},
							{
								module: 'operation',
								operator: '=',
								value: 'on',
							},
						],

					],
				},
			],
			offsetOverrides: [
				{
					offset: { x: 62, y: 10 },
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
			colorizationKey: 'shine_inner',
		},
		{
			type: 'sprite',
			image: 'lamp_overlay.png',
			imageOverrides: [
				{
					image: 'lamp_overlay.png@375x525',
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
					offset: { x: 62, y: 10 },
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
			colorizationKey: 'lamp',
		},
		{
			type: 'sprite',
			image: '',
			imageOverrides: [
				{
					image: 'lamp_pendulum.png',
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'normal',
							},
							{
								module: 'configuration',
								operator: '=',
								value: 'hanging',
							},
						],
					],
				},
				{
					image: 'lamp_pendulum.png@375x525',
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'small',
							},
							{
								module: 'configuration',
								operator: '=',
								value: 'hanging',
							},
						],

					],
				},
			],
			offsetOverrides: [
				{
					offset: { x: 62, y: 10 },
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
			colorizationKey: 'pendulum',
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
				license: 'Pandora-Use-Only-v1-or-later',
			},
			{
				part: 'lamp base',
				source: 'https://www.flickr.com/photos/prayitnophotography/51854977369/',
				copyrightHolder: 'prayitnophotography',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
		],
	},
});
