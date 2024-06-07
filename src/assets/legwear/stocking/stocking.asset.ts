DefineAsset({
	name: 'Stockings',
	size: 'small',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		stocking: {
			name: 'Stockings',
			default: '#584747',
			minAlpha: 0.6,
		},
		seams: {
			name: 'Seams',
			default: '#766060',
		},
	},
	// size:600, y:763, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Legwear',
		],
	},
	modules: {
		stockingState: {
			type: 'typed',
			name: 'Stocking Type',
			variants: [
				{
					id: 'normal',
					name: 'Normal',
					default: true,
				},
				{
					id: 'seam',
					name: 'Seams on the back',
				},
			],
		},
	},
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia', 'Naera', 'Sandrine'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only-v1-or-later',
			},
			{
				part: 'stocking and pattern',
				source: 'https://www.flickr.com/photos/61470346@N04/6259911046',
				copyrightHolder: 'Maria',
				editedBy: 'ClaudiaMia',
				license: 'CC BY-SA',
			},
			{
				part: 'Seam',
				source: 'Self-Made',
				copyrightHolder: 'Naera',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},

		],
	},
});
