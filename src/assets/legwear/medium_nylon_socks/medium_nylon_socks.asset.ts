DefineAsset({
	name: 'Knee-high nylon socks',
	size: 'small',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		socks: {
			name: 'Socks',
			default: '#202020',
			minAlpha: 0.8,
		},
	},
	// size:350, y:1013, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Legwear',
		],
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
				editedBy: 'SandrinePDR',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
