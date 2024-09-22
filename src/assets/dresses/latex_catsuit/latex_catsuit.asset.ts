DefineAsset({
	name: 'Latex catsuit',
	size: 'large',
	allowRandomizerUsage: false,
	graphics: 'graphics.json',
	colorization: {
		suit: {
			name: 'Suit',
			default: '#202020',
			minAlpha: 0.3,
		},
		border: {
			name: 'Edges',
			default: '#A0A0A0',
			minAlpha: 0.4,
		},
		shine: {
			name: 'Shine',
			default: '#FFFFFF',
			minAlpha: 0.4,
		},
	},
	// size:460, y:364, centered
	// preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Clothing_upper',
			'Clothing_lower',
			'Clothing_large',
		],
	},
	ownership: {
		responsibleContributor: 'Sandrine <118102950+SandrinePDR@users.noreply.github.com>',
		credits: ['Curry'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'rug',
				source: 'Self-Made',
				copyrightHolder: 'Curry',
				editedBy: 'SandrinePDR',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},

});

