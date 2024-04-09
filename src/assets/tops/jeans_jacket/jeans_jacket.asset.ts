DefineAsset({
	name: 'Jeans Jacket',
	size: 'medium',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		jacket: {
			name: 'Jacket',
			default: '#5278A3',
		},
	},
	// size:500, y:336, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Clothing_upper',
			'Clothing_outer',
		],
	},
	modules: {
		sleeves: {
			type: 'typed',
			name: 'Jacket Type',
			variants: [
				{
					id: 'none',
					name: 'Sleeveless',
				},
				{
					id: 'long',
					name: 'Long Sleeves',
					default: true,
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
				part: 'used 3D model',
				source: 'https://skfb.ly/owrpD',
				copyrightHolder: 'Digital Fashionwear (DF)',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'images',
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
