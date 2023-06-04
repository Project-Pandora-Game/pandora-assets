DefineAsset({
	name: 'Bit Gag',
	size: 'medium',
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
	attributes: [
		'Restraint',
		'Restraint_mouth',
	],
	requirements: ['Mouth_open_wide'],
	modules: {
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			occupiedEffects: {
				blockAddRemove: true,
			},
		},
	},
	effects: {
		lipsTouch: 6,
		jawMove: 3,
		tongueRoof: 1,
		mouthBreath: 1,
		throatBreath: 0,
		coherency: 2,
		stimulus: 1,
	},
	coverSlots: ['mouth', 'outsideMouthArea'],
	blockSlots: ['mouth'],
	occupySlots: {
		'outsideMouthArea': 1,
		'mouth': 5,
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER strapped a Bit Gag tightly between TARGET_CHARACTER_DYNAMIC_POSSESSIVE teeth.',
		actionRemove: 'SOURCE_CHARACTER loosened and then removed the Bit Gag from TARGET_CHARACTER_DYNAMIC_POSSESSIVE mouth.',
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
