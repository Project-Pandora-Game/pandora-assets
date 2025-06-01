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
			minAlpha: 0,
		},
	},
	// size:400, y:376, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Clothing_upper',
			'Clothing_lower',
			'Clothing_large',
			'Restraint',
			'Restraint_torso',
		],
	},
	modules: {
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			lockedProperties: {
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
					properties: {
						stateFlags: {
							provides: [
								'long_legs',
							],
						},
					},
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
				{
					id: 'socks',
					name: 'Socks',
					properties: {
						stateFlags: {
							requires: {
								long_legs: 'Socks require the long variant of the suit.',
							},
						},
					},
				},
				{
					id: 'gloves',
					name: 'Gloves',
					properties: {
						attributes: {
							provides: [
								'Hand_cover',
								'Gloves',
							],
							covers: [
								'Hand_item',
								'Hand_cover',
							],
						},
					},
				},
				{
					id: 'both',
					name: 'Gloves + Socks',
					properties: {
						attributes: {
							provides: [
								'Hand_cover',
								'Gloves',
							],
							covers: [
								'Hand_item',
								'Hand_cover',
							],
						},
						stateFlags: {
							requires: {
								long_legs: 'Socks require the long variant of the suit.',
							},
						},
					},
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
				part: 'catsuit',
				source: 'Self-Made',
				copyrightHolder: 'Taja',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
