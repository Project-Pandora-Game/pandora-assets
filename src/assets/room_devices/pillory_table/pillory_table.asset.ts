DefineRoomDeviceAsset({
	name: 'Pillory Table',
	size: 'huge',
	requireFreeHandsToUseDefault: false,
	colorization: {
		table: {
			name: 'Table',
			default: '#5F3728',
		},
	},
	staticAttributes: ['Play_furniture'],
	preview: 'preview.png',
	slots: {
		character_slot: {
			name: 'Kneeling between the table halves',
			asset: {
				name: 'Pillory Table',
				size: 'huge',
				poseLimits: {
					bones: {
						arm_r: [[0, 170]],
						arm_l: [[0, 170]],
						character_rotation: 0,
					},
					legs: {
						pose: 'kneeling',
					},
				},
			},
		},
	},
	modules: {
		position: {
			type: 'typed',
			name: 'Kneeling position',
			staticConfig: { slotName: 'character_slot' },
			variants: [
				{
					id: 'front',
					name: 'Front-facing',
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
					name: 'Back-facing',
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
		tie: {
			type: 'typed',
			name: 'Bound variations',
			staticConfig: { slotName: 'character_slot' },
			variants: [
				{
					id: 'head',
					name: 'Head only',
					default: true,
				},
				{
					id: 'both',
					name: 'Head & arms',
					properties: {
						blockModules: ['position'],
						slotProperties: {
							character_slot: {
								poseLimits: {
									bones: {
										arm_r: 35,
										arm_l: 35,
										elbow_r: -120,
										elbow_l: -120,
									},
								},
							},
						},
					},
				},
			],
		},
		lock: {
			type: 'lockSlot',
			name: 'Table lock',
			staticConfig: { slotName: 'character_slot' },
			lockedProperties: {
				blockSlotsEnterLeave: ['character_slot'],
				blockModules: ['tie'],
			},
		},
	},
	pivot: {
		x: 500,
		y: 690,
	},
	graphicsLayers: [
		{
			type: 'sprite',
			image: 'pillory_table_back.png',
			colorizationKey: 'table',
		},
		{
			type: 'slot',
			slot: 'character_slot',
			characterPosition: {
				offsetX: 0,
				offsetY: 390,
				disablePoseOffset: true,
			},
		},
		{
			type: 'sprite',
			image: 'pillory_table_front.png',
			colorizationKey: 'table',
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
				part: 'used 3D model',
				source: 'https://skfb.ly/6UtGB',
				copyrightHolder: 'Berk Gedik',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
		],
	},
});
