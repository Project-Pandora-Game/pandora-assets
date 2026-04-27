DefineAsset({
	name: 'Vaginal Vibrating Egg',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		vibrator: {
			name: 'Egg',
			default: '#FF9ED2',
		},
	},
	roomDeployment: {
		autoDeployRelativePosition: [-25, -20, 0],
	},
	preview: 'preview.png',
	attributes: {
		provides: [
			'Vulva_item',
			'Toy',
		],
	},
	modules: {
		insertedVibrator: {
			type: 'typed',
			name: 'Penetration Depth',
			variants: [
				{
					id: 'out',
					name: 'Outside',
					default: true,
					properties: {
						attributes: {
							provides: ['Crotch_protruding'],
						},
					},
				},
				{
					id: 'half',
					name: 'Half Inside',
					properties: {
						attributes: {
							provides: ['Vulva_insert', 'Vulva_insert_deep', 'Crotch_protruding'],
							requires: ['!Vulva_cover', 'Vulva_spread'],
						},
					},
				},
				{
					id: 'in',
					name: 'Mostly Inside',
					properties: {
						attributes: {
							provides: ['Vulva_insert', 'Vulva_insert_deep'],
							requires: ['!Vulva_cover', 'Vulva_spread'],
						},
					},
				},
				{
					id: 'deep',
					name: 'Deep Inside',
					properties: {
						attributes: {
							provides: ['Vulva_insert', 'Vulva_insert_deep'],
							requires: ['!Vulva_cover'],
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
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
