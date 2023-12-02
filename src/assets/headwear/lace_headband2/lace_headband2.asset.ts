DefineAsset({
	name: 'Lace Headband',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		headband: {
			name: 'Headband',
			default: '#FFFFFF',
		},
	},
	attributes: {
		provides: [
			'Clothing',
			'Headgear',
		],
	},
	modules: {
		headbandSize: {
			type: 'typed',
			name: 'Headband Size',
			variants: [
				{
					id: 'normal',
					name: 'Normal',
					default: true,
				},
				{
					id: 'small',
					name: 'Smaller',
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
				source: 'https://www.flickr.com/photos/koung/205286646/',
				copyrightHolder: 'Ryan Ho',
				editedBy: 'ClaudiaMia',
				license: 'CC BY-SA',
			},
		],
	},
});
