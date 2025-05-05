DefineAsset({
	name: 'Chain Leash',
	size: 'small',
	requireFreeHandsToUseDefault: true,
	graphics: 'graphics.json',
	colorization: {
		chains: {
			name: 'Chain',
			default: '#FFFFFF',
		},
		handle: {
			name: 'Handle',
			default: '#FF6565',
		},
	},
	preview: 'chain_preview.png',
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
			name: 'Chain configuration',
			variants: [
				{
					id: 'hanging',
					name: 'Leash hanging',
					default: true,
				},
				{
					id: 'left',
					name: 'Leash held right',
				},
				{
					id: 'right',
					name: 'Leash held left',
				},
				{
					id: 'left_up',
					name: 'Leash held high right',
				},
				{
					id: 'right_up',
					name: 'Leash held high left',
				},
				{
					id: 'held',
					name: 'Leash held (with separate handheld item)',
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
			{
				source: 'Self-Made',
				part: 'New positions',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'Taja, Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
