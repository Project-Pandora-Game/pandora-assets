DefineAsset({
	name: 'Padded Blindfold',
	size: 'small',
	graphics: 'graphics.json',
	colorization: [
		{
			name: 'Blindfold',
			default: '#404040',
		},
		{
			name: 'Straps',
			default: '#444444',
		},
	],
	attributes: [
		'Restraint',
		'Restraint_eyes',
	],
	effects: {
		blind: 9.4,
	},
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
	chat: {
		actionAdd: 'SOURCE_CHARACTER strapped a Padded Blindfold around TARGET_CHARACTER_DYNAMIC_POSSESSIVE head, covering the eyes.',
		actionRemove: 'SOURCE_CHARACTER removed the Padded Blindfold from TARGET_CHARACTER_DYNAMIC_POSSESSIVE head.',
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
