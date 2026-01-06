DefineAsset({
	name: 'Blanket',
	size: 'medium',
	graphics: 'graphics.json',
	colorization: {
		blankets: {
			name: 'Blanket',
			default: '#7373CA',
		},
		rope: {
			name: 'Rope',
			default: '#D7AC4D',
		},
	},
	// size:350, y:375, centered
	preview: 'preview.png',
	modules: {
		state: {
			type: 'typed',
			name: 'Blanket',
			variants: [
				{
					id: 'spread',
					name: 'Spread out',
					default: true,
				},
				{
					id: 'roll',
					name: 'Rolled inside',
					properties: {
						poseLimits: {
							bones: {
								arm_r: [[94, 110]],
								arm_l: [[94, 110]],
								elbow_r: [[-12, 16]],
								elbow_l: [[-12, 16]],
								leg_l: [[2, 6]],
								leg_r: [[2, 6]],
							},
							legs: {
								pose: 'standing',
							},
						},
						attributes: {
							provides: [
								'Hand_cover',
								'Anus_cover',
								'Vulva_cover',
								'Breast_cover',
							],
							hides: [
								'Clothing_lower',
								'Hand_item',
								'Handheld',
								'Restraint_arms',
								'Restraint_legs',
								'Restraint_torso',
							],
						},
					},
				},
				{
					id: 'rope',
					name: 'Rolled inside (tied)',
					properties: {
						effects: {
							blockHands: true,
						},
						poseLimits: {
							bones: {
								arm_r: [[94, 110]],
								arm_l: [[94, 110]],
								elbow_r: [[-12, 16]],
								elbow_l: [[-12, 16]],
								leg_l: [[2, 6]],
								leg_r: [[2, 6]],
							},
							legs: {
								pose: 'standing',
							},
						},
						attributes: {
							provides: [
								'Restraint',
								'Restraint_arms',
								'Restraint_legs',
								'Restraint_torso',
								'Hand_item',
								'Hand_cover',
								'Anus_cover',
								'Vulva_cover',
								'Breast_cover',
							],
							covers: [
								'Clothing_upper',
								'Clothing_lower',
								'Clothing_large',
								'Hand_item',
								'Hand_cover',
								'Handheld',
								'Restraint_arms',
								'Restraint_legs',
								'Restraint_torso',
								'Anus_item',
								'Vulva_item',
								'Breast_item',
							],
							hides: [
								'Clothing_lower',
								'Hand_item',
								'Handheld',
								'Restraint_arms',
								'Restraint_legs',
								'Restraint_torso',
							],
						},
					},
				},
			],
		},
	},
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'used 3D model - blanket',
				source: 'https://skfb.ly/pxIqD',
				copyrightHolder: 'kiu (kenlaukkl)',
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
