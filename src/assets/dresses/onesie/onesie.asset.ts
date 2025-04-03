DefineAsset({
	name: 'Onesie',
	size: 'medium',
	allowRandomizerUsage: false,
	graphics: 'graphics.json',
	colorization: {
		onesie: {
			name: 'Onesie',
			default: '#EEEEEE',
		},
		pockets: {
			name: 'Pockets',
			default: '#FFEBB6',
		},
		applications: {
			name: 'Applications',
			default: '#FFEBB6',
		},
		buttons: {
			name: 'Buttons',
			default: '#FFEBB6',
		},
	},
	// size:450, y:380, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Clothing_upper',
			'Clothing_lower',
			'Clothing_large',
			'Vulva_cover',
		],
		hides: [
			'Penis',
		],
	},
	modules: {
		flap: {
			type: 'typed',
			name: 'Flap',
			variants: [
				{
					id: 'closed',
					name: 'Closed',
					default: true,
					properties: {
						attributes: {
							provides: [
								'Anus_cover',
							],
						},
					},
				},
				{
					id: 'open',
					name: 'Open',
				},
			],
		},
		pattern: {
			type: 'typed',
			name: 'Pattern',
			variants: [
				{
					id: 'none',
					name: 'No Pattern',
					default: true,
				},
				{
					id: 'toys',
					name: 'Baby Toys',
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
				part: 'onesie',
				source: 'Self-Made',
				copyrightHolder: 'Taja',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
