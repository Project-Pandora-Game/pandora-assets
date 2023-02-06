DefineAsset({
	name: 'Frilly Headband',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		headband: {
			name: 'Headband',
			default: '#FFFFFF',
		},
	},
	attributes: [
		'Clothing',
		'Headgear',
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
				source: 'https://www.flickr.com/photos/9296771@N06/14399287254/',
				copyrightHolder: 'C. Fountainstand',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
		],
	},
});
