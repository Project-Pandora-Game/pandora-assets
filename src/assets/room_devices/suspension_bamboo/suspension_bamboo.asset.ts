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
							under_bamboo: {
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
							},
						},
						stateFlags: {
							provides: ['suspension_chest'],
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
							},
						},
						stateFlags: {
							requires: {
								suspension_chest: 'Thighs cannot be tied without chest line suspended',
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
							},
						},
						stateFlags: {
							requires: {
								suspension_chest: 'Ankles cannot be tied without chest line suspended',
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
							},
						},
						stateFlags: {
							requires: {
								suspension_chest: 'Ankles cannot be tied without chest line suspended',
							},
						},
					},
				},
			],
		},
	},
	graphics: 'roomDeviceGraphics.json',
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
