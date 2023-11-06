DefineRoomDeviceAsset({
	name: 'Picture Frame',
	size: 'large',
	colorization: {
		frame: {
			name: 'Frame',
			default: '#ffffff',
		},
		passe_partout: {
			name: 'Passe-partout',
			default: '#ffffff',
		},
	},
	slots: {},
	modules: {
		frame: {
			type: 'typed',
			name: 'Frame',
			variants: [
				{
					id: 'frame1',
					name: 'Frame A',
					default: true,
				},
				{
					id: 'frame2',
					name: 'Frame B',
				},
			],
		},
		pp: {
			type: 'typed',
			name: 'Passe-partout',
			variants: [
				{
					id: 'pp1',
					name: 'Small',
					default: true,
				},
				{
					id: 'pp2',
					name: 'Medium',
				},
			],
		},
		picture: {
			type: 'typed',
			name: 'Picture',
			variants: [
				{
					id: 'pandora',
					name: 'Pandora',
					default: true,
				},
				{
					id: 'mistress',
					name: 'Mistress',
				},
				{
					id: 'heel',
					name: 'Heel',
				},
				{
					id: 'fruit',
					name: 'Fruit',
				},
				{
					id: 'anime1',
					name: 'Anime A',
				},
			],
		},
		size: {
			type: 'typed',
			name: 'Frame size',
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
			imageOverrides: [
				{
					image: 'pandora.png',
					condition: [
						[
							{
								module: 'picture',
								operator: '=',
								value: 'pandora',
							},
							{
								module: 'size',
								operator: '=',
								value: 'large',
							},
						],
					],
				},
				{
					image: 'pandora.png@700x1000',
					condition: [
						[
							{
								module: 'picture',
								operator: '=',
								value: 'pandora',
							},
							{
								module: 'size',
								operator: '=',
								value: 'medium',
							},
						],
					],
				},
				{
					image: 'pandora.png@350x500',
					condition: [
						[
							{
								module: 'picture',
								operator: '=',
								value: 'pandora',
							},
							{
								module: 'size',
								operator: '=',
								value: 'small',
							},
						],
					],
				},
				{
					image: 'mistress.png',
					condition: [
						[
							{
								module: 'picture',
								operator: '=',
								value: 'mistress',
							},
							{
								module: 'size',
								operator: '=',
								value: 'large',
							},
						],
					],
				},
				{
					image: 'mistress.png@700x1000',
					condition: [
						[
							{
								module: 'picture',
								operator: '=',
								value: 'mistress',
							},
							{
								module: 'size',
								operator: '=',
								value: 'medium',
							},
						],
					],
				},
				{
					image: 'mistress.png@350x500',
					condition: [
						[
							{
								module: 'picture',
								operator: '=',
								value: 'mistress',
							},
							{
								module: 'size',
								operator: '=',
								value: 'small',
							},
						],
					],
				},
				{
					image: 'heel.png',
					condition: [
						[
							{
								module: 'picture',
								operator: '=',
								value: 'heel',
							},
							{
								module: 'size',
								operator: '=',
								value: 'large',
							},
						],
					],
				},
				{
					image: 'heel.png@700x1000',
					condition: [
						[
							{
								module: 'picture',
								operator: '=',
								value: 'heel',
							},
							{
								module: 'size',
								operator: '=',
								value: 'medium',
							},
						],
					],
				},
				{
					image: 'heel.png@350x500',
					condition: [
						[
							{
								module: 'picture',
								operator: '=',
								value: 'heel',
							},
							{
								module: 'size',
								operator: '=',
								value: 'small',
							},
						],
					],
				},
				{
					image: 'fruits.png',
					condition: [
						[
							{
								module: 'picture',
								operator: '=',
								value: 'fruit',
							},
							{
								module: 'size',
								operator: '=',
								value: 'large',
							},
						],
					],
				},
				{
					image: 'fruits.png@700x1000',
					condition: [
						[
							{
								module: 'picture',
								operator: '=',
								value: 'fruit',
							},
							{
								module: 'size',
								operator: '=',
								value: 'medium',
							},
						],
					],
				},
				{
					image: 'fruits.png@350x500',
					condition: [
						[
							{
								module: 'picture',
								operator: '=',
								value: 'fruit',
							},
							{
								module: 'size',
								operator: '=',
								value: 'small',
							},
						],
					],
				},
				{
					image: 'anime.png',
					condition: [
						[
							{
								module: 'picture',
								operator: '=',
								value: 'anime1',
							},
							{
								module: 'size',
								operator: '=',
								value: 'large',
							},
						],
					],
				},
				{
					image: 'anime.png@700x1000',
					condition: [
						[
							{
								module: 'picture',
								operator: '=',
								value: 'anime1',
							},
							{
								module: 'size',
								operator: '=',
								value: 'medium',
							},
						],
					],
				},
				{
					image: 'anime.png@350x500',
					condition: [
						[
							{
								module: 'picture',
								operator: '=',
								value: 'anime1',
							},
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
								module: 'pp',
								operator: '=',
								value: 'pp1',
							},
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
								module: 'pp',
								operator: '=',
								value: 'pp1',
							},
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
								module: 'pp',
								operator: '=',
								value: 'pp1',
							},
							{
								module: 'size',
								operator: '=',
								value: 'small',
							},
						],
					],
				},
				{
					image: 'passepartout2.png',
					condition: [
						[
							{
								module: 'pp',
								operator: '=',
								value: 'pp2',
							},
							{
								module: 'size',
								operator: '=',
								value: 'large',
							},
						],
					],
				},
				{
					image: 'passepartout2.png@700x1000',
					condition: [
						[
							{
								module: 'pp',
								operator: '=',
								value: 'pp2',
							},
							{
								module: 'size',
								operator: '=',
								value: 'medium',
							},
						],
					],
				},
				{
					image: 'passepartout2.png@350x500',
					condition: [
						[
							{
								module: 'pp',
								operator: '=',
								value: 'pp2',
							},
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
		{
			type: 'sprite',
			image: '',
			imageOverrides: [
				{
					image: 'pictureframe1.png',
					condition: [
						[
							{
								module: 'frame',
								operator: '=',
								value: 'frame1',
							},
							{
								module: 'size',
								operator: '=',
								value: 'large',
							},
						],
					],
				},
				{
					image: 'pictureframe1.png@700x1000',
					condition: [
						[
							{
								module: 'frame',
								operator: '=',
								value: 'frame1',
							},
							{
								module: 'size',
								operator: '=',
								value: 'medium',
							},
						],
					],
				},
				{
					image: 'pictureframe1.png@350x500',
					condition: [
						[
							{
								module: 'frame',
								operator: '=',
								value: 'frame1',
							},
							{
								module: 'size',
								operator: '=',
								value: 'small',
							},
						],
					],
				},
				{
					image: 'pictureframe2.png',
					condition: [
						[
							{
								module: 'frame',
								operator: '=',
								value: 'frame2',
							},
							{
								module: 'size',
								operator: '=',
								value: 'large',
							},
						],
					],
				},
				{
					image: 'pictureframe2.png@700x1000',
					condition: [
						[
							{
								module: 'frame',
								operator: '=',
								value: 'frame2',
							},
							{
								module: 'size',
								operator: '=',
								value: 'medium',
							},
						],
					],
				},
				{
					image: 'pictureframe2.png@350x500',
					condition: [
						[
							{
								module: 'frame',
								operator: '=',
								value: 'frame2',
							},
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
			colorizationKey: 'frame',
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
				part: 'mistress picture',
				source: 'https://www.flickr.com/photos/99576374@N02/49016779026/',
				copyrightHolder: 'Tom Marvel',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'heel picture',
				source: 'https://www.flickr.com/photos/aroberts/3387826514',
				copyrightHolder: 'Andy Roberts',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'anime picture',
				source: 'https://www.flickr.com/photos/centella_x/8973612302/',
				copyrightHolder: 'Centella.',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'picture frame2',
				source: 'https://www.flickr.com/photos/34651674@N07/6350817003/',
				copyrightHolder: 'Stephen.',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
		],
	},
});
