DefineRoomDeviceAsset({
	name: 'Suspension Ring',
	size: 'huge',
	preview: 'preview.png',
	colorization: {
		ring: {
			name: 'Ring',
			default: '#E3E3E3',
		},
		rope: {
			name: 'Rope',
			default: '#D7AC4D',
		},
	},
	staticAttributes: ['Play_furniture'],
	slots: {
		under_ring: {
			name: 'Under the Ring',
			asset: {
				name: 'Suspension Ring',
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
		position: {
			type: 'typed',
			name: 'Position',
			staticConfig: { slotName: 'under_ring' },
			variants: [
				{
					id: 'front',
					name: 'Front-facing',
					default: true,
					properties: {
						slotProperties: {
							under_ring: {
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
							under_ring: {
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
		ring_design: {
			type: 'typed',
			name: 'Ring Design',
			staticConfig: { slotName: 'under_ring' },
			variants: [
				{
					id: 'single',
					name: 'Single',
					default: true,
				},
				{
					id: 'triskell',
					name: 'Triskell',
				},
			],
		},

		chest_line: {
			type: 'typed',
			name: 'Chest Line',
			staticConfig: { slotName: 'under_ring' },
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
						blockSlotsEnterLeave: ['under_ring'],
						slotProperties: {
							under_ring: {
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
					id: 'suspended',
					name: 'Suspended',
					properties: {
						blockSlotsEnterLeave: ['under_ring'],
						slotProperties: {
							under_ring: {
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
			staticConfig: { slotName: 'under_ring' },
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
						slotProperties: {
							under_ring: {
								attributes: {
									requires: [
										'Back_knot_anchor_point',
									],
								},
								poseLimits: {
									bones: {
										character_rotation: -37,
										leg_l: -83,
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
						slotProperties: {
							under_ring: {
								attributes: {
									requires: [
										'Back_knot_anchor_point',
									],
								},
								poseLimits: {
									bones: {
										character_rotation: 37,
										leg_r: -83,
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
						slotProperties: {
							under_ring: {
								attributes: {
									requires: [
										'Back_knot_anchor_point',
									],
								},
								poseLimits: {
									bones: {
										character_rotation: 37,
										leg_l: -83,
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
						slotProperties: {
							under_ring: {
								attributes: {
									requires: [
										'Back_knot_anchor_point',
									],
								},
								poseLimits: {
									bones: {
										character_rotation: -37,
										leg_r: -83,
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
					id: 'thighs_front',
					name: 'Front-facing Thighs Tied',
					properties: {
						slotProperties: {
							under_ring: {
								attributes: {
									requires: [
										'Back_knot_anchor_point',
										'Rope_above_knees_anchor_point',
									],
								},
								poseLimits: {
									bones: {
										character_rotation: 37,
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
					id: 'thighs_back',
					name: 'Back-facing Thighs Tied',
					properties: {
						slotProperties: {
							under_ring: {
								attributes: {
									requires: [
										'Back_knot_anchor_point',
										'Rope_above_knees_anchor_point',
									],
								},
								poseLimits: {
									bones: {
										character_rotation: -37,
									},
								},
								stateFlags: {
									requires: {
										suspension_chest: 'Thigh cannot be tied without chest line suspended',
										back_view: 'Tying Right Thigh from this side require Back-facing view',
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
			image: 'ceiling_line.png',
			clipToRoom: true,
			colorizationKey: 'rope',
			offset: { x: 483, y: -1550 },
		},
		{
			type: 'sprite',
			image: 'ceiling_line.png',
			clipToRoom: true,
			colorizationKey: 'rope',
			offset: { x: 483, y: -580 },
		},
		{
			type: 'sprite',
			image: 'rope_ring_top_end.png',
			colorizationKey: 'rope',
		},
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'ring',
			imageOverrides: [
				{
					image: 'ring_design_triskell.png',
					condition: [
						[
							{
								module: 'ring_design',
								operator: '=',
								value: 'triskell',
							},
							{
								module: 'position',
								operator: '=',
								value: 'front',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'ring',
			imageOverrides: [
				{
					image: 'metal_ring.png',
					condition: [
						[
							{
								module: 'position',
								operator: '=',
								value: 'front',
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
					image: 'rope_ring_top.png',
					condition: [
						[
							{
								module: 'position',
								operator: '=',
								value: 'front',
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
					image: 'chest_line_kneeling.png',
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
					image: 'chest_line_center.png',
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
								value: 'suspended',
							},
							{
								module: 'thigh_line',
								operator: '=',
								value: 'none',
							},
						],
					],
				},

				{
					image: 'thigh_line_left_back.png',
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
								value: 'suspended',
							},
							{
								module: 'thigh_line',
								operator: '=',
								value: 'thigh_front_left',
							},
						],
					],
				},
				{
					image: 'thigh_line_right_back.png',
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
								value: 'suspended',
							},
							{
								module: 'thigh_line',
								operator: '=',
								value: 'thigh_front_right',
							},
						],
					],
				},
				{
					image: 'thigh_line_right_back.png',
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
								value: 'suspended',
							},
							{
								module: 'thigh_line',
								operator: '=',
								value: 'thighs_front',
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
					image: 'knee_line_right.png',
					condition: [
						[
							{
								module: 'chest_line',
								operator: '=',
								value: 'suspended',
							},
							{
								module: 'thigh_line',
								operator: '=',
								value: 'thighs_front',
							},
						],
					],
				},
			],
		},
		{
			type: 'slot',
			slot: 'under_ring',
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
						offsetX: 365,
						offsetY: -185,
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
					],
				},
				{
					position: {
						offsetX: -365,
						offsetY: -185,
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
					],
				},
				{
					position: {
						offsetX: -365,
						offsetY: -185,
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
								value: 'thigh_back_left',
							},
						],
					],
				},
				{
					position: {
						offsetX: 350,
						offsetY: -175,
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
								value: 'thigh_back_right',
							},
						],
					],
				},
				{
					position: {
						offsetX: -350,
						offsetY: -175,
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
								value: 'thighs_front',
							},
						],
					],
				},
				{
					position: {
						offsetX: 350,
						offsetY: -175,
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
								value: 'thighs_back',
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
								value: 'suspended',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'ring',
			imageOverrides: [
				{
					image: 'ring_design_triskell.png',
					condition: [
						[
							{
								module: 'ring_design',
								operator: '=',
								value: 'triskell',
							},
							{
								module: 'position',
								operator: '=',
								value: 'back',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'ring',
			imageOverrides: [
				{
					image: 'metal_ring.png',
					condition: [
						[
							{
								module: 'position',
								operator: '=',
								value: 'back',
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
					image: 'rope_ring_top.png',
					condition: [
						[
							{
								module: 'position',
								operator: '=',
								value: 'back',
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
					image: 'chest_line_kneeling.png',
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
					image: 'chest_line_center.png',
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
								value: 'suspended',
							},
							{
								module: 'thigh_line',
								operator: '=',
								value: 'none',
							},
						],
					],
				},
				{
					image: 'thigh_line_left_back.png',
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
								value: 'suspended',
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
								module: 'chest_line',
								operator: '=',
								value: 'suspended',
							},
							{
								module: 'thigh_line',
								operator: '=',
								value: 'thighs_back',
							},
						],
					],
				},
				{
					image: 'thigh_line_right_back.png',
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
								value: 'suspended',
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
					image: 'thigh_line_left_thigh.png',
					condition: [
						[
							{
								module: 'chest_line',
								operator: '=',
								value: 'suspended',
							},
							{
								module: 'thigh_line',
								operator: '=',
								value: 'thigh_front_left',
							},
						],
					],
				},
				{
					image: 'thigh_line_left_thigh.png',
					condition: [
						[
							{
								module: 'chest_line',
								operator: '=',
								value: 'suspended',
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
					image: 'thigh_line_right_thigh.png',
					condition: [
						[
							{
								module: 'chest_line',
								operator: '=',
								value: 'suspended',
							},
							{
								module: 'thigh_line',
								operator: '=',
								value: 'thigh_front_right',
							},
						],
					],
				},
				{
					image: 'thigh_line_right_thigh.png',
					condition: [
						[
							{
								module: 'chest_line',
								operator: '=',
								value: 'suspended',
							},
							{
								module: 'thigh_line',
								operator: '=',
								value: 'thigh_back_left',
							},
						],
					],
				},
				{
					image: 'knee_line_left.png',
					condition: [
						[
							{
								module: 'chest_line',
								operator: '=',
								value: 'suspended',
							},
							{
								module: 'thigh_line',
								operator: '=',
								value: 'thighs_back',
							},
						],
					],
				},
			],
		},
	],
	pivot: {
		x: 500,
		y: 1750,
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
