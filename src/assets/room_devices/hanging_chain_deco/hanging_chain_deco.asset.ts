DefineRoomDeviceAsset({
	name: 'Hanging Chain Deco',
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
		y: 1930,
	},
	graphicsLayers: [
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'chain',
			imageOverrides: [
				{
					image: 'chain.png',
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
					image: 'chain.png@23x1177',
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
					image: 'chain.png@15x768',
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
					offset: { x: 23, y: -100 },
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
					offset: { x: 8, y: -100 },
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
		],
	},
});
