DefineAsset({
	name: 'Back hair 1',
	bodypart: 'backhair',
	graphics: 'graphics.json',
	colorization: [
		{
			name: 'Hair',
			default: '#555555',
		},
		{
			name: 'Hair shine',
			default: '#AAAAAA',
		},
	],
	modules: {
		shine: {
			type: 'typed',
			name: 'Shine',
			variants: [
				{
					id: 'show',
					name: 'Show Shine',
					default: true,
				},
				{
					id: 'hide',
					name: 'Hide Shine',
				},
			],
		},
	},
	ownership: {
		responsibleContributor: 'Jomshir98 <jomshir98@protonmail.com>',
		credits: ['Titania', 'Jomshir', 'ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Private',
				copyrightHolder: 'QueenTita',
				editedBy: 'ClaudiaMia',
				license: './TODO', //TODO
			},
		],
	},
});
