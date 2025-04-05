DefineRoomDeviceAsset({
	name: 'Cage Bench',
	size: 'huge',
	requireFreeHandsToUseDefault: false,
	colorization: {
		cage: {
			name: 'Cage Bench',
			default: '#C9CBCA',
		},
		cushion: {
			name: 'Bench cushion',
			default: '#800020',
		},
		curtain: {
			name: 'Curtain cover',
			default: '#7C0418',
		},
	},
	staticAttributes: ['Play_furniture', 'Furniture'],
	preview: 'cage_bench_preview.png',
	slots: {
		character_slot_inside: {
			name: 'Lying inside',
			asset: {
				name: 'Cage Bench',
				size: 'huge',
				poseLimits: {
					options: [
						{
							bones: {
								arm_l: [[74, 82]],
								arm_r: [[74, 82]],
								elbow_l: [[22, 109]],
								elbow_r: [[22, 109]],
							},
						},
						{
							bones: {
								arm_l: [[104, 110]],
								arm_r: [[104, 110]],
								elbow_l: [[-15, -1]],
								elbow_r: [[-15, -1]],
							},

						},
						{
							bones: {
								arm_l: [[87, 90]],
								arm_r: [[87, 90]],
								elbow_l: [[0, 168]],
								elbow_r: [[0, 168]],
							},

						},
						{
							bones: {
								arm_r: -90,
								arm_l: -90,
								elbow_r: -150,
								elbow_l: -150,
							},

						},
						{
							bones: {
								arm_r: 100,
								arm_l: 100,
								elbow_r: 130,
								elbow_l: 130,
							},
						},
					],
					bones: {
						leg_r: [[-10, 10]],
						leg_l: [[-10, 10]],
						character_rotation: 90,
					},
					legs: 'kneeling',
					view: 'front',
				},
			},
		},
		character_slot_sitting_left: {
			name: 'Sitting on the left',
			asset: {
				name: 'Cage Bench',
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
				name: 'Cage Bench',
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
				name: 'Cage Bench',
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
		door: {
			type: 'typed',
			name: 'Door',
			staticConfig: { slotName: 'character_slot_inside' },
			variants: [
				{
					id: 'open',
					name: 'Open',
					default: true,
				},
				{
					id: 'closed',
					name: 'Closed',
					properties: {
						blockSlotsEnterLeave: ['character_slot_inside'],
					},
				},
			],
		},
		curtain: {
			type: 'typed',
			name: 'Curtain cover',
			staticConfig: { slotName: 'character_slot_inside' },
			variants: [
				{
					id: 'open',
					name: 'Removed',
					default: true,
				},
				{
					id: 'closed',
					name: 'Closed',
					properties: {
						slotProperties: {
							character_slot_inside: {
								effects: {
									blind: 9.6,
								},
							},
						},
					},
				},
			],
		},
		lock: {
			type: 'lockSlot',
			name: 'Door lock',
			staticConfig: { slotName: 'character_slot_inside' },
			lockedProperties: {
				blockModules: ['door'],
			},
		},
		storage: {
			type: 'storage',
			name: `Cage's floor`,
			staticConfig: { slotName: null },
			maxAcceptedSize: 'large',
			maxCount: 3,
		},
	},
	pivot: {
		x: 529,
		y: 680,
	},
	graphicsLayers: [
		{
			type: 'sprite',
			image: 'bench_open.png',
			colorizationKey: 'cage',
		},
		{
			type: 'sprite',
			image: 'bench_closed.png',
			imageOverrides: [
				{
					image: '',
					condition: [
						[
							{
								module: 'door',
								operator: '=',
								value: 'open',
							},
						],
					],
				},
			],
			colorizationKey: 'cage',
		},
		{
			type: 'slot',
			slot: 'character_slot_inside',
			characterPosition: {
				offsetX: 0,
				offsetY: -100,
				disablePoseOffset: true,
				relativeScale: 0.96,
				pivotOffset: {
					x: 0,
					y: -690,
				},
			},
		},
		{
			type: 'sprite',
			image: 'bench_overlay.png',
			colorizationKey: 'cage',
		},
		{
			type: 'sprite',
			image: 'bench_cushion.png',
			colorizationKey: 'cushion',
		},
		{
			type: 'sprite',
			image: 'bench_curtain.png',
			colorizationKey: 'curtain',
			imageOverrides: [
				{
					image: '',
					condition: [
						[
							{
								module: 'curtain',
								operator: '=',
								value: 'open',
							},
						],
					],
				},
			],
		},
		{
			type: 'slot',
			slot: 'character_slot_sitting_left',
			characterPosition: {
				offsetX: -280,
				offsetY: 64,
				relativeScale: 1.08,
			},
		},
		{
			type: 'slot',
			slot: 'character_slot_sitting_middle',
			characterPosition: {
				offsetX: 0,
				offsetY: 64,
				relativeScale: 1.08,
			},
		},
		{
			type: 'slot',
			slot: 'character_slot_sitting_right',
			characterPosition: {
				offsetX: 280,
				offsetY: 64,
				relativeScale: 1.08,
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
				part: 'used 3D model',
				source: 'https://skfb.ly/oLr8J',
				copyrightHolder: 'Samuel Francis Johnson (Oneironauticus)',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'curtain',
				source: 'https://www.flickr.com/photos/tusnelda/4338079314/',
				copyrightHolder: 'storebukkebruse',
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
