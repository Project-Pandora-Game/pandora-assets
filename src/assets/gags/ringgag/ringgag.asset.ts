DefineAsset({
	name: 'Ring Gag',
	size: 'small',
	graphics: 'graphics.json',
	colorization: [
		{
			name: 'Ring',
			default: '#FFFFFF',
		},
		{
			name: 'Straps',
			default: '#444444',
		},
	],
	attributes: [
		'Restraint',
		'Restraint_mouth',
	],
	requirements: [
		'Mouth_open_wide',
		'!Mouth_open_teeth',
	],
	modules: {
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			lockRequirements: ['Lock'],
			occupiedEffects: {
				blockAddRemove: true,
			},
		},
	},
	effects: {
		lipsTouch: 8,
		jawMove: 4,
		tongueRoof: 1,
		mouthBreath: 2,
		throatBreath: 2,
		coherency: 4,
		stimulus: 2,
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER strapped a Ring Gag tightly between TARGET_CHARACTER_DYNAMIC_POSSESSIVE teeth.',
		actionRemove: 'SOURCE_CHARACTER loosened and then removed the Ring Gag from TARGET_CHARACTER_DYNAMIC_POSSESSIVE mouth.',
	},
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia', 'Jomshir'],
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