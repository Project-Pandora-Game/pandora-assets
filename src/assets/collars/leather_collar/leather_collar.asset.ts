DefineAsset({
	name: 'Leather Collar',
	size: 'small',
	graphics: 'graphics.json',
	requireFreeHandsToUseDefault: true,
	colorization: {
		collarbase: {
			name: 'Collar',
			default: '#444444',
		},
		belt: {
			name: 'Belt',
			default: '#222222',
		},
		eyelets: {
			name: 'Eyelets',
			default: '#DDDDDD',
		},
		ring: {
			name: 'Ring',
			default: '#DDDDDD',
		},
		padlock_body: {
			name: 'Lock Body',
			default: '#FFED83',
		},
		padlock_shackle: {
			name: 'Lock Shackle',
			default: '#FFFFFF',
		},
	},
	// size:150, y:309, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Collar',
		],
	},
	modules: {
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			lockedProperties: {
				blockAddRemove: true,
			},
		},
		ringConfig: {
			type: 'typed',
			name: 'Rings',
			variants: [
				{
					id: 'ringNil',
					name: 'None',
					default: true,
				},
				{
					id: 'ringD',
					name: 'D-Ring',
					properties: {
						attributes: {
							provides: [
								'Collar_front_ring',
							],
						},
					},
				},
				{
					id: 'ringsDO',
					name: 'D+O-Rings',
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
		padlockConfig: {
			type: 'typed',
			name: 'Display Padlock',
			variants: [
				{
					id: 'padlock_no',
					name: 'No',
					default: true,
				},
				{
					id: 'padlock_yes',
					name: 'Yes',
				},
			],
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER fitted and closed ITEM_ASSET_NAME around TARGET_CHARACTER_DYNAMIC_POSSESSIVE neck.',
		actionRemove: 'SOURCE_CHARACTER opened and then removed ITEM_ASSET_NAME from TARGET_CHARACTER_DYNAMIC_POSSESSIVE neck.',
	},
	ownership: {
		responsibleContributor: 'ObliqueBC <obliquebc@hotmail.com>',
		credits: ['Oblique'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Oblique',
				editedBy: 'Oblique',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
