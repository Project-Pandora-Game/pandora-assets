DefineBodypart({
	name: 'Fox Tail',
	bodypart: 'tail',
	graphics: 'graphics.json',
	colorization: {
		tail: {
			name: 'Tail',
			default: '#fa781c',
		},
		tip: {
			name: 'Tip',
			default: '#f6e5cf',
		},
	},
	preview: 'preview.png',
	attributes: {
		provides: [
			'Fantasy',
			'Fantasy_tail',
		],
	},
	modules: {
		horizontal: {
			type: 'typed',
			name: 'Horizontal Alignment',
			expression: 'Horizontal Tail Direction',
			variants: [
				{
					id: 'left',
					name: 'Left',
					default: true,
				},
				{
					id: 'right',
					name: 'Right',
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
				copyrightHolder: 'Sandrine',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
