DefineAsset({
	name: 'Wooden Sign',
	size: 'medium',
	graphics: 'graphics.json',
	colorization: {
		sign: {
			name: 'Sign',
			default: '#FFC591',
		},
		text: {
			name: 'Text',
			default: '#222222',
		},
		rope: {
			name: 'Rope',
			default: '#DE9762',
		},
	},
	// size:350, y:375, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Accessory',
		],
	},
	modules: {
		text: {
			type: 'text',
			name: 'Text',
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER placed ITEM_ASSET_NAME over TARGET_CHARACTER_DYNAMIC_POSSESSIVE neck.',
		actionRemove: 'SOURCE_CHARACTER removed ITEM_ASSET_NAME from TARGET_CHARACTER_DYNAMIC_POSSESSIVE body.',
	},
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'used 3D model',
				source: 'https://skfb.ly/6Vzo6',
				copyrightHolder: 'Carlos',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'images',
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
