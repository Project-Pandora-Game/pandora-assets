DefineAsset({
	name: 'Stocking',
	size: 'small',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		stocking: {
			name: 'Stocking',
			default: '#584747',
		},
	},
	attributes: [
		'Legwear',
	],
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only',
			},
			{
				part: 'stocking end pattern',
				source: 'https://www.flickr.com/photos/61470346@N04/6259911046',
				copyrightHolder: 'Maria',
				editedBy: 'ClaudiaMia',
				license: 'CC BY-SA',
			},
		],
	},
});
