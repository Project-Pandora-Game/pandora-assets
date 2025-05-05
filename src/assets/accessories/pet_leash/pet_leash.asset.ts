DefineAsset({
	name: 'Pet Leash',
	size: 'small',
	requireFreeHandsToUseDefault: true,
	graphics: 'graphics.json',
	colorization: {
		leash: {
			name: 'Leash',
			default: '#FF6565',
		},
		handle: {
			name: 'Handle',
			default: '#FF6565',
		},
	},
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Accessory',
			'Leash',
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
			},
		},
		collarConfig: {
			type: 'typed',
			name: 'Leash Configuration',
			variants: [
				{
					id: 'hanging',
					name: 'Leash Hanging',
					default: true,
				},
				{
					id: 'held',
					name: 'Leash Held (with separate handheld item)',
				},
			],
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER hooked and closed ITEM_ASSET_NAME onto TARGET_CHARACTER_DYNAMIC_POSSESSIVE ring.',
		actionRemove: 'SOURCE_CHARACTER opened and then removed ITEM_ASSET_NAME from TARGET_CHARACTER_DYNAMIC_POSSESSIVE ring.',
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
