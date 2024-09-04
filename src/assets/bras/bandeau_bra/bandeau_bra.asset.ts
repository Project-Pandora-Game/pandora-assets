DefineAsset({
	name: 'Bandeau Bra',
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
	modules: {
		bustState: {
			type: 'typed',
			name: 'Bust State',
			variants: [
				{
					id: 'covered',
					name: 'Covered',
					default: true,
				},
				{
					id: 'exposed',
					name: 'Exposed',
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
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
