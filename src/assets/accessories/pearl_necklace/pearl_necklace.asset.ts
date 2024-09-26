DefineAsset({
	name: 'Pearl Necklace',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		pearls: {
			name: 'Pearls',
			default: '#FFFFFF',
		},
		largePearls: {
			name: 'Large Pearls',
			default: '#FFFFFF',
		},
	},
	// size:175, y:375, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Accessory',
		],
	},
	ownership: {
		responsibleContributor: 'Sandrine <118102950+SandrinePDR@users.noreply.github.com>',
		credits: ['SandrinePDR'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Sandrine',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
