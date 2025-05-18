DefineRoomDeviceAsset({
	name: 'Bondage Cross',
	size: 'huge',
	requireFreeHandsToUseDefault: false,
	colorization: {
		frame: {
			name: 'Frame',
			default: '#482814',
		},
		cross: {
			name: 'Cross',
			default: '#701A1A',
		},
		chains: {
			name: 'Chains',
			default: '#DDDDDD',
		},
		nails: {
			name: 'Nails',
			default: '#1E1E1D',
		},
		padding: {
			name: 'Padding',
			default: '#1F1F1F',
		},
	},
	staticAttributes: ['Play_furniture'],
	preview: 'cross_preview.png',
	slots: {
		character_slot: {
			name: 'In front of the cross',
			asset: {
				name: 'Bondage cross',
				size: 'huge',
			},
		},
	},
	modules: {
		position: {
			type: 'typed',
			name: 'Facing position',
			staticConfig: { slotName: 'character_slot' },
			variants: [
				{
					id: 'front',
					name: 'Front-Facing',
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
					name: 'Back-Facing',
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

		wrists: {
			type: 'typed',
			name: 'Wrist',
			staticConfig: { slotName: 'character_slot' },
			variants: [
				{
					id: 'None',
					name: 'None',
					default: true,
					properties: {
						slotProperties: {
							character_slot: {
								poseLimits: {
									legs: {
										pose: 'standing',
									},
								},
							},
						},
					},
				},
				{
					id: 'left',
					name: 'Left Only',
					properties: {
						blockSlotsEnterLeave: ['character_slot'],
						slotProperties: {
							character_slot: {
								poseLimits: {
									bones: {
										arm_l: -44,
										elbow_l: -21,
									},
									legs: {
										pose: 'standing',
									},
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
					id: 'right',
					name: 'Right Only',
					properties: {
						blockSlotsEnterLeave: ['character_slot'],
						slotProperties: {
							character_slot: {
								poseLimits: {
									bones: {
										arm_r: -44,
										elbow_r: -21,
									},
									legs: {
										pose: 'standing',
									},
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
					id: 'both',
					name: 'Both',
					properties: {
						blockSlotsEnterLeave: ['character_slot'],
						slotProperties: {
							character_slot: {
								poseLimits: {
									bones: {
										arm_l: -44,
										elbow_l: -21,
										arm_r: -44,
										elbow_r: -21,
									},
									legs: {
										pose: 'standing',
									},
								},
								attributes: {
									requires: [
										'Wrist_cuffs',
									],
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
		ankles: {
			type: 'typed',
			name: 'Ankles',
			staticConfig: { slotName: 'character_slot' },
			variants: [
				{
					id: 'None',
					name: 'None',
					default: true,
				},
				{
					id: 'left',
					name: 'Left Only',
					properties: {
						blockSlotsEnterLeave: ['character_slot'],
						slotProperties: {
							character_slot: {
								poseLimits: {
									bones: {
										leg_l: -30,
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
							},
						},
					},
				},
				{
					id: 'right',
					name: 'Right Only',
					properties: {
						blockSlotsEnterLeave: ['character_slot'],
						slotProperties: {
							character_slot: {
								poseLimits: {
									bones: {
										leg_r: -30,
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
							},
						},
					},
				},
				{
					id: 'both',
					name: 'Both',
					properties: {
						blockSlotsEnterLeave: ['character_slot'],
						slotProperties: {
							character_slot: {
								poseLimits: {
									bones: {
										leg_l: -30,
										leg_r: -30,
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
									provides: ['ankles_tied'],
								},
							},
						},
					},
				},
			],
		},
		rotation: {
			type: 'typed',
			name: 'Cross rotation',
			staticConfig: { slotName: 'character_slot' },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
					properties: {
						slotProperties: {
							character_slot: {
								poseLimits: {
									bones: {
										character_rotation: 0,
									},
								},
							},
						},
					},
				},
				{
					id: 'upsideDown',
					name: 'Upside Down',
					properties: {
						slotProperties: {
							character_slot: {
								poseLimits: {
									bones: {
										character_rotation: 180,
									},
								},
								stateFlags: {
									requires: {
										ankles_tied: 'Upside Down position requires both ankles tied to frame',
									},
								},
							},
						},
					},
				},
			],
		},
		headrest: {
			type: 'typed',
			name: 'Headrest',
			staticConfig: { slotName: null },
			variants: [
				{
					id: 'no',
					name: 'No',
					default: true,
				},
				{
					id: 'yes',
					name: 'Yes',
				},
			],
		},
		padding: {
			type: 'typed',
			name: 'Padding',
			staticConfig: { slotName: null },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'center',
					name: 'Center Only',
				},
				{
					id: 'all',
					name: 'All',
				},
			],
		},
		setup: {
			type: 'typed',
			name: 'Mounting setup',
			staticConfig: { slotName: null },
			variants: [
				{
					id: 'stand',
					name: 'Stand',
					default: true,
				},
				{
					id: 'wall',
					name: 'Wall-mounted',
				},
				{
					id: 'hanging',
					name: 'Hanging chains',
				},
			],
		},
		lock_wrists: {
			type: 'lockSlot',
			name: 'Wrists locks',
			staticConfig: { slotName: 'character_slot' },
			lockedProperties: {
				blockModules: ['wrists'],
			},
		},
		lock_ankles: {
			type: 'lockSlot',
			name: 'Ankles locks',
			staticConfig: { slotName: 'character_slot' },
			lockedProperties: {
				blockModules: ['ankles'],
			},
		},
	},
	pivot: {
		x: 442,
		y: 1178,
	},
	graphicsLayers: [
		{
			type: 'sprite',
			image: 'frame.png',
			colorizationKey: 'frame',
			imageOverrides: [
				{
					image: '',
					condition: [
						[
							{
								module: 'setup',
								operator: '!=',
								value: 'stand',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: 'hanging_chain_1.png',
			clipToRoom: true,
			colorizationKey: 'chains',
			imageOverrides: [
				{
					image: '',
					condition: [
						[
							{
								module: 'setup',
								operator: '!=',
								value: 'hanging',
							},
						],
					],
				},
			],
			offsetOverrides: [
				{
					offset: { x: 155, y: -1250 },
					condition: [
						[
							{
								module: 'setup',
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
			image: 'hanging_chain_2.png',
			clipToRoom: true,
			colorizationKey: 'chains',
			imageOverrides: [
				{
					image: '',
					condition: [
						[
							{
								module: 'setup',
								operator: '!=',
								value: 'hanging',
							},
						],
					],
				},
			],
			offsetOverrides: [
				{
					offset: { x: 715, y: -1250 },
					condition: [
						[
							{
								module: 'setup',
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
			colorizationKey: 'cross',
			imageOverrides: [
				{
					image: 'headrest_base.png',
					condition: [
						[
							{
								module: 'headrest',
								operator: '=',
								value: 'yes',
							},
						],
					],
				},
			],
			offsetOverrides: [
				{
					offset: { x: 0, y: 700 },
					condition: [
						[
							{
								module: 'rotation',
								operator: '=',
								value: 'upsideDown',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'padding',
			imageOverrides: [
				{
					image: 'headrest_padding.png',
					condition: [
						[
							{
								module: 'headrest',
								operator: '=',
								value: 'yes',
							},
						],
					],
				},
			],
			offsetOverrides: [
				{
					offset: { x: 0, y: 700 },
					condition: [
						[
							{
								module: 'rotation',
								operator: '=',
								value: 'upsideDown',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: 'cross.png',
			colorizationKey: 'cross',
		},
		{
			type: 'sprite',
			image: 'nails.png',
			colorizationKey: 'nails',
		},
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'padding',
			imageOverrides: [
				{
					image: 'padding_center.png',
					condition: [
						[
							{
								module: 'padding',
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
			colorizationKey: 'padding',
			imageOverrides: [
				{
					image: 'padding_edges.png',
					condition: [
						[
							{
								module: 'padding',
								operator: '=',
								value: 'all',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: 'chains.png',
			colorizationKey: 'chains',
		},
		{
			type: 'slot',
			slot: 'character_slot',
			characterPosition: {
				offsetX: 1,
				offsetY: 75,
				disablePoseOffset: true,
			},
			characterPositionOverrides: [
				{
					position: {
						offsetX: 1,
						offsetY: -1130,
						disablePoseOffset: true,
					},
					condition: [
						[
							{
								module: 'rotation',
								operator: '=',
								value: 'upsideDown',
							},
						],
					],
				},
			],
		},
	],
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia', 'Shikifet'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'used 3D model - base',
				source: 'https://skfb.ly/69UTM',
				copyrightHolder: '4lepy',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'wood texture',
				source: 'https://www.freepik.com/free-photo/white-wooden-texture-flooring-background_3475742.htm',
				copyrightHolder: 'rawpixel.com on Freepik',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only-Reserved-v1-or-later',
			},
			{
				part: 'images',
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only-v1-or-later',
			},
			{
				part: 'padding images',
				source: 'Self-Made',
				copyrightHolder: 'Shikifet',
				editedBy: 'Shikifet',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
