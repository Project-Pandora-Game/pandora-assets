DefineAsset({
	name: 'Boxer Shorts',
	size: 'medium',
	graphics: 'graphics.json',
	colorization: {
		waistBand: {
			name: 'Waistband',
			default: '#CDCDCD',
		},
		shorts: {
			name: 'Shorts',
			default: '#ECECEC',
		},
	},
	// size:270, y:585, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Underwear',
			'Underwear_pants',
		],
		hides: ['Penis'],
	},
	ownership: {
		responsibleContributor: 'Hareo <59668834+Kane-678@users.noreply.github.com>',
		credits: ['Hareo'],
		modificationPolicy: 'Fixes only, otherwise ask',
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Hareo',
				editedBy: 'Hareo',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
