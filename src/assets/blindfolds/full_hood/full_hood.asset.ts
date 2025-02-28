DefineAsset({
	name: 'Full Hood',
	size: 'medium',
	requireFreeHandsToUseDefault: true,
	graphics: 'graphics.json',
	colorization: {
		hood: {
			name: 'Hood',
			default: '#484F57',
		},
		eyeCover: {
			name: 'Eye cover',
			default: '#454A52',
		},
		mouthCover: {
			name: 'Mouth cover',
			default: '#464B53',
		},
		zipper: {
			name: 'Zipper',
			default: '#333333',
		},
	},
	// size:220, y:185, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Headgear',
			'Headgear_hood',
			'Ear_item',
			'Ear_cover',
		],
		hides: [
			'Hair',
			'Wig',
			'Ears',
			'Fantasy_ears',
		],
		covers: [
			'Ear_item',
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
		lockAddons: {
			type: 'lockSlot',
			name: 'Lock for hood covers',
			occupiedProperties: {
				blockModules: [
					'hoodEyeCover',
					'hoodMouthCover',
				],
			},
		},
		hoodEyeCover: {
			type: 'typed',
			name: 'Hood Eye Cover',
			variants: [
				{
					id: 'eye_free',
					name: 'Eyes Uncovered',
					default: true,
				},
				{
					id: 'eye',
					name: 'Eye Cover',
					properties: {
						effects: {
							blind: 10,
						},
						attributes: {
							provides: [
								'Restraint_eyes',
							],
						},
					},
				},
			],
		},
		hoodMouthCover: {
			type: 'typed',
			name: 'Hood Mouth Cover',
			variants: [
				{
					id: 'mouth_free',
					name: 'Mouth Uncovered',
					default: true,
				},
				{
					id: 'mouth',
					name: 'Mouth Cover',
					properties: {
						attributes: {
							provides: [
								'Mouth_cover',
							],
							requires: [
								'!Mouth_tongue_out',
								'!Mouth_protruding',
							],
							covers: [
								'Mouth_item',
							],
						},
					},
				},
				{
					id: 'mouth_plug',
					name: 'Mouth Cover with Plug',
					properties: {
						effects: {
							lipsTouch: 10,
							jawMove: 10,
							tongueRoof: 8,
							mouthBreath: 7,
							throatBreath: 6,
							coherency: 8,
							stimulus: 6,
						},
						attributes: {
							provides: [
								'Restraint_mouth',
								'Mouth_item',
								'Mouth_insert',
								'Mouth_insert_deep',
								'Mouth_cover',
							],
							requires: [
								'Mouth_open_wide',
								'!Mouth_tongue_out',
								'!Mouth_protruding',
								'!Mouth_cover',
							],
							covers: [
								'Mouth_item',
							],
						},
					},
				},
			],
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER pulled ITEM_ASSET_NAME over TARGET_CHARACTER_DYNAMIC_POSSESSIVE head, covering the head.',
		actionRemove: 'SOURCE_CHARACTER removed ITEM_ASSET_NAME from TARGET_CHARACTER_DYNAMIC_POSSESSIVE head.',
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
