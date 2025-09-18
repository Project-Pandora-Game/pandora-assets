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
		image: {
			name: 'Image tint',
			default: '#ffffff',
		},
		text: {
			name: 'Text',
			default: '#222222',
		},
	},
	staticAttributes: ['Wall'],
	preview: 'picture_preview.png',
	slots: {},
	modules: {
		frame: {
			type: 'typed',
			name: 'Frame',
			staticConfig: { slotName: null },
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
			staticConfig: { slotName: null },
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
			staticConfig: { slotName: null },
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
				{
					id: 'blacklady',
					name: 'Lady in Black',
				},
				{
					id: 'carnival',
					name: 'Carnival',
				},
				{
					id: 'chair',
					name: 'Chair',
				},
				{
					id: 'countryside',
					name: 'Countryside',
				},
				{
					id: 'horsewoman',
					name: 'Horsewoman',
				},
				{
					id: 'village',
					name: 'Village',
				},
				{
					id: 'mirror',
					name: 'Mirror',
				},
			],
		},
		size: {
			type: 'typed',
			name: 'Frame size',
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
		text: {
			type: 'text',
			name: 'Optional writing on large pictures',
			staticConfig: {
				slotName: null,
			},
		},
		text2: {
			type: 'text',
			name: 'Optional writing on medium pictures',
			staticConfig: {
				slotName: null,
			},
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
				{
					image: 'blacklady.png',
					condition: [
						[
							{
								module: 'picture',
								operator: '=',
								value: 'blacklady',
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
					image: 'blacklady.png@700x1000',
					condition: [
						[
							{
								module: 'picture',
								operator: '=',
								value: 'blacklady',
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
					image: 'blacklady.png@350x500',
					condition: [
						[
							{
								module: 'picture',
								operator: '=',
								value: 'blacklady',
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
					image: 'carnival.png',
					condition: [
						[
							{
								module: 'picture',
								operator: '=',
								value: 'carnival',
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
					image: 'carnival.png@700x1000',
					condition: [
						[
							{
								module: 'picture',
								operator: '=',
								value: 'carnival',
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
					image: 'carnival.png@350x500',
					condition: [
						[
							{
								module: 'picture',
								operator: '=',
								value: 'carnival',
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
					image: 'chair.png',
					condition: [
						[
							{
								module: 'picture',
								operator: '=',
								value: 'chair',
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
					image: 'chair.png@700x1000',
					condition: [
						[
							{
								module: 'picture',
								operator: '=',
								value: 'chair',
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
					image: 'chair.png@350x500',
					condition: [
						[
							{
								module: 'picture',
								operator: '=',
								value: 'chair',
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
					image: 'countryside.png',
					condition: [
						[
							{
								module: 'picture',
								operator: '=',
								value: 'countryside',
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
					image: 'countryside.png@700x1000',
					condition: [
						[
							{
								module: 'picture',
								operator: '=',
								value: 'countryside',
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
					image: 'countryside.png@350x500',
					condition: [
						[
							{
								module: 'picture',
								operator: '=',
								value: 'countryside',
							},
							{
								module: 'size',
								operator: '=',
								value: 'small',
							},
						],
					],
				},
				//
				{
					image: 'horsewoman.png',
					condition: [
						[
							{
								module: 'picture',
								operator: '=',
								value: 'horsewoman',
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
					image: 'horsewoman.png@700x1000',
					condition: [
						[
							{
								module: 'picture',
								operator: '=',
								value: 'horsewoman',
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
					image: 'horsewoman.png@350x500',
					condition: [
						[
							{
								module: 'picture',
								operator: '=',
								value: 'horsewoman',
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
					image: 'village.png',
					condition: [
						[
							{
								module: 'picture',
								operator: '=',
								value: 'village',
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
					image: 'village.png@700x1000',
					condition: [
						[
							{
								module: 'picture',
								operator: '=',
								value: 'village',
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
					image: 'village.png@350x500',
					condition: [
						[
							{
								module: 'picture',
								operator: '=',
								value: 'village',
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
					image: 'mirror.png',
					condition: [
						[
							{
								module: 'picture',
								operator: '=',
								value: 'mirror',
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
					image: 'mirror.png@700x1000',
					condition: [
						[
							{
								module: 'picture',
								operator: '=',
								value: 'mirror',
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
					image: 'mirror.png@350x500',
					condition: [
						[
							{
								module: 'picture',
								operator: '=',
								value: 'mirror',
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
			colorizationKey: 'image',
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
		{
			type: 'text',
			dataModule: 'text',
			colorizationKey: 'text',
			fontSize: 64,
			offset: { x: 502, y: 310 },
			size: { width: 400, height: 580 },
		},
		{
			type: 'text',
			dataModule: 'text2',
			colorizationKey: 'text',
			fontSize: 48,
			offset: { x: 602, y: 310 },
			size: { width: 200, height: 290 },
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
			{
				part: 'mirror',
				source: 'https://creazilla.com/de/media/clipart/69930/spiegel',
				copyrightHolder: 'Creazilla',
				editedBy: 'Sandrine',
				license: 'CC0',
			},
			{
				part: 'other pictures',
				source: 'https://www.metmuseum.org/',
				copyrightHolder: 'The Metropolitan Museum of Art, New York, OA',
				editedBy: 'ClaudiaMia',
				license: 'Public Domain',
			},
		],
	},
});
