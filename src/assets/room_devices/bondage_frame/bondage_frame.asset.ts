DefineRoomDeviceAsset({
	name: 'Bondage Frame',
	size: 'huge',
	colorization: {
		frame: {
			name: 'Frame',
			default: '#924A2D',
		},
		sockets: {
			name: 'Sockets',
			default: '#B4A099',
		},
		rings: {
			name: 'Rings',
			default: '#4F4F4F',
		},
		chains: {
			name: 'Chains',
			default: '#FE5D5D',
		},
	},
	staticAttributes: ['Play_furniture'],
	preview: 'frame_preview.png',
	slots: {
		character_slot: {
			name: 'Under the frame',
			asset: {
				name: 'Bondage Frame',
				size: 'huge',
				poseLimits: {
					legs: ['standing', 'kneeling'],
				},
			},
		},
		character_slot_left: {
			name: 'Tied against the left post',
			asset: {
				name: 'Bondage Frame',
				size: 'huge',
				poseLimits: {
					arms: {
						position: 'back',
					},
					bones: {
						arm_l: 78,
						arm_r: 78,
						elbow_l: 55,
						elbow_r: 55,
						character_rotation: 0,
					},
					view: 'front',
				},
				effects: {
					blockHands: true,
				},
			},
		},
		character_slot_right: {
			name: 'Tied against the right post',
			asset: {
				name: 'Bondage Frame',
				size: 'huge',
				poseLimits: {
					arms: {
						position: 'back',
					},
					bones: {
						arm_l: 78,
						arm_r: 78,
						elbow_l: 55,
						elbow_r: 55,
						character_rotation: 0,
					},
					view: 'front',
				},
				effects: {
					blockHands: true,
				},
			},
		},
	},
	modules: {
		chains: {
			type: 'typed',
			name: 'Chains',
			variants: [
				{
					id: 'none',
					name: 'Not attached',
					default: true,
					properties: {
						slotProperties: {
							character_slot: {
								poseLimits: {
									bones: {
										leg_r: [[-18, 10]],
										leg_l: [[-18, 10]],
										character_rotation: 0,
									},
								},
							},
						},
					},
				},
				{
					id: 'standing',
					name: 'Tied standing (Arms)',
					properties: {
						blockSlotsEnterLeave: ['character_slot'],
						slotProperties: {
							character_slot: {
								poseLimits: {
									bones: {
										arm_l: -70,
										arm_r: -70,
										elbow_l: -20,
										elbow_r: -20,
										character_rotation: 0,
									},
								},
								effects: {
									blockHands: true,
								},
								attributes: {
									requires: [
										'Wrist_cuffs',
									],
								},
							},
						},
					},
				},
				{
					id: 'standing_legs',
					name: 'Tied standing (Legs)',
					properties: {
						blockSlotsEnterLeave: ['character_slot'],
						slotProperties: {
							character_slot: {
								poseLimits: {
									bones: {
										leg_r: -30,
										leg_l: -30,
										character_rotation: 0,
									},
								},
								effects: {
								},
								attributes: {
									requires: [
										'Ankle_cuffs',
									],
								},
							},
						},
					},
				},
				{
					id: 'standing_arms_legs',
					name: 'Tied standing (Arms & Legs)',
					properties: {
						blockSlotsEnterLeave: ['character_slot'],
						slotProperties: {
							character_slot: {
								poseLimits: {
									bones: {
										arm_l: -70,
										arm_r: -70,
										elbow_l: -20,
										elbow_r: -20,
										leg_r: -30,
										leg_l: -30,
										character_rotation: 0,
									},
								},
								effects: {
									blockHands: true,
								},
								attributes: {
									requires: [
										'Wrist_cuffs',
										'Ankle_cuffs',
									],
								},
							},
						},
					},
				},
				{
					id: 'hanging',
					name: 'Tied hanging (Arms)',
					properties: {
						blockSlotsEnterLeave: ['character_slot'],
						slotProperties: {
							character_slot: {
								poseLimits: {
									bones: {
										arm_l: -70,
										arm_r: -70,
										elbow_l: -20,
										elbow_r: -20,
										character_rotation: 0,
									},
								},
								effects: {
									blockHands: true,
								},
								attributes: {
									requires: [
										'Wrist_cuffs',
									],
								},
							},
						},
					},
				},
				{
					id: 'hanging_and_legs',
					name: 'Tied hanging (Arms & Legs)',
					properties: {
						blockSlotsEnterLeave: ['character_slot'],
						slotProperties: {
							character_slot: {
								poseLimits: {
									bones: {
										arm_l: -70,
										arm_r: -70,
										elbow_l: -20,
										elbow_r: -20,
										leg_r: -30,
										leg_l: -30,
										character_rotation: 0,
									},
								},
								effects: {
									blockHands: true,
								},
								attributes: {
									requires: [
										'Wrist_cuffs',
										'Ankle_cuffs',
									],
								},
							},
						},
					},
				},
			],
		},
		position: {
			type: 'typed',
			name: 'Chained position',
			variants: [
				{
					id: 'front',
					name: 'Front-facing',
					default: true,
					properties: {
						slotProperties: {
							character_slot: {
								poseLimits: {
									view: 'front',
								},
							},
						},
					},
				},
				{
					id: 'back',
					name: 'Back-facing',
					properties: {
						slotProperties: {
							character_slot: {
								poseLimits: {
									view: 'back',
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
				blockModules: ['chains', 'position'],
			},
		},
	},
	pivot: {
		x: 700,
		y: 1800,
	},
	graphicsLayers: [
		{
			type: 'sprite',
			image: 'frame_rings_side.png',
			colorizationKey: 'rings',
		},
		{
			type: 'sprite',
			image: 'frame.png',
			colorizationKey: 'frame',
		},
		{
			type: 'sprite',
			image: 'frame_sockets.png',
			colorizationKey: 'sockets',
		},
		{
			type: 'sprite',
			image: 'frame_rings_top.png',
			colorizationKey: 'rings',
		},
		{
			type: 'sprite',
			image: 'frame_chains_top_hanging.png',
			imageOverrides: [
				{
					image: 'frame_chains_top_short.png',
					condition: [
						[
							{
								module: 'chains',
								operator: '=',
								value: 'hanging',
							},
						],
						[
							{
								module: 'chains',
								operator: '=',
								value: 'hanging_and_legs',
							},
						],
					],
				},
				{
					image: 'frame_chains_top_long.png',
					condition: [
						[
							{
								module: 'chains',
								operator: '=',
								value: 'standing',
							},
						],
					],
				},
				{
					image: 'frame_chains_top_longer.png',
					condition: [
						[
							{
								module: 'chains',
								operator: '=',
								value: 'standing_arms_legs',
							},
						],
					],
				},
			],
			colorizationKey: 'chains',
		},
		{
			type: 'slot',
			slot: 'character_slot',
			characterPosition: {
				offsetX: 0,
				offsetY: 10,
			},
			characterPositionOverrides: [
				{
					position: {
						offsetX: 0,
						offsetY: 10,
						disablePoseOffset: true,
					},
					condition: [
						[
							{
								module: 'chains',
								operator: '=',
								value: 'standing',
							},
						],
					],
				},
				{
					position: {
						offsetX: 0,
						offsetY: 90,
						disablePoseOffset: true,
					},
					condition: [
						[
							{
								module: 'chains',
								operator: '=',
								value: 'standing_legs',
							},
						],
						[
							{
								module: 'chains',
								operator: '=',
								value: 'standing_arms_legs',
							},
						],
					],
				},
				{
					position: {
						offsetX: 0,
						offsetY: -255,
						disablePoseOffset: true,
					},
					condition: [
						[
							{
								module: 'chains',
								operator: '=',
								value: 'hanging',
							},
						],
						[
							{
								module: 'chains',
								operator: '=',
								value: 'hanging_and_legs',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: 'frame_chains_bottom_hanging.png',
			imageOverrides: [
				{
					image: 'frame_chains_bottom_long_attached.png',
					condition: [
						[
							{
								module: 'chains',
								operator: '=',
								value: 'standing_legs',
							},
						],
						[
							{
								module: 'chains',
								operator: '=',
								value: 'standing_arms_legs',
							},
						],
					],
				},
				{
					image: 'frame_chains_bottom_attached.png',
					condition: [
						[
							{
								module: 'chains',
								operator: '=',
								value: 'hanging_and_legs',
							},
						],
					],
				},
			],
			colorizationKey: 'chains',
		},
		{
			type: 'slot',
			slot: 'character_slot_left',
			characterPosition: {
				offsetX: -520,
				offsetY: 35,
			},
		},
		{
			type: 'slot',
			slot: 'character_slot_right',
			characterPosition: {
				offsetX: 520,
				offsetY: 35,
			},
		},
	],
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia', 'Angela-BC'],
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
		],
	},
});
