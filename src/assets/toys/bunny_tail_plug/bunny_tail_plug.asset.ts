DefineAsset({
	name: 'Bunny Tail Plug',
	size: 'small',
	requireFreeHandsToUseDefault: true,
	graphics: 'graphics.json',
	colorization: {
		tail: {
			name: 'Tail',
			default: '#DDDDDD',
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
