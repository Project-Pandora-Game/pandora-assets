DefineBodypart({
	name: 'Freckles',
	bodypart: 'skin',
	allowRandomizerUsage: false,
	graphics: 'graphics.json',
	colorization: {
		freckles: {
			name: 'Freckles',
			default: '#613F13',
		},
	},
	preview: null,
	attributes: {
		provides: [
			'Body_texture',
		],
	},
	modules: {
		cheeks: {
			type: 'typed',
			name: 'Cheeks',
			variants: [
				{
					id: 'no',
					name: 'None',
					default: true,
				},
				{
					id: 'some',
					name: 'Some on cheeks',
				},
				{
					id: 'more',
					name: 'More on cheeks',
				},
				{
					id: 'both',
					name: 'A lot on cheeks',
				},
			],
		},
		nose: {
			type: 'typed',
			name: 'Nose',
			variants: [
				{
					id: 'no',
					name: 'None',
					default: true,
				},
				{
					id: 'some',
					name: 'Some on nose',
				},
				{
					id: 'more',
					name: 'More on nose',
				},
				{
					id: 'both',
					name: 'A lot on nose',
				},
			],
		},
		face: {
			type: 'typed',
			name: 'Face',
			variants: [
				{
					id: 'no',
					name: 'None',
					default: true,
				},
				{
					id: 'plenty',
					name: 'A lot',
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
				part: 'freckles',
				source: 'Self-Made',
				copyrightHolder: 'Taja',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
