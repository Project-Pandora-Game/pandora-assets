DefineAsset({
	name: 'Bra (style 1)',
	size: 'small',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		bra: {
			name: 'Bra',
			default: '#FA5F55',
		},
	},
	// size:230, y:363, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Underwear',
			'Underwear_bra',
		],
	},
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia', 'Jomshir'],
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
