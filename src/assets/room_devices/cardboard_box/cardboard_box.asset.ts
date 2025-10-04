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
	graphics: 'roomDeviceGraphics.json',
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
