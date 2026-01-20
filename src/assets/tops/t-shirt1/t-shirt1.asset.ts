DefineAsset({
	name: 'T-Shirt',
	size: 'medium',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		shirt: {
			name: 'Shirt',
			default: '#6E8991',
		},
		print: {
			name: 'Print',
			default: '#FFFFFF',
		},
	},
	// size:350, y:380, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Clothing_upper',
		],
	},
	modules: {
		neckline: {
			type: 'typed',
			name: 'T-Shirt Neckline',
			variants: [
				{
					id: 'jewel',
					name: 'Jewel',
				},
				{
					id: 'round',
					name: 'Round',
				},
				{
					id: 'boat',
					name: 'Boat',
					default: true,
				},
				{
					id: 'v-neck',
					name: 'V-Neck',
				},
			],
		},
		prints: {
			type: 'typed',
			name: 'T-Shirt Print',
			variants: [
				{
					id: 'crown',
					name: 'Crown',
					default: true,
					properties: {
						stateFlags: {
							provides: ['small_print'],
						},
					},
				},
				{
					id: 'kissingSmilie',
					name: 'Kissing Smilie',
					properties: {
						stateFlags: {
							provides: ['small_print'],
						},
					},
				},
				{
					id: 'afk',
					name: 'AFK',
					properties: {
						stateFlags: {
							provides: ['small_print'],
						},
					},
				},
				{
					id: 'cc',
					name: 'CC art',
					properties: {
						stateFlags: {
							provides: ['small_print'],
						},
					},
				},
				{
					id: 'catHead',
					name: 'Cat Head',
					properties: {
						stateFlags: {
							provides: ['small_print'],
						},
					},
				},
				{
					id: 'sittingCat',
					name: 'Sitting Cat',
				},
				{
					id: 'flogger',
					name: 'Flogger',
					properties: {
						stateFlags: {
							provides: ['small_print'],
						},
					},
				},
				{
					id: 'noPrint',
					name: 'No Print',
					properties: {
						stateFlags: {
							provides: ['small_print'],
						},
					},
				},
			],
		},
		sleeves: {
			type: 'typed',
			name: 'T-Shirt Sleeves Length',
			variants: [
				{
					id: 'sleeveless',
					name: 'Sleeveless',
				},
				{
					id: 'cap',
					name: 'Cap Sleeves',
				},
				{
					id: 'short',
					name: 'Short Sleeves',
					default: true,
				},
				{
					id: 'three-quarter',
					name: 'Three-Quarter Sleeves',
				},
				{
					id: 'long',
					name: 'Long Sleeves',
				},
			],
		},
		type: {
			type: 'typed',
			name: 'T-Shirt Type',
			variants: [
				{
					id: 'regular',
					name: 'Regular',
					default: true,
				},
				{
					id: 'cropped',
					name: 'Cropped',
					properties: {
						stateFlags: {
							requires: {
								small_print: 'Cropped T-Shirts must have a smaller print.',
							},
						},
					},
				},
			],
		},
	},
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia', 'Jomshir'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'shirt & and the prints not listed below',
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only-v1-or-later',
			},
			{
				part: 'crown',
				source: 'https://openclipart.org/detail/162673/crown',
				copyrightHolder: 'Alex Iovenko',
				editedBy: 'ClaudiaMia',
				license: 'CC0',
			},
			{
				part: 'kissing smilie',
				source: 'https://openclipart.org/detail/327079/kiss-emoji-bw-negative',
				copyrightHolder: 'Rafael Ferran i Peralta',
				editedBy: 'ClaudiaMia',
				license: 'CC0',
			},
			{
				part: 'cat head',
				source: 'https://www.flickr.com/photos/vintage_illustration/32200181178/',
				copyrightHolder: 'Rawpixel.com & Jean Bernard',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'sitting cat',
				source: 'https://www.flickr.com/photos/vintage_illustration/46234365162/',
				copyrightHolder: 'Rawpixel.com & Julie de Graag',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'separated sleeves from top and made cropped/sleeveless variants',
				source: 'Self-Made',
				copyrightHolder: 'Freyja',
				editedBy: 'Freyja',
				license: 'Pandora-Use-Only-v1-or-later',
			},
			{
				part: 'Necklines (jewel, round, v-neck) and sleeves (cap, three-quarter) variants',
				source: 'Self-Made',
				copyrightHolder: 'Klewdia',
				editedBy: 'Klewdia',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
