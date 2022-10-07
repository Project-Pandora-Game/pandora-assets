DefineAsset({
	name: 'Lace Headband',
	graphics: 'graphics.json',
	colorization: [
		{
			name: 'Headband',
			default: '#FFFFFF',
		},
	],
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
