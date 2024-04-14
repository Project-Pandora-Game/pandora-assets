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
		stone: {
			name: 'Stone weights',
			default: '#C3CABD',
		},
		iron: {
			name: 'Iron weights',
			default: '#AAAAAA',
		},
	},
	staticAttributes: ['Play_furniture'],
	preview: 'horse_preview.png',
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
					id: 'forward',
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
									provides: ['Vulva_cover', 'Anus_cover'],
									requires: [
										'!Vulva_protruding',
										'!Anus_protruding',
									],
								},
							},
						},
						stateFlags: {
							provides: ['sitting'],
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
									provides: ['Vulva_cover', 'Anus_cover'],
									requires: [
										'!Vulva_protruding',
										'!Anus_protruding',
									],
								},
							},
						},
						stateFlags: {
							provides: ['sitting'],
						},
					},
				},
			],
		},
		leg_chain: {
			type: 'typed',
			name: 'Feet chains',
			variants: [
				{
					id: 'none',
					name: 'None',
				},
				{
					id: 'chained',
					name: 'Chained to the horse',
					properties: {
						blockSlotsEnterLeave: ['character_slot'],
						blockModules: ['position'],
						slotProperties: {
							character_slot: {
								poseLimits: {
									legs: 'standing',
									options: [
										{
											view: 'front',
											bones: {
												leg_r: -30,
												leg_l: -29,
											},
										},
										{
											view: 'back',
											bones: {
												leg_r: -29,
												leg_l: -30,
											},
										},
									],
								},
								attributes: {
									requires: ['Ankle_cuffs'],
								},
							},
						},
						stateFlags: {
							requires: {
								sitting: 'Chains can only be used while sitting on the device',
							},
						},
					},
				},
				{
					id: 'weights_small',
					name: 'Chained to small weights',
					properties: {
						blockSlotsEnterLeave: ['character_slot'],
						blockModules: ['position'],
						slotProperties: {
							character_slot: {
								poseLimits: {
									legs: 'standing',
									options: [
										{
											view: 'front',
											bones: {
												leg_r: -30,
												leg_l: -29,
											},
										},
										{
											view: 'back',
											bones: {
												leg_r: -29,
												leg_l: -30,
											},
										},
									],
								},
								attributes: {
									requires: ['Ankle_cuffs'],
								},
							},
						},
						stateFlags: {
							requires: {
								sitting: 'Chains can only be used while sitting on the device',
							},
						},
					},
				},
				{
					id: 'weights_medium',
					name: 'Chained to medium weights',
					properties: {
						blockSlotsEnterLeave: ['character_slot'],
						blockModules: ['position'],
						slotProperties: {
							character_slot: {
								poseLimits: {
									legs: 'standing',
									options: [
										{
											view: 'front',
											bones: {
												leg_r: -30,
												leg_l: -29,
											},
										},
										{
											view: 'back',
											bones: {
												leg_r: -29,
												leg_l: -30,
											},
										},
									],
								},
								attributes: {
									requires: ['Ankle_cuffs'],
								},
							},
						},
						stateFlags: {
							requires: {
								sitting: 'Chains can only be used while sitting on the device',
							},
						},
					},
				},
				{
					id: 'weights_large',
					name: 'Chained to large weights',
					properties: {
						blockSlotsEnterLeave: ['character_slot'],
						blockModules: ['position'],
						slotProperties: {
							character_slot: {
								poseLimits: {
									legs: 'standing',
									options: [
										{
											view: 'front',
											bones: {
												leg_r: -30,
												leg_l: -29,
											},
										},
										{
											view: 'back',
											bones: {
												leg_r: -29,
												leg_l: -30,
											},
										},
									],
								},
								attributes: {
									requires: ['Ankle_cuffs'],
								},
							},
						},
						stateFlags: {
							requires: {
								sitting: 'Chains can only be used while sitting on the device',
							},
						},
					},
				},
			],
		},
		collar_chain: {
			type: 'typed',
			name: 'Collar chain',
			variants: [
				{
					id: 'none',
					name: 'None',
				},
				{
					id: 'chained',
					name: 'Chained to the horse',
					properties: {
						blockSlotsEnterLeave: ['character_slot'],
						blockModules: ['position'],
						slotProperties: {
							character_slot: {
								attributes: {
									requires: ['Collar_front_ring'],
								},
							},
						},
						stateFlags: {
							requires: {
								sitting: 'Chains can only be used while sitting on the device',
							},
						},
					},
				},
			],
		},
		weights: {
			type: 'typed',
			name: 'Weight type',
			variants: [
				{
					id: 'iron',
					name: 'Iron balls',
				},
				{
					id: 'stone',
					name: 'Stones',
				},
			],
		},
		lock: {
			type: 'lockSlot',
			name: 'Chain locks',
			lockedProperties: {
				blockModules: ['leg_chain', 'collar_chain', 'weights'],
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
			type: 'sprite',
			colorizationKey: 'iron',
			image: '',
			imageOverrides: [
				{
					image: 'horse_iron_big.png',
					condition: [
						[
							{
								module: 'leg_chain',
								operator: '=',
								value: 'weights_large',
							},
							{
								module: 'weights',
								operator: '=',
								value: 'iron',
							},
						],
					],
				},
				{
					image: 'horse_iron_medium.png',
					condition: [
						[
							{
								module: 'leg_chain',
								operator: '=',
								value: 'weights_medium',
							},
							{
								module: 'weights',
								operator: '=',
								value: 'iron',
							},
						],
					],
				},
				{
					image: 'horse_iron_small.png',
					condition: [
						[
							{
								module: 'leg_chain',
								operator: '=',
								value: 'weights_small',
							},
							{
								module: 'weights',
								operator: '=',
								value: 'iron',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			colorizationKey: 'stone',
			image: '',
			imageOverrides: [
				{
					image: 'horse_stone_big.png',
					condition: [
						[
							{
								module: 'leg_chain',
								operator: '=',
								value: 'weights_large',
							},
							{
								module: 'weights',
								operator: '=',
								value: 'stone',
							},
						],
					],
				},
				{
					image: 'horse_stone_medium.png',
					condition: [
						[
							{
								module: 'leg_chain',
								operator: '=',
								value: 'weights_medium',
							},
							{
								module: 'weights',
								operator: '=',
								value: 'stone',
							},
						],
					],
				},
				{
					image: 'horse_stone_small.png',
					condition: [
						[
							{
								module: 'leg_chain',
								operator: '=',
								value: 'weights_small',
							},
							{
								module: 'weights',
								operator: '=',
								value: 'stone',
							},
						],
					],
				},
			],
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
			colorizationKey: 'chains',
			image: '',
			imageOverrides: [
				{
					image: 'horse_chain_feet.png',
					condition: [
						[
							{
								module: 'leg_chain',
								operator: '=',
								value: 'chained',
							},
						],
					],
				},
				{
					image: 'horse_chain_feet_short.png',
					condition: [
						[
							{
								module: 'leg_chain',
								operator: '!=',
								value: 'chained',
							},
							{
								module: 'leg_chain',
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
			colorizationKey: 'chains',
			image: '',
			imageOverrides: [
				{
					image: 'horse_chain_collar.png',
					condition: [
						[
							{
								module: 'collar_chain',
								operator: '=',
								value: 'chained',
							},
							{
								module: 'position',
								operator: '=',
								value: 'forward',
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
				license: 'Pandora-Use-Only-v1-or-later',
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
			{
				part: 'used 3D model - stone',
				source: 'https://skfb.ly/67zpP',
				copyrightHolder: 'Xephira',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'used 3D model - iron ball',
				source: 'https://skfb.ly/68wyW',
				copyrightHolder: 'amitmaragaje1994',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
		],
	},
});
