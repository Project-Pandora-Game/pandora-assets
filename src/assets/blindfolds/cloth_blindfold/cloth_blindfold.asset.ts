DefineAsset({
	name: 'Cloth Blindfold',
	graphics: 'graphics.json',
	colorization: [
		{
			name: 'Cloth',
			default: '#FDF3EA',
		},
	],
	effects: {
		blind: 6,
	},
	actionMessages: {
		itemAdd: 'SOURCE_CHARACTER wrapped a layer of cloth around TARGET_CHARACTER_DYNAMIC head, covering the eyes.',
		itemRemove: 'SOURCE_CHARACTER unwrapped the cloth blindfold from around TARGET_CHARACTER_DYNAMIC head.',
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
