DefineAsset({
	name: 'Taped Vibrating Egg (Clitoris)',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		vibrator: {
			name: 'Egg',
			default: '#FF9ED2',
		},
		tape: {
			name: 'Tape',
			default: '#F2E3EBDA',
			minAlpha: 0.0,
		},
	},
	roomDeployment: {
		autoDeployRelativePosition: [-40, -40, 0],
	},
	preview: 'preview.png',
	attributes: {
		provides: [
			'Toy',
			'Vulva_item',
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
