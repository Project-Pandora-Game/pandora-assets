DefineAsset({
	name: 'Boxtie Armbinder',
	size: 'medium',
	graphics: 'graphics.json',
	requireFreeHandsToUseDefault: true,
	colorization: {
		glove: {
			name: 'Glove',
			default: '#3B353A',
		},
		straps: {
			name: 'Straps',
			default: '#405878',
		},
		buckles: {
			name: 'Buckles',
			default: '#CFD8DC',
		},
	},
	// size:300, y:345, centered
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
			'Restraint_arms',
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
	effects: {
		blockHands: true,
	},
	poseLimits: {
		bones: {
			arm_r: 85,
			arm_l: 85,
			elbow_r: 98,
			elbow_l: 98,
		},
		arms: {
			position: 'back',
			rotation: 'down',
			fingers: 'fist',
		},
		armsOrder: {
			upper: 'left',
		},
	},
	modules: {
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			lockedProperties: {
				blockAddRemove: true,
			},
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER slipped ITEM_ASSET_NAME over TARGET_CHARACTER_DYNAMIC_POSSESSIVE arms, lacing it tightly.',
		actionRemove: 'SOURCE_CHARACTER loosened and then slipped off ITEM_ASSET_NAME from TARGET_CHARACTER_DYNAMIC_POSSESSIVE arms.',
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
