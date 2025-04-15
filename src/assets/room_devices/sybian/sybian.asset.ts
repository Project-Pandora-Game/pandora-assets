DefineRoomDeviceAsset({
	name: 'Sybian-type Saddle',
	size: 'huge',
	preview: 'preview.png',
	colorization: {
		base: {
			name: 'Base',
			default: '#2F2F2F',
		},
		cover: {
			name: 'Cover',
			default: '#D51B1B',
		},
		ring: {
			name: 'Ring',
			default: '#D0D0D0',
		},
		dildo: {
			name: 'Dildo',
			default: '#FFFFFF',
		},
	},
	staticAttributes: ['Play_furniture'],
	slots: {
		seated: {
			name: 'Seated',
			asset: {
				name: 'Sybian-type Saddle',
				size: 'huge',
				poseLimits: {
					legs: 'kneeling',
					bones: {
						character_rotation: 0,
						leg_l: [[-45, -30]],
						leg_r: [[-45, -30]],
					},
				},
			},
		},
	},
	modules: {
		position: {
			type: 'typed',
			name: 'Character Position',
			staticConfig: { slotName: 'seated' },
			variants: [
				{
					id: 'front',
					name: 'Front-facing',
					default: true,
					properties: {
						slotProperties: {
							seated: {
								poseLimits: {
									view: 'front',
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
							seated: {
								poseLimits: {
									view: 'back',
								},
							},
						},
					},
				},
			],
		},
		vibration: {
			type: 'typed',
			name: 'Vibration',
			staticConfig: { slotName: 'seated' },
			variants: [
				{
					id: 'crotch',
					name: 'Crotch',
					default: true,
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
			],
		},
		front_ring: {
			type: 'typed',
			name: 'Front Ring',
			staticConfig: { slotName: 'seated' },
			variants: [
				{
					id: 'hide',
					name: 'Hide',
				},
				{
					id: 'show',
					name: 'Show',
					default: true,
				},
				{
					id: 'attached',
					name: 'Attached to Collar',
					properties: {
						blockSlotsEnterLeave: ['seated'],
						slotProperties: {
							seated: {
								attributes: {
									requires: ['Collar_front_ring'],
								},
							},
						},
					},
				},
			],
		},
		lock_front: {
			type: 'lockSlot',
			name: 'Front Ring Lock',
			staticConfig: { slotName: 'seated' },
			lockedProperties: {
				blockModules: ['front_ring'],
			},
		},
		back_ring: {
			type: 'typed',
			name: 'Back Ring',
			staticConfig: { slotName: 'seated' },
			variants: [
				{
					id: 'hide',
					name: 'Hide',
				},
				{
					id: 'show',
					name: 'Show',
					default: true,
				},
				{
					id: 'attached',
					name: 'Attached to Wrist Cuffs',
					properties: {
						blockSlotsEnterLeave: ['seated'],
						slotProperties: {
							seated: {
								attributes: {
									requires: ['Wrist_cuffs'],
								},
								poseLimits: {
									bones: {
										arm_l: 80,
										arm_r: 80,
										elbow_l: 51,
										elbow_r: 51,
									},
									arms: {
										position: 'back',
										rotation: 'forward',
									},
								},
							},
						},
					},
				},
			],
		},
		lock_back: {
			type: 'lockSlot',
			name: 'Back Ring lock',
			staticConfig: { slotName: 'seated' },
			lockedProperties: {
				blockModules: ['back_ring'],
			},
		},
		brand: {
			type: 'typed',
			name: 'Accessories',
			staticConfig: { slotName: 'seated' },
			variants: [
				{
					id: 'hide',
					name: 'Hide',
					default: true,
				},
				{
					id: 'show',
					name: 'Show on Back Side',
				},
			],
		},
	},
	graphicsLayers: [
		{
			type: 'sprite',
			image: 'base.png',
			colorizationKey: 'base',
			offset: { x: -500, y: -900 },
		},
		{
			type: 'sprite',
			image: 'top.png',
			colorizationKey: 'cover',
			offset: { x: -500, y: -900 },
		},
		{
			type: 'sprite',
			image: 'front.png',
			colorizationKey: 'base',
			offset: { x: -500, y: -900 },
		},
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'ring',
			offset: { x: -500, y: -900 },
			imageOverrides: [
				{
					image: 'ring_front_down.png',
					condition: [
						[
							{
								module: 'front_ring',
								operator: '=',
								value: 'show',
							},
							{
								module: 'position',
								operator: '=',
								value: 'front',
							},
						],
						[
							{
								module: 'back_ring',
								operator: '=',
								value: 'show',
							},
							{
								module: 'position',
								operator: '=',
								value: 'back',
							},
						],
					],
				},
				{
					image: 'ring_front_up.png',
					condition: [
						[
							{
								module: 'front_ring',
								operator: '=',
								value: 'attached',
							},
							{
								module: 'position',
								operator: '=',
								value: 'front',
							},
						],
						[
							{
								module: 'back_ring',
								operator: '=',
								value: 'attached',
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
			offset: { x: -500, y: -900 },
			imageOverrides: [
				{
					image: 'label.png',
					condition: [
						[
							{
								module: 'brand',
								operator: '=',
								value: 'show',
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
			image: 'vibration_base.png',
			colorizationKey: 'dildo',
			offset: { x: -500, y: -900 },
		},
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'dildo',
			offset: { x: -500, y: -900 },
			imageOverrides: [
				{
					image: 'dildo.png',
					condition: [
						[
							{
								module: 'vibration',
								operator: '=',
								value: 'dildo',
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
			colorizationKey: 'dildo',
			offset: { x: -500, y: -930 },
			imageOverrides: [
				{
					image: 'dildo.png',
					condition: [
						[
							{
								module: 'vibration',
								operator: '=',
								value: 'dildo',
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
			type: 'slot',
			slot: 'seated',
			characterPosition: {
				offsetX: 0,
				offsetY: 0,
				relativeScale: 1,
			},
			characterPositionOverrides: [
				{
					position: {
						offsetX: 0,
						offsetY: -25,
						pivotOffset: {
							x: 0,
							y: 0,
						},
					},
					condition: [
						[
							{
								view: 'back',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: '',
			offset: { x: -500, y: -900 },
			imageOverrides: [
				{
					image: 'chain_collar.png',
					condition: [
						[
							{
								module: 'front_ring',
								operator: '=',
								value: 'attached',
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
			offset: { x: -500, y: -900 },
			imageOverrides: [
				{
					image: 'chain_wrists.png',
					condition: [
						[
							{
								module: 'back_ring',
								operator: '=',
								value: 'attached',
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
