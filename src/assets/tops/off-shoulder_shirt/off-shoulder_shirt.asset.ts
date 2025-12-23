DefineAsset({
	name: 'Off-Shoulder Shirt',
	size: 'medium',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		shirt: {
			name: 'Shirt',
			default: '#1e1e1e',
		},
	},
	// size:350, y:380, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Clothing_upper',
		],
	},
	modules: {
	},
	ownership: {
		responsibleContributor: 'Freyja <247626786+freyja-veritas@users.noreply.github.com>',
		credits: ['Freyja'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'off-shoulder shirt',
				source: 'Self-Made',
				copyrightHolder: 'Freyja',
				editedBy: 'Freyja',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
