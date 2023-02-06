DefineAsset({
	name: 'Neck Ribbon',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		ribbon: {
			name: 'Ribbon',
			default: '#FFFFFF',
		},
		frills: {
			name: 'Frills',
			default: '#333333',
		},
	},
	requirements: [
		'Collar',
		'!Collar_front_ring',
	],
	attributes: [
		'Clothing',
		'Accessory',
	],
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia', 'Jomshir'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'https://www.flickr.com/photos/hawken/3954915198/',
				copyrightHolder: 'Hawken King',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				source: 'https://www.flickr.com/photos/hawken/3954134423/',
				copyrightHolder: 'Hawken King',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
		],
	},
});
