DefineBodypart({
	name: 'Puppy Ears',
	bodypart: 'ears',
	graphics: 'graphics.json',
	colorization: {
		ears: {
			name: 'Ears',
			default: '#935E29',
		},
	},
	// size:250, y:65, centered
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
