DefineRoomDeviceAsset({
	name: 'Pet Hut',
	size: 'huge',
	colorization: {
		outside: {
			name: 'Hut (outside)',
			default: '#EFBFA5',
		},
		inside: {
			name: 'Hut (inside)',
			default: '#D19E84',
		},
		cushion: {
			name: 'Cushion',
			default: '#89BEF0',
		},
		doorFrame: {
			name: 'Door frame',
			default: '#ffffff',
		},
		doorBars: {
			name: 'Metal bars',
			default: '#ffffff',
		},
		doorRivets: {
			name: 'Rivets',
			default: '#ffffff',
		},
	},
	staticAttributes: ['Furniture'],
	preview: 'preview.png',
	slots: {
		character_slot_inside: {
			name: 'Lying inside',
			asset: {
				name: 'Pet Hut',
				size: 'huge',
				poseLimits: {
					bones: {
						leg_r: [[-60, 10]],
						leg_l: [[-30, 10]],
						character_rotation: 76,
					},
					legs: {
						pose: 'kneeling',
					},
					view: 'front',
				},
			},
		},
		character_slot_kneeling: {
			name: 'Kneeling inside',
			asset: {
				name: 'Pet Hut',
				size: 'huge',
				poseLimits: {
					bones: {
						leg_r: [[-60, 60]],
						leg_l: [[-60, 60]],
						character_rotation: [[-15, 15]],
					},
					legs: {
						pose: 'kneeling',
					},
					view: 'front',
				},
			},
		},
	},
	modules: {
		ears: {
			type: 'typed',
			name: 'Hut Ears',
			staticConfig: { slotName: null },
			variants: [
				{
					id: 'yes',
					name: 'Yes',
					default: true,
				},
				{
					id: 'no',
					name: 'No',
				},
			],
		},
		door: {
			type: 'typed',
			name: 'Hut door',
			staticConfig: { slotName: null },
			variants: [
				{
					id: 'doorNo',
					name: 'No Door',
					default: true,
				},
				{
					id: 'doorOpen',
					name: 'Open',
				},
				{
					id: 'doorClosed',
					name: 'Closed',
					properties: {
						blockSlotsEnterLeave: [
							'character_slot_kneeling',
							'character_slot_inside',
						],
					},

				},
			],
		},
		anchor_rear: {
			type: 'typed',
			name: 'Lying spot',
			staticConfig: { slotName: 'character_slot_inside' },
			variants: [
				{
					id: 'free_rear',
					name: 'Free',
					default: true,
				},
				{
					id: 'tied_rear',
					name: 'Anchored to the hut',
					properties: {
						blockSlotsEnterLeave: ['character_slot_inside'],
					},
				},
			],
		},
		lock_rear: {
			type: 'lockSlot',
			name: 'Lying spot anchor lock',
			staticConfig: { slotName: 'character_slot_inside' },
			lockedProperties: {
				blockModules: ['anchor_rear'],
			},
		},
		anchor_front: {
			type: 'typed',
			name: 'Kneeling spot',
			staticConfig: { slotName: 'character_slot_kneeling' },
			variants: [
				{
					id: 'free_front',
					name: 'Free',
					default: true,
				},
				{
					id: 'tied_front',
					name: 'Anchored to the hut',
					properties: {
						blockSlotsEnterLeave: ['character_slot_kneeling'],
					},
				},
			],
		},
		lock_front: {
			type: 'lockSlot',
			name: 'Kneeling spot anchor lock',
			staticConfig: { slotName: 'character_slot_kneeling' },
			lockedProperties: {
				blockModules: ['anchor_front'],
			},
		},
		storage: {
			type: 'storage',
			name: `Hut's floor`,
			staticConfig: { slotName: null },
			maxAcceptedSize: 'large',
			maxCount: 4,
		},
	},
	storageModule: 'storage',
	pivot: {
		x: 580,
		y: 1010,
	},
	graphics: 'roomDeviceGraphics.json',
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia', 'Sandrine'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'used 3D model',
				source: 'https://skfb.ly/oH7N7',
				copyrightHolder: 'newmag2207',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'Door',
				source: 'Self-Made',
				copyrightHolder: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
