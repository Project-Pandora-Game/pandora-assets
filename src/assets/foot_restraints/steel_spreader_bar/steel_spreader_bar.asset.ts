DefineAsset({
	name: 'Steel spreader bar',
	size: 'medium',
	graphics: 'graphics.json',
	colorization: {
		innerBar: {
			name: 'Inner bar',
			default: '#4A4D52',
		},
		outerBar: {
			name: 'Outer bar',
			default: '#747C84',
		},
		connectingRing: {
			name: 'Connecting ring',
			default: '#7B8E94',
		},
	},
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Restraint_legs',
		],
		requires: [
			'Ankle_cuffs_chainable',
		],
	},
	modules: {
		barWidth: {
			type: 'typed',
			name: 'Bar width',
			variants: [
				{
					id: 'narrow',
					name: 'Narrow',
					properties: {
						poseLimits: {
							options: [
								{
									legs: {
										pose: 'standing',
									},
									bones: {
										leg_r: -10,
										leg_l: -10,
									},
								},
								{
									legs: {
										pose: 'sitting',
									},
									bones: {
										leg_r: -17,
										leg_l: -17,
									},
								},
								{
									legs: {
										pose: 'kneeling',
									},
									bones: {
										leg_r: -18,
										leg_l: -18,
									},
								},
							],
						},
					},
				},
				{
					id: 'normal',
					name: 'Normal',
					default: true,
					properties: {
						poseLimits: {
							options: [
								{
									legs: {
										pose: 'standing',
									},
									bones: {
										leg_r: -18,
										leg_l: -18,
									},
								},
								{
									legs: {
										pose: 'sitting',
									},
									bones: {
										leg_r: -30,
										leg_l: -30,
									},
								},
								{
									legs: {
										pose: 'kneeling',
									},
									bones: {
										leg_r: -34,
										leg_l: -34,
									},
								},
							],
						},
					},
				},
				{
					id: 'wide',
					name: 'Wide (standing only)',
					properties: {
						poseLimits: {
							legs: {
								pose: 'standing',
							},
							bones: {
								leg_r: -30,
								leg_l: -30,
							},
						},
						effects: {
							blockRoomMovement: true,
						},
					},
				},
			],
		},
		lock: {
			type: 'lockSlot',
			name: 'Lock to cuffs',
			lockedProperties: {
				blockAddRemove: true,
			},
		},
		lockBar: {
			type: 'lockSlot',
			name: 'Lock for bar width',
			lockedProperties: {
				blockModules: ['barWidth'],
			},
		},
	},
	ownership: {
		responsibleContributor: 'Jomshir98 <jomshir98@protonmail.com>',
		credits: ['Jomshir'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Jomshir98',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
