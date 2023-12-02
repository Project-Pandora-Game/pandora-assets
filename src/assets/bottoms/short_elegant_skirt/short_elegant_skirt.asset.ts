DefineAsset({
	name: 'Short Elegant Skirt',
	size: 'medium',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		skirt: {
			name: 'Skirt',
			default: '#222222',
		},
	},
	attributes: {
		provides: [
			'Clothing',
			'Clothing_lower',
		],
	},
	modules: {
		skirtStateFront: {
			type: 'typed',
			name: 'Skirt State Front',
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
		skirtStateBack: {
			type: 'typed',
			name: 'Skirt State Back',
			variants: [
				{
					id: 'normal',
					name: 'Normal',
					default: true,
				},
				{
					id: 'up',
					name: 'Pulled up',
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
