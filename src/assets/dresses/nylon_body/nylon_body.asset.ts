DefineAsset({
	name: 'Nylon Body',
	size: 'small',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		body: {
			name: 'Body',
			default: '#FFFFFFCC',
			minAlpha: 0.8,
		},
	},
	// size:420, y:350, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Clothing_upper',
			'Clothing_lower',
		],
	},
	ownership: {
		responsibleContributor: 'Sandrine <118102950+SandrinePDR@users.noreply.github.com>',
		credits: ['Taja'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'body',
				source: 'Self-Made',
				copyrightHolder: 'Taja',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
