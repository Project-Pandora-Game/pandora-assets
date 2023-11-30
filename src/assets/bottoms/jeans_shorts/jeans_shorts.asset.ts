DefineAsset({
	name: 'Jeans Shorts',
	size: 'medium',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		pants: {
			name: 'Pants',
			default: '#7396B3',
		},
		button: {
			name: 'Button',
			default: '#666666',
		},
	},
	attributes: [
		'Clothing',
		'Clothing_lower',
	],
	blockSlots: ['vagina', 'anus'],
	coverSlots: ['vagina', 'anus'],
	occupySlots: {
		'outsideVaginaArea': 1,
		'outsideAnusArea': 1,
	},
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
