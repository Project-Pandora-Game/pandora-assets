DefineRoomDeviceAsset({
	name: 'Floor anchors',
	size: 'huge',
	colorization: {
		sockets: {
			name: 'Sockets',
			default: '#BBBBBB',
		},
		chains: {
			name: 'Ankle chains',
			default: '#FFFFFF',
		},
		chainL: {
			name: 'Collar chain left',
			default: '#FFFFFF',
		},
		chainR: {
			name: 'Collar chain right',
			default: '#FFFFFF',
		},
	},
	staticAttributes: ['Play_furniture'],
	preview: 'anchors_preview.png',
	slots: {
		character_slot_left: {
			name: 'Left side - for collar',
			asset: {
				name: 'Floor anchor',
				size: 'huge',
				poseLimits: {
					legs: ['standing', 'kneeling'],
				},
				graphics: 'left.json',
			},
		},
		character_slot_middle: {
			name: 'Center - for ankle cuffs',
			asset: {
				name: 'Floor anchors',
				size: 'huge',
				poseLimits: {
					legs: ['standing', 'kneeling'],
				},
			},
		},
		character_slot_right: {
			name: 'Right side - for collar',
			asset: {
				name: 'Floor anchor',
				size: 'huge',
				poseLimits: {
					legs: ['standing', 'kneeling'],
				},
				graphics: 'right.json',
			},
		},
	},
	modules: {
		left: {
			type: 'typed',
			name: 'Collar chain - left',
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'tied_left_long',
					name: 'Long chain (Collar)',
					properties: {
						blockSlotsEnterLeave: ['character_slot_left'],
						slotProperties: {
							character_slot_left: {
								poseLimits: {
									bones: {
										leg_r: [[-18, 0]],
										leg_l: [[-18, 0]],
									},
								},
								attributes: {
									requires: ['Collar_front_ring'],
								},
							},
						},
						stateFlags: {
							provides: ['chain_left'],
						},
					},
				},
				{
					id: 'tied_left_short',
					name: 'Short chain (Collar)',
					properties: {
						blockSlotsEnterLeave: ['character_slot_left'],
						slotProperties: {
							character_slot_left: {
								poseLimits: {
									bones: {
										leg_r: [[-16, 0]],
										leg_l: [[-16, 0]],
									},
									legs: 'kneeling',
								},
								attributes: {
									requires: ['Collar_front_ring'],
								},
							},
						},
						stateFlags: {
							provides: ['chain_left'],
						},
					},
				},
			],
		},
		lockLeftChain: {
			type: 'lockSlot',
			name: 'Lock for collar chain - left',
			occupiedProperties: {
				blockModules: ['left'],
				stateFlags: {
					requires: {
						chain_left: 'Locking requires a chain to lock.',
					},
				},
			},
		},
		right: {
			type: 'typed',
			name: 'Collar chain - right',
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'tied_right_long',
					name: 'Long chain (Collar)',
					properties: {
						blockSlotsEnterLeave: ['character_slot_right'],
						slotProperties: {
							character_slot_right: {
								poseLimits: {
									bones: {
										leg_r: [[-18, 0]],
										leg_l: [[-18, 0]],
									},
								},
								attributes: {
									requires: ['Collar_front_ring'],
								},
							},
						},
						stateFlags: {
							provides: ['chain_right'],
						},
					},
				},
				{
					id: 'tied_right_short',
					name: 'Short chain (Collar)',
					properties: {
						blockSlotsEnterLeave: ['character_slot_right'],
						slotProperties: {
							character_slot_right: {
								poseLimits: {
									bones: {
										leg_r: [[-16, 0]],
										leg_l: [[-16, 0]],
									},
									legs: 'kneeling',
								},
								attributes: {
									requires: ['Collar_front_ring'],
								},
							},
						},
						stateFlags: {
							provides: ['chain_right'],
						},
					},
				},
			],
		},
		lockRightChain: {
			type: 'lockSlot',
			name: 'Lock for collar chain - right',
			occupiedProperties: {
				blockModules: ['right'],
				stateFlags: {
					requires: {
						chain_right: 'Locking requires a chain to lock.',
					},
				},
			},
		},
		center: {
			type: 'typed',
			name: 'Ankle chains',
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'tied_center',
					name: 'Tied (Feet)',
					properties: {
						blockSlotsEnterLeave: ['character_slot_middle'],
						slotProperties: {
							character_slot_middle: {
								poseLimits: {
									bones: {
										leg_r: -18,
										leg_l: -18,
									},
									legs: 'standing',
								},
								attributes: {
									requires: ['Ankle_cuffs'],
								},
							},
						},
						stateFlags: {
							provides: ['chain_center'],
						},
					},
				},
			],
		},
		lockCenterChain: {
			type: 'lockSlot',
			name: 'Lock for ankle cuff chains',
			occupiedProperties: {
				blockModules: ['center'],
				stateFlags: {
					requires: {
						chain_center: 'Locking requires a chain to lock.',
					},
				},
			},
		},
	},
	pivot: {
		x: 500,
		y: 1230,
	},
	graphicsLayers: [
		{
			type: 'sprite',
			image: 'floor_sockets.png',
			colorizationKey: 'sockets',
		},
		{
			type: 'slot',
			slot: 'character_slot_left',
			characterPosition: {
				offsetX: -370,
				offsetY: -34,
				relativeScale: 0.98,
			},
		},
		{
			type: 'slot',
			slot: 'character_slot_right',
			characterPosition: {
				offsetX: 370,
				offsetY: -34,
				relativeScale: 0.98,
			},
		},
		{
			type: 'slot',
			slot: 'character_slot_middle',
			characterPosition: {
				offsetX: 0,
				offsetY: 0,
				pivotOffset: {
					x: 0,
					y: -30,
				},
			},
		},
		{
			type: 'sprite',
			image: 'chain_leftright.png',
			colorizationKey: 'chains',
			imageOverrides: [
				{
					image: '',
					condition: [
						[
							{
								module: 'center',
								operator: '!=',
								value: 'tied_center',
							},
						],
					],
				},
			],
		},
	],
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only',
			},
			{
				part: 'used 3D model - preview',
				source: 'https://skfb.ly/6UTQr',
				copyrightHolder: 'DaBoRi',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
		],
	},
});
