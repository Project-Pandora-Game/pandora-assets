DefineAsset({
	name: 'Flower Crown',
	size: 'medium',
	graphics: 'graphics.json',
	colorization: {
		flowerCrown: {
			name: 'Flower Crown',
			default: '#FFFFFF',
		},
	},
	attributes: {
		provides: [
			'Clothing',
			'Headgear',
		],
	},
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'front',
				source: 'https://www.flickr.com/photos/bellafaye8/12126768373/',
				copyrightHolder: 'Faylyne',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'back',
				source: 'https://www.flickr.com/photos/bellafaye8/10918036543/',
				copyrightHolder: 'Faylyne',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
		],
	},
});
