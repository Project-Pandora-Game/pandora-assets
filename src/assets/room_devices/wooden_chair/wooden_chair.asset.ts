DefineRoomDeviceAsset({
	name: 'Wooden Chair',
	size: 'huge',
	preview: 'preview.png',
	colorization: {
		chair: {
			name: 'Chair',
			default: '#D56F1C',
		},
		cushion: {
			name: 'Cushion',
			default: '#D51D1D',
		},
		dildo: {
			name: 'Dildo',
			default: '#EA4FA5',
		},
		plug: {
			name: 'Plug',
			default: '#222222',
		},
		rope: {
			name: 'Rope',
			default: '#D7AC4D',
		},
	},
	staticAttributes: ['Furniture', 'Play_furniture'],
	slots: {
		seated: {
			name: 'Seated',
			asset: {
				name: 'Wooden Chair',
				size: 'huge',
				poseLimits: {
					legs: {
						pose: 'sitting',
					},
					view: 'front',
				},
			},
		},
	},
	modules: {
		armrests: {
			type: 'typed',
			name: 'Armrests',
			staticConfig: { slotName: 'seated' },
			variants: [
				{
					id: 'no',
					name: 'No',
					default: true,
				},
				{
					id: 'yes',
					name: 'Yes',
					properties: {
						stateFlags: {
							provides: ['armrests'],
						},
					},
				},
			],
		},
		accessories: {
			type: 'typed',
			name: 'Accessories',
			staticConfig: { slotName: 'seated' },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'cushion',
					name: 'Cushion',
				},
				{
					id: 'dildo',
					name: 'Dildo',
					properties: {
						slotProperties: {
							seated: {
								attributes: {
									provides: [
										'Toy',
										'Vulva_item',
										'Vulva_insert',
										'Vulva_insert_deep',
										'Crotch_protruding',
									],
									requires: ['Vulva_spread', '!Vulva_cover'],
								},
							},
						},
					},
				},
				{
					id: 'plug',
					name: 'Plug',
					properties: {
						slotProperties: {
							seated: {
								attributes: {
									provides: [
										'Toy',
										'Anus_item',
										'Anus_insert',
										'Anus_insert_deep',
										'Anus_protruding',
									],
									requires: ['!Anus_cover'],
								},
							},
						},
					},
				},
				{
					id: 'double_dildo',
					name: 'Double Dildo',
					properties: {
						slotProperties: {
							seated: {
								attributes: {
									provides: [
										'Toy',
										'Vulva_item',
										'Vulva_insert',
										'Vulva_insert_deep',
										'Crotch_protruding',
										'Anus_item',
										'Anus_insert',
										'Anus_insert_deep',
										'Anus_protruding',
									],
									requires: ['Vulva_spread', '!Vulva_cover', '!Anus_cover'],
								},
							},
						},
					},
				},
			],
		},
		body: {
			type: 'typed',
			name: 'Body',
			staticConfig: { slotName: 'seated' },
			variants: [
				{
					id: 'free',
					name: 'Free',
					default: true,
				},
				{
					id: 'tied',
					name: 'Tied',
					properties: {
						blockSlotsEnterLeave: ['seated'],
						slotProperties: {
							seated: {
								poseLimits: {
									bones: {
										arm_l: [[90, 110]],
										arm_r: [[90, 110]],
										elbow_l: [[-80, 90]],
										elbow_r: [[-80, 90]],
									},
								},
							},
						},
					},
				},
			],
		},
		wrists: {
			type: 'typed',
			name: 'Wrists',
			staticConfig: { slotName: 'seated' },
			variants: [
				{
					id: 'free',
					name: 'Free',
					default: true,
				},
				{
					id: 'tied_back',
					name: 'Tied to Back',
					properties: {
						blockSlotsEnterLeave: ['seated'],
						slotProperties: {
							seated: {
								poseLimits: {
									arms: {
										position: 'back',
									},
									bones: {
										arm_l: 110,
										arm_r: 110,
										elbow_l: -30,
										elbow_r: -30,
									},
								},
								effects: {
									blockHands: true,
								},
							},
						},
						stateFlags: {
							provides: ['tied_wrists'],
						},
					},
				},
				{
					id: 'tied',
					name: 'Tied to Armrests',
					properties: {
						blockSlotsEnterLeave: ['seated'],
						slotProperties: {
							seated: {
								poseLimits: {
									arms: {
										position: 'back',
									},
									bones: {
										arm_l: 90,
										arm_r: 90,
										elbow_l: -45,
										elbow_r: -45,
									},
								},
								effects: {
									blockHands: true,
								},
							},
						},
						stateFlags: {
							provides: ['tied_wrists'],
							requires: {
								armrests: 'Wrists cannot be tied without armrests',
							},
						},
					},
				},
			],
		},
		ankles: {
			type: 'typed',
			name: 'Ankles',
			staticConfig: { slotName: 'seated' },
			variants: [
				{
					id: 'free',
					name: 'Free',
					default: true,
				},
				{
					id: 'together',
					name: 'Tied Together',
					properties: {
						blockSlotsEnterLeave: ['seated'],
						slotProperties: {
							seated: {
								poseLimits: {
									bones: {
										leg_r: 2,
										leg_l: 2,
									},
								},
							},
						},
					},
				},
				{
					id: 'split',
					name: 'Split',
					properties: {
						blockSlotsEnterLeave: ['seated'],
						slotProperties: {
							seated: {
								poseLimits: {
									bones: {
										leg_l: -16,
										leg_r: -16,
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
			image: '',
			colorizationKey: 'rope',
			offset: { x: -216, y: -740 },
			imageOverrides: [
				{
					image: 'ankles_together_back.png@432x811',
					condition: [
						[
							{
								module: 'ankles',
								operator: '=',
								value: 'together',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: 'chair_base.png@432x811',
			colorizationKey: 'chair',
			offset: { x: -216, y: -745 },
		},
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'chair',
			offset: { x: -216, y: -745 },
			imageOverrides: [
				{
					image: 'cushion_normal_shadow.png@432x811',
					condition: [
						[
							{
								module: 'accessories',
								operator: '=',
								value: 'cushion',
							},
							{
								module: 'armrests',
								operator: '=',
								value: 'no',
							},
						],
					],
				},
				{
					image: 'cushion_arms_shadow.png@432x811',
					condition: [
						[
							{
								module: 'accessories',
								operator: '=',
								value: 'cushion',
							},
							{
								module: 'armrests',
								operator: '=',
								value: 'yes',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'plug',
			offset: { x: -216, y: -745 },
			imageOverrides: [
				{
					image: 'dildo_2.png@432x811',
					condition: [
						[
							{
								module: 'accessories',
								operator: '=',
								value: 'plug',
							},
						],
						[
							{
								module: 'accessories',
								operator: '=',
								value: 'double_dildo',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'dildo',
			offset: { x: -216, y: -745 },
			imageOverrides: [
				{
					image: 'dildo_1.png@432x811',
					condition: [
						[
							{
								module: 'accessories',
								operator: '=',
								value: 'dildo',
							},
						],
						[
							{
								module: 'accessories',
								operator: '=',
								value: 'double_dildo',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'cushion',
			offset: { x: -216, y: -745 },
			imageOverrides: [
				{
					image: 'cushion_normal.png@432x811',
					condition: [
						[
							{
								module: 'accessories',
								operator: '=',
								value: 'cushion',
							},
							{
								module: 'armrests',
								operator: '=',
								value: 'no',
							},
						],
					],
				},
				{
					image: 'cushion_arms.png@432x811',
					condition: [
						[
							{
								module: 'accessories',
								operator: '=',
								value: 'cushion',
							},
							{
								module: 'armrests',
								operator: '=',
								value: 'yes',
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
			offset: { x: -216, y: -740 },
			imageOverrides: [
				{
					image: 'wrists_armrests_back.png',
					condition: [
						[
							{
								module: 'wrists',
								operator: '=',
								value: 'tied',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'chair',
			offset: { x: -216, y: -740 },
			imageOverrides: [
				{
					image: 'chair_arms.png@432x811',
					condition: [
						[
							{
								module: 'armrests',
								operator: '=',
								value: 'yes',
							},
						],
					],
				},
			],
		},
		{
			type: 'slot',
			slot: 'seated',
			characterPosition: {
				offsetX: 0,
				offsetY: -20,
				relativeScale: 1,

			},

			characterPositionOverrides: [
				{
					position: {
						offsetX: 0,
						offsetY: -15,
						pivotOffset: {
							x: 0,
							y: 0,
						},
					},
					condition: [
						[
							{
								module: 'accessories',
								operator: '!=',
								value: 'cushion',
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
			offset: { x: -216, y: -760 },
			imageOverrides: [
				{
					image: 'body.png',
					condition: [
						[
							{
								module: 'body',
								operator: '=',
								value: 'tied',
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
			offset: { x: -216, y: -740 },
			imageOverrides: [
				{
					image: 'wrists_armrests.png',
					condition: [
						[
							{
								module: 'wrists',
								operator: '=',
								value: 'tied',
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
			offset: { x: -216, y: -760 },
			imageOverrides: [
				{
					image: 'ankles_split.png@432x811',
					condition: [
						[
							{
								module: 'ankles',
								operator: '=',
								value: 'split',
							},
						],
					],
				},
				{
					image: 'ankles_together.png@432x811',
					condition: [
						[
							{
								module: 'ankles',
								operator: '=',
								value: 'together',
							},
						],
					],
				},
			],
		},
	],
	pivot: {
		x: 0,
		y: 0,
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
