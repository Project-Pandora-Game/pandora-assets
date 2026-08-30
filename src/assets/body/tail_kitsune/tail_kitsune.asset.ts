DefineBodypart({
	name: 'Kitsune Tails',
	bodypart: 'tail',
	graphics: 'graphics.json',
	colorization: {
		tail_1: {
			name: 'Tail no. 1',
			default: '#fa781c',
		},
		tip_1: {
			name: 'Tip no. 1',
			default: '#f6e5cf',
		},
		tail_2: {
			name: 'Tail no. 2',
			default: '#fa781c',
		},
		tip_2: {
			name: 'Tip no. 2',
			default: '#f6e5cf',
		},
		tail_3: {
			name: 'Tail no. 3',
			default: '#fa781c',
		},
		tip_3: {
			name: 'Tip no. 3',
			default: '#f6e5cf',
		},
		tail_4: {
			name: 'Tail no. 4',
			default: '#fa781c',
		},
		tip_4: {
			name: 'Tip no. 4',
			default: '#f6e5cf',
		},
		tail_5: {
			name: 'Tail no. 5',
			default: '#fa781c',
		},
		tip_5: {
			name: 'Tip no. 5',
			default: '#f6e5cf',
		},
		tail_6: {
			name: 'Tail no. 6',
			default: '#fa781c',
		},
		tip_6: {
			name: 'Tip no. 6',
			default: '#f6e5cf',
		},
		tail_7: {
			name: 'Tail no. 7',
			default: '#fa781c',
		},
		tip_7: {
			name: 'Tip no. 7',
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
		numbers: {
			type: 'typed',
			name: 'Number of Tails',
			variants: [
				{
					id: 'three',
					name: 'Three',
				},
				{
					id: 'five',
					name: 'Five',
					default: true,
				},
				{
					id: 'seven',
					name: 'Seven',
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
