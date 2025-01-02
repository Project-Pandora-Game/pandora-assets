DefineAsset({
	name: 'Latex Catsuit',
	size: 'medium',
	allowRandomizerUsage: false,
	requireFreeHandsToUseDefault: true,
	graphics: 'graphics.json',
	colorization: {
		catsuit: {
			name: 'Catsuit',
			default: '#020202FF',
			minAlpha: 0.15,
		},
		reflection: {
			name: 'Reflection',
			default: '#FFFFFF',
		},
	},
	// size:376, y:400, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Clothing_upper',
			'Clothing_lower',
			'Clothing_large',
		],
	},
	modules: {
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			occupiedProperties: {
				blockAddRemove: true,
				blockSelfModules: [
					'length',
					'variants',
					'addOns',
				],
			},
		},
		length: {
			type: 'typed',
			name: 'Length',
			variants: [
				{
					id: 'short',
					name: 'Short',
					default: true,
				},
				{
					id: 'long',
					name: 'Long',
				},
			],
		},
		variants: {
			type: 'typed',
			name: 'Variants',
			variants: [
				{
					id: 'closed',
					name: 'Closed',
					default: true,
					properties: {
						attributes: {
							provides: [
								'Anus_cover',
								'Vulva_cover',
							],
							hides: [
								'Penis',
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
		addOns: {
			type: 'typed',
			name: 'Add-Ons',
			variants: [
				{
					id: 'none',
					name: 'No',
					default: true,
				},
				/** For later use
				{
					id: 'gloves',
					name: 'Gloves',
					properties: {
						attributes: {
							provides: [
								'Hand_item',
								'Gloves',
							],
						},
					},
				},
				{
					id: 'socks',
					name: 'Socks',
				},
				{
					id: 'both',
					name: 'Gloves + Socks',
					properties: {
						attributes: {
							provides: [
								'Hand_item',
								'Gloves',
							],
						},
					},
				},
				*/
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
				part: 'catsuit',
				source: 'Self-Made',
				copyrightHolder: 'Taja',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
