DefineAsset({
	name: 'Bamboo Gag',
	size: 'small',
	requireFreeHandsToUseDefault: true,
	graphics: 'graphics.json',
	colorization: {
		bamboo: {
			name: 'Bamboo',
			default: '#EFCA7B',
		},
		rope: {
			name: 'Rope',
			default: '#D7AC4D',
		},
	},
	// size:200, y:197, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Restraint_mouth',
			'Mouth_item',
			'Mouth_insert',
			'Mouth_cover',
		],
		requires: [
			'Mouth_open_wide',
			'!Mouth_protruding',
			'!Mouth_cover',
		],
		covers: [
			'Mouth_item',
		],
	},
	modules: {
		attach: {
			type: 'typed',
			name: 'Attached to',
			variants: [
				{
					id: 'head',
					name: 'Head',
					default: true,
				},
				{
					id: 'pole',
					name: 'Pole',
					properties: {
						attributes: {
							requires: [
								'Gag_anchor_point',
							],
						},
					},
				},
			],
		},
	},
	effects: {
		lipsTouch: 6,
		jawMove: 3,
		tongueRoof: 2,
		mouthBreath: 2,
		throatBreath: 1,
		coherency: 2,
		stimulus: 1,
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER tied a Bamboo Gag tightly between TARGET_CHARACTER_DYNAMIC_POSSESSIVE teeth.',
		actionRemove: 'SOURCE_CHARACTER loosened and then removed the Bamboo Gag from TARGET_CHARACTER_DYNAMIC_POSSESSIVE mouth.',
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
