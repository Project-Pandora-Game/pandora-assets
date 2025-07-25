DefineAsset({
	name: 'Nightgown',
	size: 'small',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		nightgown: {
			name: 'Nightgown',
			default: '#E72020FB',
			minAlpha: 0.1,
		},
	},
	// size:780, y:378, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Clothing_upper',
			'Clothing_lower',
			'Clothing_large',
		],
	},
	poseLimits: {
		options: [
			{
				bones: {
					leg_l: [[-18, 24]],
					leg_r: [[-18, 24]],
				},
				legs: {
					pose: ['standing', 'sitting'],
				},
			},
			{
				bones: {
					leg_l: [[-25, 24]],
					leg_r: [[-25, 24]],
				},
				legs: {
					pose: 'kneeling',
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
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
