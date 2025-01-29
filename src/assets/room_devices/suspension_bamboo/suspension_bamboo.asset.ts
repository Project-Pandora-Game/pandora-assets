DefineRoomDeviceAsset({
	name: 'Suspension Bamboo',
	size: 'huge',
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
					legs: ['standing', 'kneeling'],
				},
			},
		},
	},
	modules: {
		configuration: {
			type: 'typed',
			name: "Setup",
			staticConfig: { slotName: 'under_bamboo' },
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
			]
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
									legs: ['standing', 'kneeling']
								},
								stateFlags: {
									provides: ['front_view']
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
									legs: ['standing', 'kneeling']
								},
								stateFlags: {
									provides: ['back_view']
								},
							},
						},
					},
				},
			]
		},
		chest_line: {
			type: 'typed',
			name: "Chest Line",
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
										'Back_knot_anchor_point'
									]
								},
								poseLimits: {
									legs: ['kneeling'],
									bones: {
										character_rotation: 0,
										leg_l: [[-25, 2]],
										leg_r: [[-25, 2]],
									}
								},
							},
						},
					},
				},

				{
					id: 'standing_center',
					name: 'Center',
					properties: {
						blockSlotsEnterLeave: ['under_bamboo'],
						slotProperties: {
							under_bamboo: {
								attributes: {
									requires: [
										'Back_knot_anchor_point'
									]
								},
								poseLimits: {
									legs: ['standing', 'kneeling'],
								},
								stateFlags: {
									provides: ['suspension_chest'],
								},
							}
						}
					}
				},
				{
					id: 'standing_front_left',
					name: 'Tiptoeing Front-facing over Right Leg',
					properties: {
						blockSlotsEnterLeave: ['under_bamboo'],
						slotProperties: {
							under_bamboo: {
								attributes: {
									requires: [
										'Back_knot_anchor_point'
									],
								},
								poseLimits: {
									legs: ['standing', 'kneeling'],
									bones: {
										character_rotation: -27,
										leg_r: -27,
										tiptoeing: 180,
									},
								},
								stateFlags: {
									provides: ['suspension_chest'],
									requires: {
										front_view: 'Pose requires Front-facing position'
									},
								},
							}
						}
					}
				},
				{
					id: 'standing_front_right',
					name: 'Tiptoeing Front-facing over Left Leg',
					properties: {
						blockSlotsEnterLeave: ['under_bamboo'],
						slotProperties: {
							under_bamboo: {
								attributes: {
									requires: [
										'Back_knot_anchor_point'
									],
								},
								poseLimits: {
									legs: ['standing', 'kneeling'],
									bones: {
										character_rotation: 27,
										leg_l: -27,
										tiptoeing: 180,
									},
								},
								stateFlags: {
									provides: ['suspension_chest'],
									requires: {
										front_view: 'Pose requires Front-facing position'
									},
								},
							}
						}
					}
				},
				{
					id: 'standing_back_left',
					name: 'Tiptoeing Back-facing over Left Leg',
					properties: {
						blockSlotsEnterLeave: ['under_bamboo'],
						slotProperties: {
							under_bamboo: {
								attributes: {
									requires: [
										'Back_knot_anchor_point'
									],
								},
								poseLimits: {
									legs: ['standing', 'kneeling'],
									bones: {
										character_rotation: -27,
										leg_l: -27,
										tiptoeing: 180,
									},
								},
								stateFlags: {
									provides: ['suspension_chest'],
									requires: {
										back_view: 'Pose requires Back-facing position'
									},
								},
							}
						}
					}
				},
				{
					id: 'standing_back_right',
					name: 'Tiptoeing Back-facing over Right Leg',
					properties: {
						blockSlotsEnterLeave: ['under_bamboo'],
						slotProperties: {
							under_bamboo: {
								attributes: {
									requires: [
										'Back_knot_anchor_point'
									]
								},
								poseLimits: {
									legs: ['standing', 'kneeling'],
									bones: {
										character_rotation: 27,
										leg_r: -27,
										tiptoeing: 180,
									},
								},
								stateFlags: {
									provides: ['suspension_chest'],
									requires: {
										back_view: 'Pose requires Back-facing position'
									},
								},
							}
						}
					}
				},
			]
		},
		thigh_line: {
			type: 'typed',
			name: 'Thigh Line',
			staticConfig: { slotName: 'under_bamboo' },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true
				},
				{
					id: 'thigh_left',
					name: 'Left Ankle Tied',
					properties: {
						blockSlotsEnterLeave: ['under_bamboo'],
						slotProperties: {
							under_bamboo: {
								attributes: {
									requires: [
										'Back_knot_anchor_point'
									]
								},
								poseLimits: {
									bones: {
										leg_l: -87,
									}
								},
								stateFlags: {
									requires: {
										suspension_chest: 'Thigh cannot be tied without chest line suspended',
									}
								}
							}
						}
					}
				},
				{
					id: 'thigh_right',
					name: 'Right Thigh Tied',
					properties: {
						blockSlotsEnterLeave: ['under_bamboo'],
						slotProperties: {
							under_bamboo: {
								attributes: {
									requires: [
										'Back_knot_anchor_point'
									]
								},
								poseLimits: {
									bones: {
										leg_r: -87,
									}
								},
								stateFlags: {
									requires: {
										suspension_chest: 'Thigh cannot be tied without chest line suspended',
									}
								}
							}
						}
					}
				}
			]
		},
		leg_line: {
			type: 'typed',
			name: 'Leg Line',
			staticConfig: { slotName: 'under_bamboo' },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true
				},
				{
					id: 'ankle_left',
					name: 'Left Ankle Tied',
					properties: {
						blockSlotsEnterLeave: ['under_bamboo'],
						slotProperties: {
							under_bamboo: {
								attributes: {
									requires: [
										'Back_knot_anchor_point'
									]
								},
								poseLimits: {
									legs: ['standing'],
									bones: {
										leg_l: -87,
									}
								},
								stateFlags: {
									requires: {
										suspension_chest: 'Ankle cannot be tied without chest line suspended',
									}
								}
							}
						}
					}
				},
				{
					id: 'ankle_right',
					name: 'Right Ankle Tied',
					properties: {
						blockSlotsEnterLeave: ['under_bamboo'],
						slotProperties: {
							under_bamboo: {
								attributes: {
									requires: [
										'Back_knot_anchor_point'
									]
								},
								poseLimits: {
									legs: ['standing'],
									bones: {
										leg_r: -87,
									}
								},
								stateFlags: {
									requires: {
										suspension_chest: 'Ankle cannot be tied without chest line suspended',
									}
								}
							}
						}
					}
				}
			]
		}
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
				}
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
				}
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
				}
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
				}
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
								module: 'chest_line',
								operator: '=',
								value: 'standing_front_left',
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
								value: 'standing_center',
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
								module: 'chest_line',
								operator: '=',
								value: 'standing_front_right',
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
								module: 'chest_line',
								operator: '=',
								value: 'standing_back_left',
							},
						],
					],
				},
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
								module: 'chest_line',
								operator: '=',
								value: 'standing_front_left',
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
								value: 'standing_center',
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
								module: 'chest_line',
								operator: '=',
								value: 'standing_front_right',
							},

						]
					]
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
								module: 'chest_line',
								operator: '=',
								value: 'standing_back_right',
							},

						]
					]
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
							}
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
								module: 'chest_line',
								operator: '=',
								value: 'standing_back_left',
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
								value: 'standing_center',
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
								module: 'chest_line',
								operator: '=',
								value: 'standing_back_right',
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
								value: 'thigh_left',
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
								value: 'thigh_right',
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
								value: 'thigh_right',
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
								value: 'thigh_left',
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
								module: 'leg_line',
								operator: '=',
								value: 'ankle_left',
							},
						],
						[
							{
								module: 'position',
								operator: '=',
								value: 'back',
							},
							{
								module: 'leg_line',
								operator: '=',
								value: 'ankle_right',
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
								module: 'leg_line',
								operator: '=',
								value: 'ankle_right',
							},
						],
						[
							{
								module: 'position',
								operator: '=',
								value: 'back',
							},
							{
								module: 'leg_line',
								operator: '=',
								value: 'ankle_left',
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
