DefineAsset({
	name: 'Belted Leather Skirt',
	size: 'medium',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		skirt: {
			name: 'Skirt',
			default: '#432222',
		},
		shine: {
			name: 'Shine',
			default: '#FFFFFF96',
			minAlpha: 0.0,
		},
	},
	roomDeployment: {
		autoDeployRelativePosition: [-120, -130, 0],
	},
	// size:350, y:540, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Clothing_lower',
		],
	},
	poseLimits: {
		options: [
			{
				bones: {
					leg_l: [[-25, 24]],
					leg_r: [[-25, 24]],
				},
				legs: {
					pose: ['standing', 'sitting'],
				},
			},
			{
				bones: {
					leg_l: [[-34, 24]],
					leg_r: [[-34, 24]],
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
				source: 'https://skfb.ly/oPoKF',
				copyrightHolder: 'Style3D CG',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
		],
	},
});
