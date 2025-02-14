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
		responsibleContributor: 'Livie53 <itsalive53.cr1mson@gmail.com>',
		credits: ['Livie53'],
		modificationPolicy: 'Free to change',
		reusePolicy: 'Free to use',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Livie53',
				editedBy: 'Livie53',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
