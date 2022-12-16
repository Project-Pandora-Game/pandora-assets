DefineAsset({
	name: 'Vaginal vibrator',
	size: 'small',
	graphics: 'graphics.json',
	colorization: [
		{
			name: 'Vibrator',
			default: '#FFC1EB',
		},
	],
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
					occupies: ['vagina_2', 'outsideVaginaArea'],
				},
				{
					id: 'half',
					name: 'Half Inside',
					occupies: ['vagina_5', 'outsideVaginaArea'],
				},
				{
					id: 'in',
					name: 'Deep Inside',
					occupies: ['vagina'],
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
