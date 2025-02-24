DefineAsset({
	name: 'Towel Wrap (head)',
	size: 'medium',
	graphics: 'graphics.json',
	colorization: {
		towel: {
			name: 'Towel Wrap',
			default: '#EEEEEE',
		},
	},
	// size:200, y:160, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Headgear',
		],
		hides: [
			'Hair',
			'Wig',
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
				copyrightHolder: 'Taja',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
