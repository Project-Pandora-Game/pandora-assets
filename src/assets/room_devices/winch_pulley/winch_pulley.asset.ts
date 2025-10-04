DefineRoomDeviceAsset({
	name: 'Winch (Pulley)',
	size: 'huge',
	preview: 'preview.png',
	colorization: {
		cable: {
			name: 'Cable',
			default: '#8E8E8E',
		},
		pulley: {
			name: 'Pulley',
			default: '#ACACAC',
		},
		carabiner: {
			name: 'Carabiner',
			default: '#ACACAC',
		},
		chains: {
			name: 'Chains',
			default: '#CECECE',
		},
		bar: {
			name: 'Bar',
			default: '#595757',
		},
	},
	staticAttributes: ['Play_furniture'],
	slots: {
		under_winch: {
			name: 'Under the Winch',
			asset: {
				name: 'Winch Pulley',
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
		position: {
			type: 'typed',
			name: 'Position',
			staticConfig: { slotName: 'under_winch' },
			variants: [
				{
					id: 'front',
					name: 'Front-facing',
					default: true,
					properties: {
						slotProperties: {
							under_winch: {
								poseLimits: {
									view: 'front',
									legs: {
										pose: ['standing', 'kneeling'],
									},
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
							under_winch: {
								poseLimits: {
									view: 'back',
									legs: {
										pose: ['standing', 'kneeling'],
									},
								},
							},
						},
					},
				},
			],
		},
		cable: {
			type: 'typed',
			name: 'Cable',
			staticConfig: { slotName: 'under_winch' },
			variants: [
				{
					id: 'retracted',
					name: 'Retracted',
					default: true,
				},
				{
					id: 'extended',
					name: 'Extended',
					properties: {
						slotProperties: {
							under_winch: {
								stateFlags: {
									provides: ['cable_extended'],
								},
							},
						},
					},
				},
			],
		},
		attachment: {
			type: 'typed',
			name: 'Attachment',
			staticConfig: { slotName: 'under_winch' },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'carabiner',
					name: 'Carabiner',
					properties: {
						slotProperties: {
							under_winch: {
								stateFlags: {
									provides: ['carabiner'],
								},
							},
						},
					},
				},
				{
					id: 'spreader_bar',
					name: 'Spreader Bar',
					properties: {
						slotProperties: {
							under_winch: {
								stateFlags: {
									provides: ['spread_bar'],
								},
							},
						},
					},
				},
			],
		},
		carabiner: {
			type: 'typed',
			name: 'Carabiner',
			staticConfig: { slotName: 'under_winch' },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'wrist_tied',
					name: 'Wrists Chained',
					properties: {
						blockSlotsEnterLeave: ['under_winch'],
						slotProperties: {
							under_winch: {
								poseLimits: {
									bones: {
										arm_l: -90,
										elbow_l: -25,
										arm_r: -90,
										elbow_r: -25,
									},
								},
								attributes: {
									requires: [
										'Wrist_cuffs',
									],
								},
								stateFlags: {
									requires: {
										carabiner: 'Wrists cannot be chained without the Carabiner attached to the Pulley',
									},
								},
								effects: {
									blockHands: true,
								},
							},
						},
					},
				},
				{
					id: 'ankles_tied',
					name: 'Ankles Chained',
					properties: {
						slotProperties: {
							under_winch: {
								poseLimits: {
									bones: {
										character_rotation: 180,
										leg_l: -2,
										leg_r: -2,
									},
									legs: {
										pose: 'standing',
									},
								},
								attributes: {
									requires: [
										'Ankle_cuffs',
									],
								},
								stateFlags: {
									requires: {
										carabiner: 'Ankles cannot be chained without the Carabiner attached to the Pulley',
									},
								},
							},
						},
					},
				},
				{
					id: 'strappado',
					name: 'Armbinder Strappado',
					properties: {
						blockSlotsEnterLeave: ['under_winch'],
						slotProperties: {
							under_winch: {
								poseLimits: {
									bones: {
										leg_l: [[-18, 10]],
										leg_r: [[-18, 10]],
									},
									legs: {
										pose: 'standing',
									},
								},
								attributes: {
									requires: [
										'Armbinder_chainable',
									],
								},
								stateFlags: {
									requires: {
										cable_extended: 'Strappado requires extended cable',
										carabiner: 'Strappado cannot be applied without an armbinder and the Carabiner attached to the Pulley',
									},
								},
							},
						},
					},
				},
			],
		},
		spreader_bar: {
			type: 'typed',
			name: 'Spreader Bar',
			staticConfig: { slotName: 'under_winch' },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'wrists_cuffed',
					name: 'Wrists Cuffed',
					properties: {
						blockSlotsEnterLeave: ['under_winch'],
						slotProperties: {
							under_winch: {
								poseLimits: {
									bones: {
										arm_l: -70,
										elbow_l: -20,
										arm_r: -70,
										elbow_r: -20,
									},
								},
								attributes: {
									requires: [
										'Wrist_cuffs',
									],
								},
								stateFlags: {
									requires: {
										spread_bar: 'Wrists cannot be cuffed without the Spreader Bar attached to the Pulley',
									},
								},
								effects: {
									blockHands: true,
								},
							},
						},
					},
				},
				{
					id: 'ankles_cuffed',
					name: 'Ankles Cuffed',
					properties: {
						slotProperties: {
							under_winch: {
								poseLimits: {
									bones: {
										character_rotation: 180,
										leg_l: -16,
										leg_r: -16,
									},
									legs: {
										pose: 'standing',
									},
								},
								attributes: {
									requires: [
										'Ankle_cuffs',
									],
								},
								stateFlags: {
									requires: {
										spread_bar: 'Ankles cannot be cuffed without the Spreader Bar attached to the Pulley',
									},
								},
							},
						},
					},
				},
			],
		},
		lock_cable: {
			type: 'lockSlot',
			name: 'Cable Lock',
			staticConfig: { slotName: 'under_winch' },
			lockedProperties: {
				blockModules: ['cable'],
			},
		},
		lock_chain: {
			type: 'lockSlot',
			name: 'Attachment Lock',
			staticConfig: { slotName: 'under_winch' },
			lockedProperties: {
				blockModules: ['attachment', 'carabiner', 'spreader_bar'],
			},
		},
	},
	graphics: 'roomDeviceGraphics.json',
	pivot: {
		x: 0,
		y: 1350,
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
