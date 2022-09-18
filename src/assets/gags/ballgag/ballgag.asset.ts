DefineAsset({
	name: 'Ball Gag',
	graphics: 'graphics.json',
	colorization: [
		{
			name: 'Ball',
			default: '#FA5F55',
		},
		{
			name: 'Straps',
			default: '#444444',
		},
	],
	effects: {
		muffleMouth: 4,
	},
	actionMessages: {
		itemAdd: 'SOURCE_CHARACTER strapped a Ball Gag tightly over TARGET_CHARACTER_DYNAMIC lips.',
		itemRemove: 'SOURCE_CHARACTER loosened and then removed the Ball Gag from TARGET_CHARACTER_DYNAMIC lips.',
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
