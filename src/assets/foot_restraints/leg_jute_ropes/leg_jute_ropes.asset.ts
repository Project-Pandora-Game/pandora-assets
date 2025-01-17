DefineAsset({
	name: 'Leg jute ropes',
	size: 'small',
	graphics: 'graphics.json',

	colorization: {
		rope: {
			name: 'Rope',
			default: '#D7AC4D',
		},
	},
	// size:420, y:940, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Restraint_legs',
		],

	},
	modules: {
		thighs: {
			type: 'typed',
			name: 'Thighs',
			variants: [
				{
					id: 'none',
					name: 'None',
				},
				{
					id: 'single',
					name: 'Single',
					properties: {
						poseLimits: {
							options: [
								{
									legs: 'standing',
									bones: {
										leg_r: 2,
										leg_l: 2,
									},
								},
								{
									legs: 'sitting',
									bones: {
										leg_r: 2,
										leg_l: 2,
									},
								},
								{
									legs: 'kneeling',
									bones: {
										leg_r: 5,
										leg_l: 5,
									},
								},
							],
						}
					},

					default: true
				},
				{
					id: 'double',
					name: 'Double',
					properties: {
						poseLimits: {
							options: [
								{
									legs: 'standing',
									bones: {
										leg_r: 2,
										leg_l: 2,
									},
								},
								{
									legs: 'sitting',
									bones: {
										leg_r: 2,
										leg_l: 2,
									},
								},
								{
									legs: 'kneeling',
									bones: {
										leg_r: 5,
										leg_l: 5,
									},
								},
							],
						},
						attributes: {
							provides: [
								'Thight_rope_anchor_point'
							]
						}
					},
				},
				{
					id: 'full',
					name: 'Full',
					properties: {
						poseLimits: {
							options: [
								{
									legs: 'standing',
									bones: {
										leg_r: 2,
										leg_l: 2,
									},
								},
								{
									legs: 'sitting',
									bones: {
										leg_r: 2,
										leg_l: 2,
									},
								},
								{
									legs: 'kneeling',
									bones: {
										leg_r: 5,
										leg_l: 5,
									},
								},
							],
						},
						attributes: {
							provides: [
								'Thight_rope_anchor_point'
							]
						}
					},
				}
			]
		},
		legs: {
			type: 'typed',
			name: 'Legs',
			variants: [
				{
					id: 'none',
					name: 'None',
				},
				{
					id: 'single',
					name: 'Single',
					properties: {
						poseLimits: {
							options: [
								{
									legs: 'standing',
									bones: {
										leg_r: 2,
										leg_l: 2,
									},
								},
								{
									legs: 'sitting',
									bones: {
										leg_r: 2,
										leg_l: 2,
									},
								},
								{
									legs: 'kneeling',
									bones: {
										leg_r: 5,
										leg_l: 5,
									},
								},
							],
						}
					},

					default: true
				},
				{
					id: 'double',
					name: 'Double',
					properties: {
						poseLimits: {
							options: [
								{
									legs: 'standing',
									bones: {
										leg_r: 2,
										leg_l: 2,
									},
								},
								{
									legs: 'sitting',
									bones: {
										leg_r: 2,
										leg_l: 2,
									},
								},
								{
									legs: 'kneeling',
									bones: {
										leg_r: 5,
										leg_l: 5,
									},
								},
							],
						}
					},
				},
				{
					id: 'complex',
					name: 'Complex',
					properties: {
						poseLimits: {
							options: [
								{
									legs: 'standing',
									bones: {
										leg_r: 2,
										leg_l: 2,
									},
								},
								{
									legs: 'sitting',
									bones: {
										leg_r: 2,
										leg_l: 2,
									},
								},
								{
									legs: 'kneeling',
									bones: {
										leg_r: 5,
										leg_l: 5,
									},
								},
							],
						}
					},
				},
				{
					id: 'full',
					name: 'Full',
					properties: {
						poseLimits: {
							options: [
								{
									legs: 'standing',
									bones: {
										leg_r: 2,
										leg_l: 2,
									},
								},
								{
									legs: 'sitting',
									bones: {
										leg_r: 2,
										leg_l: 2,
									},
								},
								{
									legs: 'kneeling',
									bones: {
										leg_r: 5,
										leg_l: 5,
									},
								},
							],
						}
					},
				}
			]
		},
		link: {
			type: 'typed',
			name: 'Link',
			variants: [
				{
					id: 'cinched',
					name: 'Cinched',
					default: true,
				},
				{
					id: 'linked',
					name: 'Linked',
				},
			]
		},
	},
	effects: {
		blockHands: true,
	},
	blockSelfAddRemove: true,
	chat: {
		actionAdd: 'SOURCE_CHARACTER tied Leg Jute Ropes around TARGET_CHARACTER_DYNAMIC_POSSESSIVE body.',
		actionRemove: 'SOURCE_CHARACTER removed the Leg Jute Ropes from TARGET_CHARACTER_DYNAMIC_POSSESSIVE body.',
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
