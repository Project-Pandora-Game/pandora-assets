DefineAsset({
	name: 'Pet Tag',
	size: 'small',
	requireFreeHandsToUseDefault: true,
	graphics: 'graphics.json',
	colorization: {
		tag: {
			name: 'Tag',
			default: '#B62929',
			minAlpha: 0.5,
		},
		text: {
			name: 'Text',
			default: '#FFFFFF',
		},
		ring: {
			name: 'Ring',
			default: '#ECD399',
		},
	},
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Accessory',
		],
		requires: [
			'Collar_front_ring',
		],
	},
	modules: {
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			lockedProperties: {
				blockAddRemove: true,
				blockModules: ['text'],
			},
		},
		text: {
			type: 'text',
			name: 'Text',
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER added ITEM_ASSET_NAME onto TARGET_CHARACTER_DYNAMIC_POSSESSIVE ring.',
		actionRemove: 'SOURCE_CHARACTER removed ITEM_ASSET_NAME from TARGET_CHARACTER_DYNAMIC_POSSESSIVE ring.',
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
