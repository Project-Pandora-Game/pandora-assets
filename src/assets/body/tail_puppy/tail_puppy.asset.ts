DefineBodypart({
	name: 'Puppy Tail',
	bodypart: 'tail',
	allowRandomizerUsage: false,
	graphics: 'graphics.json',
	colorization: {
		tail: {
			name: 'Tail',
			default: '#785A2D',
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
		thickness: {
			type: 'typed',
			name: 'Tail Thickness',
			variants: [
				{
					id: 'thin',
					name: 'Thin',
				},
				{
					id: 'normal',
					name: 'Normal',
					default: true,
				},
				{
					id: 'thick',
					name: 'Fluffy',
				},
			],
		},
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
		vertical: {
			type: 'typed',
			name: 'Vertical Alignment',
			expression: 'Vertical Tail Direction',
			variants: [
				{
					id: 'up',
					name: 'Up',
					default: true,
				},
				{
					id: 'down',
					name: 'Down',
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
