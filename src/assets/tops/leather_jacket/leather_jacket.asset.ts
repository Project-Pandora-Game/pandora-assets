DefineAsset({
	name: 'Leather Jacket',
	size: 'medium',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		jacket: {
			name: 'Jacket',
			default: '#BBBBBB',
		},
	},
	attributes: [
		'Clothing',
		'Clothing_upper',
		'Clothing_outer',
	],
	hides: [
		'Underwear_bra',
		'Underwear_corset',
	],
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'used 3D model',
				source: 'https://skfb.ly/o8Noz',
				copyrightHolder: 'CG StudioX',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'images',
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only',
			},
		],
	},
});