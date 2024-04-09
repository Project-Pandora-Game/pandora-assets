DefineRoomDeviceAsset({
	name: 'Large Cage',
	size: 'huge',
	colorization: {
		cage: {
			name: 'Cage',
			default: '#ffffff',
		},
		cage_door: {
			name: 'Cage door',
			default: '#ffffff',
		},
	},
	staticAttributes: ['Play_furniture'],
	preview: 'cage_preview.png',
	slots: {
		character_slot: {
			name: 'Inside the cage',
			asset: {
				name: 'Large Cage',
				size: 'huge',
				poseLimits: {
					bones: {
						leg_r: [[-30, 10]],
						leg_l: [[-30, 10]],
						character_rotation: 0,
					},
					legs: 'kneeling',
				},
			},
		},
	},
	modules: {
		door: {
			type: 'typed',
			name: 'Door',
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
					},
				},
			],
		},
		lock: {
			type: 'lockSlot',
			name: 'Door lock',
			lockedProperties: {
				blockModules: ['door'],
			},
		},
		storage: {
			type: 'storage',
			name: `Cage's floor`,
			maxAcceptedSize: 'large',
			maxCount: 5,
		},
	},
	pivot: {
		x: 950,
		y: 1330,
	},
	graphicsLayers: [
		{
			type: 'sprite',
			image: 'small_cage.png',
			colorizationKey: 'cage',
		},
		{
			type: 'slot',
			slot: 'character_slot',
			characterPosition: {
				offsetX: 0,
				offsetY: -140,
			},
		},
		{
			type: 'sprite',
			image: 'small_cage_door.png',
			imageOverrides: [
				{
					image: 'small_cage_dooropen.png',
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
			colorizationKey: 'cage_door',
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
				source: 'https://skfb.ly/o7vwW',
				copyrightHolder: 'Thunder',
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
