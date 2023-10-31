DefineAsset({
	name: 'Vaginal vibrator',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		vibrator: {
			name: 'Vibrator',
			default: '#FFC1EB',
		},
	},
	attributes: ['Toy'],
	requirements: ['Vagina_spread'],
	modules: {
		insertedVibrator: {
			type: 'typed',
			name: 'Penetration Depth',
			variants: [
				{
					id: 'out',
					name: 'Mostly Out',
					default: true,
					properties: {
						occupySlots: {
							'vagina': 2,
							'outsideVaginaArea': 10,
						},
					},
				},
				{
					id: 'half',
					name: 'Half Inside',
					properties: {
						occupySlots: {
							'vagina': 4,
							'outsideVaginaArea': 10,
						},
					},
				},
				{
					id: 'in',
					name: 'Deep Inside',
					properties: {
						occupySlots: {
							'vagina': 8,
						},
					},
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
