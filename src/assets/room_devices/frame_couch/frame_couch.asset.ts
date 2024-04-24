DefineRoomDeviceAsset({
	name: 'Frame Couch',
	size: 'huge',
	colorization: {
		frame: {
			name: 'Frame',
			default: '#735448',
		},
		cushion: {
			name: 'Couch cushion',
			default: '#6A84AB',
		},
		ropes: {
			name: 'Ropes',
			default: '#F1CA96',
		},
	},
	staticAttributes: ['Furniture'],
	preview: 'frame_couch_preview.png',
	slots: {
		character_slot_top: {
			name: 'Lying on top',
			asset: {
				name: 'Frame Couch',
				size: 'huge',
				poseLimits: {
					bones: {
						character_rotation: -90,
					},
					legs: 'standing',
				},
			},
		},
		character_slot_sitting_left: {
			name: 'Sitting on the left',
			asset: {
				name: 'Frame Couch',
				size: 'huge',
				poseLimits: {
					bones: {
						leg_r: [[-60, 60]],
						leg_l: [[-60, 60]],
						character_rotation: [[-30, 30]],
					},
					legs: 'sitting',
					view: 'front',
				},
			},
		},
		character_slot_sitting_middle: {
			name: 'Sitting in the middle',
			asset: {
				name: 'Frame Couch',
				size: 'huge',
				poseLimits: {
					bones: {
						leg_r: [[-60, 60]],
						leg_l: [[-60, 60]],
						character_rotation: [[-30, 30]],
					},
					legs: 'sitting',
					view: 'front',
				},
			},
		},
		character_slot_sitting_right: {
			name: 'Sitting on the right',
			asset: {
				name: 'Frame Couch',
				size: 'huge',
				poseLimits: {
					bones: {
						leg_r: [[-60, 60]],
						leg_l: [[-60, 60]],
						character_rotation: [[-30, 30]],
					},
					legs: 'sitting',
					view: 'front',
				},
			},
		},
	},
	modules: {
		ropes: {
			type: 'typed',
			name: 'Frame ropes',
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'tied_arms',
					name: 'Tied (Arms)',
					properties: {
						blockSlotsEnterLeave: ['character_slot_top'],
						slotProperties: {
							character_slot_top: {
								poseLimits: {
									bones: {
										arm_l: -86,
										arm_r: -86,
										elbow_l: -43,
										elbow_r: -43,
									},
									arms: {
										rotation: 'up',
										position: 'back',
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
					id: 'tied_legs',
					name: 'Tied (Legs)',
					properties: {
						blockSlotsEnterLeave: ['character_slot_top'],
						slotProperties: {
							character_slot_top: {
								poseLimits: {
									bones: {
										leg_l: 2,
										leg_r: 2,
									},
								},
							},
						},
					},
				},
				{
					id: 'tied_both',
					name: 'Tied (Arms+Legs)',
					properties: {
						blockSlotsEnterLeave: ['character_slot_top'],
						slotProperties: {
							character_slot_top: {
								poseLimits: {
									bones: {
										arm_l: -86,
										arm_r: -86,
										elbow_l: -43,
										elbow_r: -43,
										leg_l: 2,
										leg_r: 2,
									},
									arms: {
										rotation: 'up',
										position: 'back',
									},
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
		x: 900,
		y: 870,
	},
	graphicsLayers: [
		{
			type: 'sprite',
			image: 'couch_frame.png',
			colorizationKey: 'frame',
		},
		{
			type: 'sprite',
			image: 'couch_cushion.png',
			colorizationKey: 'cushion',
		},
		{
			type: 'slot',
			slot: 'character_slot_sitting_left',
			characterPosition: {
				offsetX: -360,
				offsetY: 120,
				relativeScale: 1.08,
			},
		},
		{
			type: 'slot',
			slot: 'character_slot_sitting_middle',
			characterPosition: {
				offsetX: 0,
				offsetY: 120,
				relativeScale: 1.08,
			},
		},
		{
			type: 'slot',
			slot: 'character_slot_sitting_right',
			characterPosition: {
				offsetX: 360,
				offsetY: 120,
				relativeScale: 1.08,
			},
		},
		{
			type: 'slot',
			slot: 'character_slot_top',
			characterPosition: {
				offsetX: 0,
				offsetY: -290,
				disablePoseOffset: true,
				relativeScale: 0.96,
				pivotOffset: {
					x: 0,
					y: -590,
				},
			},
		},
		{
			type: 'sprite',
			image: '',
			imageOverrides: [
				{
					image: 'couch_rope_feet.png',
					condition: [
						[
							{
								module: 'ropes',
								operator: '=',
								value: 'tied_legs',
							},
						],
						[
							{
								module: 'ropes',
								operator: '=',
								value: 'tied_both',
							},
						],
					],
				},
			],
			colorizationKey: 'ropes',
		},
		{
			type: 'sprite',
			image: '',
			imageOverrides: [
				{
					image: 'couch_rope_arms.png',
					condition: [
						[
							{
								module: 'ropes',
								operator: '=',
								value: 'tied_arms',
							},
						],
						[
							{
								module: 'ropes',
								operator: '=',
								value: 'tied_both',
							},
						],
					],
				},
			],
			colorizationKey: 'ropes',
		},
	],
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'used 3D model',
				source: 'https://skfb.ly/6WZDu',
				copyrightHolder: 'donnichols',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
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
