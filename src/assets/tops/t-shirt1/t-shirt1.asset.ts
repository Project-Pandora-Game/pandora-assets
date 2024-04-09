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
		prints: {
			type: 'typed',
			name: 'T-Shirt Print',
			variants: [
				{
					id: 'crown',
					name: 'Crown',
					default: true,
				},
				{
					id: 'kissingSmilie',
					name: 'Kissing Smilie',
				},
				{
					id: 'afk',
					name: 'AFK',
				},
				{
					id: 'cc',
					name: 'CC art',
				},
				{
					id: 'catHead',
					name: 'Cat Head',
				},
				{
					id: 'sittingCat',
					name: 'Sitting Cat',
				},
				{
					id: 'flogger',
					name: 'Flogger',
				},
				{
					id: 'noPrint',
					name: 'No Print',
				},
			],
		},
		sleeves: {
			type: 'typed',
			name: 'T-Shirt Type',
			variants: [
				{
					id: 'short',
					name: 'Short Sleeves',
					default: true,
				},
				{
					id: 'long',
					name: 'Long Sleeves',
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
		],
	},
});
