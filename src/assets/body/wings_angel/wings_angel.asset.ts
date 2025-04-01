DefineBodypart({
	name: 'Angel Wings',
	bodypart: 'wings',
	allowRandomizerUsage: false,
	graphics: 'graphics.json',
	colorization: {
		feathers: {
			name: 'Feathers',
			default: '#FFFFFF',
		},
	},
	// size:200, y:349, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Fantasy',
		],
	},
	modules: {
		wingsState: {
			type: 'typed',
			name: 'Wings State',
			expression: 'Wings State',
			variants: [
				{
					id: 'hidden',
					name: 'Hidden',
					default: true,
				},
				{
					id: 'closed',
					name: 'Folded',
				},
				{
					id: 'open',
					name: 'Spread',
				},
			],
		},
	},
	ownership: {
		responsibleContributor: 'Sandrine <118102950+SandrinePDR@users.noreply.github.com>',
		credits: ['Taja'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Taja',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
