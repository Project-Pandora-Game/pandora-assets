DefineAsset({
	name: 'Arm Jute Ropes',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		rope: {
			name: 'Rope',
			default: '#D7AC4D',
		},
	},
	// size:260, y:375, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Restraint_arms',
		],
	},
	modules: {
		arms: {
			type: 'typed',
			name: 'Arms',
			variants: [
				{
					id: 'hands_front',
					name: 'Wrists Front',
					properties: {
						poseLimits: {
							arms: {
								position: 'front',
								rotation: 'forward',
							},
							bones: {
								arm_r: 90,
								arm_l: 90,
								elbow_r: 20,
								elbow_l: 20,
							},
						},
					},
				},
				{
					id: 'arms_high',
					name: 'Wrists High',
					properties: {
						poseLimits: {
							arms: {
								position: 'back',
								rotation: 'forward',
							},
							bones: {
								arm_r: -90,
								arm_l: -90,
								elbow_r: -150,
								elbow_l: -150,
							},
							armsOrder: {
								upper: 'right',
							},
						},
						stateFlags: {
							provides: [
								'uncuffed_hands',
								'hogtie_anchor_point',
							],
						},
					},
				},
				{
					id: 'hands_back',
					name: 'Wrists Back',
					default: true,
					properties: {
						poseLimits: {
							arms: {
								position: 'back',
								rotation: 'forward',
							},
							bones: {
								arm_r: 90,
								arm_l: 90,
								elbow_r: 35,
								elbow_l: 35,
							},
						},
						stateFlags: {
							provides: [
								'hogtie_anchor_point',
							],
						},
					},
				},
				{
					id: 'wrists_low',
					name: 'Box Low',
					properties: {
						attributes: {
							provides: [
								'Back_knot_anchor_point',
							],
						},
						poseLimits: {
							arms: {
								position: 'back',
								rotation: 'forward',
							},
							bones: {
								arm_r: 90,
								arm_l: 90,
								elbow_r: 35,
								elbow_l: 35,
							},
							armsOrder: {
								upper: 'right',
							},
						},
						stateFlags: {
							provides: [
								'hogtie_anchor_point',
								'uncuffed_hands',
							],
						},
					},
				},
				{
					id: 'wrists_normal',
					name: 'Box Normal',
					properties: {
						attributes: {
							provides: [
								'Back_knot_anchor_point',
							],
						},
						poseLimits: {
							arms: {
								position: 'back',
								rotation: 'forward',
							},
							bones: {
								arm_r: 90,
								arm_l: 90,
								elbow_r: 90,
								elbow_l: 90,
							},
							armsOrder: {
								upper: 'right',
							},
						},
						stateFlags: {
							provides: [
								'hogtie_anchor_point',
								'uncuffed_hands',
							],
							requires: {
								wrists_unlinked_to_crotch: 'Box Normal pose cannot be used together with hands being tied to a crotch rope',
							},
						},
					},
				},
				{
					id: 'wrists_high',
					name: 'Box High',
					properties: {
						attributes: {
							provides: [
								'Back_knot_anchor_point',
							],
						},
						poseLimits: {
							arms: {
								position: 'back',
								rotation: 'forward',
							},
							bones: {
								arm_r: 90,
								arm_l: 90,
								elbow_r: 145,
								elbow_l: 145,
							},
							armsOrder: {
								upper: 'right',
							},
						},
						stateFlags: {
							provides: [
								'hogtie_anchor_point',
								'uncuffed_hands',
							],
							requires: {
								wrists_unlinked_to_crotch: 'Box High pose cannot be used together with hands being tied to a crotch rope',
							},
						},
					},
				},
				{
					id: 'armbinder',
					name: 'Armbinder',
					properties: {
						poseLimits: {
							arms: {
								position: 'back',
								rotation: 'forward',
							},
							bones: {
								arm_r: 110,
								arm_l: 110,
								elbow_r: -15,
								elbow_l: -15,
							},
							armsOrder: {
								upper: 'right',
							},
						},
						attributes: {
							provides: ['Rope_strappado_anchor_point'],
						},
						stateFlags: {
							provides: [
								'uncuffed_hands',
								'hogtie_anchor_point',
							],
						},
					},
				},
			],
		},
		extra_rope: {
			type: 'typed',
			name: 'Extra rope',
			variants: [
				{
					id: 'arms_only',
					name: 'None',
					default: true,
				},
				{
					id: 'over_shoulder',
					name: 'Over Shoulder',
					properties: {
						stateFlags: {
							requires: {
								uncuffed_hands: 'Over Shoulder pose cannot be used with tied wrists',
							},
						},
					},
				},
			],
		},
		cinch: {
			type: 'typed',
			name: 'Cinch',
			variants: [
				{
					id: 'no',
					name: 'No',
					default: true,
				},
				{
					id: 'yes',
					name: 'Yes',
				},
			],
		},
		end: {
			type: 'typed',
			name: 'Rope End',
			variants: [
				{
					id: 'short',
					name: 'Short',
				},
				{
					id: 'normal',
					name: 'Normal',
				},
				{
					id: 'long',
					name: 'Long',
					default: true,
				},
			],
		},
		wrists: {
			type: 'typed',
			name: 'Wrists',
			variants: [
				{
					id: 'normal',
					name: 'Normal',
					properties: {
						stateFlags: {
							provides: [
								'wrists_unlinked_to_crotch',
							],
						},
					},
				},
				{
					id: 'linked',
					name: 'Tied To Crotch',
					properties: {
						attributes: {
							requires: [
								'Rope_vulva_anchor_point',
							],
						},
					},
				},
			],
		},
		hogtie: {
			type: 'typed',
			name: 'Hogtie',
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'hogtie_arms',
					name: 'Hogtied to arms',
					properties: {
						attributes: {
							requires: [
								'Rope_ankles_anchor_point',
							],
						},
						poseLimits: {
							legs: {
								pose: 'kneeling',
							},
						},
						stateFlags: {
							requires: {
								hogtie_anchor_point: 'Legs cannot be hogtied without a knot on back or wrist tied back',
							},
						},
						effects: {
							blockRoomMovement: true,
						},
					},
				},
			],
		},
	},
	effects: {
		blockHands: true,
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER tied ITEM_ASSET_NAME around TARGET_CHARACTER_DYNAMIC_POSSESSIVE body.',
		actionRemove: 'SOURCE_CHARACTER removed ITEM_ASSET_NAME from TARGET_CHARACTER_DYNAMIC_POSSESSIVE body.',
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
