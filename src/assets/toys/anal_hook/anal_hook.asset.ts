DefineAsset({
	name: 'Anal Hook',
	size: 'small',
	requireFreeHandsToUseDefault: true,
	graphics: 'graphics.json',
	colorization: {
		collar: {
			name: 'Hook',
			default: '#B2B6B6',
		},
	},
	// size:250, y:625, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Anus_item',
			'Toy',
		],
	},
	modules: {
		inserted: {
			type: 'typed',
			name: 'Insertion',
			variants: [
				{
					id: 'out',
					name: 'Outside',
					default: true,
				},
				{
					id: 'in',
					name: 'Inserted',
					properties: {
						attributes: {
							provides: ['Anus_insert', 'Anus_insert_deep'],
							requires: ['!Anus_cover'],
						},
					},
				},
			],
		},
		hookTip: {
			type: 'typed',
			name: 'Hook tip',
			variants: [
				{
					id: 'smooth',
					name: 'Smooth (no tip)',
				},
				{
					id: 'ball_small',
					name: 'Small ball',
					default: true,
				},
				{
					id: 'ball_large',
					name: 'Large ball',
				},
				{
					id: 'beads',
					name: 'Beads',
				},
			],
		},
	},
	ownership: {
		responsibleContributor: 'Jomshir98 <jomshir98@protonmail.com>',
		credits: ['Jomshir'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Jomshir98',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
