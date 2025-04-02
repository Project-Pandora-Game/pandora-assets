DefineAsset({
	name: 'Books',
	size: 'medium',
	graphics: 'graphics.json',
	// size:250, y:600, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Accessory',
		],
	},
	modules: {
		usage: {
			type: 'typed',
			name: 'Usage',
			variants: [
				{
					id: 'reading',
					name: 'Reading',
					default: true,
					properties: {
						poseLimits: [
							{
								legs: 'sitting',
							},
						],
					},
				},
				{
					id: 'balancing',
					name: 'Balancing',
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
