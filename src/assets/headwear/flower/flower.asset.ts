DefineAsset({
	name: 'Flower',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		flower: {
			name: 'Flower',
			default: '#FFD1D6',
		},
	},
	attributes: {
		provides: [
			'Clothing',
			'Accessory',
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
				source: 'https://www.flickr.com/photos/bellafaye8/8540085243/',
				copyrightHolder: 'Faylyne',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
		],
	},
});
