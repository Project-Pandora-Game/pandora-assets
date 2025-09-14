DefineRoomDeviceAsset({
	name: 'Winch (Pulley)',
	size: 'huge',
	preview: 'preview.png',
	colorization: {
		cable: {
			name: 'Cable',
			default: '#8E8E8E',
		},
		pulley: {
			name: 'Pulley',
			default: '#ACACAC',
		},
		carabiner: {
			name: 'Carabiner',
			default: '#ACACAC',
		},
		chains: {
			name: 'Chains',
			default: '#CECECE',
		},
		bar: {
			name: 'Bar',
			default: '#595757',
		},
	},
	staticAttributes: ['Play_furniture'],
	slots: {
		under_winch: {
			name: 'Under the Winch',
			asset: {
				name: 'Winch Pulley',
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
			staticConfig: { slotName: 'under_winch' },
			variants: [
				{
					id: 'front',
					name: 'Front-facing',
					default: true,
					properties: {
						slotProperties: {
							under_winch: {
								poseLimits: {
									view: 'front',
									legs: {
										pose: ['standing', 'kneeling'],
									},
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
							under_winch: {
								poseLimits: {
									view: 'back',
									legs: {
										pose: ['standing', 'kneeling'],
									},
								},
							},
						},
					},
				},
			],
		},
		cable: {
			type: 'typed',
			name: 'Cable',
			staticConfig: { slotName: 'under_winch' },
			variants: [
				{
					id: 'retracted',
					name: 'Retracted',
					default: true,
				},
				{
					id: 'extended',
					name: 'Extended',
					properties: {
						slotProperties: {
							under_winch: {
								stateFlags: {
									provides: ['cable_extended'],
								},
							},
						},
					},
				},
			],
		},
		attachment: {
			type: 'typed',
			name: 'Attachment',
			staticConfig: { slotName: 'under_winch' },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'carabiner',
					name: 'Carabiner',
					properties: {
						slotProperties: {
							under_winch: {
								stateFlags: {
									provides: ['carabiner'],
								},
							},
						},
					},
				},
				{
					id: 'spreader_bar',
					name: 'Spreader Bar',
					properties: {
						slotProperties: {
							under_winch: {
								stateFlags: {
									provides: ['spread_bar'],
								},
							},
						},
					},
				},
			],
		},
		carabiner: {
			type: 'typed',
			name: 'Carabiner',
			staticConfig: { slotName: 'under_winch' },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'wrist_tied',
					name: 'Wrists Chained',
					properties: {
						blockSlotsEnterLeave: ['under_winch'],
						slotProperties: {
							under_winch: {
								poseLimits: {
									bones: {
										arm_l: -90,
										elbow_l: -25,
										arm_r: -90,
										elbow_r: -25,
									},
								},
								attributes: {
									requires: [
										'Wrist_cuffs',
									],
								},
								stateFlags: {
									requires: {
										carabiner: 'Wrists cannot be chained without the Carabiner attached to the Pulley',
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
					id: 'ankles_tied',
					name: 'Ankles Chained',
					properties: {
						slotProperties: {
							under_winch: {
								poseLimits: {
									bones: {
										character_rotation: 180,
										leg_l: -2,
										leg_r: -2,
									},
									legs: {
										pose: 'standing',
									},
								},
								attributes: {
									requires: [
										'Ankle_cuffs',
									],
								},
								stateFlags: {
									requires: {
										carabiner: 'Ankles cannot be chained without the Carabiner attached to the Pulley',
									},
								},
							},
						},
					},
				},
				{
					id: 'strappado',
					name: 'Armbinder Strappado',
					properties: {
						blockSlotsEnterLeave: ['under_winch'],
						slotProperties: {
							under_winch: {
								poseLimits: {
									bones: {
										leg_l: [[-18, 10]],
										leg_r: [[-18, 10]],
									},
									legs: {
										pose: 'standing',
									},
								},
								attributes: {
									requires: [
										'Armbinder_chainable',
									],
								},
								stateFlags: {
									requires: {
										cable_extended: 'Strappado requires extended cable',
										carabiner: 'Strappado cannot be applied without an armbinder and the Carabiner attached to the Pulley',
									},
								},
							},
						},
					},
				},
			],
		},
		spreader_bar: {
			type: 'typed',
			name: 'Spreader Bar',
			staticConfig: { slotName: 'under_winch' },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'wrists_cuffed',
					name: 'Wrists Cuffed',
					properties: {
						blockSlotsEnterLeave: ['under_winch'],
						slotProperties: {
							under_winch: {
								poseLimits: {
									bones: {
										arm_l: -70,
										elbow_l: -20,
										arm_r: -70,
										elbow_r: -20,
									},
								},
								attributes: {
									requires: [
										'Wrist_cuffs',
									],
								},
								stateFlags: {
									requires: {
										spread_bar: 'Wrists cannot be cuffed without the Spreader Bar attached to the Pulley',
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
					id: 'ankles_cuffed',
					name: 'Ankles Cuffed',
					properties: {
						slotProperties: {
							under_winch: {
								poseLimits: {
									bones: {
										character_rotation: 180,
										leg_l: -16,
										leg_r: -16,
									},
									legs: {
										pose: 'standing',
									},
								},
								attributes: {
									requires: [
										'Ankle_cuffs',
									],
								},
								stateFlags: {
									requires: {
										spread_bar: 'Ankles cannot be cuffed without the Spreader Bar attached to the Pulley',
									},
								},
							},
						},
					},
				},
			],
		},
		lock_cable: {
			type: 'lockSlot',
			name: 'Cable Lock',
			staticConfig: { slotName: 'under_winch' },
			lockedProperties: {
				blockModules: ['cable'],
			},
		},
		lock_chain: {
			type: 'lockSlot',
			name: 'Attachment Lock',
			staticConfig: { slotName: 'under_winch' },
			lockedProperties: {
				blockModules: ['attachment', 'carabiner', 'spreader_bar'],
			},
		},
	},
	graphicsLayers: [
		{
			type: 'sprite',
			image: '',
			clipToRoom: true,
			colorizationKey: 'cable',
			offset: {
				x: -16,
				y: -1950,
			},
			imageOverrides: [
				{
					image: 'winch_cable.png',
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
			offsetOverrides: [
				{
					offset: { x: -16, y: -1125 },
					condition: [
						[
							{
								module: 'cable',
								operator: '=',
								value: 'extended',
							},
							{
								module: 'carabiner',
								operator: '=',
								value: 'strappado',
							},
						],
					],
				},
				{
					offset: { x: -16, y: -2450 },
					condition: [
						[
							{
								module: 'cable',
								operator: '=',
								value: 'retracted',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'bar',
			offset: {
				x: -250,
				y: 0,
			},
			imageOverrides: [
				{
					image: 'winch_bar.png',
					condition: [
						[
							{
								module: 'attachment',
								operator: '=',
								value: 'spreader_bar',
							},
						],
					],
				},
			],
			offsetOverrides: [
				{
					offset: { x: -250, y: -500 },
					condition: [
						[
							{
								module: 'cable',
								operator: '=',
								value: 'retracted',
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
			offset: {
				x: -250,
				y: 0,
			},
			imageOverrides: [
				{
					image: 'winch_bar_carabiners.png',
					condition: [
						[
							{
								module: 'attachment',
								operator: '=',
								value: 'spreader_bar',
							},
							{
								module: 'spreader_bar',
								operator: '!=',
								value: 'none',
							},
						],
					],
				},
			],
			offsetOverrides: [
				{
					offset: { x: -250, y: -500 },
					condition: [
						[
							{
								module: 'cable',
								operator: '=',
								value: 'retracted',
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
			offset: {
				x: -250,
				y: 5,
			},
			imageOverrides: [
				{
					image: 'winch_carabiner_chains.png',
					condition: [
						[
							{
								module: 'attachment',
								operator: '=',
								value: 'carabiner',
							},
							{
								module: 'carabiner',
								operator: '=',
								value: 'wrist_tied',
							},
						],
						[
							{
								module: 'attachment',
								operator: '=',
								value: 'carabiner',
							},
							{
								module: 'carabiner',
								operator: '=',
								value: 'ankles_tied',
							},
						],
					],
				},
			],
			offsetOverrides: [
				{
					offset: { x: -250, y: -500 },
					condition: [
						[
							{
								module: 'cable',
								operator: '=',
								value: 'retracted',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'pulley',
			offset: {
				x: -25,
				y: 5,
			},
			imageOverrides: [
				{
					image: 'winch_pulley.png',
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
			offsetOverrides: [
				{
					offset: { x: -25, y: 835 },
					condition: [
						[
							{
								module: 'cable',
								operator: '=',
								value: 'extended',
							},
							{
								module: 'carabiner',
								operator: '=',
								value: 'strappado',
							},
						],
					],
				},
				{
					offset: { x: -25, y: -495 },
					condition: [
						[
							{
								module: 'cable',
								operator: '=',
								value: 'retracted',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'carabiner',
			offset: {
				x: -25,
				y: 5,
			},
			imageOverrides: [
				{
					image: 'winch_carabiner.png',
					condition: [
						[
							{
								module: 'position',
								operator: '=',
								value: 'front',
							},
							{
								module: 'attachment',
								operator: '!=',
								value: 'none',
							},
						],
					],
				},
			],
			offsetOverrides: [
				{
					offset: { x: -25, y: 835 },
					condition: [
						[
							{
								module: 'cable',
								operator: '=',
								value: 'extended',
							},
							{
								module: 'carabiner',
								operator: '=',
								value: 'strappado',
							},
						],
					],
				},
				{
					offset: { x: -25, y: -495 },
					condition: [
						[
							{
								module: 'cable',
								operator: '=',
								value: 'retracted',
							},
						],
					],
				},
			],
		},

		{
			type: 'slot',
			slot: 'under_winch',
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
						offsetY: -1700,
						disablePoseOffset: true,
					},
					condition: [
						[
							{
								module: 'cable',
								operator: '=',
								value: 'retracted',
							},
							{
								module: 'spreader_bar',
								operator: '=',
								value: 'ankles_cuffed',
							},
						],
						[
							{
								module: 'cable',
								operator: '=',
								value: 'retracted',
							},
							{
								module: 'carabiner',
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
						pivotOffset: {
							x: 0,
							y: 500,
						},
					},
					condition: [
						[
							{
								module: 'cable',
								operator: '=',
								value: 'retracted',
							},
							{
								module: 'spreader_bar',
								operator: '!=',
								value: 'none',
							},
						],
						[
							{
								module: 'cable',
								operator: '=',
								value: 'retracted',
							},
							{
								module: 'carabiner',
								operator: '=',
								value: 'wrist_tied',
							},
						],
						[
							{
								module: 'cable',
								operator: '=',
								value: 'retracted',
							},
							{
								module: 'carabiner',
								operator: '=',
								value: 'ankles_tied',
							},
						],
					],
				},
				{
					position: {
						offsetX: 0,
						offsetY: -1200,
						disablePoseOffset: true,
					},
					condition: [
						[
							{
								module: 'spreader_bar',
								operator: '=',
								value: 'ankles_cuffed',
							},
						],
						[
							{
								module: 'carabiner',
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
								module: 'spreader_bar',
								operator: '!=',
								value: 'none',
							},
						],
						[
							{
								module: 'carabiner',
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
			clipToRoom: true,
			colorizationKey: 'cable',
			offset: {
				x: -16,
				y: -1950,
			},
			imageOverrides: [
				{
					image: 'winch_cable.png',
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
			offsetOverrides: [
				{
					offset: { x: -16, y: -1125 },
					condition: [
						[
							{
								module: 'cable',
								operator: '=',
								value: 'extended',
							},
							{
								module: 'carabiner',
								operator: '=',
								value: 'strappado',
							},
						],
					],
				},
				{
					offset: { x: -16, y: -2450 },
					condition: [
						[
							{
								module: 'cable',
								operator: '=',
								value: 'retracted',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'pulley',
			offset: {
				x: -25,
				y: 5,
			},
			imageOverrides: [
				{
					image: 'winch_pulley.png',
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
			offsetOverrides: [
				{
					offset: { x: -25, y: 835 },
					condition: [
						[
							{
								module: 'cable',
								operator: '=',
								value: 'extended',
							},
							{
								module: 'carabiner',
								operator: '=',
								value: 'strappado',
							},
						],
					],
				},
				{
					offset: { x: -25, y: -495 },
					condition: [
						[
							{
								module: 'cable',
								operator: '=',
								value: 'retracted',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'carabiner',
			offset: {
				x: -25,
				y: 5,
			},
			imageOverrides: [
				{
					image: 'winch_carabiner.png',
					condition: [
						[
							{
								module: 'position',
								operator: '=',
								value: 'back',
							},
							{
								module: 'attachment',
								operator: '!=',
								value: 'none',
							},
						],
					],
				},
			],
			offsetOverrides: [
				{
					offset: { x: -25, y: 835 },
					condition: [
						[
							{
								module: 'cable',
								operator: '=',
								value: 'extended',
							},
							{
								module: 'carabiner',
								operator: '=',
								value: 'strappado',
							},
						],
					],
				},
				{
					offset: { x: -25, y: -495 },
					condition: [
						[
							{
								module: 'cable',
								operator: '=',
								value: 'retracted',
							},
						],
					],
				},
			],
		},
	],
	pivot: {
		x: 0,
		y: 1350,
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
