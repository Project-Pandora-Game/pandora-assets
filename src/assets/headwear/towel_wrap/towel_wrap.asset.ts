DefineAsset({
	name: 'Towel Wrap',
	size: 'medium',
	graphics: 'graphics.json',
	colorization: {
		towel: {
			name: 'Towel Wrap',
			default: '#EEEEEE',
		},
	},
	// size:200, y:182, centered
	//preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Headgear',
		],
		hides: [
			'Hair',
			'Ears',
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
				part: 'towel',
				source: 'Self-Made',
				copyrightHolder: 'Tajo',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
