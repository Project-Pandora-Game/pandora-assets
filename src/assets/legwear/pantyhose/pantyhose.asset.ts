DefineAsset({
	name: 'Pantyhose',
	size: 'small',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		pantyhose: {
			name: 'Pantyhose',
			default: '#9C8686',
			minAlpha: 0.6,
		},
	},
	attributes: {
		provides: [
			'Legwear',
		],
	},
	modules: {
		pantiesState: {
			type: 'typed',
			name: 'Pantyhose State',
			variants: [
				{
					id: 'normal',
					name: 'Normal',
					default: true,
				},
				{
					id: 'between',
					name: 'Ripped between legs',
				},
				{
					id: 'fully',
					name: 'Ripped fully',
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
