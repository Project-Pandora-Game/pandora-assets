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
		rock: {
			name: 'Rock',
			default: '#9b9b9bff',
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
							},
						},
						stateFlags: {
							provides: ['front_view'],
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
							},
						},
						stateFlags: {
							provides: ['back_view'],
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

		ring_height: {
			type: 'typed',
			name: 'Ring Height',
			staticConfig: { slotName: 'under_ring' },
			variants: [
				{
					id: 'normal',
					name: 'Normal',
					default: true,
				},
				{
					id: 'high',
					name: 'High',
					properties: {
						stateFlags: {
							provides: ['height_high'],
						},
					},
				},
			],
		},

		wrists_line: {
			type: 'typed',
			name: 'Wrists Line',
			staticConfig: { slotName: 'under_ring' },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
					properties: {
						stateFlags: {
							provides: ['free_wrists', 'not_strappado'],
						},
					},
				},
				{
					id: 'over_head',
					name: 'Over Head',
					properties: {
						blockSlotsEnterLeave: ['under_ring'],
						slotProperties: {
							under_ring: {
								poseLimits: {
									bones: {
										arm_l: -90,
										elbow_l: -25,
										arm_r: -90,
										elbow_r: -25,
										// no fix possible: rotation cannot be forced to 0 due to other combinations
									},
								},
								effects: {
									blockHands: true,
								},
							},
						},
						stateFlags: {
							provides: ['suspension_point', 'not_strappado'],
							requires: {
								height_high: 'Tying wrists requires Ring in High Height',
							},
						},
					},
				},
				{
					id: 'strappado',
					name: 'Strappado',
					properties: {
						blockSlotsEnterLeave: ['under_ring'],
						slotProperties: {
							under_ring: {
								poseLimits: {
									legs: {
										pose: 'standing',
									},
									bones: {
										leg_l: [[-10, 10]],
										leg_r: [[-10, 10]],
										// no fix possible: rotation cannot be forced to 0 due to other combinations
									},
								},
								attributes: {
									requires: ['Rope_strappado_anchor_point'],
								},
							},
						},
						stateFlags: {
							provides: ['suspension_point', 'free_wrists'],
						},
					},
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
					id: 'attached',
					name: 'Attached',
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
							},
						},
						stateFlags: {
							provides: ['suspension_chest', 'suspension_point'],
						},
					},
				},
				{
					id: 'suspended',
					name: 'Suspended High',
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
							},
						},
						stateFlags: {
							provides: ['suspension_chest', 'suspension_high'],
							requires: {
								free_wrists: 'Suspension requires Wrists not tied to ring',
								height_high: 'Suspension requires Ring in High position',
								not_strappado: 'This pose cannot be applied while using strappado',
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
							},
						},
						stateFlags: {
							requires: {
								suspension_chest: 'Thigh cannot be tied without Chest Line Attached',
								front_view: 'Tying Left Thigh from this side require Front-facing view',
								not_strappado: 'This pose cannot be applied while using strappado',
							},
							provides: ['dangling_right_leg'],
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
							},
						},
						stateFlags: {
							requires: {
								suspension_chest: 'Thigh cannot be tied without Chest Line Attached',
								front_view: 'Tying Right Thigh from this side require Front-facing view',
								not_strappado: 'This pose cannot be applied while using strappado',
							},
							provides: ['dangling_left_leg'],
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
							},
						},
						stateFlags: {
							requires: {
								suspension_chest: 'Thigh cannot be tied without Chest Line Attached',
								back_view: 'Tying Left Thigh from this side require Front-facing view',
								not_strappado: 'This pose cannot be applied while using strappado',
							},
							provides: ['dangling_right_leg'],
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
							},
						},
						stateFlags: {
							requires: {
								suspension_chest: 'Thigh cannot be tied without Chest Line Attached',
								back_view: 'Tying Right Thigh from this side require Front-facing view',
								not_strappado: 'This pose cannot be applied while using strappado',
							},
							provides: ['dangling_left_leg'],
						},
					},
				},
			],
		},

		ankles_line: {
			type: 'typed',
			name: 'Ankles Line',
			staticConfig: { slotName: 'under_ring' },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'ankles_split',
					name: 'Both Split',
					properties: {
						slotProperties: {
							under_ring: {
								poseLimits: {
									bones: {
										character_rotation: 0,
										leg_l: -40,
										leg_r: -40,
									},
									legs: {
										pose: 'kneeling',
									},
								},
							},
						},
						stateFlags: {
							requires: {
								suspension_point: 'Ankles cannot be tied without Wrists over head or Chest Line Attached',
								height_high: 'Tying ankles requires Ring in High Height',
								not_strappado: 'This pose cannot be applied while using strappado',
							},
						},
					},
				},
				{
					id: 'ankles_upside_down',
					name: 'Upside Down',
					properties: {
						slotProperties: {
							under_ring: {
								poseLimits: {
									bones: {
										character_rotation: 180,
										leg_l: 2,
										leg_r: 2,
									},
									legs: {
										pose: 'standing',
									},
								},
							},
						},
						stateFlags: {
							requires: {
								free_wrists: 'Upside Down tie requires untied Wrists',
								suspension_point: 'Ankles cannot be tied without Chest line Attached',
								height_high: 'Upside Down tie requires Ring in High Height',
							},
						},
					},
				},
			],
		},

		stone: {
			type: 'typed',
			name: 'Rock',
			staticConfig: { slotName: 'under_ring' },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'ankle_left',
					name: 'Left Ankle',
					properties: {
						slotProperties: {
							under_ring: {
								poseLimits: {
									bones: {
										leg_l: -37,
									},
									legs: {
										pose: 'standing',
									},
								},
							},
						},
						stateFlags: {
							requires: {
								dangling_left_leg: 'Stone cannot be added without Right Thigh Tied',
							},
						},
					},
				},
				{
					id: 'ankle_right',
					name: 'Right Ankle',
					properties: {
						slotProperties: {
							under_ring: {
								poseLimits: {
									bones: {
										leg_r: -37,
									},
									legs: {
										pose: 'standing',
									},
								},
							},
						},
						stateFlags: {
							requires: {
								dangling_right_leg: 'Stone cannot be added without Left Thigh Tied',
							},
						},
					},
				},
				{
					id: 'ankle_both',
					name: 'Both Ankles',
					properties: {
						slotProperties: {
							under_ring: {
								poseLimits: {
									bones: {
										character_rotation: 0,
										leg_l: 2,
										leg_r: 2,
									},
									legs: {
										pose: 'standing',
									},
								},
							},
						},
						stateFlags: {
							requires: {
								suspension_high: 'Rock tied to both ankles requires Chest line being Suspended High',
							},
						},
					},
				},
				{
					id: 'frogtie_left',
					name: 'Left Frogtie',
					properties: {
						slotProperties: {
							under_ring: {
								poseLimits: {
									bones: {
										leg_l: -37,
									},
									legs: {
										pose: 'kneeling',
									},
								},
								attributes: {
									requires: [
										'Frogtie',
									],
								},
							},
						},
						stateFlags: {
							requires: {
								dangling_left_leg: 'Stone cannot be added without Right Thigh Tied',
							},
						},
					},
				},
				{
					id: 'frogtie_right',
					name: 'Right Frogtie',
					properties: {
						slotProperties: {
							under_ring: {
								poseLimits: {
									bones: {
										leg_r: -37,
									},
									legs: {
										pose: 'kneeling',
									},
								},
								attributes: {
									requires: [
										'Frogtie',
									],
								},
							},
						},
						stateFlags: {
							requires: {
								dangling_right_leg: 'Stone cannot be added without Left Thigh Tied',
							},
						},
					},
				},
			],
		},
	},
	graphics: 'roomDeviceGraphics.json',
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
