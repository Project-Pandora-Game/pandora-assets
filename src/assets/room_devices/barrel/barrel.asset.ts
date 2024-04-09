DefineRoomDeviceAsset({
	name: 'Barrel',
	size: 'huge',
	colorization: {
		barrel: {
			name: 'Barrel',
			default: '#965441',
		},
	},
	staticAttributes: ['Storage'],
	preview: 'barrel_preview.png',
	slots: {
		character_slot_inside: {
			name: 'Inside the barrel',
			asset: {
				name: 'Barrel',
				size: 'huge',
				poseLimits: {
					bones: {
						leg_r: [[-10, 10]],
						leg_l: [[-10, 10]],
						character_rotation: 0,
					},
					legs: ['standing', 'kneeling'],
				},
				posePresets: [
					{
						name: 'Holding hands up in the barrel',
						bones: {
							arm_r: 14,
							arm_l: 14,
							elbow_r: -119,
							elbow_l: -119,
						},
						optional: {
							arms: {
								position: 'front',
								rotation: 'up',
								fingers: 'fist',
							},
						},
					},
				],
			},
		},
	},
	modules: {
		lid: {
			type: 'typed',
			name: 'Barrel lid',
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
									blind: 9.85,
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
			lockedProperties: {
				blockModules: ['lid'],
			},
		},
		storage: {
			type: 'storage',
			name: `Barrel contents`,
			maxAcceptedSize: 'large',
			maxCount: 10,
		},
	},
	pivot: {
		x: 500,
		y: 1330,
	},
	graphicsLayers: [
		{
			type: 'sprite',
			image: 'barrel-background.png',
			colorizationKey: 'barrel',
		},
		{
			type: 'slot',
			slot: 'character_slot_inside',
			characterPosition: {
				offsetX: 0,
				offsetY: 0,
				relativeScale: 0.96,
				pivotOffset: {
					x: 0,
					y: 4,
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
			],
		},
		{
			type: 'sprite',
			image: 'barrel-lid.png',
			colorizationKey: 'barrel',
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
			type: 'sprite',
			image: 'barrel.png',
			colorizationKey: 'barrel',
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
				source: 'https://skfb.ly/6XM6K',
				copyrightHolder: 'Boris Korotkov',
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
