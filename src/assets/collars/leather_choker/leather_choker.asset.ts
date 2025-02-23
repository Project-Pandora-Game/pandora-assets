DefineAsset({
	name: 'Leather Choker',
	size: 'small',
	graphics: 'graphics.json',
	requireFreeHandsToUseDefault: true,
	colorization: {
		choker: {
			name: 'Choker',
			default: '#525252',
		},
		ring: {
			name: 'Ring',
			default: '#C0C2C4',
		},
		rivets: {
			name: 'Choker rivets',
			default: '#E6BF34',
		},
	},
	// size:150, y:309, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Accessory',
			'Collar',
		],
	},
	modules: {
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			occupiedProperties: {
				blockAddRemove: true,
			},
		},
		config: {
			type: 'typed',
			name: 'Choker Configuration',
			variants: [
				{
					id: 'choker',
					name: 'Choker Only',
				},
				{
					id: 'ring',
					name: 'Choker + Ring',
					default: true,
					properties: {
						attributes: {
							provides: [
								'Collar_front_ring',
							],
						},
					},
				},
			],
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER fitted and closed ITEM_ASSET_NAME around TARGET_CHARACTER_DYNAMIC_POSSESSIVE neck.',
		actionRemove: 'SOURCE_CHARACTER opened and then removed ITEM_ASSET_NAME from TARGET_CHARACTER_DYNAMIC_POSSESSIVE neck.',
	},
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'used 3D model',
				source: 'https://skfb.ly/onN9Y',
				copyrightHolder: 'Arnlitzsch',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'images',
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
