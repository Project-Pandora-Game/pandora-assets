DefineRoomDeviceAsset({
	name: 'Cardboard Box',
	size: 'huge',
	colorization: {
		box: {
			name: 'Box',
			default: '#D6A577',
		},
	},
	staticAttributes: ['Storage'],
	preview: 'preview.png',
	slots: {
		character_slot_inside: {
			name: 'Inside the box',
			asset: {
				name: 'Box',
				size: 'huge',
				poseLimits: {
					bones: {
						leg_r: [[-6, 10]],
						leg_l: [[-6, 10]],
						character_rotation: 0,
					},
					legs: {
						pose: ['standing', 'kneeling'],
					},
				},
			},
		},
		character_slot_sitting_middle: {
			name: 'Sitting on the box',
			asset: {
				name: 'Box',
				size: 'huge',
				poseLimits: {
					bones: {
						leg_r: [[-60, 60]],
						leg_l: [[-60, 60]],
						character_rotation: [[-30, 30]],
					},
					legs: {
						pose: 'sitting',
					},
					view: 'front',
				},
			},
		},
	},
	modules: {
		lid: {
			type: 'typed',
			name: 'Box lid',
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
						slotProperties: {
							character_slot_inside: {
								effects: {
									blind: 9.99,
								},
							},
						},
					},
				},
			],
		},
		lock: {
			type: 'lockSlot',
			name: 'Lid lock',
			staticConfig: { slotName: 'character_slot_inside' },
			lockedProperties: {
				blockModules: ['lid'],
			},
		},
		storage: {
			type: 'storage',
			name: `Box contents`,
			staticConfig: { slotName: null },
			maxAcceptedSize: 'large',
			maxCount: 10,
		},
	},
	storageModule: 'storage',
	pivot: {
		x: 483,
		y: 630,
	},
	graphicsLayers: [
		{
			type: 'sprite',
			image: 'cardbox_back.png',
			colorizationKey: 'box',
		},
		{
			type: 'slot',
			slot: 'character_slot_inside',
			characterPosition: {
				offsetX: 0,
				offsetY: 0,
				relativeScale: 0.95,
				pivotOffset: {
					x: 0,
					y: 45,
				},
			},
			characterPositionOverrides: [
				{
					position: {
						offsetX: 0,
						offsetY: -50,
						relativeScale: 0.01,
						disablePoseOffset: true,
					},
					condition: [
						[
							{
								module: 'lid',
								operator: '=',
								value: 'closed',
							},
						],
					],
				},
				{
					position: {
						offsetX: 30,
						offsetY: 156,
						relativeScale: 0.85,
						disablePoseOffset: true,
					},
					condition: [
						[
							{
								view: 'back',
							},
							{
								legs: 'kneeling',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: 'cardbox_front.png',
			colorizationKey: 'box',
		},
		{
			type: 'sprite',
			image: 'cardbox_lid.png',
			colorizationKey: 'box',
			imageOverrides: [
				{
					image: '',
					condition: [
						[
							{
								module: 'lid',
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
			slot: 'character_slot_sitting_middle',
			characterPosition: {
				offsetX: 30,
				offsetY: -24,
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
				source: 'https://skfb.ly/6UyUp',
				copyrightHolder: 'JuanCarlos CR',
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
