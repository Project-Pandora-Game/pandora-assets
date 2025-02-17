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
	},
	staticAttributes: ['Play_furniture'],
	preview: 'cross_preview.png',
	slots: {
		character_slot: {
			name: 'In front of the cross',
			asset: {
				name: 'Bondage cross',
				size: 'huge',
				poseLimits: {
					legs: 'standing',
				},
			},
		},
	},
	modules: {
		chains: {
			type: 'typed',
			name: 'Chains',
			staticConfig: { slotName: 'character_slot' },
			variants: [
				{
					id: 'none',
					name: 'Not attached',
					default: true,
					properties: {
						slotProperties: {
							character_slot: {
								poseLimits: {
									bones: {
										leg_r: [[-32, 10]],
										leg_l: [[-32, 10]],
										character_rotation: 0,
									},
								},
							},
						},
					},
				},
				{
					id: 'front',
					name: 'Tied front-facing',
					properties: {
						blockSlotsEnterLeave: ['character_slot'],
						slotProperties: {
							character_slot: {
								poseLimits: {
									bones: {
										arm_l: -44,
										arm_r: -44,
										elbow_l: -21,
										elbow_r: -21,
										leg_r: -30,
										leg_l: -30,
										character_rotation: 0,
									},
									legs: 'standing',
									view: 'front',
								},
								attributes: {
									requires: [
										'Wrist_cuffs',
										'Ankle_cuffs',
									],
								},
								effects: {
									blockHands: true,
								},
							},
						},
					},
				},
				{
					id: 'back',
					name: 'Tied back-facing',
					properties: {
						blockSlotsEnterLeave: ['character_slot'],
						slotProperties: {
							character_slot: {
								poseLimits: {
									bones: {
										arm_l: -44,
										arm_r: -44,
										elbow_l: -21,
										elbow_r: -21,
										leg_r: -30,
										leg_l: -30,
										character_rotation: 0,
									},
									legs: 'standing',
									view: 'back',
								},
								attributes: {
									requires: [
										'Wrist_cuffs',
										'Ankle_cuffs',
									],
								},
								effects: {
									blockHands: true,
								},
							},
						},
					},
				},
				{
					id: 'upsideFront',
					name: 'Tied upside-down front-facing',
					properties: {
						blockSlotsEnterLeave: ['character_slot'],
						slotProperties: {
							character_slot: {
								poseLimits: {
									bones: {
										arm_l: -43,
										arm_r: -43,
										elbow_l: -15,
										elbow_r: -15,
										leg_r: -26,
										leg_l: -26,
										character_rotation: 180,
									},
									legs: 'standing',
									view: 'front',
								},
								attributes: {
									requires: [
										'Wrist_cuffs',
										'Ankle_cuffs',
									],
								},
								effects: {
									blockHands: true,
								},
							},
						},
					},
				},
				{
					id: 'upsideBack',
					name: 'Tied upside-down back-facing',
					properties: {
						blockSlotsEnterLeave: ['character_slot'],
						slotProperties: {
							character_slot: {
								poseLimits: {
									bones: {
										arm_l: -43,
										arm_r: -43,
										elbow_l: -15,
										elbow_r: -15,
										leg_r: -26,
										leg_l: -26,
										character_rotation: 180,
									},
									legs: 'standing',
									view: 'back',
								},
								attributes: {
									requires: [
										'Wrist_cuffs',
										'Ankle_cuffs',
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
		lock: {
			type: 'lockSlot',
			name: 'Chain locks',
			staticConfig: { slotName: 'character_slot' },
			lockedProperties: {
				blockModules: ['chains'],
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
								module: 'chains',
								operator: '=',
								value: 'upsideFront',
							},
						],
						[
							{
								module: 'chains',
								operator: '=',
								value: 'upsideBack',
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
		],
	},
});
