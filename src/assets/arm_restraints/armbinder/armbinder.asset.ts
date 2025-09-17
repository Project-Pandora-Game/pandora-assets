DefineAsset({
	name: 'Armbinder',
	size: 'medium',
	graphics: 'graphics.json',
	requireFreeHandsToUseDefault: true,
	colorization: {
		glove: {
			name: 'Glove',
			default: '#444444',
		},
		straps: {
			name: 'Straps',
			default: '#444444',
		},
		smallRings: {
			name: 'Small Rings',
			default: '#FFFFFF',
		},
		bigRings: {
			name: 'Big Rings',
			default: '#FFFFFF',
		},
		strings: {
			name: 'Strings',
			default: '#FF0000',
		},
	},
	// size:500, y:369, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Restraint_arms',
			'Hand_item',
			'Hand_cover',
			'Hand_restricting_cover',
		],
		covers: [
			'Hand_item',
			'Hand_cover',
			'Handheld',
			'Wrist_cuffs',
		],
		hides: [
			'Hand_item',
			'Wrist_cuffs',
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
		gloveRing: {
			type: 'typed',
			name: 'Glove Ring',
			variants: [
				{
					id: 'noRing',
					name: 'No Ring',
					default: true,
				},
				{
					id: 'ring',
					name: 'Ring At Glove End',
					properties: {
						attributes: {
							provides: [
								'Armbinder_chainable',
							],
						},
					},
				},
			],
		},
	},
	poseLimits: {
		arms: {
			position: 'back',
			rotation: 'forward',
		},
		armsOrder: {
			upper: 'right',
		},
		options: [
			{
				bones: {
					arm_r: 104,
					arm_l: 104,
					elbow_r: -4,
					elbow_l: -4,
				},

			},
			{
				bones: {
					arm_r: 110,
					arm_l: 110,
					elbow_r: -15,
					elbow_l: -15,
				},
			},
		],
	},
	effects: {
		blockHands: true,
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER slipped ITEM_ASSET_NAME over TARGET_CHARACTER_DYNAMIC_POSSESSIVE arms, lacing it tightly.',
		actionRemove: 'SOURCE_CHARACTER loosened and then slipped off ITEM_ASSET_NAME from TARGET_CHARACTER_DYNAMIC_POSSESSIVE arms.',
	},
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia', 'Jomshir'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
