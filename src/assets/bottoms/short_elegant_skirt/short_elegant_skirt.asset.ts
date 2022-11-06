DefineAsset({
	name: 'Short Elegant Skirt',
	size: 'medium',
	graphics: 'graphics.json',
	colorization: [
		{
			name: 'Skirt',
			default: '#222222',
		},
	],
	modules: {
		skirtState: {
			type: 'typed',
			name: 'Skirt State',
			variants: [
				{
					id: 'normal',
					name: 'Normal',
					default: true,
				},
				{
					id: 'up',
					name: 'Pulled Up',
				},
			],
		},
	},
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'https://www.flickr.com/photos/61470346@N04/6259911046',
				copyrightHolder: 'Maria',
				editedBy: 'ClaudiaMia',
				license: 'CC BY-SA',
			},
		],
	},
});
