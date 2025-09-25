DefineRoomDeviceAsset({
	name: 'Suspension Bamboo',
	size: 'huge',
	preview: 'preview.png',
	colorization: {
		frame: {
			name: 'Frame',
			default: '#AB8120',
		},
		bamboo: {
			name: 'Bamboo',
			default: '#EFCA7B',
		},
		rope: {
			name: 'Rope',
			default: '#D7AC4D',
		},
	},
	staticAttributes: ['Play_furniture'],
	slots: {
		under_bamboo: {
			name: 'Under the Bamboo',
			asset: {
				name: 'Suspension Bamboo',
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
		configuration: {
			type: 'typed',
			name: 'Setup',
			staticConfig: { slotName: null },
			variants: [
				{
					id: 'frame',
					name: 'Tied to Frame',
					default: true,
				},
				{
					id: 'hanging',
					name: 'Tied from Ceiling',
				},
			],
		},
		position: {
			type: 'typed',
			name: 'Position',
			staticConfig: { slotName: 'under_bamboo' },
			variants: [
				{
					id: 'front',
					name: 'Front-facing',
					default: true,
					properties: {
						slotProperties: {
							under_bamboo: {
								poseLimits: {
									view: 'front',
									legs: {
										pose: ['standing', 'kneeling'],
									},
								},
								stateFlags: {
									provides: ['front_view'],
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
							under_bamboo: {
								poseLimits: {
									view: 'back',
									legs: {
										pose: ['standing', 'kneeling'],
									},
								},
								stateFlags: {
									provides: ['back_view'],
								},
							},
						},
					},
				},
			],
		},
		chest_line: {
			type: 'typed',
			name: 'Chest Line',
			staticConfig: { slotName: 'under_bamboo' },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'kneeling',
					name: 'Floor',
					properties: {
						blockSlotsEnterLeave: ['under_bamboo'],
						slotProperties: {
							under_bamboo: {
								attributes: {
									requires: [
										'Back_knot_anchor_point',
									],
								},
								poseLimits: {
									legs: {
										pose: 'kneeling',
									},
									bones: {
										character_rotation: 0,
										leg_l: [[-25, 6]],
										leg_r: [[-25, 6]],
									},
								},
							},
						},
					},
				},
				{
					id: 'standing',
					name: 'Suspended',
					properties: {
						blockSlotsEnterLeave: ['under_bamboo'],
						slotProperties: {
							under_bamboo: {
								attributes: {
									requires: [
										'Back_knot_anchor_point',
									],
								},
								poseLimits: {
									legs: {
										pose: ['standing', 'kneeling'],
									},
								},
								stateFlags: {
									provides: ['suspension_chest'],
								},
							},
						},
					},
				},
			],
		},
		thigh_line: {
			type: 'typed',
			name: 'Suspension Thigh Line',
			staticConfig: { slotName: 'under_bamboo' },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'thigh_front_left',
					name: 'Front-facing Left Thigh Tied',
					properties: {
						blockModules: ['position'],
						slotProperties: {
							under_bamboo: {
								attributes: {
									requires: [
										'Back_knot_anchor_point',
									],
								},
								poseLimits: {
									bones: {
										character_rotation: -27,
										leg_l: -87,
									},
								},
								stateFlags: {
									requires: {
										suspension_chest: 'Thigh cannot be tied without chest line suspended',
										front_view: 'Tying Left Thigh from this side require Front-facing view',
									},
								},
							},
						},
					},
				},
				{
					id: 'thigh_front_right',
					name: 'Front-facing Right Thigh Tied',
					properties: {
						blockModules: ['position'],
						slotProperties: {
							under_bamboo: {
								attributes: {
									requires: [
										'Back_knot_anchor_point',
									],
								},
								poseLimits: {
									bones: {
										character_rotation: 27,
										leg_r: -87,
									},
								},
								stateFlags: {
									requires: {
										suspension_chest: 'Thigh cannot be tied without chest line suspended',
										front_view: 'Tying Right Thigh from this side require Front-facing view',
									},
								},
							},
						},
					},
				},
				{
					id: 'thigh_back_left',
					name: 'Back-facing Left Thigh Tied',
					properties: {
						blockModules: ['position'],
						slotProperties: {
							under_bamboo: {
								attributes: {
									requires: [
										'Back_knot_anchor_point',
									],
								},
								poseLimits: {
									bones: {
										character_rotation: 27,
										leg_l: -87,
									},
								},
								stateFlags: {
									requires: {
										suspension_chest: 'Thigh cannot be tied without chest line suspended',
										back_view: 'Tying Left Thigh from this side require Front-facing view',
									},
								},
							},
						},
					},
				},
				{
					id: 'thigh_back_right',
					name: 'Back-facing Right Thigh Tied',
					properties: {
						blockModules: ['position'],
						slotProperties: {
							under_bamboo: {
								attributes: {
									requires: [
										'Back_knot_anchor_point',
									],
								},
								poseLimits: {
									bones: {
										character_rotation: -27,
										leg_r: -87,
									},
								},
								stateFlags: {
									requires: {
										suspension_chest: 'Thigh cannot be tied without chest line suspended',
										back_view: 'Tying Right Thigh from this side require Front-facing view',
									},
								},
							},
						},
					},
				},
				{
					id: 'split_65',
					name: 'Split Wide',
					properties: {
						blockModules: ['position'],
						slotProperties: {
							under_bamboo: {
								poseLimits: {
									legs: {
										pose: ['standing', 'kneeling'],
									},
									bones: {
										character_rotation: 0,
										leg_l: -65,
										leg_r: -65,
									},
								},
								stateFlags: {
									requires: {
										suspension_chest: 'Thighs cannot be tied without chest line suspended',
									},
								},
							},
						},
					},
				},
			],
		},
		ankle_line: {
			type: 'typed',
			name: 'Suspension Ankle Line',
			staticConfig: { slotName: 'under_bamboo' },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'ankle_front_left',
					name: 'Front-facing Left Ankle Tied',
					properties: {
						blockModules: ['position'],
						slotProperties: {
							under_bamboo: {
								attributes: {
									requires: [
										'Back_knot_anchor_point',
									],
								},
								poseLimits: {
									legs: {
										pose: 'standing',
									},
									bones: {
										character_rotation: -27,
										leg_l: -87,
									},
								},
								stateFlags: {
									requires: {
										suspension_chest: 'Thigh cannot be tied without chest line suspended',
										front_view: 'Tying Left Thigh from this side require Front-facing vide',
									},
								},
							},
						},
					},
				},
				{
					id: 'ankle_front_right',
					name: 'Front-facing Right Ankle Tied',
					properties: {
						blockModules: ['position'],
						slotProperties: {
							under_bamboo: {
								attributes: {
									requires: [
										'Back_knot_anchor_point',
									],
								},
								poseLimits: {
									legs: {
										pose: 'standing',
									},
									bones: {
										character_rotation: 27,
										leg_r: -87,
									},
								},
								stateFlags: {
									requires: {
										suspension_chest: 'Thigh cannot be tied without chest line suspended',
										front_view: 'Tying Right Thigh from this side require Front-facing vide',
									},
								},
							},
						},
					},
				},
				{
					id: 'ankle_back_left',
					name: 'Back-facing Left Ankle Tied',
					properties: {
						blockModules: ['position'],
						slotProperties: {
							under_bamboo: {
								attributes: {
									requires: [
										'Back_knot_anchor_point',
									],
								},
								poseLimits: {
									legs: {
										pose: 'standing',
									},
									bones: {
										character_rotation: 27,
										leg_l: -87,
									},
								},
								stateFlags: {
									requires: {
										suspension_chest: 'Thigh cannot be tied without chest line suspended',
										back_view: 'Tying Left Thigh from this side require Front-facing vide',
									},
								},
							},
						},
					},
				},
				{
					id: 'ankle_back_right',
					name: 'Back-facing Right Ankle Tied',
					properties: {
						blockModules: ['position'],
						slotProperties: {
							under_bamboo: {
								attributes: {
									requires: [
										'Back_knot_anchor_point',
									],
								},
								poseLimits: {
									legs: {
										pose: 'standing',
									},
									bones: {
										character_rotation: -27,
										leg_r: -87,
									},
								},
								stateFlags: {
									requires: {
										suspension_chest: 'Thigh cannot be tied without chest line suspended',
										back_view: 'Tying Right Thigh from this side require Front-facing vide',
									},
								},
							},
						},
					},
				},
				{
					id: 'split_65',
					name: 'Split Wide',
					properties: {
						blockModules: ['position'],
						slotProperties: {
							under_bamboo: {
								poseLimits: {
									legs: {
										pose: 'standing',
									},
									bones: {
										character_rotation: 0,
										leg_l: -65,
										leg_r: -65,
									},
								},
								stateFlags: {
									requires: {
										suspension_chest: 'Ankles cannot be tied without chest line suspended',
									},
								},
							},
						},
					},
				},
				{
					id: 'ankles_tied',
					name: 'Horizontal Suspensión',
					properties: {
						blockModules: ['position'],
						slotProperties: {
							under_bamboo: {
								attributes: {
									requires: [
										'Rope_ankles_anchor_point',
									],
								},
								poseLimits: {
									legs: {
										pose: 'standing',
									},
									bones: {
										character_rotation: -90,
									},
								},
								stateFlags: {
									requires: {
										suspension_chest: 'Ankles cannot be tied without chest line suspended',
									},
								},
							},
						},
					},
				},
			],
		},
	},
	graphicsLayers: [
		{
			type: 'sprite',
			image: 'bamboo.png',
			colorizationKey: 'bamboo',
		},
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'rope',
			clipToRoom: true,
			imageOverrides: [
				{
					image: 'long_vertical_rope.png@64x1150',
					condition: [
						[
							{
								module: 'configuration',
								operator: '=',
								value: 'hanging',
							},
						],
					],
				},
			],
			offsetOverrides: [
				{
					offset: { x: 115, y: -2248 },
					condition: [
						[
							{
								module: 'configuration',
								operator: '=',
								value: 'hanging',
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
			clipToRoom: true,
			imageOverrides: [
				{
					image: 'long_vertical_rope.png@64x1150',
					condition: [
						[
							{
								module: 'configuration',
								operator: '=',
								value: 'hanging',
							},
						],
					],
				},
			],
			offsetOverrides: [
				{
					offset: { x: 115, y: -1100 },
					condition: [
						[
							{
								module: 'configuration',
								operator: '=',
								value: 'hanging',
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
			clipToRoom: true,
			imageOverrides: [
				{
					image: 'long_vertical_rope.png@64x1150',
					condition: [
						[
							{
								module: 'configuration',
								operator: '=',
								value: 'hanging',
							},
						],
					],
				},
			],
			offsetOverrides: [
				{
					offset: { x: 1338, y: -2248 },
					condition: [
						[
							{
								module: 'configuration',
								operator: '=',
								value: 'hanging',
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
			clipToRoom: true,
			imageOverrides: [
				{
					image: 'long_vertical_rope.png@64x1150',
					condition: [
						[
							{
								module: 'configuration',
								operator: '=',
								value: 'hanging',
							},
						],
					],
				},
			],
			offsetOverrides: [
				{
					offset: { x: 1338, y: -1100 },
					condition: [
						[
							{
								module: 'configuration',
								operator: '=',
								value: 'hanging',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'frame',
			imageOverrides: [
				{
					image: 'bamboo_frame.png@2000x1600',
					condition: [
						[
							{
								module: 'configuration',
								operator: '=',
								value: 'frame',
							},
						],
					],
				},
			],

			offsetOverrides: [
				{
					offset: { x: -240, y: -240 },
					condition: [
						[
							{
								module: 'configuration',
								operator: '=',
								value: 'frame',
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
			imageOverrides: [
				{
					image: 'bamboo_rope_frame.png@2020x350',
					condition: [
						[
							{
								module: 'configuration',
								operator: '=',
								value: 'frame',
							},
						],
					],
				},
			],
			offsetOverrides: [
				{
					offset: { x: -250, y: -250 },
					condition: [
						[
							{
								module: 'configuration',
								operator: '=',
								value: 'frame',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: 'bamboo_rope_sides.png',
			colorizationKey: 'rope',
		},
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'rope',
			imageOverrides: [
				{
					image: 'bamboo_rope_chest_line_kneeling.png',
					condition: [
						[
							{
								module: 'position',
								operator: '=',
								value: 'front',
							},
							{
								module: 'chest_line',
								operator: '=',
								value: 'kneeling',
							},
						],
					],
				},
				{
					image: 'bamboo_rope_chest_line_standing_left.png',
					condition: [
						[
							{
								module: 'position',
								operator: '=',
								value: 'front',
							},
							{
								module: 'thigh_line',
								operator: '=',
								value: 'thigh_front_left',
							},
						],
						[
							{
								module: 'position',
								operator: '=',
								value: 'front',
							},
							{
								module: 'ankle_line',
								operator: '=',
								value: 'ankle_front_left',
							},
						],
					],
				},
				{
					image: 'bamboo_rope_chest_line_standing_right.png',
					condition: [
						[
							{
								module: 'position',
								operator: '=',
								value: 'front',
							},
							{
								module: 'thigh_line',
								operator: '=',
								value: 'thigh_front_right',
							},
						],
						[
							{
								module: 'position',
								operator: '=',
								value: 'front',
							},
							{
								module: 'ankle_line',
								operator: '=',
								value: 'ankle_front_right',
							},
						],
					],
				},
				{
					image: 'bamboo_rope_chest_line_standing.png',
					condition: [
						[
							{
								module: 'position',
								operator: '=',
								value: 'front',
							},
							{
								module: 'chest_line',
								operator: '=',
								value: 'standing',
							},
							{
								module: 'ankle_line',
								operator: '!=',
								value: 'ankles_tied',
							},
						],
					],
				},

			],
		},
		{
			type: 'slot',
			slot: 'under_bamboo',
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
						offsetX: 110,
						offsetY: -90,
						disablePoseOffset: true,
						pivotOffset: {
							x: 0,
							y: 0,
						},
					},
					condition: [
						[
							{
								module: 'thigh_line',
								operator: '=',
								value: 'thigh_front_left',
							},
						],
						[
							{
								module: 'ankle_line',
								operator: '=',
								value: 'ankle_front_left',
							},
						],
						[
							{
								module: 'thigh_line',
								operator: '=',
								value: 'thigh_back_right',
							},
						],
						[
							{
								module: 'ankle_line',
								operator: '=',
								value: 'ankle_back_right',
							},
						],
					],
				},
				{
					position: {
						offsetX: -110,
						offsetY: -90,
						disablePoseOffset: true,
						pivotOffset: {
							x: 0,
							y: 0,
						},
					},

					condition: [
						[
							{
								module: 'thigh_line',
								operator: '=',
								value: 'thigh_front_right',
							},
						],
						[
							{
								module: 'ankle_line',
								operator: '=',
								value: 'ankle_front_right',
							},
						],
						[
							{
								module: 'thigh_line',
								operator: '=',
								value: 'thigh_back_left',
							},
						],
						[
							{
								module: 'ankle_line',
								operator: '=',
								value: 'ankle_back_left',
							},
						],
					],
				},
				{
					position: {
						offsetX: 565,
						offsetY: -800,
						disablePoseOffset: true,
					},
					condition: [
						[
							{
								module: 'chest_line',
								operator: '=',
								value: 'standing',
							},
							{
								module: 'ankle_line',
								operator: '=',
								value: 'ankles_tied',
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
								module: 'chest_line',
								operator: '=',
								value: 'standing',
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
			imageOverrides: [
				{
					image: 'bamboo_rope_chest_line_kneeling.png',
					condition: [
						[
							{
								module: 'position',
								operator: '=',
								value: 'back',
							},
							{
								module: 'chest_line',
								operator: '=',
								value: 'kneeling',
							},
						],
					],
				},
				{
					image: 'bamboo_rope_chest_line_standing_left.png',
					condition: [
						[
							{
								module: 'position',
								operator: '=',
								value: 'back',
							},
							{
								module: 'thigh_line',
								operator: '=',
								value: 'thigh_back_right',
							},
						],
						[
							{
								module: 'position',
								operator: '=',
								value: 'back',
							},
							{
								module: 'ankle_line',
								operator: '=',
								value: 'ankle_back_right',
							},
						],
						[
							{
								module: 'ankle_line',
								operator: '=',
								value: 'ankles_tied',
							},
						],
					],
				},
				{
					image: 'bamboo_rope_chest_line_standing_right.png',
					condition: [
						[
							{
								module: 'position',
								operator: '=',
								value: 'back',
							},
							{
								module: 'thigh_line',
								operator: '=',
								value: 'thigh_back_left',
							},
						],
						[
							{
								module: 'position',
								operator: '=',
								value: 'back',
							},
							{
								module: 'ankle_line',
								operator: '=',
								value: 'ankle_back_left',
							},
						],
					],
				},
				{
					image: 'bamboo_rope_chest_line_standing.png',
					condition: [
						[
							{
								module: 'position',
								operator: '=',
								value: 'back',
							},
							{
								module: 'chest_line',
								operator: '=',
								value: 'standing',
							},
							{
								module: 'ankle_line',
								operator: '!=',
								value: 'ankles_tied',
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
			imageOverrides: [
				{
					image: 'suspended_thigh_right_side.png',
					condition: [
						[
							{
								module: 'position',
								operator: '=',
								value: 'front',
							},
							{
								module: 'thigh_line',
								operator: '=',
								value: 'thigh_front_left',
							},
						],
						[
							{
								module: 'position',
								operator: '=',
								value: 'back',
							},
							{
								module: 'thigh_line',
								operator: '=',
								value: 'thigh_back_right',
							},
						],
					],
				},
				{
					image: 'suspended_thigh_left_side.png',
					condition: [
						[
							{
								module: 'position',
								operator: '=',
								value: 'front',
							},
							{
								module: 'thigh_line',
								operator: '=',
								value: 'thigh_front_right',
							},
						],
						[
							{
								module: 'position',
								operator: '=',
								value: 'back',
							},
							{
								module: 'thigh_line',
								operator: '=',
								value: 'thigh_back_left',
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
			imageOverrides: [
				{
					image: 'suspended_ankle_right_side.png',
					condition: [
						[
							{
								module: 'position',
								operator: '=',
								value: 'front',
							},
							{
								module: 'ankle_line',
								operator: '=',
								value: 'ankle_front_left',
							},
						],
						[
							{
								module: 'position',
								operator: '=',
								value: 'back',
							},
							{
								module: 'ankle_line',
								operator: '=',
								value: 'ankle_back_right',
							},
						],
					],
				},
				{
					image: 'suspended_ankle_left_side.png',
					condition: [
						[
							{
								module: 'position',
								operator: '=',
								value: 'front',
							},
							{
								module: 'ankle_line',
								operator: '=',
								value: 'ankle_front_right',
							},
						],
						[
							{
								module: 'position',
								operator: '=',
								value: 'back',
							},
							{
								module: 'ankle_line',
								operator: '=',
								value: 'ankle_back_left',
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
			imageOverrides: [
				{
					image: 'suspended_horizontal_ankles_left.png',
					condition: [
						[
							{
								module: 'ankle_line',
								operator: '=',
								value: 'ankles_tied',
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
			imageOverrides: [
				{
					image: 'split_ankle_65.png',
					condition: [
						[
							{
								module: 'ankle_line',
								operator: '=',
								value: 'split_65',
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
			imageOverrides: [
				{
					image: 'split_thighs_65.png',
					condition: [
						[
							{
								module: 'thigh_line',
								operator: '=',
								value: 'split_65',
							},
						],
					],
				},
			],
		},
	],
	pivot: {
		x: 750,
		y: 1300,
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
