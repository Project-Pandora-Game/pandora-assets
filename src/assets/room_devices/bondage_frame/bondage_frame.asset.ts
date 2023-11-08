DefineRoomDeviceAsset({
	name: 'Bondage Frame',
	size: 'huge',
	colorization: {
		frame: {
			name: 'Frame',
			default: '#924A2D',
		},
		sockets: {
			name: 'Sockets',
			default: '#B4A099',
		},
		rings: {
			name: 'Rings',
			default: '#4F4F4F',
		},
		chains: {
			name: 'Chains',
			default: '#FE5D5D',
		},
	},
	slots: {
		character_slot: {
			name: 'Frame',
			asset: {
				name: 'Bondage Frame',
				size: 'huge',
				poseLimits: {
					legs: ['standing', 'kneeling'],
				},
			},
		},
	},
	modules: {
		chains: {
			type: 'typed',
			name: 'Chains',
			variants: [
				{
					id: 'none',
					name: 'Not used',
					default: true,
				},
				{
					id: 'standing',
					name: 'Tied standing (Arms)',
					properties: {
						blockSlotsEnterLeave: ['character_slot'],
						slotProperties: {
							character_slot: {
								poseLimits: {
									bones: {
										arm_l: -70,
										arm_r: -70,
										elbow_l: -20,
										elbow_r: -20,
									},
								},
								effects: {
									blockHands: true,
								},
								requirements: [
									'Wrist_cuffs',
								],
							},
						},
					},
				},
				{
					id: 'hanging',
					name: 'Tied Hanging (Arms)',
					properties: {
						blockSlotsEnterLeave: ['character_slot'],
						slotProperties: {
							character_slot: {
								poseLimits: {
									bones: {
										arm_l: -70,
										arm_r: -70,
										elbow_l: -20,
										elbow_r: -20,
									},
								},
								effects: {
									blockHands: true,
								},
								requirements: [
									'Wrist_cuffs',
								],
							},
						},
					},
				},
				{
					id: 'hanging_and_legs',
					name: 'Tied Hanging (Arms & Legs)',
					properties: {
						blockSlotsEnterLeave: ['character_slot'],
						slotProperties: {
							character_slot: {
								poseLimits: {
									bones: {
										arm_l: -70,
										arm_r: -70,
										elbow_l: -20,
										elbow_r: -20,
										leg_r: -30,
										leg_l: -30,
									},
								},
								effects: {
									blockHands: true,
								},
								requirements: [
									'Wrist_cuffs',
									'Ankle_cuffs',
								],
							},
						},
					},
				},
			],
		},
		lock: {
			type: 'lockSlot',
			name: 'Chain locks',
			lockedProperties: {
				blockModules: ['chains'],
			},
		},
	},
	pivot: {
		x: 700,
		y: 1800,
	},
	graphicsLayers: [
		{
			type: 'sprite',
			image: 'frame_rings_side.png',
			colorizationKey: 'rings',
		},
		{
			type: 'sprite',
			image: 'frame_chains_bottom_hanging.png',
			imageOverrides: [
				{
					image: 'frame_chains_bottom_attached.png',
					condition: [
						[
							{
								module: 'chains',
								operator: '=',
								value: 'hanging_and_legs',
							},
						],
					],
				},
			],
			colorizationKey: 'chains',
		},
		{
			type: 'sprite',
			image: 'frame.png',
			colorizationKey: 'frame',
		},
		{
			type: 'sprite',
			image: 'frame_sockets.png',
			colorizationKey: 'sockets',
		},
		{
			type: 'sprite',
			image: 'frame_rings_top.png',
			colorizationKey: 'rings',
		},
		{
			type: 'sprite',
			image: 'frame_chains_top_hanging.png',
			imageOverrides: [
				{
					image: 'frame_chains_top_short.png',
					condition: [
						[
							{
								module: 'chains',
								operator: '=',
								value: 'hanging',
							},
						],
						[
							{
								module: 'chains',
								operator: '=',
								value: 'hanging_and_legs',
							},
						],
					],
				},
				{
					image: 'frame_chains_top_long.png',
					condition: [
						[
							{
								module: 'chains',
								operator: '=',
								value: 'standing',
							},
						],
					],
				},
			],
			colorizationKey: 'chains',
		},
		{
			type: 'slot',
			slot: 'character_slot',
			characterPosition: {
				offsetX: 0,
				offsetY: 10,
				disablePoseOffset: true,
			},
			characterPositionOverrides: [
				{
					position: {
						offsetX: 0,
						offsetY: -255,
						disablePoseOffset: true,
					},
					condition: [
						[
							{
								module: 'chains',
								operator: '=',
								value: 'hanging',
							},
						],
						[
							{
								module: 'chains',
								operator: '=',
								value: 'hanging_and_legs',
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
				part: 'images',
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only',
			},
		],
	},
});
