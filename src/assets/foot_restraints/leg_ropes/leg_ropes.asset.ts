DefineAsset({
	name: 'Leg Ropes',
	size: 'small',
	requireFreeHandsToUseDefault: false,
	graphics: 'graphics.json',
	colorization: {
		rope: {
			name: 'Rope',
			default: '#F1CA96',
		},
	},
	// size:400, y:950, centered
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
					id: 'basic',
					name: 'Basic',
					default: true,
					properties: {
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
					id: 'complex',
					name: 'Complex',
					properties: {
						poseLimits: {
							bones: {
								leg_r: 2,
								leg_l: 2,
							},
							legs: 'standing',
						},
					},
				},
				{
					id: 'toes',
					name: 'Complex with Toe Tie',
					properties: {
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
		actionAdd: 'SOURCE_CHARACTER tied ITEM_ASSET_NAME around TARGET_CHARACTER_DYNAMIC_POSSESSIVE legs.',
		actionRemove: 'SOURCE_CHARACTER removed ITEM_ASSET_NAME from TARGET_CHARACTER_DYNAMIC_POSSESSIVE legs.',
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
