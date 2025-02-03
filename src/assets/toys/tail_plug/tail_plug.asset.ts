DefineAsset({
	name: 'Tail Plug',
	size: 'medium',
	requireFreeHandsToUseDefault: true,
	graphics: 'graphics.json',
	colorization: {
		tail: {
			name: 'Tail',
			default: '#666666',
		},
		stripes: {
			name: 'Stripes',
			default: '#020202',
		},
		tip: {
			name: 'Tip',
			default: '#FFFFFF',
		},
	},
	preview: 'preview.png',
	attributes: {
		provides: [
			'Anus_item',
			'Toy',
		],
	},
	modules: {
		tailType: {
			type: 'typed',
			name: 'Tail Type',
			variants: [
				{
					id: 'bunny',
					name: 'Bunny Tail',
					properties: {
						attributes: {
							provides: ['Anus_insert', 'Anus_insert_deep'],
							requires: ['!Anus_cover'],
						},
					},
				},
				{
					id: 'cat',
					name: 'Cat Tail',
					default: true,
					properties: {
						attributes: {
							provides: ['Anus_insert', 'Anus_insert_deep'],
							requires: ['!Anus_cover'],
						},
					},
				},
				{
					id: 'puppy',
					name: 'Puppy Tail',
					properties: {
						attributes: {
							provides: ['Anus_insert', 'Anus_insert_deep'],
							requires: ['!Anus_cover'],
						},
					},
				},
			],
		},
		decoration: {
			type: 'typed',
			name: 'Decoration (only for some tails)',
			variants: [
				{
					id: 'plain',
					name: 'Plain',
					default: true,
				},
				{
					id: 'stripes',
					name: 'With Stripes',
				},
				{
					id: 'tip',
					name: 'With Tip',
				},
				{
					id: 'both',
					name: 'Stripes & Tip',
				},
			],
		},
	},
	ownership: {
		responsibleContributor: 'Sandrine <118102950+SandrinePDR@users.noreply.github.com>',
		credits: ['Taja'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Taja',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
