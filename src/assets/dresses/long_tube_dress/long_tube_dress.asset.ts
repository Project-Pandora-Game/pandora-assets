DefineAsset({
	name: 'Long Tube Dress',
	size: 'medium',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		dress: {
			name: 'Dress',
			default: '#5740b7',
		},
	},
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
					leg_l: [[-10, 7]],
					leg_r: [[-10, 7]],
				},
				legs: {
					pose: ['standing', 'sitting'],
				},
			},
			{
				bones: {
					leg_l: [[-18, 10]],
					leg_r: [[-18, 10]],
				},
				legs: {
					pose: 'kneeling',
				},
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
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
