DefineAsset({
	name: 'Flip-Flops',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		soles: {
			name: 'Soles',
			default: '#603372',
		},
		straps: {
			name: 'Straps',
			default: '#B06BCC',
		},
	},
	// size:240, y:1143, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Footwear',
		],
	},
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'used 3D model',
				source: 'https://skfb.ly/oK9Vn',
				copyrightHolder: 'kane_sk06',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
