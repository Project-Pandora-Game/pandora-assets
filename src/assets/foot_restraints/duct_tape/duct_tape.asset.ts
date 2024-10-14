DefineAsset({
	name: 'Duct tape',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		tape: {
			name: 'Tape',
			default: '#FFFFFF',
		},
	},
	//size:300, y:975, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Restraint_legs',
		],
	},
	modules: {
		legTies: {
			type: 'typed',
			name: 'Leg Ties',
			variants: [
				{
					id: 'calves',
					name: 'Calves',
					default: true,
					properties: {
						attributes: {
							hides: [
								'Ankle_cuffs',
							],
						},
						poseLimits: {
							options: [
								{
									bones: {
										leg_r: 2,
										leg_l: 2,
									},
									legs: 'standing',
								},
								{
									bones: {
										leg_r: 4,
										leg_l: 4,
									},
									legs: 'sitting',
								},
								{
									bones: {
										leg_r: 5,
										leg_l: 5,
									},
									legs: 'kneeling',
								},
							],
						},
					},
				},
				{
					id: 'thighs',
					name: 'Thighs',
					properties: {
						attributes: {
							hides: [
								'Thigh_cuffs',
							],
						},
						poseLimits: {
							options: [
								{
									bones: {
										leg_r: 2,
										leg_l: 2,
									},
									legs: 'standing',
								},
								{
									bones: {
										leg_r: 4,
										leg_l: 4,
									},
									legs: 'sitting',
								},
								{
									bones: {
										leg_r: 5,
										leg_l: 5,
									},
									legs: 'kneeling',
								},
							],
						},
					},
				},
				{
					id: 'both',
					name: 'Calves and thighs',
					properties: {
						attributes: {
							hides: [
								'Thigh_cuffs',
								'Ankle_cuffs',
							],
						},
						poseLimits: {
							options: [
								{
									bones: {
										leg_r: 2,
										leg_l: 2,
									},
									legs: 'standing',
								},
								{
									bones: {
										leg_r: 4,
										leg_l: 4,
									},
									legs: 'sitting',
								},
								{
									bones: {
										leg_r: 5,
										leg_l: 5,
									},
									legs: 'kneeling',
								},
							],
						},
					},
				},
				{
					id: 'complete',
					name: 'Complete',
					properties: {
						attributes: {
							hides: [
								'Thigh_cuffs',
								'Ankle_cuffs',
							],
						},
						poseLimits: {
							bones: {
								leg_r: 2,
								leg_l: 2,
							},
							legs: 'standing',
						},
					},
				},
			],
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER wraps duct tape around TARGET_CHARACTER_DYNAMIC_POSSESSIVE legs.',
		actionRemove: 'SOURCE_CHARACTER pulls the duct tape from TARGET_CHARACTER_DYNAMIC_POSSESSIVE legs.',
	},
	ownership: {
		responsibleContributor: 'Sandrine <118102950+SandrinePDR@users.noreply.github.com>',
		credits: ['SandrinePDR'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Sandrine',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
