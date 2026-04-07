DefineAsset({
	name: 'Cloth Ankle Binding',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		cloth: {
			name: 'Cloth',
			default: '#FFFFFF',
		},
	},
	roomDeployment: {
		autoDeployRelativePosition: [-234, -34, 0],
	},
	//size:220, y:1138, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Restraint_legs',
		],
	},
	poseLimits: {
		options: [
			{
				bones: {
					leg_r: 2,
					leg_l: 2,
				},
				legs: {
					pose: 'standing',
				},
			},
			{
				bones: {
					leg_r: 3,
					leg_l: 3,
				},
				legs: {
					pose: 'sitting',
				},
			},
			{
				bones: {
					leg_r: 6,
					leg_l: 6,
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
