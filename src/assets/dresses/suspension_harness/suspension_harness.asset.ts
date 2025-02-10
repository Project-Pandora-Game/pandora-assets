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
					},
				},
			],
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER tied a Suspension Harness around TARGET_CHARACTER_DYNAMIC_POSSESSIVE body.',
		actionRemove: 'SOURCE_CHARACTER removed the Suspension Harness from TARGET_CHARACTER_DYNAMIC_POSSESSIVE body.',
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
