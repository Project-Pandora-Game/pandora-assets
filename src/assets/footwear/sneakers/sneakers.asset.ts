DefineAsset({
	name: 'Sneakers',
	size: 'medium',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		sneakers: {
			name: 'Sneakers',
			default: '#006DDB',
		},
		soles: {
			name: 'Soles',
			default: '#FFFFFF',
		},
		shoelaces: {
			name: 'Shoelaces',
			default: '#FFFFFF',
		},
	},
	attributes: {
		provides: [
			'Clothing',
			'Footwear',
		],
	},
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'https://www.flickr.com/photos/33820070@N04/5120153656',
				copyrightHolder: 'Phil Manker',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
		],
	},
});
