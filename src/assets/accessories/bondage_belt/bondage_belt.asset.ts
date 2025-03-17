DefineAsset({
	name: 'Bondage Belt',
	size: 'medium',
	requireFreeHandsToUseDefault: true,
	graphics: 'graphics.json',
	colorization: {
		cuff: {
			name: 'Cuff',
			default: '#222222',
		},
		belt: {
			name: 'Belt',
			default: '#000000',
		},
		smallRings: {
			name: 'Eyelets',
			default: '#FFFFFF',
		},
		largeRings: {
			name: 'D-Rings',
			default: '#FFFFFF',
		},
	},
	// size:250, y:500, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Restraint_arms',
			'Belt_chainable',
		],
	},
	modules: {
		lock: {
			type: 'lockSlot',
			name: 'Lock for belt',
			lockedProperties: {
				blockAddRemove: true,
			},
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER fastened ITEM_ASSET_NAME around TARGET_CHARACTER_DYNAMIC_POSSESSIVE waist.',
		actionRemove: 'SOURCE_CHARACTER loosened and slipped off ITEM_ASSET_NAME from TARGET_CHARACTER_DYNAMIC_POSSESSIVE waist.',
	},
	ownership: {
		responsibleContributor: 'Sandrine <118102950+SandrinePDR@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
