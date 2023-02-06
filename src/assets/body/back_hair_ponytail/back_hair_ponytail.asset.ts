DefineAsset({
	name: 'Ponytail',
	size: 'bodypart',
	bodypart: 'backhair',
	graphics: 'graphics.json',
	colorization: {
		hair: {
			name: 'Hair',
			default: '#555555',
		},
		hairShine: {
			name: 'Hair shine',
			default: '#AAAAAA',
		},
	},
	attributes: [
		'Hair',
		'Hair_extension',
	],
	requirements: [
		'Hair_back',
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
				license: 'Pandora-Use-Only',
			},
		],
	},
});
