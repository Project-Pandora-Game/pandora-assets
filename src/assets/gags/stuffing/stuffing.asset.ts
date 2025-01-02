DefineAsset({
	name: 'Stuffing',
	size: 'small',
	requireFreeHandsToUseDefault: false,
	graphics: 'graphics.json',
	colorization: {
		cloth: {
			name: 'Stuffing',
			default: '#FDF3EA',
		},
	},
	// size:200, y:197, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Restraint_mouth',
			'Mouth_item',
		],
		requires: [
			'Mouth_open_wide',
			'!Mouth_protruding',
			'!Mouth_cover',
		],
	},
	effects: {
		lipsTouch: 2,
		jawMove: 3,
		tongueRoof: 3,
		mouthBreath: 4,
		throatBreath: 2,
		coherency: 2,
		stimulus: 1,
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER stuffed TARGET_CHARACTER_DYNAMIC_POSSESSIVE mouth.',
		actionRemove: 'SOURCE_CHARACTER removed the stuffing in TARGET_CHARACTER_DYNAMIC_POSSESSIVE mouth.',
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
