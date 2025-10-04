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
	graphics: 'roomDeviceGraphics.json',
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
