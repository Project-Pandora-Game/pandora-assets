DefineAsset({
	name: 'Skin Coloured Rubber Cap',
	size: 'small',
	// size:150, y:175, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Wig',
			'Wig_front',
			'Wig_back',
		],
		hides: [
			'Hair_back',
			'Hair_extension',
			'Hair_front',
		],
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER pulls a ITEM_ASSET_NAME over TARGET_CHARACTER_DYNAMIC_POSSESSIVE head.',
		actionRemove: 'SOURCE_CHARACTER removes the ITEM_ASSET_NAME from TARGET_CHARACTER_DYNAMIC_POSSESSIVE head.',
	},
	ownership: {
		responsibleContributor: 'Sandrine <118102950+SandrinePDR@users.noreply.github.com>',
		credits: ['Sandrine'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
