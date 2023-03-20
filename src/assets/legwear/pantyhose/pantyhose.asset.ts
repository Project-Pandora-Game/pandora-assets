DefineAsset({
	name: 'Pantyhose',
	size: 'small',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		pantyhose: {
			name: 'Pantyhose',
			default: '#9C8686',
		},
	},
	attributes: [
		'Legwear',
	],
	modules: {
		pantiesState: {
			type: 'typed',
			name: 'Pantyhose State',
			variants: [
				{
					id: 'normal',
					name: 'Normal',
					default: true,
					blockSlots: ['vagina', 'anus'],
					occupySlots: {
						'outsideVaginaArea': 0.1,
						'outsideAnusArea': 0.1,
					},
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
