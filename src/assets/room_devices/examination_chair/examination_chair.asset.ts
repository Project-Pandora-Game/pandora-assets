DefineRoomDeviceAsset({
	name: 'Examination Chair',
	size: 'huge',
	requireFreeHandsToUseDefault: false,
	colorization: {
		frame: {
			name: 'Chair frame',
			default: '#FFFFFF',
		},
		base: {
			name: 'Base cover',
			default: '#E0FFFC',
		},
		sframe: {
			name: 'Seat frame',
			default: '#FFFFFF',
		},
		seat: {
			name: 'Seat cover',
			default: '#1F5059',
		},
		rests: {
			name: 'Leg rests',
			default: '#3C3C3C',
		},
		stool: {
			name: 'Footstool',
			default: '#c89673',
		},
		belts: {
			name: 'Belts',
			default: '#FFFFFF',
		},
		buckles: {
			name: 'Buckles',
			default: '#B2D7ED',
		},
		chains: {
			name: 'Chains',
			default: '#FFFFFF',
		},
	},
	staticAttributes: ['Play_furniture'],
	preview: 'preview.png',
	slots: {
		character_slot: {
			name: 'Sitting on the chair',
			asset: {
				name: 'Examination Chair',
				size: 'huge',
				poseLimits: {
					bones: {
						character_rotation: [[-3, 3]],
					},
					legs: {
						pose: 'sitting',
					},
					arms: {
						position: ['front', 'front_above_hair'],
					},
					view: 'front',
				},
				posePresets: [
					{
						name: 'Armrests, spread fingers',
						bones: {
							arm_r: 78,
							arm_l: 78,
							elbow_r: -7,
							elbow_l: -7,
						},
						optional: {
							arms: {
								position: 'front',
								rotation: 'forward',
								fingers: 'spread',
							},
						},
					},
					{
						name: 'Armrests, fists',
						bones: {
							arm_r: 78,
							arm_l: 78,
							elbow_r: -7,
							elbow_l: -7,
						},
						optional: {
							arms: {
								position: 'front',
								rotation: 'down',
								fingers: 'fist',
							},
						},
					},
				],
			},
		},
	},
	modules: {
		height: {
			type: 'typed',
			name: 'Chair height',
			staticConfig: { slotName: 'character_slot' },
			variants: [
				{
					id: 'normal',
					name: 'Normal-low',
					default: true,
				},
				{
					id: 'medium',
					name: 'Medium',
				},
				{
					id: 'high',
					name: 'High',
				},
				{
					id: 'very',
					name: 'Very high',
				},
			],
		},
		legrests: {
			type: 'typed',
			name: 'Attached Leg Rests',
			staticConfig: { slotName: 'character_slot' },
			variants: [
				{
					id: 'yes',
					name: 'Yes',
					default: true,
					properties: {
						stateFlags: {
							provides: ['rests'],
						},
					},
				},
				{
					id: 'used',
					name: 'Yes and in use',
					properties: {
						stateFlags: {
							provides: ['rests'],
						},
						slotProperties: {
							character_slot: {
								poseLimits: {
									bones: {
										leg_l: -28,
										leg_r: -28,
										character_rotation: 0,
									},
								},
							},
						},
					},
				},
				{
					id: 'no',
					name: 'No',
				},
			],
		},
		legs: {
			type: 'typed',
			name: 'Leg Rest Belts',
			staticConfig: { slotName: 'character_slot' },
			variants: [
				{
					id: 'no',
					name: 'No',
					default: true,
				},
				{
					id: 'tied',
					name: 'Tied over the legs',
					properties: {
						blockSlotsEnterLeave: ['character_slot'],
						slotProperties: {
							character_slot: {
								poseLimits: {
									bones: {
										leg_l: -28,
										leg_r: -28,
										character_rotation: 0,
									},
								},
							},
						},
						stateFlags: {
							requires: {
								rests: 'These restraints require attached leg rests.',
							},
						},
					},
				},
			],
		},
		lock_legs: {
			type: 'lockSlot',
			name: 'Leg Rest Locks',
			staticConfig: { slotName: 'character_slot' },
			lockedProperties: {
				blockModules: ['legs'],
			},
		},
		ankles: {
			type: 'typed',
			name: 'Ankle Cuff Chains',
			staticConfig: { slotName: 'character_slot' },
			variants: [
				{
					id: 'no',
					name: 'No',
					default: true,
				},
				{
					id: 'tied',
					name: 'Tied to the chair',
					properties: {
						blockSlotsEnterLeave: ['character_slot'],
						slotProperties: {
							character_slot: {
								poseLimits: {
									bones: {
										leg_l: -28,
										leg_r: -28,
										character_rotation: 0,
									},
								},
								attributes: {
									requires: [
										'Ankle_cuffs',
									],
								},
							},
						},
						stateFlags: {
							requires: {
								rests: 'These restraints require attached leg rests.',
							},
						},
					},
				},
			],
		},
		lock_ankles: {
			type: 'lockSlot',
			name: 'Ankle Cuff Chain Locks',
			staticConfig: { slotName: 'character_slot' },
			lockedProperties: {
				blockModules: ['ankles'],
			},
		},
		body: {
			type: 'typed',
			name: 'Body Belt',
			staticConfig: { slotName: 'character_slot' },
			variants: [
				{
					id: 'no',
					name: 'No',
					default: true,
				},
				{
					id: 'tied',
					name: 'Tied over the body',
					properties: {
						blockSlotsEnterLeave: ['character_slot'],
						slotProperties: {
							character_slot: {
								poseLimits: {
									bones: {
										character_rotation: 0,
									},
								},
							},
						},
					},
				},
			],
		},
		lock_body: {
			type: 'lockSlot',
			name: 'Body Belt Locks',
			staticConfig: { slotName: 'character_slot' },
			lockedProperties: {
				blockModules: ['body'],
			},
		},
		wrists: {
			type: 'typed',
			name: 'Wrist Cuff Chains',
			staticConfig: { slotName: 'character_slot' },
			variants: [
				{
					id: 'no',
					name: 'No',
					default: true,
				},
				{
					id: 'tied',
					name: 'Tied to the arm rests',
					properties: {
						blockSlotsEnterLeave: ['character_slot'],
						slotProperties: {
							character_slot: {
								poseLimits: {
									bones: {
										character_rotation: 0,
										arm_l: 75,
										arm_r: 75,
										elbow_l: -4,
										elbow_r: -4,
									},
								},
								attributes: {
									requires: [
										'Wrist_cuffs',
									],
								},
							},
						},
					},
				},
			],
		},
		lock_wrists: {
			type: 'lockSlot',
			name: 'Wrist Cuff Chain Locks',
			staticConfig: { slotName: 'character_slot' },
			lockedProperties: {
				blockModules: ['wrists'],
			},
		},
		neck: {
			type: 'typed',
			name: 'Neck Belt',
			staticConfig: { slotName: 'character_slot' },
			variants: [
				{
					id: 'no',
					name: 'No',
					default: true,
				},
				{
					id: 'tied',
					name: 'Tied over the neck',
					properties: {
						blockSlotsEnterLeave: ['character_slot'],
						slotProperties: {
							character_slot: {
								poseLimits: {
									bones: {
										character_rotation: 0,
									},
								},
							},
						},
					},
				},
			],
		},
		lock_neck: {
			type: 'lockSlot',
			name: 'Neck Belt Lock',
			staticConfig: { slotName: 'character_slot' },
			lockedProperties: {
				blockModules: ['neck'],
			},
		},
	},
	pivot: {
		x: 500,
		y: 1166,
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
				part: 'used 3D model - bench',
				source: 'https://skfb.ly/pzDrU',
				copyrightHolder: 'Chenchanchong',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'used 3D model - belt',
				source: 'https://skfb.ly/oGRu7',
				copyrightHolder: 'C.U.V',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
		],
	},
});
