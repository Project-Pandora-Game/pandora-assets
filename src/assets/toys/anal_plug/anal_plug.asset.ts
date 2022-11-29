DefineAsset({
	name: 'Anal plug',
	size: 'small',
	graphics: 'graphics.json',
	colorization: [
		{
			name: 'Plug',
			default: '#C4E1FF',
		},
	],
	modules: {
		insertedPlug: {
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
				{
					id: 'plugged',
					name: 'Plugged',
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
