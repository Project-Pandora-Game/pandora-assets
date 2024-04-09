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
	preview: 'vibrator_preview.png',
	attributes: {
		provides: [
			'Vagina_item',
			'Toy',
		],
		requires: ['Vagina_spread'],
	},
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
						attributes: {
							provides: ['Vagina_insert', 'Vagina_protruding'],
							requires: ['!Vagina_cover'],
						},
					},
				},
				{
					id: 'half',
					name: 'Half Inside',
					properties: {
						attributes: {
							provides: ['Vagina_insert', 'Vagina_insert_deep', 'Vagina_protruding'],
							requires: ['!Vagina_cover'],
						},
					},
				},
				{
					id: 'in',
					name: 'Deep Inside',
					properties: {
						attributes: {
							provides: ['Vagina_insert', 'Vagina_insert_deep'],
							requires: ['!Vagina_cover'],
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
			{
				part: 'used 3D model for preview',
				source: 'https://skfb.ly/oF9vF',
				copyrightHolder: 'cassies_secrets',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
		],
	},
});
