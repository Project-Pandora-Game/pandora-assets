DefineAsset({
	name: 'Chopsticks Gag',
	size: 'small',
	requireFreeHandsToUseDefault: false,
	graphics: 'graphics.json',
	colorization: {
		chopsticks: {
			name: 'Chopsticks',
			default: '#EFCA7B',
		},
		strings: {
			name: 'Strings',
			default: '#8B5E00',
		},
	},
	// size:180, y:200, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Restraint_mouth',
			'Mouth_item',
			'Mouth_protruding',
		],
		requires: [
			'Mouth_tongue_out',
		],

	},

	effects: {
		lipsTouch: 8,
		jawMove: 2,
		tongueRoof: 9,
		mouthBreath: 0,
		throatBreath: 0,
		coherency: 0,
		stimulus: 3,
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER tied some Chopsticks around TARGET_CHARACTER_DYNAMIC_POSSESSIVE tongue.',
		actionRemove: 'SOURCE_CHARACTER removed the Chopsticks from TARGET_CHARACTER_DYNAMIC_POSSESSIVE mouth.',
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
