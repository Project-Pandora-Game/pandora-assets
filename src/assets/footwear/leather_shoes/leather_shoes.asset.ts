DefineAsset({
	name: 'Leather Shoes',
	size: 'medium',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		shoes: {
			name: 'Shoes',
			default: '#A25F44',
		},
		soles: {
			name: 'Soles',
			default: '#90715D',
		},
	},
	// size:240, y:1143, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Footwear',
		],
	},
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'images',
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only',
			},
			{
				part: 'used 3D model',
				source: 'https://skfb.ly/oMFCZ',
				copyrightHolder: 'SUSUSUBE',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
		],
	},
});
