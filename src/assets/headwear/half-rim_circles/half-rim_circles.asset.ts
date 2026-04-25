DefineAsset({
	name: 'Half-rim Circles',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		frame: {
			name: 'Frame',
			default: '#201d1d',
		},
		glass: {
			name: 'Glass',
			default: '#E6EDEF69',
			minAlpha: '1%',
		},
	},
	// size:210, y:190, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Facewear',
			'Facewear_glasses',
		],
	},
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['Alyx'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Alyx',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
