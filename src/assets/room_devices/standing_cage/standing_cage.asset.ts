DefineRoomDeviceAsset({
	name: 'Standing Cage',
	size: 'huge',
	colorization: {
		cage: {
			name: 'Cage',
			default: '#777777',
		},
	},
	staticAttributes: ['Play_furniture'],
	preview: 'cage_preview.png',
	slots: {
		character_slot: {
			name: 'Inside the cage',
			asset: {
				name: 'Standing Cage',
				size: 'huge',
				poseLimits: {
					bones: {
						leg_r: [[-7, 10]],
						leg_l: [[-7, 10]],
						character_rotation: 0,
					},
					legs: 'standing',
				},
			},
		},
	},
	modules: {
		door: {
			type: 'typed',
			name: 'Door',
			staticConfig: { slotName: 'character_slot' },
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
						blockSlotsEnterLeave: ['character_slot'],
						blockModules: ['position'],
					},
				},
			],
		},
		position: {
			type: 'typed',
			name: 'Standing position',
			staticConfig: { slotName: 'character_slot' },
			variants: [
				{
					id: 'front',
					name: 'Front-facing enforced',
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
					name: 'Back-facing enforced',
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
				{
					id: 'both',
					name: 'Character can turn freely',
					default: true,
				},
			],
		},
		lock: {
			type: 'lockSlot',
			name: 'Door lock',
			staticConfig: { slotName: 'character_slot' },
			lockedProperties: {
				blockModules: ['door'],
			},
		},
	},
	pivot: {
		x: 394,
		y: 1265,
	},
	graphicsLayers: [
		{
			type: 'sprite',
			image: 'cage_closed_back.png',
			imageOverrides: [
				{
					image: 'cage_opened_back.png',
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
			slot: 'character_slot',
			characterPosition: {
				offsetX: 0,
				offsetY: -10,
			},
		},
		{
			type: 'sprite',
			image: 'cage_closed_front.png',
			imageOverrides: [
				{
					image: 'cage_opened_front.png',
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
	],
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['paparebbe', 'ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Private',
				copyrightHolder: 'paparebbe',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
