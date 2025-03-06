DefineAsset({
	name: 'Canvas Straitjacket',
	size: 'medium',
	graphics: 'graphics.json',
	requireFreeHandsToUseDefault: true,
	colorization: {
		canvas: {
			name: 'Canvas',
			default: '#FFFFFF',
		},
		straps: {
			name: 'Straps',
			default: '#E7CEB5',
		},
	},
	// size:425, y:370, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Restraint_arms',
			'Restraint_torso',
			'Hand_item',
			'Hand_cover',
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
		straps: {
			type: 'typed',
			name: 'Straps',
			variants: [
				{
					id: 'loose',
					name: 'Loose',
					default: true,
				},
				{
					id: 'tight',
					name: 'Tight',
					properties: {
						attributes: {
							provides: [
								'Vulva_cover',
								'Anus_cover',
							],
							covers: [
								'Vulva_item',
								'Anus_item',
							],
							requires: [
								'!Vulva_protruding',
								'!Anus_protruding',
								'!Penis_erect',
							],
							hides: ['Penis'],
						},
					},
				},
			],
		},
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			occupiedProperties: {
				blockAddRemove: true,
			},
		},
	},
	effects: {
		blockHands: true,
	},
	blockSelfAddRemove: true,
	poseLimits: {
		arms: {
			position: 'front',
			rotation: 'down',
			fingers: 'fist',
		},
		bones: {
			arm_r: 75,
			arm_l: 77,
			elbow_r: 98,
			elbow_l: 98,
		},
		armsOrder: {
			upper: 'right',
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER pushed TARGET_CHARACTER_DYNAMIC_POSSESSIVE arms into the sleeves of the item ITEM_ASSET_NAME and tightly pulled them to TARGET_CHARACTER_DYNAMIC_POSSESSIVE back.',
		actionRemove: 'SOURCE_CHARACTER loosened and then slipped off ITEM_ASSET_NAME from TARGET_CHARACTER_DYNAMIC_POSSESSIVE arms.',
	},
	ownership: {
		responsibleContributor: 'Sandrine <118102950+SandrinePDR@users.noreply.github.com>',
		credits: ['Taja'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'straitjacket',
				source: 'Self-Made',
				copyrightHolder: 'Taja',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
