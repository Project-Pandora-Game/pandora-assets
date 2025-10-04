DefineRoomDeviceAsset({
	name: 'Hanging Cage',
	size: 'huge',
	requireFreeHandsToUseDefault: false,
	colorization: {
		cage: {
			name: 'Cage',
			default: '#ffffff',
		},
		cage_door: {
			name: 'Cage door',
			default: '#ffffff',
		},
		chain: {
			name: 'Chain',
			default: '#78665C',
		},
	},
	staticAttributes: ['Play_furniture'],
	preview: 'cage_preview.png',
	slots: {
		character_slot: {
			name: 'Inside the cage',
			asset: {
				name: 'Hanging Cage',
				size: 'huge',
				poseLimits: {
					bones: {
						leg_r: [[-20, 10]],
						leg_l: [[-20, 10]],
						character_rotation: [[-8, 8]],
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
		door: {
			type: 'typed',
			name: 'Door',
			staticConfig: { slotName: null },
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
						blockSlotsEnterLeave: [
							'character_slot',
						],
					},
				},
			],
		},
		hanging: {
			type: 'typed',
			name: 'Hanging height',
			staticConfig: { slotName: null },
			variants: [
				{
					id: 'low',
					name: 'Low',
					default: true,
				},
				{
					id: 'high',
					name: 'High',
				},
			],
		},
		lock_door: {
			type: 'lockSlot',
			name: 'Door lock',
			staticConfig: { slotName: 'character_slot' },
			lockedProperties: {
				blockModules: ['door'],
			},
		},
		lock_chain: {
			type: 'lockSlot',
			name: 'Chain height lock',
			staticConfig: { slotName: 'character_slot' },
			lockedProperties: {
				blockModules: ['hanging'],
			},
		},
		storage: {
			type: 'storage',
			name: `Cage's floor`,
			staticConfig: { slotName: null },
			maxAcceptedSize: 'medium',
			maxCount: 5,
		},
	},
	storageModule: 'storage',
	pivot: {
		x: 380,
		y: 900,
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
