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
				},
				{
					id: 'half',
					name: 'Half Inside',
				},
				{
					id: 'in',
					name: 'Deep Inside',
				},
			],
		},
	},
	automation: {
		beforeAdd: [
			{
				type: 'setExpression',
				mode: 'required',
				expression: 'Vagina',
				action: {
					moduleType: 'typed',
					setVariant: 'spread',
				},
			},
		],
		afterRemove: [
			{
				type: 'setExpression',
				mode: 'ignorable',
				expression: 'Vagina',
				action: {
					moduleType: 'typed',
					setVariant: 'normal',
				},
			},
		],
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
