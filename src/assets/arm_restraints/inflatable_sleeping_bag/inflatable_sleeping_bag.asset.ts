DefineAsset({
	name: 'Inflatable Sleeping Bag',
	size: 'medium',
	graphics: 'graphics.json',
	requireFreeHandsToUseDefault: true,
	colorization: {
		bag: {
			name: 'Bag',
			default: '#333A42',
		},
		shine1: {
			name: 'Base shine',
			default: '#EEEEEEB4',
			minAlpha: 0,
		},
		shine2: {
			name: 'Center shine',
			default: '#DDDDDD99',
			minAlpha: 0,
		},
		zipper: {
			name: 'Zipper',
			default: '#988FA0',
		},
	},
	// size:800, y:289, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Restraint_arms',
			'Restraint_legs',
			'Restraint_torso',
			'Hand_item',
			'Hand_cover',
			'Anus_cover',
			'Vulva_cover',
			'Breast_cover',
		],
		covers: [
			'Clothing_upper',
			'Clothing_lower',
			'Clothing_large',
			'Hand_item',
			'Hand_cover',
			'Handheld',
			'Restraint_arms',
			'Restraint_legs',
			'Restraint_torso',
			'Anus_item',
			'Vulva_item',
			'Breast_item',
		],
		hides: [
			'Clothing_upper',
			'Clothing_lower',
			'Clothing_large',
			'Hand_item',
			'Handheld',
			'Restraint_arms',
			'Restraint_legs',
			'Restraint_torso',
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
		inflation: {
			type: 'typed',
			name: 'Inflation of the bag',
			variants: [
				{
					id: 'light',
					name: 'Lightly inflated',
					default: true,
				},
				{
					id: 'full',
					name: 'Fully inflated',
				},
			],
		},
	},
	poseLimits: {
		arms: {
			position: 'front',
			rotation: 'forward',
		},
		bones: {
			arm_r: 84,
			arm_l: 84,
			elbow_r: 7,
			elbow_l: 7,
			leg_r: 2,
			leg_l: 2,
		},
		armsOrder: {
			upper: 'left',
		},
	},
	effects: {
		blockHands: true,
		blockRoomLeave: true,
		blockRoomMovement: true,
	},
	blockSelfAddRemove: true,
	chat: {
		actionAdd: 'SOURCE_CHARACTER trapped TARGET_CHARACTER_DYNAMIC_REFLEXIVE in an ITEM_ASSET_NAME.',
		actionAddCreate: 'SOURCE_CHARACTER created an ITEM_ASSET_NAME and trapped TARGET_CHARACTER_DYNAMIC_REFLEXIVE in it.',
		actionRemove: 'SOURCE_CHARACTER freed TARGET_CHARACTER_DYNAMIC_REFLEXIVE from the ITEM_ASSET_NAME.',
		actionRemoveDelete: 'SOURCE_CHARACTER freed TARGET_CHARACTER_DYNAMIC_REFLEXIVE from the ITEM_ASSET_NAME and deleted it.',
	},
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
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
