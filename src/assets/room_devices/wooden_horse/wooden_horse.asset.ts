DefineRoomDeviceAsset({
	name: 'Wooden Horse',
	size: 'huge',
	colorization: {
		frame: {
			name: 'Frame',
			default: '#C88A65',
		},
		top: {
			name: 'Top',
			default: '#A9653C',
		},
		parts: {
			name: 'Metal parts',
			default: '#AAAAAA',
		},
		chains: {
			name: 'Chains',
			default: '#FFFFFF',
		},
	},
	slots: {
		character_slot: {
			name: 'Wooden horse',
			asset: {
				name: 'Wooden horse',
				size: 'huge',
				graphics: 'horse.json',
			},
		},
	},
	modules: {
		position: {
			type: 'typed',
			name: 'Position',
			variants: [
				{
					id: 'none',
					name: 'Standing in front',
					default: true,
					properties: {
						slotProperties: {
							character_slot: {
								poseLimits: {
									bones: {
										leg_r: [[-36, 10]],
										leg_l: [[-36, 10]],
										character_rotation: 0,
									},
									legs: ['standing', 'kneeling'],
								},
							},
						},
					},
				},
				{
					id: 'sitting',
					name: 'Sitting on top',
					properties: {
						slotProperties: {
							character_slot: {
								poseLimits: {
									bones: {
										leg_r: -30,
										leg_l: -29,
										character_rotation: 0,
									},
									legs: ['standing', 'kneeling'],
									view: 'front',
								},
								attributes: {
									provides: ['Vagina_cover', 'Anus_cover'],
									requires: [
										'!Vagina_protruding',
										'!Anus_protruding',
									],
								},
							},
						},
					},
				},
				{
					id: 'chained_feet',
					name: 'Tied feet',
					properties: {
						blockSlotsEnterLeave: ['character_slot'],
						slotProperties: {
							character_slot: {
								poseLimits: {
									bones: {
										leg_r: -30,
										leg_l: -29,
										character_rotation: 0,
									},
									legs: 'standing',
									view: 'front',
								},
								attributes: {
									provides: ['Vagina_cover', 'Anus_cover'],
									requires: [
										'!Vagina_protruding',
										'!Anus_protruding',
										'Ankle_cuffs',
									],
								},
							},
						},
					},
				},
				{
					id: 'chained_collar',
					name: 'Tied collar',
					properties: {
						blockSlotsEnterLeave: ['character_slot'],
						slotProperties: {
							character_slot: {
								poseLimits: {
									bones: {
										leg_r: -30,
										leg_l: -29,
										character_rotation: 0,
									},
									legs: ['standing', 'kneeling'],
									view: 'front',
								},
								attributes: {
									provides: ['Vagina_cover', 'Anus_cover'],
									requires: [
										'!Vagina_protruding',
										'!Anus_protruding',
										'Collar_front_ring',
									],
								},
							},
						},
					},
				},
				{
					id: 'chained_both',
					name: 'Tied feet and collar',
					properties: {
						blockSlotsEnterLeave: ['character_slot'],
						slotProperties: {
							character_slot: {
								poseLimits: {
									bones: {
										leg_r: -30,
										leg_l: -29,
										character_rotation: 0,
									},
									legs: 'standing',
									view: 'front',
								},
								attributes: {
									provides: ['Vagina_cover', 'Anus_cover'],
									requires: [
										'!Vagina_protruding',
										'!Anus_protruding',
										'Ankle_cuffs',
										'Collar_front_ring',
									],
								},
							},
						},
					},
				},
				{
					id: 'reverse',
					name: 'Sitting reverse',
					properties: {
						slotProperties: {
							character_slot: {
								poseLimits: {
									bones: {
										leg_r: -29,
										leg_l: -30,
										character_rotation: 0,
									},
									legs: ['standing', 'kneeling'],
									view: 'back',
								},
								attributes: {
									provides: ['Vagina_cover', 'Anus_cover'],
									requires: [
										'!Vagina_protruding',
										'!Anus_protruding',
									],
								},
							},
						},
					},
				},
				{
					id: 'chained_reverse',
					name: 'Tied feet reverse',
					properties: {
						blockSlotsEnterLeave: ['character_slot'],
						slotProperties: {
							character_slot: {
								poseLimits: {
									bones: {
										leg_r: -29,
										leg_l: -30,
										character_rotation: 0,
									},
									legs: 'standing',
									view: 'back',
								},
								attributes: {
									provides: ['Vagina_cover', 'Anus_cover'],
									requires: [
										'!Vagina_protruding',
										'!Anus_protruding',
										'Ankle_cuffs',
									],
								},
							},
						},
					},
				},
			],
		},
		lock: {
			type: 'lockSlot',
			name: 'Chain locks',
			lockedProperties: {
				blockModules: ['position'],
			},
		},
	},
	pivot: {
		x: 542,
		y: 1308,
	},
	graphicsLayers: [
		{
			type: 'sprite',
			image: 'horse_top_unused.png',
			colorizationKey: 'top',
		},
		{
			type: 'sprite',
			image: 'horse_top_used.png',
			colorizationKey: 'top',
		},
		{
			type: 'sprite',
			image: 'horse_frame.png',
			colorizationKey: 'frame',
		},
		{
			type: 'sprite',
			image: 'horse_metal.png',
			colorizationKey: 'parts',
		},
		{
			type: 'slot',
			slot: 'character_slot',
			characterPosition: {
				offsetX: 50,
				offsetY: 65,
				relativeScale: 1.05,
			},
			characterPositionOverrides: [
				{
					position: {
						offsetX: 0,
						offsetY: 38,
						pivotOffset: {
							x: 0,
							y: 142,
						},
						disablePoseOffset: true,
					},
					condition: [
						[
							{
								module: 'position',
								operator: '!=',
								value: 'none',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: 'horse_chain_feet.png',
			colorizationKey: 'chains',
			imageOverrides: [
				{
					image: '',
					condition: [
						[
							{
								module: 'position',
								operator: '!=',
								value: 'chained_feet',
							},
							{
								module: 'position',
								operator: '!=',
								value: 'chained_both',
							},
							{
								module: 'position',
								operator: '!=',
								value: 'chained_reverse',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: 'horse_chain_collar.png',
			colorizationKey: 'chains',
			imageOverrides: [
				{
					image: '',
					condition: [
						[
							{
								module: 'position',
								operator: '!=',
								value: 'chained_collar',
							},
							{
								module: 'position',
								operator: '!=',
								value: 'chained_both',
							},
						],
					],
				},
			],
		},
	],
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'images',
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only',
			},
			{
				part: 'used 3D model - base',
				source: 'https://skfb.ly/o9LT8',
				copyrightHolder: 'Roman Berezyak',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'used 3D model - top',
				source: 'https://skfb.ly/6XCRD',
				copyrightHolder: 'donnichols',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
		],
	},
});
