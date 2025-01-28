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
							}
						}
					}
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
										'Back_knot_anchor_point'
									]
								},
								poseLimits: {
									legs: ['standing', 'kneeling'],
								},
								stateFlags: {
									provides: ['suspension_chest']
								},
							}
						}
					}
				},
			]
		},
		leg_right: {
			type: 'typed',
			name: 'Right Leg Line',
			staticConfig: { slotName: 'under_bamboo' },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
					properties: {
						blockSlotsEnterLeave: ['under_bamboo'],
						slotProperties: {
							under_bamboo: {

								poseLimits: {
									legs: ['standing', 'kneeling'],
									bones: {
										character_rotation: 0,
									}
								},
							}
						}
					}
				},
				{
					id: 'ankle_front',
					name: 'Ankle Front View',
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
										character_rotation: 27,
										leg_r: -87,
										leg_l: -27
									}
								},
								stateFlags: {
									requires: {
										suspension_chest: 'Leg cannot be tied without chest line suspended',
										front_view: 'Pose requires position front facing '
									}
								}
							}
						}
					}
				},
				{
					id: 'ankle_back',
					name: 'Ankle Back View',
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
										character_rotation: -27,
										leg_r: -87,
										leg_l: -27
									}
								},
								stateFlags: {
									requires: {
										suspension_chest: 'Leg cannot be tied without chest line suspended',
										back_view: 'Pose requires position back facing '
									}
								}
							}
						}
					}
				},
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
								module: 'leg_right',
								operator: '=',
								value: 'none',
							},
						],
					],
				},
				{
					image: 'bamboo_rope_chest_line_standing_right_leg_tied_front.png',
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
								module: 'leg_right',
								operator: '!=',
								value: 'none',
							},
						],
					],
				}

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
							{
								module: 'leg_right',
								operator: '=',
								value: 'none',
							},
						]
					]
				},
				{
					position: {
						offsetX: -110,
						offsetY: -100,
						disablePoseOffset: true,
						pivotOffset: {
							x: 0,
							y: 0,
						},
					},

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
								module: 'leg_right',
								operator: '!=',
								value: 'none',
							},
						]
					]
				},
				{
					position: {
						offsetX: 110,
						offsetY: -100,
						disablePoseOffset: true,
						pivotOffset: {
							x: 0,
							y: 0,
						},
					},

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
								module: 'leg_right',
								operator: '!=',
								value: 'none',
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
								module: 'leg_right',
								operator: '=',
								value: 'none',
							},
						],
					],
				},
				{
					image: 'bamboo_rope_chest_line_standing_right_leg_tied_back.png',
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
								module: 'leg_right',
								operator: '!=',
								value: 'none',
							},
						],
					],
				}
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
