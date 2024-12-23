DefineAsset({
	name: 'Gradient Pantyhose',
	size: 'small',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		pantyhose_1: {
			name: 'Pantyhose colour 1',
			default: '#202020',
			minAlpha: 0.6,
		},
		pantyhose_2: {
			name: 'Pantyhose colour 2',
			default: '#BE0000',
			minAlpha: 0.6,
		},
	},
	// size:800, y:574, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Legwear',
		],
	},
	ownership: {
		responsibleContributor: 'Sandrine <118102950+SandrinePDR@users.noreply.github.com>',
		credits: ['ClaudiaMia', 'Sandrine'],
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
