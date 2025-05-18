DefineRoomDeviceAsset({
	name: 'Bondage Frame',
	size: 'huge',
	requireFreeHandsToUseDefault: true,
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
		character_slot_left: {
			name: 'In front of the left frame',
			asset: {
				name: 'Bondage Frame',
				size: 'huge',
				poseLimits: {
					legs: {
						pose: ['standing', 'kneeling'],
					},
				},
			},
		},
		character_slot: {
			name: 'Under the frame',
			asset: {
				name: 'Bondage Frame',
				size: 'huge',
				poseLimits: {
					legs: {
						pose: ['standing', 'kneeling'],
					},
				},
			},
		},
		character_slot_right: {
			name: 'In front of the right frame',
			asset: {
				name: 'Bondage Frame',
				size: 'huge',
				poseLimits: {
					legs: {
						pose: ['standing', 'kneeling'],
					},
				},
			},
		},
	},
	modules: {
		chains: {
			type: 'typed',
			name: 'Under the frame chains',
			staticConfig: { slotName: 'character_slot' },
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
										leg_r: -33,
										leg_l: -33,
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
										leg_r: -33,
										leg_l: -33,
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
			name: 'Under the frame position',
			staticConfig: { slotName: 'character_slot' },
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
			name: 'Under the frame chain locks',
			staticConfig: { slotName: 'character_slot' },
			lockedProperties: {
				blockModules: ['chains', 'position'],
			},
		},
		frame_left: {
			type: 'typed',
			name: 'Left frame position',
			staticConfig: { slotName: 'character_slot_left' },
			variants: [
				{
					id: 'free_left',
					name: 'Leaning against',
					default: true,
				},
				{
					id: 'tied_left',
					name: 'Tied (Arms behind)',
					properties: {
						blockSlotsEnterLeave: ['character_slot_left'],
						slotProperties: {
							character_slot_left: {
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
				},
				{
					id: 'tied_left_up',
					name: 'Chained (Arms overhead)',
					properties: {
						blockSlotsEnterLeave: ['character_slot_left'],
						slotProperties: {
							character_slot_left: {
								poseLimits: {
									arms: {
										position: 'front',
									},
									bones: {
										arm_l: -74,
										arm_r: -74,
										elbow_l: -43,
										elbow_r: -43,
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
					id: 'tied_left_feet',
					name: 'Chained (Legs)',
					properties: {
						blockSlotsEnterLeave: ['character_slot_left'],
						slotProperties: {
							character_slot_left: {
								poseLimits: {
									bones: {
										leg_l: [[-3, 2]],
										leg_r: [[-3, 2]],
										character_rotation: 0,
									},
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
					id: 'tied_left_both',
					name: 'Chained (Arms & Legs)',
					properties: {
						blockSlotsEnterLeave: ['character_slot_left'],
						slotProperties: {
							character_slot_left: {
								poseLimits: {
									bones: {
										arm_l: -74,
										arm_r: -74,
										elbow_l: -43,
										elbow_r: -43,
										leg_l: [[-3, 2]],
										leg_r: [[-3, 2]],
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
		lock_left: {
			type: 'lockSlot',
			name: 'Left frame restraints lock',
			staticConfig: { slotName: 'character_slot_left' },
			lockedProperties: {
				blockModules: ['frame_left'],
			},
		},
		frame_right: {
			type: 'typed',
			name: 'Right frame position',
			staticConfig: { slotName: 'character_slot_right' },
			variants: [
				{
					id: 'free_right',
					name: 'Leaning against',
					default: true,
				},
				{
					id: 'tied_right',
					name: 'Tied (Arms behind)',
					properties: {
						blockSlotsEnterLeave: ['character_slot_right'],
						slotProperties: {
							character_slot_right: {
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
				},
				{
					id: 'tied_right_up',
					name: 'Chained (Arms overhead)',
					properties: {
						blockSlotsEnterLeave: ['character_slot_right'],
						slotProperties: {
							character_slot_right: {
								poseLimits: {
									arms: {
										position: 'front',
									},
									bones: {
										arm_l: -74,
										arm_r: -74,
										elbow_l: -43,
										elbow_r: -43,
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
					id: 'tied_right_feet',
					name: 'Chained (Legs)',
					properties: {
						blockSlotsEnterLeave: ['character_slot_right'],
						slotProperties: {
							character_slot_right: {
								poseLimits: {
									bones: {
										leg_l: [[-3, 2]],
										leg_r: [[-3, 2]],
										character_rotation: 0,
									},
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
					id: 'tied_right_both',
					name: 'Chained (Arms & Legs)',
					properties: {
						blockSlotsEnterLeave: ['character_slot_right'],
						slotProperties: {
							character_slot_right: {
								poseLimits: {
									bones: {
										arm_l: -74,
										arm_r: -74,
										elbow_l: -43,
										elbow_r: -43,
										leg_l: [[-3, 2]],
										leg_r: [[-3, 2]],
										character_rotation: 0,
									},
								},
								effects: {
									blockHands: true,
								},
								attributes: {
									requires: [
										'Ankle_cuffs',
										'Wrist_cuffs',
									],
								},
							},
						},
					},
				},
			],
		},
		lock_right: {
			type: 'lockSlot',
			name: 'Right frame restraints lock',
			staticConfig: { slotName: 'character_slot_right' },
			lockedProperties: {
				blockModules: ['frame_right'],
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
			image: 'frame_ring_left.png',
			colorizationKey: 'rings',
		},
		{
			type: 'sprite',
			image: 'frame_ring_right.png',
			colorizationKey: 'rings',
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
			image: '',
			colorizationKey: 'chains',
			imageOverrides: [
				{
					image: 'frame_chains_left_top_attached.png',
					condition: [
						[
							{
								module: 'frame_left',
								operator: '=',
								value: 'tied_left_up',
							},
						],
						[
							{
								module: 'frame_left',
								operator: '=',
								value: 'tied_left_both',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'chains',
			imageOverrides: [
				{
					image: 'frame_chains_left_low_attached.png',
					condition: [
						[
							{
								module: 'frame_left',
								operator: '=',
								value: 'tied_left_feet',
							},
						],
						[
							{
								module: 'frame_left',
								operator: '=',
								value: 'tied_left_both',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'chains',
			imageOverrides: [
				{
					image: 'frame_chains_right_top_attached.png',
					condition: [
						[
							{
								module: 'frame_right',
								operator: '=',
								value: 'tied_right_up',
							},
						],
						[
							{
								module: 'frame_right',
								operator: '=',
								value: 'tied_right_both',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'chains',
			imageOverrides: [
				{
					image: 'frame_chains_right_low_attached.png',
					condition: [
						[
							{
								module: 'frame_right',
								operator: '=',
								value: 'tied_right_feet',
							},
						],
						[
							{
								module: 'frame_right',
								operator: '=',
								value: 'tied_right_both',
							},
						],
					],
				},
			],
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
			type: 'slot',
			slot: 'character_slot_left',
			characterPosition: {
				offsetX: -520,
				offsetY: 35,
			},
			characterPositionOverrides: [
				{
					position: {
						offsetX: -520,
						offsetY: 35,
						disablePoseOffset: true,
					},
					condition: [
						[
							{
								module: 'frame_left',
								operator: '=',
								value: 'tied_left_up',
							},
						],
						[
							{
								module: 'frame_left',
								operator: '=',
								value: 'tied_left_feet',
							},
						],
						[
							{
								module: 'frame_left',
								operator: '=',
								value: 'tied_left_both',
							},
						],
					],
				},
			],
		},
		{
			type: 'slot',
			slot: 'character_slot_right',
			characterPosition: {
				offsetX: 520,
				offsetY: 35,
			},
			characterPositionOverrides: [
				{
					position: {
						offsetX: 520,
						offsetY: 35,
						disablePoseOffset: true,
					},
					condition: [
						[
							{
								module: 'frame_right',
								operator: '=',
								value: 'tied_right_up',
							},
						],
						[
							{
								module: 'frame_right',
								operator: '=',
								value: 'tied_right_feet',
							},
						],
						[
							{
								module: 'frame_right',
								operator: '=',
								value: 'tied_right_both',
							},
						],
					],
				},
			],

		},
	],
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia', 'Angela-BC', 'SandrinePDR'],
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

