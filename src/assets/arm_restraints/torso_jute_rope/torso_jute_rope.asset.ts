DefineAsset({
	name: 'Jute rope',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		rope: {
			name: 'Rope',
			default: '#C79A32',
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
					id: 'wrists_high',
					name: 'Box High',
					properties: {
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
						}
					}
				},
				{
					id: 'wrists_normal',
					name: 'Box Normal',
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
								elbow_r: 90,
								elbow_l: 90,
							},
							armsOrder: {
								upper: 'right',
							},
						}
					}
				},
				{
					id: 'wrists_low',
					name: 'Box Low',
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
							armsOrder: {
								upper: 'right',
							},
						}
					}
				},
				{
					id: 'arms_high',
					name: 'Wrists Behind neck',
					properties: {
						poseLimits: {
							arms: {
								position: 'back',
								rotation: 'forward',
							},
							bones: {
								arm_r: -90,
								arm_l: -90,
								elbow_r: -145,
								elbow_l: -145,
							},
							armsOrder: {
								upper: 'right',
							},
						},
						stateFlags: {
							requires: {
								uncinched: "Remove cinches in Cinch module",
								//untied_shoulder: "Remove Extra rope in Chest module"
							},
						},
					}
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
						stateFlags: {
							requires: {
								uncinched: "Remove cinches in Cinch module"
							},
						},
					}
				},
			]
		},
		extra_rope: {
			type: 'typed',
			name: 'Extra rope',
			variants: [
				{
					id: 'arms_only',
					name: 'None',
					properties: {
						stateFlags: {
							provides: ['untied_shoulder'],
						},
					},
					default: true,
				},
				{
					id: 'over_shoulder',
					name: 'Over Shoulder',
				},
			]
		},
		cinch: {
			type: 'typed',
			name: 'Cinch',
			variants: [
				{
					id: 'no',
					name: 'No',
					properties: {
						stateFlags: {
							provides: ['uncinched'],
						},
					},
					default: true
				},
				{
					id: 'yes',
					name: 'Yes',
				},
			]
		},
		end: {
			type: 'typed',
			name: 'Rope End',
			variants: [
				{
					id: 'short',
					name: 'Short',
					default: true,
				},
				{
					id: 'normal',
					name: 'Normal',
				},
				{
					id: 'long',
					name: 'Long',
				},
			]
		},
	},
	effects: {
		blockHands: true,
	},
	blockSelfAddRemove: true,
	chat: {
		actionAdd: 'SOURCE_CHARACTER tied Torso Jute Ropes around TARGET_CHARACTER_DYNAMIC_POSSESSIVE body.',
		actionRemove: 'SOURCE_CHARACTER removed the Torso Jute Ropes from TARGET_CHARACTER_DYNAMIC_POSSESSIVE body.',
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
