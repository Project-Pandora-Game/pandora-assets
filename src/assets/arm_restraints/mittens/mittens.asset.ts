DefineAsset({
	name: 'Bondage Mittens',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		mittens: {
			name: 'Mitten',
			default: '#353043',
		},
		shine: {
			name: 'Shine',
			default: '#ffffff20',
			minAlpha: 0,
		},
		belt: {
			name: 'Mitten strap',
			default: '#030303',
		},
		rings: {
			name: 'Strap rings',
			default: '#cccccc',
		},
	},
	// size:320, y:583, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Restraint_arms',
			'Gloves',
			'Mittens',
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
	poseLimits: {
		arms: {
			fingers: 'fist',
		},
	},
	effects: {
		blockHands: true,
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER slipped mittens over TARGET_CHARACTER_DYNAMIC_POSSESSIVE hands and tightens them.',
		actionRemove: 'SOURCE_CHARACTER loosened and then slipped off the mittens from TARGET_CHARACTER_DYNAMIC_POSSESSIVE hands.',
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
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
