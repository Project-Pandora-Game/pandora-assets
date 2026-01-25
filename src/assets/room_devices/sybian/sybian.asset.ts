DefineRoomDeviceAsset({
	name: 'Sybian-type Saddle',
	size: 'huge',
	preview: 'preview.png',
	colorization: {
		base: {
			name: 'Base',
			default: '#2F2F2F',
		},
		cover: {
			name: 'Cover',
			default: '#D51B1B',
		},
		ring: {
			name: 'Ring',
			default: '#D0D0D0',
		},
		chains: {
			name: 'Chains',
			default: '#D0D0D0',
		},
		dildo: {
			name: 'Dildo',
			default: '#EBC68F',
		},
	},
	staticAttributes: ['Play_furniture'],
	slots: {
		seated: {
			name: 'Seated',
			asset: {
				name: 'Sybian-type Saddle',
				size: 'huge',
				poseLimits: {
					legs: {
						pose: 'kneeling',
					},
					bones: {
						character_rotation: 0,
						leg_l: [[-45, -30]],
						leg_r: [[-45, -30]],
					},
				},
			},
		},
	},
	modules: {
		position: {
			type: 'typed',
			name: 'Character Position',
			staticConfig: { slotName: 'seated' },
			variants: [
				{
					id: 'front',
					name: 'Front-facing',
					default: true,
					properties: {
						slotProperties: {
							seated: {
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
							seated: {
								poseLimits: {
									view: 'back',
								},
							},
						},
					},
				},
			],
		},
		vibration: {
			type: 'typed',
			name: 'Vibration',
			staticConfig: { slotName: 'seated' },
			variants: [
				{
					id: 'crotch',
					name: 'Crotch',
					default: true,
				},
				{
					id: 'dildo',
					name: 'Dildo',
					properties: {
						slotProperties: {
							seated: {
								attributes: {
									provides: [
										'Toy',
										'Vulva_item',
										'Vulva_insert',
										'Vulva_insert_deep',
										'Crotch_protruding',
									],
									requires: ['Vulva_spread', '!Vulva_cover'],
								},
							},
						},
					},
				},
			],
		},
		front_ring: {
			type: 'typed',
			name: 'Front Ring',
			staticConfig: { slotName: 'seated' },
			variants: [
				{
					id: 'hide',
					name: 'Hide',
				},
				{
					id: 'show',
					name: 'Show',
					default: true,
				},
				{
					id: 'attached',
					name: 'Attached to Collar',
					properties: {
						blockSlotsEnterLeave: ['seated'],
						slotProperties: {
							seated: {
								attributes: {
									requires: ['Collar_front_ring'],
									hides: ['Leash'],
								},
							},
						},
					},
				},
			],
		},
		lock_front: {
			type: 'lockSlot',
			name: 'Front Ring Lock',
			staticConfig: { slotName: 'seated' },
			lockedProperties: {
				blockModules: ['front_ring'],
			},
		},
		back_ring: {
			type: 'typed',
			name: 'Back Ring',
			staticConfig: { slotName: 'seated' },
			variants: [
				{
					id: 'hide',
					name: 'Hide',
				},
				{
					id: 'show',
					name: 'Show',
					default: true,
				},
				{
					id: 'attached',
					name: 'Attached to Wrist Cuffs',
					properties: {
						blockSlotsEnterLeave: ['seated'],
						slotProperties: {
							seated: {
								attributes: {
									requires: ['Wrist_cuffs'],
								},
								poseLimits: {
									bones: {
										arm_l: 80,
										arm_r: 80,
										elbow_l: 51,
										elbow_r: 51,
									},
									arms: {
										position: 'back',
										rotation: 'forward',
									},
								},
							},
						},
					},
				},
				{
					id: 'attached_armbinder',
					name: 'Attached to Armbinder',
					properties: {
						blockSlotsEnterLeave: ['seated'],
						slotProperties: {
							seated: {
								attributes: {
									requires: ['Armbinder_chainable'],
								},
							},
						},
					},
				},
			],
		},
		lock_back: {
			type: 'lockSlot',
			name: 'Back Ring lock',
			staticConfig: { slotName: 'seated' },
			lockedProperties: {
				blockModules: ['back_ring'],
			},
		},
		brand: {
			type: 'typed',
			name: 'Accessories',
			staticConfig: { slotName: 'seated' },
			variants: [
				{
					id: 'hide',
					name: 'Hide',
					default: true,
				},
				{
					id: 'show',
					name: 'Show on Back Side',
				},
			],
		},
	},
	graphics: 'roomDeviceGraphics.json',
	pivot: {
		x: 0,
		y: 0,
	},
	ownership: {
		responsibleContributor: 'Shikifet <shikifet@gmail.com>',
		credits: ['Shikifet'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Shikifet',
				editedBy: 'Shikifet',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
