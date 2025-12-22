DefineRoomDeviceAsset({
	name: 'Barrel',
	size: 'huge',
	requireFreeHandsToUseDefault: false,
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
					legs: {
						pose: ['standing', 'kneeling'],
					},
				},
			},
		},
	},
	modules: {
		lid: {
			type: 'typed',
			name: 'Barrel lid',
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
			staticConfig: { slotName: 'character_slot_inside' },
			lockedProperties: {
				blockModules: [
					'lid',
					'storage',
				],
			},
		},
		storage: {
			type: 'storage',
			name: `Barrel contents`,
			staticConfig: { slotName: null },
			maxAcceptedSize: 'large',
			maxCount: 10,
		},
	},
	storageModule: 'storage',
	pivot: {
		x: 500,
		y: 1330,
	},
	graphics: 'roomDeviceGraphics.json',
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
