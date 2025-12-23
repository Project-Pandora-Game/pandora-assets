DefineRoomDeviceAsset({
	name: 'Wooden Double Bed',
	size: 'huge',
	requireFreeHandsToUseDefault: false,
	colorization: {
		bed_frame: {
			name: 'Bed frame',
			default: '#FFE8E9',
		},
		mattress: {
			name: 'Mattress',
			default: '#ffffff',
		},
		pillows: {
			name: 'Pillows',
			default: '#ffffff',
		},
		blankets: {
			name: 'Blankets',
			default: '#ebebeb',
		},
		ropes_left: {
			name: 'Left ropes',
			default: '#777777',
		},
		ropes_middle: {
			name: 'Middle ropes',
			default: '#777777',
		},
		ropes_right: {
			name: 'Right ropes',
			default: '#777777',
		},
	},
	staticAttributes: ['Furniture', 'Play_furniture'],
	preview: 'bed_preview.png',
	slots: {
		character_slot_left: {
			name: 'Bed - left side',
			asset: {
				name: 'Wooden Double Bed left side',
				size: 'huge',
				poseLimits: {
					legs: {
						pose: ['standing', 'kneeling'],
					},
				},
			},
		},
		character_slot_middle: {
			name: 'Bed - center',
			asset: {
				name: 'Wooden Double Bed center',
				size: 'huge',
				poseLimits: {
					legs: {
						pose: ['standing', 'kneeling'],
					},
				},
			},
		},
		character_slot_right: {
			name: 'Bed - right side',
			asset: {
				name: 'Wooden Double Bed right side',
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
		blankets: {
			type: 'typed',
			name: 'Blankets',
			staticConfig: { slotName: null },
			variants: [
				{
					id: 'no',
					name: 'None',
					default: true,
				},
				{
					id: 'left',
					name: 'Left side',
				},
				{
					id: 'right',
					name: 'Right side',
				},
				{
					id: 'both',
					name: 'Both sides',
				},
			],
		},
		ropes_left: {
			type: 'typed',
			name: 'Bed ropes - left side',
			staticConfig: { slotName: 'character_slot_left' },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'tied_legs',
					name: 'Tied (Legs)',
					properties: {
						blockSlotsEnterLeave: ['character_slot_left'],
						slotProperties: {
							character_slot_left: {
								poseLimits: {
									bones: {
										leg_r: -18,
										leg_l: -18,
										character_rotation: 0,
									},
									legs: {
										pose: 'standing',
									},
									view: 'front',
								},
							},
						},
					},
				},
				{
					id: 'tied_arms',
					name: 'Tied (Arms)',
					properties: {
						blockSlotsEnterLeave: ['character_slot_left'],
						slotProperties: {
							character_slot_left: {
								poseLimits: {
									bones: {
										arm_l: -25,
										arm_r: -27,
										elbow_l: -60,
										elbow_r: -58,
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
					id: 'tied_both',
					name: 'Tied (Legs & Arms)',
					properties: {
						blockSlotsEnterLeave: ['character_slot_left'],
						slotProperties: {
							character_slot_left: {
								poseLimits: {
									bones: {
										arm_l: -25,
										arm_r: -27,
										elbow_l: -60,
										elbow_r: -58,
										leg_r: -18,
										leg_l: -18,
										character_rotation: 0,
									},
									legs: {
										pose: 'standing',
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
					id: 'tied_legs_back',
					name: 'Tied (Legs) facing down',
					properties: {
						blockSlotsEnterLeave: ['character_slot_left'],
						slotProperties: {
							character_slot_left: {
								poseLimits: {
									bones: {
										leg_r: -18,
										leg_l: -18,
										character_rotation: 0,
									},
									legs: {
										pose: 'standing',
									},
									view: 'back',
								},
							},
						},
					},
				},
				{
					id: 'tied_arms_back',
					name: 'Tied (Arms) facing down',
					properties: {
						blockSlotsEnterLeave: ['character_slot_left'],
						slotProperties: {
							character_slot_left: {
								poseLimits: {
									bones: {
										arm_l: -25,
										arm_r: -27,
										elbow_l: -60,
										elbow_r: -58,
										character_rotation: 0,
									},
									view: 'back',
								},
								effects: {
									blockHands: true,
								},
							},
						},
					},
				},
				{
					id: 'tied_both_back',
					name: 'Tied (Legs & Arms) facing down',
					properties: {
						blockSlotsEnterLeave: ['character_slot_left'],
						slotProperties: {
							character_slot_left: {
								poseLimits: {
									bones: {
										arm_l: -25,
										arm_r: -27,
										elbow_l: -60,
										elbow_r: -58,
										leg_r: -18,
										leg_l: -18,
										character_rotation: 0,
									},
									legs: {
										pose: 'standing',
									},
									view: 'back',
								},
								effects: {
									blockHands: true,
								},
							},
						},
					},
				},
			],
		},
		ropes_middle: {
			type: 'typed',
			name: 'Bed ropes - middle',
			staticConfig: { slotName: 'character_slot_middle' },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'tied_legs',
					name: 'Tied spread (Legs)',
					properties: {
						blockSlotsEnterLeave: ['character_slot_middle'],
						slotProperties: {
							character_slot_middle: {
								poseLimits: {
									bones: {
										leg_r: -80,
										leg_l: -80,
										character_rotation: 0,
									},
									legs: {
										pose: 'standing',
									},
									view: 'front',
								},
							},
						},
					},
				},
				{
					id: 'tied_both',
					name: 'Tied spread (Legs & Arms)',
					properties: {
						blockSlotsEnterLeave: ['character_slot_middle'],
						slotProperties: {
							character_slot_middle: {
								poseLimits: {
									bones: {
										arm_l: 84,
										arm_r: 84,
										elbow_l: -1,
										elbow_r: -1,
										leg_r: -80,
										leg_l: -80,
										character_rotation: 0,
									},
									legs: {
										pose: 'standing',
									},
									arms: {
										position: 'back',
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
			],
		},
		ropes_right: {
			type: 'typed',
			name: 'Bed ropes - right side',
			staticConfig: { slotName: 'character_slot_right' },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'tied_legs',
					name: 'Tied (Legs)',
					properties: {
						blockSlotsEnterLeave: ['character_slot_right'],
						slotProperties: {
							character_slot_right: {
								poseLimits: {
									bones: {
										leg_r: -18,
										leg_l: -18,
										character_rotation: 0,
									},
									legs: {
										pose: 'standing',
									},
									view: 'front',
								},
							},
						},
					},
				},
				{
					id: 'tied_arms',
					name: 'Tied (Arms)',
					properties: {
						blockSlotsEnterLeave: ['character_slot_right'],
						slotProperties: {
							character_slot_right: {
								poseLimits: {
									bones: {
										arm_l: -25,
										arm_r: -25,
										elbow_l: -60,
										elbow_r: -60,
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
					id: 'tied_both',
					name: 'Tied (Legs+Arms)',
					properties: {
						blockSlotsEnterLeave: ['character_slot_right'],
						slotProperties: {
							character_slot_right: {
								poseLimits: {
									bones: {
										arm_l: -25,
										arm_r: -25,
										elbow_l: -60,
										elbow_r: -60,
										leg_r: -18,
										leg_l: -18,
										character_rotation: 0,
									},
									legs: {
										pose: 'standing',
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
					id: 'tied_legs_back',
					name: 'Tied (Legs) facing down',
					properties: {
						blockSlotsEnterLeave: ['character_slot_right'],
						slotProperties: {
							character_slot_right: {
								poseLimits: {
									bones: {
										leg_r: -18,
										leg_l: -18,
										character_rotation: 0,
									},
									legs: {
										pose: 'standing',
									},
									view: 'back',
								},
							},
						},
					},
				},
				{
					id: 'tied_arms_back',
					name: 'Tied (Arms) facing down',
					properties: {
						blockSlotsEnterLeave: ['character_slot_right'],
						slotProperties: {
							character_slot_right: {
								poseLimits: {
									bones: {
										arm_l: -25,
										arm_r: -25,
										elbow_l: -60,
										elbow_r: -60,
										character_rotation: 0,
									},
									view: 'back',
								},
								effects: {
									blockHands: true,
								},
							},
						},
					},
				},
				{
					id: 'tied_both_back',
					name: 'Tied (Legs+Arms) facing down',
					properties: {
						blockSlotsEnterLeave: ['character_slot_right'],
						slotProperties: {
							character_slot_right: {
								poseLimits: {
									bones: {
										arm_l: -25,
										arm_r: -25,
										elbow_l: -60,
										elbow_r: -60,
										leg_r: -18,
										leg_l: -18,
										character_rotation: 0,
									},
									legs: {
										pose: 'standing',
									},
									view: 'back',
								},
								effects: {
									blockHands: true,
								},
							},
						},
					},
				},
			],
		},
		lock: {
			type: 'lockSlot',
			name: 'Drawer lock',
			staticConfig: { slotName: null },
			lockedProperties: {
				blockModules: ['storage'],
			},
		},
		storage: {
			type: 'storage',
			name: `Bed drawer`,
			staticConfig: { slotName: null },
			maxAcceptedSize: 'large',
			maxCount: 20,
		},
	},
	storageModule: 'storage',
	pivot: {
		x: 920,
		y: 1730,
	},
	graphics: 'roomDeviceGraphics.json',
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'used 3D model - base',
				source: 'https://skfb.ly/69vZE',
				copyrightHolder: 'Francesco Coldesina',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'used 3D model - mattress',
				source: 'https://skfb.ly/6RO9F',
				copyrightHolder: 'mspurlock1',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'used 3D model - pillow',
				source: 'https://skfb.ly/6ZJuI',
				copyrightHolder: 'Susidko Studio',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'used 3D model - blanket',
				source: 'https://skfb.ly/pxIqD',
				copyrightHolder: 'kiu (kenlaukkl)',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
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
