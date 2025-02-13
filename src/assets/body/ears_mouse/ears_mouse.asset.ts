DefineBodypart({
	name: 'Mouse Ears',
	bodypart: 'ears',
	graphics: 'graphics.json',
	colorization: {
		outer: {
			name: 'Outer',
			default: '#747474',
		},
		inner: {
			name: 'Inner',
			default: '#FFFFFF',
		},
	},
	// size:200, y:150, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Fantasy',
			'Fantasy_ears',
		],
		hides: [
			'Ears',
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
