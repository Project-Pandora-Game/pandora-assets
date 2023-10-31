DefineAsset({
	name: 'Leg Ropes',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		rope: {
			name: 'Rope',
			default: '#F1CA96',
		},
	},
	attributes: [
		'Restraint',
		'Restraint_legs',
	],
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
							bones: {
								leg_r: 2,
								leg_l: 2,
							},
							legs: 'standing',
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
		actionAdd: 'SOURCE_CHARACTER tied Leg Ropes around TARGET_CHARACTER_DYNAMIC_POSSESSIVE legs.',
		actionRemove: 'SOURCE_CHARACTER removed the Leg Ropes from TARGET_CHARACTER_DYNAMIC_POSSESSIVE legs.',
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
				license: 'Pandora-Use-Only',
			},
		],
	},
});
