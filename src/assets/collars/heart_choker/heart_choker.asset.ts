DefineAsset({
	name: 'Heart Choker',
	size: 'small',
	graphics: 'graphics.json',
	requireFreeHandsToUseDefault: true,
	colorization: {
		choker: {
			name: 'Choker',
			default: '#525252',
		},
		heart: {
			name: 'Heart',
			default: '#FFFFFF',
		},
		rivets: {
			name: 'Choker rivets',
			default: '#EEEEEE',
		},
	},
	// size:150, y:309, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Accessory',
			'Collar',
			'Collar_front_ring',
		],
	},
	modules: {
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			occupiedProperties: {
				blockAddRemove: true,
			},
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER fitted and closed a Heart Choker around TARGET_CHARACTER_DYNAMIC_POSSESSIVE neck.',
		actionRemove: 'SOURCE_CHARACTER opened and then removed the Heart Choker from TARGET_CHARACTER_DYNAMIC_POSSESSIVE neck.',
	},
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'used 3D model',
				source: 'https://skfb.ly/onN9Y',
				copyrightHolder: 'Arnlitzsch',
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
