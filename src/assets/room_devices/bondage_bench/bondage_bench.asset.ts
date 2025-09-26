DefineRoomDeviceAsset({
	name: 'Bondage Bench',
	size: 'huge',
	requireFreeHandsToUseDefault: false,
	colorization: {
		bench: {
			name: 'Bench',
			default: '#8392C5',
		},
		belts: {
			name: 'Belts',
			default: '#484848',
		},
		buckles: {
			name: 'Buckles',
			default: '#CFCFCF',
		},
		ring: {
			name: 'Ring',
			default: '#BDB8B8',
		},
	},
	staticAttributes: ['Play_furniture'],
	preview: 'preview.png',
	slots: {
		character_slot: {
			name: 'Lying on the bench',
			asset: {
				name: 'Bondage Bench',
				size: 'huge',
				poseLimits: {
					legs: {
						pose: 'standing',
					},
				},
				graphics: 'bench.json',
			},
		},
	},
	modules: {
		position: {
			type: 'typed',
			name: 'Character Position',
			staticConfig: { slotName: 'character_slot' },
			variants: [
				{
					id: 'up',
					name: 'Up-facing',
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
					id: 'down',
					name: 'Down-facing',
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
		legs: {
			type: 'typed',
			name: 'Leg Belts',
			staticConfig: { slotName: 'character_slot' },
			variants: [
				{
					id: 'no',
					name: 'No',
					default: true,
				},
				{
					id: 'tied',
					name: 'Tied over the legs',
					properties: {
						blockSlotsEnterLeave: ['character_slot'],
						blockModules: ['position'],
						slotProperties: {
							character_slot: {
								poseLimits: {
									bones: {
										leg_l: [[-2, 3]],
										leg_r: [[-2, 3]],
										character_rotation: 0,
									},
								},
							},
						},
					},
				},
			],
		},
		lock_legs: {
			type: 'lockSlot',
			name: 'Leg Belt Locks',
			staticConfig: { slotName: 'character_slot' },
			lockedProperties: {
				blockModules: ['legs'],
			},
		},
		body: {
			type: 'typed',
			name: 'Body Belts',
			staticConfig: { slotName: 'character_slot' },
			variants: [
				{
					id: 'no',
					name: 'No',
					default: true,
				},
				{
					id: 'tied',
					name: 'Tied over the body and arms',
					properties: {
						blockSlotsEnterLeave: ['character_slot'],
						blockModules: ['position'],
						slotProperties: {
							character_slot: {
								poseLimits: {
									bones: {
										arm_l: 85,
										arm_r: 85,
										elbow_l: -2,
										elbow_r: -2,
										character_rotation: 0,
									},
									options: [
										{
											view: 'front',
											arms: {
												position: 'back',
											},
										},
										{
											view: 'back',
											arms: {
												position: 'front',
											},
										},
									],
								},
							},
						},
					},
				},
				{
					id: 'tiedarmsfree',
					name: 'Tied over the body with the arms free',
					properties: {
						blockSlotsEnterLeave: ['character_slot'],
						blockModules: ['position'],
						slotProperties: {
							character_slot: {
								poseLimits: {
									bones: {
										character_rotation: 0,
									},
									options: [
										{
											view: 'front',
											arms: {
												position: 'front_above_hair',
											},
										},
										{
											view: 'back',
											arms: {
												position: 'back_below_hair',
											},
										},
									],
								},
							},
						},
					},
				},
			],
		},
		lock_body: {
			type: 'lockSlot',
			name: 'Body Belt Locks',
			staticConfig: { slotName: 'character_slot' },
			lockedProperties: {
				blockModules: ['body'],
			},
		},
		neck: {
			type: 'typed',
			name: 'Neck Belt',
			staticConfig: { slotName: 'character_slot' },
			variants: [
				{
					id: 'no',
					name: 'No',
					default: true,
				},
				{
					id: 'tied',
					name: 'Tied over the neck',
					properties: {
						blockSlotsEnterLeave: ['character_slot'],
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
			],
		},
		lock_neck: {
			type: 'lockSlot',
			name: 'Neck Belt Lock',
			staticConfig: { slotName: 'character_slot' },
			lockedProperties: {
				blockModules: ['neck'],
			},
		},
		harness: {
			type: 'typed',
			name: 'Head Harness',
			staticConfig: { slotName: 'character_slot' },
			variants: [
				{
					id: 'no',
					name: 'No',
					default: true,
				},
				{
					id: 'attached',
					name: 'Attached',
					properties: {
						blockSlotsEnterLeave: ['character_slot'],
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
			],
		},
		lock_harness: {
			type: 'lockSlot',
			name: 'Head Harness Lock',
			staticConfig: { slotName: 'character_slot' },
			lockedProperties: {
				blockModules: ['harness'],
			},
		},
		hole: {
			type: 'typed',
			name: 'Bench Hole',
			staticConfig: { slotName: 'character_slot' },
			variants: [
				{
					id: 'no',
					name: 'No',
				},
				{
					id: 'yes',
					name: 'Yes',
					default: true,
				},
			],
		},
	},
	pivot: {
		x: 500,
		y: 1390,
	},
	graphicsLayers: [
		{
			type: 'sprite',
			image: 'bench.png',
			colorizationKey: 'bench',
		},
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'bench',
			imageOverrides: [
				{
					image: 'bench_cover.png',
					condition: [
						[
							{
								module: 'hole',
								operator: '=',
								value: 'no',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: 'bench_ring_background.png',
			colorizationKey: 'ring',
		},
		{
			type: 'sprite',
			image: 'bench_ring_background_strap.png',
			colorizationKey: 'belts',
		},
		{
			type: 'slot',
			slot: 'character_slot',
			characterPosition: {
				offsetX: 0,
				offsetY: -100,
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
				part: 'images',
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only-v1-or-later',
			},
			{
				part: 'used 3D model - bench',
				source: 'https://skfb.ly/o888F',
				copyrightHolder: 'Sousinho',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'used 3D model - belt',
				source: 'https://skfb.ly/oGRu7',
				copyrightHolder: 'C.U.V',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
		],
	},
});
