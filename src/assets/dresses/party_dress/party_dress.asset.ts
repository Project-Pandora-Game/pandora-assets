DefineAsset({
	name: 'Party Dress',
	size: 'medium',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		partydress: {
			name: 'Party Dress',
			default: '#E15682',
		},
	},
	attributes: [
		'Clothing',
		'Clothing_upper',
		'Clothing_lower',
		'Clothing_large',
	],
	poseLimits: {
		options: [
			{
				bones: {
					leg_l: [[-18, 6]],
					leg_r: [[-18, 6]],
				},
				legs: ['standing', 'sitting'],
			},
			{
				bones: {
					leg_l: [[-25, 6]],
					leg_r: [[-25, 6]],
				},
				legs: 'kneeling',
			},
		],
	},
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'used 3D model',
				source: 'https://skfb.ly/oytrI',
				copyrightHolder: 'Andrew Lebedev',
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
