DefineAsset({
	name: 'Long Flowy Skirt',
	size: 'medium',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		skirt: {
			name: 'Skirt',
			default: '#FFFFFF',
		},
	},
	roomDeployment: {
		autoDeployRelativePosition: [-150, -144, 0],
	},
	// size:640, y:618, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Clothing_lower',
		],
	},
	poseLimits: {
		bones: {
			leg_l: [[-85, 80]],
			leg_r: [[-85, 80]],
		},
	},
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia', 'Jomshir'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'https://commons.wikimedia.org/w/index.php?curid=8888021',
				copyrightHolder: 'Jorge Mejía peralta',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
		],
	},
});
