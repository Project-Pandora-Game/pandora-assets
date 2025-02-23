DefineAsset({
	name: 'Cloth Blindfold',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		cloth: {
			name: 'Cloth',
			default: '#FDF3EA',
		},
	},
	// size:200, y:197, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Restraint_eyes',
		],
	},
	effects: {
		blind: 7,
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER wrapped ITEM_ASSET_NAME around TARGET_CHARACTER_DYNAMIC_POSSESSIVE head, covering the eyes.',
		actionRemove: 'SOURCE_CHARACTER unwrapped ITEM_ASSET_NAME from around TARGET_CHARACTER_DYNAMIC_POSSESSIVE head.',
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
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
