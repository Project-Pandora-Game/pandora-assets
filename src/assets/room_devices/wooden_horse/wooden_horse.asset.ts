DefineRoomDeviceAsset({
	name: 'Wooden Horse',
	size: 'huge',
	colorization: {
		frame: {
			name: 'Frame',
			default: '#C88A65',
		},
		top: {
			name: 'Top',
			default: '#A9653C',
		},
		parts: {
			name: 'Metal parts',
			default: '#AAAAAA',
		},
		chains: {
			name: 'Chains',
			default: '#FFFFFF',
		},
	},
	slots: {
		character_slot: {
			name: 'Wooden horse',
			asset: {
				name: 'Wooden horse',
				size: 'huge',
			},
		},
	},
	modules: {
		position: {
			type: 'typed',
			name: 'Position',
			variants: [
				{
					id: 'none',
					name: 'Standing behind',
					default: true,
					properties: {
						slotProperties: {
							character_slot: {
								poseLimits: {
									bones: {
										leg_r: [[-36, 10]],
										leg_l: [[-36, 10]],
										character_rotation: 0,
									},
									legs: ['standing', 'kneeling'],
								},
							},
						},
					},
				},
				{
					id: 'sitting',
					name: 'Sitting on top',
					properties: {
						slotProperties: {
							character_slot: {
								poseLimits: {
									bones: {
										leg_r: -30,
										leg_l: -29,
										character_rotation: 0,
									},
									legs: ['standing', 'kneeling'],
								},
								attributes: {
									provides: ['Vagina_cover', 'Anus_cover'],
									requires: ['!Vagina_protruding', '!Anus_protruding'],
								},
							},
						},
					},
				},
				{
					id: 'chained_feet',
					name: 'Tied feet',
					properties: {
						blockSlotsEnterLeave: ['character_slot'],
						slotProperties: {
							character_slot: {
								poseLimits: {
									bones: {
										leg_r: -30,
										leg_l: -29,
										character_rotation: 0,
									},
									legs: 'standing',
								},
								attributes: {
									provides: ['Vagina_cover', 'Anus_cover'],
									requires: [
										'!Vagina_protruding',
										'!Anus_protruding',
										'Ankle_cuffs',
									],
								},
							},
						},
					},
				},
				{
					id: 'chained_collar',
					name: 'Tied collar',
					properties: {
						blockSlotsEnterLeave: ['character_slot'],
						slotProperties: {
							character_slot: {
								poseLimits: {
									bones: {
										leg_r: -30,
										leg_l: -29,
										character_rotation: 0,
									},
									legs: ['standing', 'kneeling'],
								},
								attributes: {
									provides: ['Vagina_cover', 'Anus_cover'],
									requires: [
										'!Vagina_protruding',
										'!Anus_protruding',
										'Collar_front_ring',
									],
								},
							},
						},
					},
				},
				{
					id: 'chained_both',
					name: 'Tied feet and collar',
					properties: {
						blockSlotsEnterLeave: ['character_slot'],
						slotProperties: {
							character_slot: {
								poseLimits: {
									bones: {
										leg_r: -30,
										leg_l: -29,
										character_rotation: 0,
									},
									legs: 'standing',
								},
								attributes: {
									provides: ['Vagina_cover', 'Anus_cover'],
									requires: [
										'!Vagina_protruding',
										'!Anus_protruding',
										'Ankle_cuffs',
										'Collar_front_ring',
									],
								},
							},
						},
					},
				},
				// IDEA: add a new state which needs a new LegsPoseSchema "laying_on_stomach"
				// This pose would show the charcter reverse mounting the horse with the arms hanging down on the other side, hiding most of the upper body
			],
		},
		lock: {
			type: 'lockSlot',
			name: 'Chain locks',
			lockedProperties: {
				blockModules: ['position'],
			},
		},
	},
	pivot: {
		x: 542,
		y: 1308,
	},
	graphicsLayers: [
		{
			type: 'sprite',
			image: 'horse_top_unused.png',
			colorizationKey: 'top',
			imageOverrides: [
				{
					image: '',
					condition: [
						[
							{
								module: 'position',
								operator: '=',
								value: 'none',
							},
						],
					],
				},
			],
		},
		{
			type: 'slot',
			slot: 'character_slot',
			characterPosition: {
				offsetX: 30,
				offsetY: -108,
				relativeScale: 0.92,
			},
			characterPositionOverrides: [
				{
					position: {
						offsetX: 1,
						offsetY: 38,
						pivotOffset: {
							x: 3,
							y: 142,
						},
						disablePoseOffset: true,
					},
					condition: [
						[
							{
								module: 'position',
								operator: '!=',
								value: 'none',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: 'horse_top_unused.png',
			colorizationKey: 'top',
			imageOverrides: [
				{
					image: '',
					condition: [
						[
							{
								module: 'position',
								operator: '!=',
								value: 'none',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: 'horse_top_used.png',
			colorizationKey: 'top',
		},
		{
			type: 'sprite',
			image: 'horse_frame.png',
			colorizationKey: 'frame',
		},
		{
			type: 'sprite',
			image: 'horse_metal.png',
			colorizationKey: 'parts',
		},
		{
			type: 'sprite',
			image: 'horse_chain_feet.png',
			colorizationKey: 'chains',
			imageOverrides: [
				{
					image: '',
					condition: [
						[
							{
								module: 'position',
								operator: '!=',
								value: 'chained_feet',
							},
							{
								module: 'position',
								operator: '!=',
								value: 'chained_both',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: 'horse_chain_collar.png',
			colorizationKey: 'chains',
			imageOverrides: [
				{
					image: '',
					condition: [
						[
							{
								module: 'position',
								operator: '!=',
								value: 'chained_collar',
							},
							{
								module: 'position',
								operator: '!=',
								value: 'chained_both',
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
			{
				part: 'used 3D model - base',
				source: 'https://skfb.ly/o9LT8',
				copyrightHolder: 'Roman Berezyak',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'used 3D model - top',
				source: 'https://skfb.ly/6XCRD',
				copyrightHolder: 'donnichols',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
		],
	},
});
