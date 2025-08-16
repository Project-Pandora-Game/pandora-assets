DefineAsset({
	name: 'Kigurumi Mask',
	size: 'medium',
	requireFreeHandsToUseDefault: true,
	graphics: 'graphics.json',
	colorization: {
		mask: {
			name: 'Mask',
			default: '#FFE3D2',
		},
		mask_helmet: {
			name: 'Mask Helmet',
			default: '#FFE3D2',
		},
		mask_straps: {
			name: 'Mask Straps',
			default: '#4C4C4C',
		},
		latches: {
			name: 'Latches',
			default: '#D5D5D5',
		},
		eyebrows: {
			name: 'Eyebrows',
			default: '#555555',
		},
		eyeColor_l: {
			name: 'Eye color left',
			default: '#2D589B',
			minAlpha: 0.8,
		},
		eyeColor_r: {
			name: 'Eye color right',
			default: '#2D589B',
			minAlpha: 0.8,
		},
		lashes: {
			name: 'Eyelashes',
			default: '#555555',
		},
		eyeBackground: {
			name: 'Eye Background',
			default: '#FFFFFFD9',
			minAlpha: 0.6,
		},
		shine: {
			name: 'Eye Shine',
			default: '#A8CEE4CC',
			minAlpha: 0,
		},
		nose: {
			name: 'Nose',
			default: '#FFCEBECC',
			minAlpha: 0.1,
		},
		blush: {
			name: 'Blush',
			default: '#FFFFFF',
		},
		lips: {
			name: 'Lips',
			default: '#FCB6B4',
			minAlpha: 0,
		},

	},
	// size:200, y:189, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Headgear',
			'Headgear_hood',
		],
	},
	modules: {
		back: {
			type: 'typed',
			name: 'Back',
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'helmet',
					name: 'Helmet',
					properties: {
						attributes: {
							provides: [
								'Ear_item',
								'Ear_cover',
							],
							hides: [
								'Hair',
								'Wig',
								'Ears',
							],
							covers: [
								'Ear_item',
							],
						},
						stateFlags: {
							provides: [
								'helmet',
							],
						},
					},
				},
				{
					id: 'helmet_holes',
					name: 'Helmet with Holes',
					properties: {
						attributes: {
							provides: [
								'Ear_item',
								'Ear_cover',
							],
							hides: [
								'Hair',
								'Wig',
								'Ears',
							],
							covers: [
								'Ear_item',
							],
						},
						stateFlags: {
							provides: [
								'helmet',
							],
						},
					},
				},
			],
		},
		mask: {
			type: 'typed',
			name: 'Mask',
			variants: [
				{
					id: 'open',
					name: 'Off',
				},
				{
					id: 'closed',
					name: 'On',
					default: true,
					properties: {
						attributes: {
							provides: [
								'Mouth_cover',
							],
							covers: [
								'Mouth_item',
							],
						},
						stateFlags: {
							provides: [
								'mask_on',
							],
						},
					},
				},
			],
		},
		latches: {
			type: 'typed',
			name: 'Latches',
			variants: [
				{
					id: 'no',
					name: 'No',
					default: true,
				},
				{
					id: 'yes',
					name: 'Yes',
					properties: {
						stateFlags: {
							requires: {
								helmet: 'Latches cannot be applied without helmet',
							},
						},
					},
				},
			],
		},
		lenses: {
			type: 'typed',
			name: 'Lenses',
			variants: [
				{
					id: 'transparent',
					name: 'Transparent',
					default: true,
					properties: {
						attributes: {
							provides: [
								'Restraint_eyes',
							],
						},
					},
				},
				{
					id: 'translucent',
					name: 'Translucent',
					properties: {
						effects: {
							blind: 3,
							blurVision: 5,
						},
						attributes: {
							provides: [
								'Restraint_eyes',
							],
						},
						stateFlags: {
							requires: {
								mask_on: 'Lenses cannot be used without mask.',
							},
						},
					},
				},
				{
					id: 'opaque',
					name: 'Opaque',
					properties: {
						effects: {
							blind: 10,
						},
						attributes: {
							provides: [
								'Restraint_eyes',
							],
						},
						stateFlags: {
							requires: {
								mask_on: 'Lenses cannot be used without mask.',
							},
						},
					},
				},
			],
		},
		blush: {
			type: 'typed',
			name: 'Blush',
			variants: [
				{
					id: 'noBlush',
					name: 'None',
					default: true,
				},
				{
					id: 'faint',
					name: 'Faint',
				},
				{
					id: 'medium',
					name: 'Medium',
				},
				{
					id: 'strong',
					name: 'Strong',
				},
				{
					id: 'full',
					name: 'Full',
				},
				{
					id: 'deep',
					name: 'Deeply',
				},
			],
		},
		mouth: {
			type: 'typed',
			name: 'Mouth',
			variants: [
				{
					id: 'smile',
					name: 'Smile',
					default: true,
				},
				{
					id: 'grin',
					name: 'Grin',
				},
			],
		},
		gag: {
			type: 'typed',
			name: 'Gag',
			variants: [
				{
					id: 'no',
					name: 'No',
					default: true,
				},
				{
					id: 'dildo',
					name: 'Dildo',
					properties: {
						attributes: {
							requires: [
								'Mouth_open_wide',
								'!Mouth_tongue_out',
								'!Mouth_protruding',
								'!Mouth_cover',
							],
							provides: [
								'Restraint',
								'Restraint_mouth',
								'Mouth_item',
								'Mouth_insert',
								'Mouth_insert_deep',
							],
						},
						stateFlags: {
							requires: {
								mask_on: 'Gag cannot be used without mask',
							},
						},
						effects: {
							lipsTouch: 9,
							jawMove: 9,
							tongueRoof: 7,
							mouthBreath: 6,
							throatBreath: 4,
							coherency: 7,
							stimulus: 6,
						},
					},
				},
			],
		},
		fantasy_ears: {
			type: 'typed',
			name: 'Non-human Ears',
			variants: [
				{
					id: 'visible',
					name: 'Visible',
					default: true,
				},
				{
					id: 'hidden',
					name: 'Hidden',
					properties: {
						attributes: {
							hides: [
								'Fantasy_ears',
							],
						},
						stateFlags: {
							requires: {
								helmet: 'Non-human ears cannot be hidden without helmet',
							},
						},
					},
				},
			],
		},
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			lockedProperties: {
				blockAddRemove: true,
				blockModules: [
					'back',
					'mask',
					'latches',
					'lenses',
					'gag',
					'blush',
					'mouth',
				],
			},
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER put ITEM_ASSET_NAME over TARGET_CHARACTER_DYNAMIC_POSSESSIVE face.',
		actionRemove: 'SOURCE_CHARACTER removed ITEM_ASSET_NAME from TARGET_CHARACTER_DYNAMIC_POSSESSIVE face.',
	},
	ownership: {
		responsibleContributor: 'Shikifet <shikifet@gmail.com>',
		credits: ['Shikifet', 'ClaudiaMia', 'Echo'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Shikifet',
				editedBy: 'Shikifet',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
