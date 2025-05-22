DefineRoomDeviceAsset({
	name: 'Stocks Wardrobe',
	size: 'huge',
	requireFreeHandsToUseDefault: false,
	colorization: {
		wardrobe: {
			name: 'Wardrobe',
			default: '#A16B4B',
		},
	},
	staticAttributes: ['Play_furniture'],
	preview: 'preview.png',
	slots: {
		character_slot: {
			name: 'Inside the wardrobe stocks',
			asset: {
				name: 'Stocks Wardrobe',
				size: 'huge',
				poseLimits: {
					bones: {
						arm_l: 72,
						arm_r: 72,
						elbow_l: 18,
						elbow_r: 18,
						leg_r: -5,
						leg_l: -5,
						character_rotation: 0,
						tiptoeing: 0,
					},
					legs: 'standing',
					arms: {
						position: 'back',
					},
				},
			},
		},
	},
	modules: {
		door: {
			type: 'typed',
			name: 'Wardrobe door',
			staticConfig: { slotName: 'character_slot' },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'open',
					name: 'Open',
				},
				{
					id: 'closed',
					name: 'Closed',
					properties: {
						blockSlotsEnterLeave: ['character_slot'],
						blockModules: ['position'],
					},
				},
				{
					id: 'closed_hatch_open',
					name: 'Closed (hatch open)',
					properties: {
						blockSlotsEnterLeave: ['character_slot'],
						blockModules: ['position'],
					},
				},
			],
		},
		position: {
			type: 'typed',
			name: 'Position',
			staticConfig: { slotName: 'character_slot' },
			variants: [
				{
					id: 'front',
					name: 'Front-facing',
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
		lock: {
			type: 'lockSlot',
			name: 'Door & hatch lock',
			staticConfig: { slotName: 'character_slot' },
			lockedProperties: {
				blockModules: ['door'],
			},
		},
		lock_stocks: {
			type: 'lockSlot',
			name: 'Stocks lock',
			staticConfig: { slotName: 'character_slot' },
			lockedProperties: {
				blockSlotsEnterLeave: ['character_slot'],
				blockModules: ['position'],
			},
		},
	},
	pivot: {
		x: 500,
		y: 1300,
	},
	graphicsLayers: [
		{
			type: 'sprite',
			image: 'wardrobe_back.png',
			colorizationKey: 'wardrobe',
		},
		{
			type: 'slot',
			slot: 'character_slot',
			characterPosition: {
				offsetX: 0,
				offsetY: -11,
			},
		},
		{
			type: 'sprite',
			image: 'wardrobe_front.png',
			colorizationKey: 'wardrobe',
		},
		{
			type: 'sprite',
			image: '',
			imageOverrides: [
				{
					image: 'wardrobe_door_open.png',
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
				{
					image: 'wardrobe_door_closed.png',
					condition: [
						[
							{
								module: 'door',
								operator: '=',
								value: 'closed',
							},
						],
					],
				},
				{
					image: 'wardrobe_door_closed_openhatch.png',
					condition: [
						[
							{
								module: 'door',
								operator: '=',
								value: 'closed_hatch_open',
							},
						],
					],
				},
			],
			colorizationKey: 'wardrobe',
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
		],
	},
});
