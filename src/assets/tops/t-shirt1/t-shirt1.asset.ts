DefineAsset({
	name: 'T-Shirt',
	graphics: 'graphics.json',
	colorization: [
		{
			name: 'Shirt',
			default: '#FFFFFF',
		},
		{
			name: 'Print',
			default: '#FFFF00',
		},
	],
	modules: {
		prints: {
			type: 'typed',
			name: 'T-Shirt Print',
			variants: [
				{
					id: 'kissingSmilie',
					name: 'Kissing Smilie',
					default: true,
				},
				{
					id: 'crown',
					name: 'Crown',
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
					name: 'Shirt Sleeves',
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
				part: 'shirt',
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only',
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
		],
	},
});
