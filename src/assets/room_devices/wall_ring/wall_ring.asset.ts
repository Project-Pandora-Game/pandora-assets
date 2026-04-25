DefineRoomDeviceAsset({
	name: 'Wall-mounted Ring',
	size: 'huge',
	colorization: {
		plate: {
			name: 'Plate',
			default: '#ECECEC',
		},
		screws: {
			name: 'Screws',
			default: '#E1CD98',
		},
		nub: {
			name: 'Nub',
			default: '#FFEBC4',
		},
		ring: {
			name: 'Ring',
			default: '#E0E0E0',
		},
		chain: {
			name: 'Chain',
			default: '#FFFFFF',
		},
	},
	staticAttributes: ['Play_furniture', 'Wall'],
	preview: 'preview.png',
	slots: {
		character_slot: {
			name: 'Under the Ring',
			asset: {
				name: 'Wall-mounted Ring',
				size: 'huge',
				poseLimits: {
					legs: {
						pose: ['standing', 'kneeling'],
					},
				},
			},
		},
	},
	modules: {
		chain: {
			type: 'typed',
			name: 'Collar chain',
			staticConfig: { slotName: 'character_slot' },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'tied_long',
					name: 'Long chain (Collar)',
					properties: {
						blockSlotsEnterLeave: ['character_slot'],
						slotProperties: {
							character_slot: {
								poseLimits: {
									bones: {
										character_rotation: 0,
										leg_r: [[-30, 10]],
										leg_l: [[-30, 10]],
									},
								},
								attributes: {
									requires: ['Collar_front_ring'],
									hides: ['Leash'],
								},
							},
						},
						stateFlags: {
							provides: ['chain'],
						},
					},
				},
				{
					id: 'tied_short',
					name: 'Short chain (Collar)',
					properties: {
						blockSlotsEnterLeave: ['character_slot'],
						slotProperties: {
							character_slot: {
								poseLimits: {
									bones: {
										character_rotation: 0,
										leg_r: [[-30, 10]],
										leg_l: [[-30, 10]],
									},
									legs: {
										pose: 'standing',
									},
								},
								attributes: {
									requires: ['Collar_front_ring'],
									hides: ['Leash'],
								},
							},
						},
						stateFlags: {
							provides: ['chain'],
						},
					},
				},
				{
					id: 'tied_wrists',
					name: 'Wrists Chained',
					properties: {
						blockSlotsEnterLeave: ['character_slot'],
						slotProperties: {
							character_slot: {
								poseLimits: {
									bones: {
										character_rotation: 0,
									},
									legs: {
										pose: 'standing',
									},
									options: [
										{
											bones: {
												arm_l: -90,
												elbow_l: -25,
												arm_r: -90,
												elbow_r: -25,
											},
										},
										{
											bones: {
												arm_r: -84,
												arm_l: -84,
												elbow_r: -30,
												elbow_l: -30,
											},
										},
									],
								},
								attributes: {
									requires: [
										'Wrist_cuffs_chainable',
									],
								},
								effects: {
									blockHands: true,
								},
							},
						},
						stateFlags: {
							provides: ['chain'],
						},
					},
				},
				{
					id: 'strappado',
					name: 'Armbinder Strappado',
					properties: {
						blockSlotsEnterLeave: ['character_slot'],
						slotProperties: {
							character_slot: {
								poseLimits: {
									bones: {
										character_rotation: 0,
										leg_l: [[-18, 10]],
										leg_r: [[-18, 10]],
									},
									legs: {
										pose: 'standing',
									},
									view: 'front',
								},
								attributes: {
									requires: [
										'Armbinder_chainable',
									],
								},
							},
						},
						stateFlags: {
							provides: ['chain'],
						},
					},
				},
			],
		},
		lock: {
			type: 'lockSlot',
			name: 'Lock for chain',
			staticConfig: { slotName: 'character_slot' },
			lockedProperties: {
				blockModules: ['chain'],
				stateFlags: {
					requires: {
						chain: 'Locking requires a chain to lock.',
					},
				},
			},
		},
	},
	pivot: {
		x: 500,
		y: 1230,
	},
	graphics: 'roomDeviceGraphics.json',
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
