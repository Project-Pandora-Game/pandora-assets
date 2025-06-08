DefineRoomDeviceAsset({
	name: 'Sign Post',
	size: 'medium',
	colorization: {
		sign: {
			name: 'Sign Post',
			default: '#FFC591',
		},
	},
	staticAttributes: ['Floor'],
	preview: 'preview.png',
	slots: {},
	modules: {
		size: {
			type: 'typed',
			name: 'Sign size',
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
		x: 185,
		y: 400,
	},
	graphicsLayers: [
		{
			type: 'sprite',
			image: '',
			imageOverrides: [
				{
					image: 'sign_post.png',
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
					image: 'sign_post.png@223x257',
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
					offset: { x: 74, y: 170 },
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
			colorizationKey: 'sign',
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
				source: 'https://skfb.ly/6Vzo6',
				copyrightHolder: 'Carlos',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
		],
	},
});
