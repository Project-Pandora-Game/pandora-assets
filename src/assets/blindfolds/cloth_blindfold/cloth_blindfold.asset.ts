DefineAsset({
	name: 'Cloth Blindfold',
	size: 'small',
	graphics: 'graphics.json',
	colorization: [
		{
			name: 'Cloth',
			default: '#FDF3EA',
		},
	],
	attributes: [
		'Restraint',
		'Restraint_eyes',
	],
	effects: {
		blind: 7,
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER wrapped a layer of cloth around TARGET_CHARACTER_DYNAMIC_POSSESSIVE head, covering the eyes.',
		actionRemove: 'SOURCE_CHARACTER unwrapped the cloth blindfold from around TARGET_CHARACTER_DYNAMIC_POSSESSIVE head.',
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
