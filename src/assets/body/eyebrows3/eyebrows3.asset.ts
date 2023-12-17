DefineAsset({
	name: 'Eyebrows 3',
	size: 'bodypart',
	bodypart: 'eyebrows',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		eyebrows: {
			name: 'Eyebrows',
			default: '#555555',
		},
	},
	// size:200, y:195, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Eyebrows',
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
				license: 'Pandora-Use-Only',
			},
		],
	},
});
