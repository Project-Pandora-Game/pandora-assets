DefineAsset({
	name: 'Nightgown',
	size: 'small',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		nightgown: {
			name: 'Nightgown',
			default: '#E72020',
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
					kneeling: 0,
					leg_l: [[-14, 6]],
					leg_r: [[-14, 6]],
				},
			},
			{
				bones: {
					kneeling: 180,
					leg_l: [[-25, 6]],
					leg_r: [[-25, 6]],
				},
			},
		],
	},
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia', 'Jomshir'],
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
