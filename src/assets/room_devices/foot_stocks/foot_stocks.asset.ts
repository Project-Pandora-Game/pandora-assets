DefineRoomDeviceAsset({
	name: 'Foot Stocks',
	size: 'huge',
	requireFreeHandsToUseDefault: false,
	colorization: {
		stocks: {
			name: 'Stocks',
			default: '#5F3728',
		},
		chains: {
			name: 'Chains',
			default: '#CCCCCC',
		},
		braces: {
			name: 'Toe braces',
			default: '#CCCCCC',
		},
	},
	staticAttributes: ['Play_furniture'],
	preview: 'preview.png',
	slots: {
		character_slot: {
			name: 'Kneeling into the stocks',
			asset: {
				name: 'Foot Stocks',
				size: 'huge',
				poseLimits: {
					bones: {
						leg_l: 1,
						leg_r: 1,
						tiptoeing: 0,
						character_rotation: 0,
					},
					legs: {
						pose: 'kneeling',
					},
				},
				attributes: {
					requires: ['!Footwear'],
				},
			},
		},
	},
	modules: {
		position: {
			type: 'typed',
			name: 'Kneeling position',
			staticConfig: { slotName: 'character_slot' },
			variants: [
				{
					id: 'front',
					name: 'Front-facing',
					default: true,
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
		tie: {
			type: 'typed',
			name: 'Toe braces',
			staticConfig: { slotName: 'character_slot' },
			variants: [
				{
					id: 'no',
					name: 'No',
					default: true,
				},
				{
					id: 'yes',
					name: 'Attached',
				},
			],
		},
		lock: {
			type: 'lockSlot',
			name: 'Table lock',
			staticConfig: { slotName: 'character_slot' },
			lockedProperties: {
				blockSlotsEnterLeave: ['character_slot'],
				blockModules: ['position'],
			},
		},
	},
	pivot: {
		x: 500,
		y: 1390,
	},
	graphics: 'roomDeviceGraphics.json',
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
			{
				part: 'used 3D model',
				source: 'https://skfb.ly/oQOP6',
				copyrightHolder: 'A9908244',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
		],
	},
});
