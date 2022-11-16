DefineAsset({
	name: 'Pocket dimension [PoC]',
	size: 'large',
	modules: {
		content: {
			type: 'storage',
			name: 'Contents',
			maxCount: 10,
			maxAcceptedSize: 'medium',
		},
	},
	actionMessages: {
		itemAdd: 'SOURCE_CHARACTER summoned a pocket dimension for TARGET_CHARACTER_DYNAMIC_SELF.',
		itemRemove: 'SOURCE_CHARACTER dispelled TARGET_CHARACTER_DYNAMIC pocket dimension.',
	},
	ownership: {
		responsibleContributor: 'Jomshir98 <jomshir98@protonmail.com>',
		credits: ['Jomshir'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Free to use',
		licensing: [],
	},
});
