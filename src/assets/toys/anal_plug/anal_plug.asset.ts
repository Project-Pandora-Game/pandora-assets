DefineAsset({
	name: 'Anal plug',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		plug: {
			name: 'Plug',
			default: '#C4E1FF',
		},
	},
	attributes: ['Toy'],
	modules: {
		insertedPlug: {
			type: 'typed',
			name: 'Penetration Depth',
			variants: [
				{
					id: 'out',
					name: 'Mostly Out',
					default: true,
					occupySlots: {
						'anus': 2,
						'outsideAnusArea': 10,
					},
				},
				{
					id: 'half',
					name: 'Half Inside',
					occupySlots: {
						'anus': 4,
						'outsideAnusArea': 10,
					},
				},
				{
					id: 'in',
					name: 'Deep Inside',
					occupySlots: {
						'anus': 6,
						'outsideAnusArea': 10,
					},
				},
				{
					id: 'plugged',
					name: 'Plugged',
					occupySlots: {
						'anus': 8,
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
