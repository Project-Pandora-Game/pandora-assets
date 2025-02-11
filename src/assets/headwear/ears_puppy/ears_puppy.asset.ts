DefineAsset({
	name: 'Artificial Puppy Ears',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		ears: {
			name: 'Ears',
			default: '#935E29',
		},
		headband: {
			name: 'Headband',
			default: '#333333',
		},
	},
	// size:200, y:150, centered
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
				part: 'catsuit',
				source: 'Self-Made',
				copyrightHolder: 'Taja',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
