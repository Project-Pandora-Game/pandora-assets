DefineAsset({
	name: 'Cat Tail Plug',
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
			'Fantasy',
			'Fantasy_tail',
			'Anus_item',
			'Anus_insert',
			'Anus_insert_deep',
			'Toy',
		],
		requires: [
			'!Anus_cover',
		],
	},
	modules: {
		layering: {
			type: 'typed',
			name: 'Layering of the tail',
			variants: [
				{
					id: 'normal',
					name: 'Normal - according to wardrobe order',
					default: true,
				},
				{
					id: 'special',
					name: 'Special - overlaid on top of all items',
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
