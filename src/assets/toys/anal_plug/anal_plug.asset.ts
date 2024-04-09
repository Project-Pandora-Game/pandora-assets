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
	preview: 'plug_preview.png',
	attributes: {
		provides: [
			'Anus_item',
			'Toy',
		],
	},
	modules: {
		insertedPlug: {
			type: 'typed',
			name: 'Penetration Depth',
			variants: [
				{
					id: 'out',
					name: 'Mostly Out',
					default: true,
					properties: {
						attributes: {
							provides: ['Anus_insert', 'Anus_protruding'],
							requires: ['!Anus_cover'],
						},
					},
				},
				{
					id: 'half',
					name: 'Half Inside',
					properties: {
						attributes: {
							provides: ['Anus_insert', 'Anus_insert_deep', 'Anus_protruding'],
							requires: ['!Anus_cover'],
						},
					},
				},
				{
					id: 'in',
					name: 'Deep Inside',
					properties: {
						attributes: {
							provides: ['Anus_insert', 'Anus_insert_deep', 'Anus_protruding'],
							requires: ['!Anus_cover'],
						},
					},
				},
				{
					id: 'plugged',
					name: 'Plugged',
					properties: {
						attributes: {
							provides: ['Anus_insert', 'Anus_insert_deep'],
							requires: ['!Anus_cover'],
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
				source: 'https://skfb.ly/6XuEB',
				copyrightHolder: 'Gavinn',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
		],
	},
});
