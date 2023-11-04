DefineRoomDeviceAsset({
	name: 'Wooden Double Bed',
	size: 'huge',
	colorization: {
		bed_frame: {
			name: 'Bed frame',
			default: '#FFE8E9',
		},
		mattress: {
			name: 'Mattress',
			default: '#ffffff',
		},
		pillows: {
			name: 'Pillows',
			default: '#ffffff',
		},
		ropes_left: {
			name: 'Left ropes',
			default: '#666666',
		},
		ropes_right: {
			name: 'Right ropes',
			default: '#ffffff',
		},
	},
	slots: {
		character_slot_left: {
			name: 'Bed - left side',
			asset: {
				name: 'Wooden Double Bed left side',
				size: 'huge',
				poseLimits: {
					legs: ['standing', 'kneeling'],
				},
				graphics: 'ropes_left.json',
			},
		},
		character_slot_middle: {
			name: 'Bed - center',
			asset: {
				name: 'Wooden Double Bed center',
				size: 'huge',
				poseLimits: {
					legs: ['standing', 'kneeling'],
				},
			},
		},
		character_slot_right: {
			name: 'Bed - right side',
			asset: {
				name: 'Wooden Double Bed right side',
				size: 'huge',
				poseLimits: {
					legs: ['standing', 'kneeling'],
				},
				graphics: 'ropes_right.json',
			},
		},
	},
	modules: {
		ropes_left: {
			type: 'typed',
			name: 'Bed ropes - left side',
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'tied_legs',
					name: 'Tied (Legs)',
					properties: {
						blockSlotsEnterLeave: ['character_slot_left'],
						slotProperties: {
							character_slot_left: {
								poseLimits: {
									bones: {
										leg_r: -18,
										leg_l: -18,
									},
									legs: 'standing',
								},
							},
						},
					},
				},
				{
					id: 'tied_arms',
					name: 'Tied (Arms)',
					properties: {
						blockSlotsEnterLeave: ['character_slot_left'],
						slotProperties: {
							character_slot_left: {
								poseLimits: {
									bones: {
										arm_l: -25,
										arm_r: -27,
										elbow_l: -60,
										elbow_r: -58,
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
					id: 'tied_both',
					name: 'Tied (Legs & Arms)',
					properties: {
						blockSlotsEnterLeave: ['character_slot_left'],
						slotProperties: {
							character_slot_left: {
								poseLimits: {
									bones: {
										arm_l: -25,
										arm_r: -27,
										elbow_l: -60,
										elbow_r: -58,
										leg_r: -18,
										leg_l: -18,
									},
									legs: 'standing',
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
		ropes_right: {
			type: 'typed',
			name: 'Bed ropes - right side',
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'tied_legs',
					name: 'Tied (Legs)',
					properties: {
						blockSlotsEnterLeave: ['character_slot_right'],
						slotProperties: {
							character_slot_right: {
								poseLimits: {
									bones: {
										leg_r: -18,
										leg_l: -18,
									},
									legs: 'standing',
								},
							},
						},
					},
				},
				{
					id: 'tied_arms',
					name: 'Tied (Arms)',
					properties: {
						blockSlotsEnterLeave: ['character_slot_right'],
						slotProperties: {
							character_slot_right: {
								poseLimits: {
									bones: {
										arm_l: -25,
										arm_r: -25,
										elbow_l: -60,
										elbow_r: -60,
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
					id: 'tied_both',
					name: 'Tied (Legs+Arms)',
					properties: {
						blockSlotsEnterLeave: ['character_slot_right'],
						slotProperties: {
							character_slot_right: {
								poseLimits: {
									bones: {
										arm_l: -25,
										arm_r: -25,
										elbow_l: -60,
										elbow_r: -60,
										leg_r: -18,
										leg_l: -18,
									},
									legs: 'standing',
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
	},
	pivot: {
		x: 920,
		y: 1730,
	},
	graphicsLayers: [
		{
			type: 'sprite',
			image: 'wooden_double_bed_base.png',
			colorizationKey: 'bed_frame',
		},
		{
			type: 'sprite',
			image: 'wooden_double_bed_mattress.png',
			colorizationKey: 'mattress',
		},
		{
			type: 'sprite',
			image: 'wooden_double_bed_pillows.png',
			colorizationKey: 'pillows',
		},
		{
			type: 'slot',
			slot: 'character_slot_left',
			characterPosition: {
				offsetX: -288,
				offsetY: -180,
				disablePoseOffset: true,
			},
		},
		{
			type: 'slot',
			slot: 'character_slot_middle',
			characterPosition: {
				offsetX: 0,
				offsetY: -160,
			},
		},
		{
			type: 'slot',
			slot: 'character_slot_right',
			characterPosition: {
				offsetX: 288,
				offsetY: -180,
				disablePoseOffset: true,
			},
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
				source: 'https://skfb.ly/69vZE',
				copyrightHolder: 'Francesco Coldesina',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'used 3D model - mattress',
				source: 'https://skfb.ly/6RO9F',
				copyrightHolder: 'mspurlock1',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'used 3D model - pillow',
				source: 'https://skfb.ly/6ZJuI',
				copyrightHolder: 'Susidko Studio',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
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
