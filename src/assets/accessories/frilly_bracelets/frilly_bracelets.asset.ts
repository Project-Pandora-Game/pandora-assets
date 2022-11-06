DefineAsset({
	name: 'Frilly Bracelets',
	size: 'small',
	graphics: 'graphics.json',
	colorization: [
		{
			name: 'Bracelets',
			default: '#FFFFFF',
		},
		{
			name: 'Frills',
			default: '#333333',
		},
	],
	modules: {
		braceState: {
			type: 'typed',
			name: 'Bracelet Style',
			variants: [
				{
					id: 'up',
					name: 'Upper Arms',
				},
				{
					id: 'down',
					name: 'Over Elbows',
					default: true,
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
				source: 'https://www.flickr.com/photos/hawken/3954134423/in/photostream/',
				copyrightHolder: 'Hawken King',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
		],
	},
});
