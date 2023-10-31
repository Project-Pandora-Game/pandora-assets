DefineAsset({
	name: 'Panties (style 1)',
	size: 'small',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		panties: {
			name: 'Panties',
			default: '#FA5F55',
		},
	},
	attributes: [
		'Underwear',
		'Underwear_panties',
	],
	modules: {
		pantiesState: {
			type: 'typed',
			name: 'Panties State',
			variants: [
				{
					id: 'normal',
					name: 'Normal',
					default: true,
					properties: {
						blockSlots: ['vagina', 'anus'],
						occupySlots: {
							'outsideVaginaArea': 0.1,
							'outsideAnusArea': 0.1,
						},
						hides: ['Penis'],
					},
				},
				{
					id: 'aside',
					name: 'Pulled Aside',
				},
				{
					id: 'wedged',
					name: 'Wedged Up',
					properties: {
						blockSlots: ['vagina', 'anus'],
						occupySlots: {
							'outsideVaginaArea': 0.1,
							'outsideAnusArea': 0.1,
						},
						requirements: ['!Penis'],
					},
				},
				{
					id: 'fully',
					name: 'Pulled Down Fully',
				},
			],
		},
	},
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia', 'Jomshir'],
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
