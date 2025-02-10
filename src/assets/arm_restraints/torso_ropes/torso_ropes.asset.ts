DefineAsset({
	name: 'Torso Ropes',
	size: 'small',
	graphics: 'graphics.json',
	requireFreeHandsToUseDefault: false,
	colorization: {
		rope: {
			name: 'Rope',
			default: '#FED59C',
		},
	},
	// size:400, y:368, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Restraint_arms',
			'Restraint_torso',
		],
	},
	modules: {
		harness: {
			type: 'typed',
			name: 'Body Harness',
			variants: [
				{
					id: 'no',
					name: 'No',
					default: true,
				},
				{
					id: 'underHalf',
					name: 'Front Side Under Clothes',
				},
				{
					id: 'overHalf',
					name: 'Front Side Over Clothes',
				},
				{
					id: 'underFull',
					name: 'With Crotch Rope Under Clothes',
				},
				{
					id: 'overFull',
					name: 'With Crotch Rope Over Clothes',
				},
			],
		},
		armTies: {
			type: 'typed',
			name: 'Arm Ties',
			variants: [
				{
					id: 'wrists',
					name: 'None',
					default: true,
				},
				{
					id: 'wristsBack',
					name: 'Wrists Back',
					properties: {
						poseLimits: {
							arms: {
								position: 'back',
								rotation: 'down',
							},
							bones: {
								arm_r: 82,
								arm_l: 82,
								elbow_r: 55,
								elbow_l: 55,
							},
							armsOrder: {
								upper: 'right',
							},
						},
						effects: {
							blockHands: true,
						},
					},
				},
				{
					id: 'boxtie',
					name: 'Boxtie',
					properties: {
						poseLimits: {
							arms: {
								position: 'back',
								rotation: 'down',
							},
							bones: {
								arm_r: 87,
								arm_l: 87,
								elbow_r: 93,
								elbow_l: 93,
							},
							armsOrder: {
								upper: 'right',
							},
						},
						effects: {
							blockHands: true,
						},
					},
				},
				{
					id: 'crossed',
					name: 'Boxtie with Crossed Wrists',
					properties: {
						poseLimits: {
							arms: {
								position: 'back',
								rotation: 'down',
							},
							bones: {
								arm_r: 87,
								arm_l: 87,
								elbow_r: 52,
								elbow_l: 52,
							},
							armsOrder: {
								upper: 'right',
							},
						},
						effects: {
							blockHands: true,
						},
					},
				},
				{
					id: 'elbows',
					name: 'Boxtie with Elbows Touching',
					properties: {
						poseLimits: {
							arms: {
								position: 'back',
								rotation: 'forward',
							},
							bones: {
								arm_r: 104,
								arm_l: 104,
								elbow_r: -4,
								elbow_l: -4,
							},
							armsOrder: {
								upper: 'right',
							},
						},
						effects: {
							blockHands: true,
						},
					},
				},
			],
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER tied Torso Ropes around TARGET_CHARACTER_DYNAMIC_POSSESSIVE body.',
		actionRemove: 'SOURCE_CHARACTER removed the Torso Ropes from TARGET_CHARACTER_DYNAMIC_POSSESSIVE body.',
	},
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
