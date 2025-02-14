DefineAsset({
	name: 'Artificial Cat Ears',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		outer: {
			name: 'Outer',
			default: '#333333',
		},
		inner: {
			name: 'Inner',
			default: '#FFFFFF',
		},
		headband: {
			name: 'Headband',
			default: '#333333',
		},
	},
	// size:216, y:162, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Fantasy',
			'Fantasy_ears',
		],
	},
	ownership: {
		responsibleContributor: 'Sandrine <118102950+SandrinePDR@users.noreply.github.com>',
		credits: ['Taja'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'ears',
				source: 'Self-Made',
				copyrightHolder: 'Taja',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
