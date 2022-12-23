DefineAsset({
	name: 'Jeans',
	size: 'medium',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: [
		{
			name: 'Pants',
			default: '#9BCDFF',
		},
		{
			name: 'Button',
			default: '#E6E6E6',
		},
	],
	attributes: [
		'Clothing',
		'Clothing_lower',
	],
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia', 'Titania'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'base form',
				source: 'Private',
				copyrightHolder: 'QueenTita',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only',
			},
		],
	},
});
