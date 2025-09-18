DefineRoomDeviceAsset({
	name: 'Wooden Pillar',
	size: 'huge',
	preview: 'preview.png',
	colorization: {
		hashira: {
			name: 'Pillar',
			default: '#AC784E',
		},
		rope: {
			name: 'Rope',
			default: '#D7AC4D',
		},
		leather: {
			name: 'Leather',
			default: '#343434',
		},
		bolts: {
			name: 'Bolts',
			default: '#CCCCCC',
		},
	},
	staticAttributes: ['Play_furniture'],
	slots: {
		front: {
			name: 'In front of pillar',
			asset: {
				name: 'Wooden Pillar',
				size: 'huge',
				poseLimits: {
					legs: {
						pose: ['standing', 'kneeling'],
					},
				},
				attributes: {
					provides: ['Hashira'],
				},
				graphics: 'front.json',
			},
		},
	},
	modules: {
		suspension: {
			type: 'typed',
			name: 'Suspension',
			staticConfig: { slotName: 'front' },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'rope',
					name: 'Rope',
					properties: {
						blockSlotsEnterLeave: ['front'],
						slotProperties: {
							front: {
								attributes: {
									requires: [
										'Back_knot_anchor_point',
									],
								},
								stateFlags: {
									provides: ['suspension'],
								},
							},
						},
					},
				},
				{
					id: 'upside_down',
					name: 'Upside Down',
					properties: {
						blockSlotsEnterLeave: ['front'],
						slotProperties: {
							front: {
								poseLimits: {
									legs: {
										pose: 'standing',
									},
									bones: {
										leg_l: 2,
										leg_r: 2,
										character_rotation: 180,
									},
									view: 'front',
								},
								stateFlags: {
									provides: ['suspension'],
								},
							},
						},
					},
				},
				{
					id: 'saddle',
					name: 'Saddle',
					properties: {
						slotProperties: {
							front: {
								poseLimits: {
									bones: {
										leg_l: [[-100, -12]],
										leg_r: [[-100, -12]],
									},
								},
								stateFlags: {
									provides: ['suspension'],
								},
							},
						},
					},
				},
			],
		},
		neck: {
			type: 'typed',
			name: 'Neck',
			staticConfig: { slotName: 'front' },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'attached',
					name: 'Tied to Pillar',
					properties: {
						blockSlotsEnterLeave: ['front'],
						slotProperties: {
							front: {
								poseLimits: {
									view: 'front',
								},
							},
						},
					},
				},
			],
		},
		arms: {
			type: 'typed',
			name: 'Arms',
			staticConfig: { slotName: 'front' },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'attached_high',
					name: 'Tied above head',
					properties: {
						blockSlotsEnterLeave: ['front'],
						slotProperties: {
							front: {
								poseLimits: {
									arms: {
										position: 'back',
									},
									bones: {
										arm_l: -95,
										elbow_l: -17,
										arm_r: -95,
										elbow_r: -17,
									},
									armsOrder: {
										upper: 'right',
									},
								},
								effects: {
									blockHands: true,
								},
							},
						},
					},
				},
				{
					id: 'attached',
					name: 'Tied behind pillar',
					properties: {
						blockSlotsEnterLeave: ['front'],
						slotProperties: {
							front: {
								poseLimits: {
									arms: {
										position: 'back',
										rotation: 'forward',
									},
									bones: {
										arm_l: 90,
										elbow_l: 35,
										arm_r: 90,
										elbow_r: 35,
									},
									armsOrder: {
										upper: 'right',
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
		chest: {
			type: 'typed',
			name: 'Chest',
			staticConfig: { slotName: 'front' },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'attached',
					name: 'Tied to Pillar',
					properties: {
						blockSlotsEnterLeave: ['front'],
						slotProperties: {
							front: {
								poseLimits: {
									view: 'front',
								},
							},
						},
					},
				},
			],
		},
		waist: {
			type: 'typed',
			name: 'Waist',
			staticConfig: { slotName: 'front' },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'attached',
					name: 'Tied to Pillar',
					properties: {
						blockSlotsEnterLeave: ['front'],
						slotProperties: {
							front: {
								poseLimits: {
									view: 'front',
								},
							},
						},
					},
				},
			],
		},
		thighs: {
			type: 'typed',
			name: 'Legs',
			staticConfig: { slotName: 'front' },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'attached',
					name: 'Tied to Pillar',
					properties: {
						slotProperties: {
							front: {
								poseLimits: {
									legs: {
										pose: 'standing',
									},
									bones: {
										leg_l: 2,
										leg_r: 2,
									},
									view: 'front',
								},
							},
						},
					},
				},
				{
					id: 'futomomo',
					name: 'Futomomo',
					properties: {
						slotProperties: {
							front: {
								poseLimits: {
									legs: {
										pose: 'kneeling',
									},
									bones: {
										leg_l: [[-100, -2]],
										leg_r: [[-100, -2]],
									},
									view: 'front',
								},
								stateFlags: {
									provides: ['futomomo'],
								},
							},
						},
					},
				},
			],
		},
		futomomo: {
			type: 'typed',
			name: 'Futomomo rope to Pillar',
			staticConfig: { slotName: 'front' },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'loose',
					name: 'Loose',
					properties: {
						blockSlotsEnterLeave: ['front'],
						slotProperties: {
							front: {
								stateFlags: {
									requires: {
										futomomo: 'This pose require thighs tied in futomomo position',
										suspension: 'This pose require body being suspended',
									},
								},
							},
						},
					},
				},
				{
					id: 'medium',
					name: 'Medium',
					properties: {
						blockSlotsEnterLeave: ['front'],
						slotProperties: {
							front: {
								poseLimits: {
									bones: {
										leg_l: [[-100, -40]],
										leg_r: [[-100, -40]],
									},
								},
								stateFlags: {
									requires: {
										futomomo: 'This pose require thighs tied in futomomo position',
										suspension: 'This pose require body being suspended',
									},
								},
							},
						},
					},
				},
				{
					id: 'short',
					name: 'Short',
					properties: {
						blockSlotsEnterLeave: ['front'],
						slotProperties: {
							front: {
								poseLimits: {
									bones: {
										leg_l: [[-100, -60]],
										leg_r: [[-100, -60]],
									},
								},
								stateFlags: {
									requires: {
										futomomo: 'This pose require thighs tied in futomomo position',
										suspension: 'This pose require body being suspended',
									},
								},
							},
						},
					},
				},
				{
					id: 'very_short',
					name: 'Very Short',
					properties: {
						blockSlotsEnterLeave: ['front'],
						slotProperties: {
							front: {
								poseLimits: {
									bones: {
										leg_l: -80,
										leg_r: -80,
									},
								},
								stateFlags: {
									requires: {
										futomomo: 'This pose require thighs tied in futomomo position',
										suspension: 'This pose require body being suspended',
									},
								},
							},
						},
					},
				},
			],
		},

		model: {
			type: 'typed',
			name: 'Model',
			staticConfig: { slotName: 'front' },
			variants: [
				{
					id: 'indoor',
					name: 'Indoor',
					default: true,
				},
				{
					id: 'outdoor',
					name: 'Outdoor',
				},
			],
		},
		base: {
			type: 'typed',
			name: 'Base',
			staticConfig: { slotName: 'front' },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'basic',
					name: 'Basic',
				},
				{
					id: 'extra_base',
					name: 'Extra Base',
				},
			],
		},
	},

	graphicsLayers: [
		{
			type: 'sprite',
			image: 'hashira.png',
			clipToRoom: true,
			colorizationKey: 'hashira',
			offset: { x: -142, y: -3584 },
			offsetOverrides: [
				{
					offset: { x: -142, y: -1600 },
					condition: [
						[
							{
								module: 'model',
								operator: '=',
								value: 'outdoor',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'hashira',
			offset: { x: -142, y: -180 },

			imageOverrides: [
				{
					image: 'hashira_base.png',
					condition: [
						[
							{
								module: 'base',
								operator: '=',
								value: 'basic',
							},
						],
					],
				},
				{
					image: 'hashira_base_big.png',
					condition: [
						[
							{
								module: 'base',
								operator: '=',
								value: 'extra_base',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'rope',
			offset: { x: -500, y: -2000 },

			imageOverrides: [
				{
					image: 'hashira_rope_top_link.png',
					condition: [
						[
							{
								module: 'suspension',
								operator: '=',
								value: 'rope',
							},
						],
					],
				},
				{
					image: 'hashira_rope_top_link_upside_down.png',
					condition: [
						[
							{
								module: 'suspension',
								operator: '=',
								value: 'upside_down',
							},
						],
					],
				},
			],
		},

		{
			type: 'sprite',
			image: '',
			colorizationKey: 'leather',
			offset: { x: -142, y: -600 },

			imageOverrides: [
				{
					image: 'saddle_seat.png',
					condition: [
						[
							{
								module: 'suspension',
								operator: '=',
								value: 'saddle',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: '',
			offset: { x: -142, y: -600 },

			imageOverrides: [
				{
					image: 'saddle_seat_reflection.png',
					condition: [
						[
							{
								module: 'suspension',
								operator: '=',
								value: 'saddle',
							},
						],
					],
				},
			],
		},

		{
			type: 'slot',
			slot: 'front',
			characterPosition: {
				offsetX: 0,
				offsetY: 0,
				relativeScale: 1,
				pivotOffset: {
					x: 0,
					y: 0,
				},
			},

			characterPositionOverrides: [
				{
					position: {
						offsetX: 0,
						offsetY: -1240,
						disablePoseOffset: true,
					},
					condition: [
						[
							{
								module: 'suspension',
								operator: '=',
								value: 'upside_down',
							},
						],
					],
				},
				{
					position: {
						offsetX: 0,
						offsetY: 0,
						disablePoseOffset: true,
					},
					condition: [
						[
							{
								module: 'suspension',
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
			image: '',
			colorizationKey: 'hashira',
			offset: { x: -142, y: -600 },

			imageOverrides: [
				{
					image: 'saddle_base.png',
					condition: [
						[
							{
								module: 'suspension',
								operator: '=',
								value: 'saddle',
							},
						],
					],
				},
			],
		},

		{
			type: 'sprite',
			image: '',
			colorizationKey: 'leather',
			offset: { x: -142, y: -600 },

			imageOverrides: [
				{
					image: 'saddle_leather.png',
					condition: [
						[
							{
								module: 'suspension',
								operator: '=',
								value: 'saddle',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: '',
			offset: { x: -142, y: -600 },

			imageOverrides: [
				{
					image: 'saddle_leather_reflection.png',
					condition: [
						[
							{
								module: 'suspension',
								operator: '=',
								value: 'saddle',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'bolts',
			offset: { x: -142, y: -600 },

			imageOverrides: [
				{
					image: 'saddle_bolts.png',
					condition: [
						[
							{
								module: 'suspension',
								operator: '=',
								value: 'saddle',
							},
						],
					],
				},
			],
		},

		{
			type: 'sprite',
			image: 'hashira_rope_top_normal.png',
			colorizationKey: 'rope',
			offset: { x: -500, y: -2000 },

			imageOverrides: [
				{
					image: 'hashira_rope_top.png',
					condition: [
						[
							{
								module: 'suspension',
								operator: '=',
								value: 'rope',
							},
						],
						[
							{
								module: 'suspension',
								operator: '=',
								value: 'upside_down',
							},
						],
						[
							{
								module: 'futomomo',
								operator: '!=',
								value: 'none',
							},
						],
					],
				},
			],
		},
	],
	pivot: {
		x: 0,
		y: 0,
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
