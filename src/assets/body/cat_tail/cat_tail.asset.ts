DefineBodypart({
	name: 'Cat Tail',
	bodypart: 'tails',
	allowRandomizerUsage: false,
	graphics: 'graphics.json',
	colorization: {
		tail: {
			name: 'Tail',
			default: '#666666',
		},
		stripes: {
			name: 'Stripes',
			default: '#020202',
		},
		tip: {
			name: 'Tip',
			default: '#FFFFFF',
		},
	},
	preview: null,
	attributes: {
		provides: [
			'Tail',
		],
	},
	modules: {
		withStripes: {
			type: 'typed',
			name: 'With Stripes',
			variants: [
				{
					id: 'no',
					name: 'No',
					default: true,
				},
				{
					id: 'yes',
					name: 'Yes',
				},
			],
		},
		withTip: {
			type: 'typed',
			name: 'With Tip',
			variants: [
				{
					id: 'no',
					name: 'No',
					default: true,
				},
				{
					id: 'yes',
					name: 'Yes',
				},
			],
		},
		horizontal: {
			type: 'typed',
			name: 'Horizontal Alignment',
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
