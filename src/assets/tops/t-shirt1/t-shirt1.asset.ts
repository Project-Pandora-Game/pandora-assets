DefineAsset({
	name: 'T-Shirt',
	graphics: 'graphics.json',
	colorization: [
		{
			name: 'Shirt',
			default: '#FFFFFF',
		},
		{
			name: 'Print',
			default: '#FFFF00',
		},
	],
	modules: {
		prints: {
			type: 'typed',
			name: 'T-Shirt Print',
			variants: [
				{
					id: 'kissingSmilie',
					name: 'Kissing Smilie',
					default: true,
				},
				{
					id: 'smilie',
					name: 'Smilie',
				},
				{
					id: 'crown',
					name: 'Crown',
				},
				{
					id: 'noPrint',
					name: 'No Print',
				},
			],
		},
	},
});
