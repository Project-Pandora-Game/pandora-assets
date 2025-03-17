DefineAsset({
	name: 'Steel Hood',
	size: 'large',
	graphics: 'graphics.json',
	requireFreeHandsToUseDefault: true,
	colorization: {
		sphere: {
			name: 'Sphere',
			default: '#FFFFFF',
		},
		collar: {
			name: 'Collar',
			default: '#FFFFFF',
		},
		ring: {
			name: 'Ring',
			default: '#FFFFFF',
		},
	},
	// size:250, y:180, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Headgear',
			'Headgear_hood',
			'Restraint_eyes',
			'Ear_item',
			'Ear_cover',
			'Mouth_item',
			'Mouth_cover',
			'Collar',
		],
		hides: [
			'Hair',
			'Wig',
			'Ears',
			'Fantasy_ears',
		],
		covers: [
			'Ear_item',
			'Mouth_item',
			'Restraint_eyes',
		],
	},
	effects: {
		// deafening
		distortion: 3,
		frequencyLoss: 5,
		vowelLoss: 2,
		middleLoss: 3,
		// blinding
		blind: 10,
		// gag effects
		lipsTouch: 1,
		jawMove: 1,
		tongueRoof: 1,
		mouthBreath: 1,
		throatBreath: 1,
		coherency: 1,
		stimulus: 0,
	},
	modules: {
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			lockedProperties: {
				blockAddRemove: true,
			},
		},
		collarConfig: {
			type: 'typed',
			name: 'Collar Configuration',
			variants: [
				{
					id: 'collar',
					name: 'Collar Only',
					default: true,
				},
				{
					id: 'ring',
					name: 'Collar + Ring',
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
		actionAdd: 'SOURCE_CHARACTER closes ITEM_ASSET_NAME around TARGET_CHARACTER_DYNAMIC_POSSESSIVE head, covering it completely.',
		actionRemove: 'SOURCE_CHARACTER removes ITEM_ASSET_NAME from TARGET_CHARACTER_DYNAMIC_POSSESSIVE head.',
	},
	ownership: {
		responsibleContributor: 'Sandrine <118102950+SandrinePDR@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Sandrine',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
