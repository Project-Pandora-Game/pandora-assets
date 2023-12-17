DefineAsset({
	name: 'Net Top',
	size: 'medium',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		top: {
			name: 'Top',
			default: '#836456',
		},
		nylon: {
			name: 'Nylon body',
			default: '#3D2222AE',
			minAlpha: 0.05,
		},
		shadow: {
			name: 'Shadow',
			default: '#22222266',
			minAlpha: 0.1,
		},
	},
	// size:350, y:348, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Clothing_upper',
		],
	},
	modules: {
		nylon: {
			type: 'typed',
			name: 'Nylon body',
			variants: [
				{
					id: 'show',
					name: 'with',
					default: true,
				},
				{
					id: 'hide',
					name: 'without',
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
				part: 'images',
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only',
			},
		],
	},
});
