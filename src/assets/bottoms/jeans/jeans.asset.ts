DefineAsset({
	name: 'Jeans',
	size: 'medium',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		pants: {
			name: 'Pants',
			default: '#9BCDFF',
		},
		button: {
			name: 'Button',
			default: '#E6E6E6',
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
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only',
			},
		],
	},
});
