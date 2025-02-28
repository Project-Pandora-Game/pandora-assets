DefineAsset({
	name: 'Jute Rope Gag',
	size: 'small',
	requireFreeHandsToUseDefault: true,
	graphics: 'graphics.json',
	colorization: {
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
		gagType: {
			type: 'typed',
			name: 'Gag Type',
			variants: [
				{
					id: 'rope',
					name: 'Rope',
					properties: {
						effects: {
							lipsTouch: 2,
							jawMove: 3,
							tongueRoof: 3,
							mouthBreath: 4,
							throatBreath: 2,
							coherency: 2,
							stimulus: 1,
						},
					},
				},
				{
					id: 'knot',
					name: 'Knot',
					properties: {
						attributes: {
							requires: [
								'!Mouth_tongue_out',
							],
						},
						effects: {
							lipsTouch: 7,
							jawMove: 8,
							tongueRoof: 6,
							mouthBreath: 3,
							throatBreath: 2,
							coherency: 4,
							stimulus: 2,
						},
					},
				},
				{
					id: 'bit',
					name: 'Bit',
					default: true,
					properties: {
						attributes: {
							requires: [
								'!Mouth_tongue_out',
							],
						},
						effects: {
							lipsTouch: 8,
							jawMove: 9,
							tongueRoof: 7,
							mouthBreath: 4,
							throatBreath: 3,
							coherency: 5,
							stimulus: 2,
						},
					},
				},
			],
		},
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
	chat: {
		actionAdd: 'SOURCE_CHARACTER tied ITEM_ASSET_NAME tightly between TARGET_CHARACTER_DYNAMIC_POSSESSIVE teeth.',
		actionRemove: 'SOURCE_CHARACTER loosened and then removed ITEM_ASSET_NAME from TARGET_CHARACTER_DYNAMIC_POSSESSIVE mouth.',
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
