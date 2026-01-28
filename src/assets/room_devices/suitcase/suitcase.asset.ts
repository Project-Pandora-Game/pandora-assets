DefineAsset({
	name: 'Suitcase',
	size: 'large',
	graphics: 'graphics.json',
	colorization: {
		suitcase: {
			name: 'Suitcase',
			default: '#D5D5D5',
		},
		suitcase_latches: {
			name: 'Suitcase Latches',
			default: '#9f9f9fff',
		},
		restraints_support: {
			name: 'Restraints Support',
			default: '#E6E6E6',
		},
		restraints_belts: {
			name: 'Belts',
			default: '#363636ff',
		},
		restraints_belts_buckles: {
			name: 'Belts Buckles',
			default: '#9f9f9fff',
		},
		wheels: {
			name: 'Wheels',
			default: '#ffffffff',
		},
	},
	roomDeployment: {
		autoDeployRelativePosition: [-60, -100, 0],
	},
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Restraint_arms',
			'Restraint_torso',
			'Restraint_legs',
		],
	},
	modules: {
		handle: {
			type: 'typed',
			name: 'Handle',
			variants: [
				{
					id: 'retracted',
					name: 'Retracted',
				},
				{
					id: 'extended',
					name: 'Extended',
					default: true,
				},
			],
		},
		status: {
			type: 'typed',
			name: 'Suitcase Position',
			variants: [
				{
					id: 'front',
					name: 'Front',
					default: true,
					properties: {
						stateFlags: {
							provides: ['front_view'],
						},
					},
				},
				{
					id: 'side',
					name: 'Side',
				},
			],
		},
		position: {
			type: 'typed',
			name: 'Character Position',
			variants: [
				{
					id: 'front',
					name: 'Front',
					default: true,
				},
				{
					id: 'inside',
					name: 'Inside',
					properties: {
						poseLimits: {
							view: 'front',
							legs: {
								pose: 'kneeling',
							},
							bones: {
								leg_r: -60,
								leg_l: -60,
								arm_r: [[75, 140]],
								elbow_r: [[-180, -125], [-15, 180]],
								arm_l: [[75, 140]],
								elbow_l: [[-180, -125], [-15, 180]],
							},
						},
						stateFlags: {
							provides: ['inside_suitcase'],
						},
					},
				},
			],
		},
		door: {
			type: 'typed',
			name: 'Suitcase Door',
			variants: [
				{
					id: 'closed',
					name: 'Closed',
					default: true,
					properties: {
						blockModules: ['restraints_belts'],
						stateFlags: {
							provides: ['suitcase_closed'],
						},
					},
				},
				{
					id: 'opened',
					name: 'Opened',
					properties: {
						poseLimits: {
							view: 'front',
						},
						stateFlags: {
							requires: {
								front_view: 'Suitcase must be in Front position while door is Opened',
							},
						},
					},
				},
			],
		},
		door_lock: {
			type: 'lockSlot',
			name: 'Suitcase Door Lock',
			lockedProperties: {
				blockAddRemove: true,
				blockModules: ['door'],
			},
		},
		restraints_panel: {
			type: 'typed',
			name: 'Restraints Panel',
			variants: [
				{
					id: 'none',
					name: 'None',
				},
				{
					id: 'attached',
					name: 'Attached',
					default: true,
					properties: {
						stateFlags: {
							provides: ['restraints_panel'],
						},
					},
				},
			],
		},
		restraints_belts: {
			type: 'typed',
			name: 'Restraints Belts',
			variants: [
				{
					id: 'none',
					name: 'None',
				},
				{
					id: 'harness',
					name: 'Harness',
					default: true,
					properties: {
						stateFlags: {
							provides: ['belts_attached'],
							requires: {
								restraints_panel: 'Harness requires an attached Restraint Panel',
							},
						},
					},
				},
			],
		},
		restraints_belts_lock: {
			type: 'lockSlot',
			name: 'Belts Lock',
			lockedProperties: {
				blockAddRemove: true,
				blockModules: ['restraints_belts'],
			},
		},
	},
	stateFlagCombinations: [
		{
			requiredFlags: ['inside_suitcase', 'belts_attached'],
			properties: {
				attributes: {
					provides: ['Vulva_cover'],
				},
			},
		},
		{
			requiredFlags: ['suitcase_closed'],
			properties: {
				blockModules: ['position', 'restraints_panel'],
			},
		},
		{
			requiredFlags: ['inside_suitcase', 'suitcase_closed'],
			properties: {
				effects: {
					blockHands: true,
					blind: 9,
					lipsTouch: 0,
					jawMove: 1,
					tongueRoof: 0,
					mouthBreath: 1,
					throatBreath: 0,
					coherency: 0,
					stimulus: 0,
					distortion: 3,
					frequencyLoss: 2,
					vowelLoss: 1,
					middleLoss: 1,
				},
				attributes: {
					hides: [
						'Body_base',
						'Head_base',
						'Ears',
						'Hair',
						'Hair_front',
						'Hair_back',
						'Hair_extension',
						'Eyebrows',
						'Eyes',
						'Eyes_right_open',
						'Eyes_left_open',
						'Eyes_right_closed',
						'Eyes_left_closed',
						'Nose',
						'Mouth',
						'Mouth_open_wide',
						'Mouth_open_teeth',
						'Mouth_tongue_out',
						'Body_texture',
						'Blush',
						'Bodymark',
						'Body_tattoo',
						'Sex',
						'Vulva',
						'Vulva_spread',
						'Penis',
						'Penis_flaccid',
						'Penis_erect',
						'Clothing',
						'Clothing_upper',
						'Clothing_lower',
						'Clothing_large',
						'Clothing_outer',
						'Underwear',
						'Underwear_bra',
						'Underwear_panties',
						'Underwear_corset',
						'Underwear_pants',
						'Underwear_diaper',
						'Fantasy',
						'Fantasy_ears',
						'Fantasy_tail',
						'Facewear',
						'Facewear_glasses',
						'Accessory',
						'Legwear',
						'Footwear',
						'Headgear',
						'Headgear_hood',
						'Wig',
						'Wig_front',
						'Wig_back',
						'Gloves',
						'Mittens',
						'Restraint',
						'Restraint_arms',
						'Wrist_cuffs',
						'Elbow_cuffs',
						'Restraint_torso',
						'Restraint_legs',
						'Ankle_cuffs',
						'Thigh_cuffs',
						'Restraint_eyes',
						'Toy',
						'Toy_clamps_genital',
						'Ear_item',
						'Restraint_ears',
						'Ear_insert',
						'Ear_cover',
						'Mouth_item',
						'Mouth_insert_deep',
						'Mouth_protruding',
						'Mouth_cover',
						'Hand_item',
						'Hand_cover',
						'Hand_restricting_cover',
						'Breast_item',
						'Breast_nipple',
						'Breast_cover',
						'Vulva_item',
						'Vulva_insert',
						'Vulva_insert_deep',
						'Vulva_cover',
						'Crotch_protruding',
						'Anus_item',
						'Anus_insert',
						'Anus_insert_deep',
						'Anus_protruding',
						'Anus_cover',
						'Collar',
						'Collar_front_ring',
						'Leash',
						'Chastity',
						'Handheld',
						'Piercing',
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
						'Mouth_item',
						'Mouth_cover',
						'Ear_item',
					],
					provides: [
						'Mouth_cover',
						'Anus_cover',
						'Vulva_cover',
						'Breast_cover',
						'Hand_cover',
						'Ear_cover',
					],
				},
			},
		},
	],
	chat: {
		actionAdd: 'SOURCE_CHARACTER placed ITEM_ASSET_NAME near TARGET_CHARACTER_DYNAMIC',
		actionRemove: 'SOURCE_CHARACTER removed ITEM_ASSET_NAME from TARGET_CHARACTER',
	},
	ownership: {
		responsibleContributor: 'Shikifet <shikifet@gmail.com>',
		credits: ['Shikifet'],
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
