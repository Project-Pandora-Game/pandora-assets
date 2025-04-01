DefineAsset({
	name: 'Bunny Cuffs',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		cuffs: {
			name: 'Cuffs',
			default: '#FFFFFF',
		},
		buttons: {
			name: 'Buttons',
			default: '#202020',
		},
	},
	// size:125, y:600, x:200
	preview: 'preview.png',
	attributes: {
		provides: [
			'Accessory',
		],
	},
	ownership: {
		responsibleContributor: 'Sandrine <118102950+SandrinePDR@users.noreply.github.com>',
		credits: ['Taja'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Taja',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
