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
	},
	pivot: {
		x: 700,
		y: 1630,
	},
	graphicsLayers: [
		{
			type: 'sprite',
			image: 'pandora.png',
			imageOverrides: [
				{
					image: 'mistress.png',
					condition: [
						[
							{
								module: 'picture',
								operator: '=',
								value: 'mistress',
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
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: 'passepartout1.png',
			imageOverrides: [
				{
					image: 'passepartout2.png',
					condition: [
						[
							{
								module: 'pp',
								operator: '=',
								value: 'pp2',
							},
						],
					],
				},
			],
			colorizationKey: 'passe_partout',
		},
		{
			type: 'sprite',
			image: 'pictureframe1.png',
			imageOverrides: [
				{
					image: 'pictureframe2.png',
					condition: [
						[
							{
								module: 'frame',
								operator: '=',
								value: 'frame2',
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
