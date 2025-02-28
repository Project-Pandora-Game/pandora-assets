DefineAsset({
	name: 'Harness Jute Ropes',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		rope: {
			name: 'Rope',
			default: '#D7AC4D',
		},
	},
	// size:200, y:400, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Restraint_torso',
		],
	},
	modules: {
		chest: {
			type: 'typed',
			name: 'Harness',
			variants: [
				{
					id: 'basic',
					name: 'Basic',
					default: true,
					properties: {
						attributes: {
							provides: [
								'Back_knot_anchor_point',
							],
						},
						stateFlags: {
							provides: [
								'back_knot',
							],
						},
					},
				},
				{
					id: 'chest',
					name: 'Chest',
					properties: {
						attributes: {
							provides: [
								'Back_knot_anchor_point',
							],
						},
						stateFlags: {
							provides: [
								'back_knot',
							],
						},
					},
				},
				{
					id: 'crossed',
					name: 'Crossed',
					properties: {
						attributes: {
							provides: [
								'Back_knot_anchor_point',
							],
						},
						stateFlags: {
							provides: [
								'back_knot',
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
					id: 'hogtie_back',
					name: 'Hogtied',
					properties: {
						attributes: {
							requires: [
								'Rope_ankles_anchor_point',
							],
						},
						poseLimits: {
							legs: 'kneeling',
						},
						stateFlags: {
							requires: {
								back_knot: 'Legs cannot be hogtied without a knot on back from chest harness',
							},
						},
					},
				},
			],
		},
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
