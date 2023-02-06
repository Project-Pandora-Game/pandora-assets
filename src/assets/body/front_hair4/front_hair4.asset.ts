DefineAsset({
	name: 'Front hair 4',
	size: 'bodypart',
	bodypart: 'fronthair',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		hair: {
			name: 'Hair',
			default: '#555555',
		},
		hairShine: {
			name: 'Hair shine',
			default: '#888888',
		},
	},
	attributes: [
		'Hair',
		'Hair_front',
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
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only',
			},
		],
	},
});
