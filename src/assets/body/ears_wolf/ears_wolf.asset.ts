DefineBodypart({
	name: 'Wolf Ears',
	bodypart: 'ears',
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
	},
	// size:216, y:162, centered
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
				part: 'ears',
				source: 'Self-Made',
				copyrightHolder: 'Taja',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
