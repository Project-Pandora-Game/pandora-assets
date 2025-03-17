DefineAsset({
	name: 'Bit Gag',
	size: 'medium',
	requireFreeHandsToUseDefault: true,
	graphics: 'graphics.json',
	colorization: {
		bit: {
			name: 'Bit',
			default: '#535971',
		},
		straps: {
			name: 'Straps',
			default: '#444444',
		},
	},
	preview: 'bit_preview.png',
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
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			lockedProperties: {
				blockAddRemove: true,
			},
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
		actionAdd: 'SOURCE_CHARACTER strapped ITEM_ASSET_NAME tightly between TARGET_CHARACTER_DYNAMIC_POSSESSIVE teeth.',
		actionRemove: 'SOURCE_CHARACTER loosened and then removed ITEM_ASSET_NAME from TARGET_CHARACTER_DYNAMIC_POSSESSIVE mouth.',
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
