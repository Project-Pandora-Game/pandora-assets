DefineAsset({
	name: 'Crotch Jute Ropes',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		rope: {
			name: 'Rope',
			default: '#D7AC4D',
		},
	},
	attributes: {
		provides: [
			'Restraint',
			'Restraint_torso',
			'Chastity',
		],
		requires: [
			'!Penis',
		],
	},
	// size:260, y:560, centered
	preview: 'preview.png',
	modules: {
		waist: {
			type: 'typed',
			name: 'Waist',
			variants: [
				{
					id: 'none',
					name: 'No',
					default: true,
				},
				{
					id: 'rope',
					name: 'Rope',
					properties: {
						attributes: {
							provides: [
								'Rope_waist',
							],
						},
					},
				},
			],
		},
		crotch: {
			type: 'typed',
			name: 'Crotch',
			variants: [
				{
					id: 'open',
					name: 'Open',

				},
				{
					id: 'rope',
					name: 'Rope',
					default: true,
					properties: {
						attributes: {
							provides: [
								'Vulva_cover',
								'Rope_vulva_anchor_point',
							],
						},
					},
				},
				{
					id: 'knot',
					name: 'Knot',
					properties: {
						attributes: {
							provides: [
								'Vulva_cover',
								'Rope_vulva_anchor_point',
							],
						},
					},
				},
			],
		},
		hips: {
			type: 'typed',
			name: 'Hips',
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'single',
					name: 'Single',
					properties: {
						stateFlags: {
							provides: ['hips_single'],
						},
					},
				},
			],
		},
		legs: {
			type: 'typed',
			name: 'Thighs',
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'attached',
					name: 'Attached',
					properties: {
						attributes: {
							requires: [
								'Rope_thighs_anchor_point',
							],
						},
						stateFlags: {
							requires: {
								hips_single: 'Attaching crotch rope to thighs requires "Hips: Single" rope',
							},
						},
					},
				},
			],
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER tied Crotch Jute Ropes around TARGET_CHARACTER_DYNAMIC_POSSESSIVE body.',
		actionRemove: 'SOURCE_CHARACTER removed the Crotch Jute Ropes from TARGET_CHARACTER_DYNAMIC_POSSESSIVE body.',
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
