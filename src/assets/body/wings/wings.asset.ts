DefineBodypart({
	name: 'Wings',
	bodypart: 'wings',
	graphics: 'graphics.json',
	colorization: {
		feathers: {
			name: 'Feathers',
			default: '#FFFFFF',
		},
		bones: {
			name: 'Bones',
			default: '#FAECBF',
		},
		membrane: {
			name: 'Membrane',
			default: '#CCBA7C00',
			minAlpha: 0.7,
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
		wingsType: {
			type: 'typed',
			name: 'Wings Type',
			variants: [
				{
					id: 'angel',
					name: 'Angel',
				},
				{
					id: 'demon',
					name: 'Demon',
				},
			],
		},
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
