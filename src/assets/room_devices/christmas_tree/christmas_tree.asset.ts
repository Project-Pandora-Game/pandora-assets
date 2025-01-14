DefineRoomDeviceAsset({
	name: 'Christmas Tree',
	size: 'huge',
	colorization: {
		tree: {
			name: 'Tree',
			default: '#354E25',
		},
		accent: {
			name: 'Accent color',
			default: '#D1CA9B',
		},
	},
	staticAttributes: ['Floor'],
	preview: 'tree_preview.png',
	slots: {},
	modules: {
		size: {
			type: 'typed',
			name: 'Tree size',
			staticConfig: { slotName: null },
			variants: [
				{
					id: 'large',
					name: 'Large',
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
		x: 673,
		y: 1790,
	},
	graphicsLayers: [
		{
			type: 'sprite',
			image: '',
			imageOverrides: [
				{
					image: 'tree_base.png',
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
					image: 'tree_base.png@797x1229',
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
					offset: { x: 260, y: 735 },
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
			colorizationKey: 'tree',
		},
		{
			type: 'sprite',
			image: '',
			imageOverrides: [
				{
					image: 'tree_accent.png',
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
					image: 'tree_accent.png@797x1229',
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
					offset: { x: 260, y: 735 },
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
			colorizationKey: 'accent',
		},
	],
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'used 3D model',
				source: 'https://skfb.ly/oBNuB',
				copyrightHolder: 'anybody',
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
