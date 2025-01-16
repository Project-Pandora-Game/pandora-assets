DefineAsset({
	name: 'Latex Socks',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		socks: {
			name: 'Socks',
			default: '#020202FF',
			minAlpha: 0.15,
		},
		reflection: {
			name: 'Reflection',
			default: '#FFFFFF',
		},
	},
	// size:350, y:1013, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Legwear',
		],
	},
	ownership: {
		responsibleContributor: 'Sandrine <118102950+SandrinePDR@users.noreply.github.com>',
		credits: ['Taja'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'catsuit',
				source: 'Self-Made',
				copyrightHolder: 'Taja',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
