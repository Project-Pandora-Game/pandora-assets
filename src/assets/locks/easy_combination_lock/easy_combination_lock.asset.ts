DefineLockAsset({
	name: 'Easy Combination Lock',
	assetPreferenceDefault: 'prevent',
	lockSetup: {
		password: {
			length: 3,
			format: 'numeric',
		},
	},
	chat: {
		chatDescriptor: 'an easy combination lock',
		actionLock: 'SOURCE_CHARACTER clicked ITEM_ASSET_NAME on ITEM_CONTAINER_SIMPLE_DYNAMIC shut.',
		actionUnlock: 'SOURCE_CHARACTER unlocked ITEM_ASSET_NAME on ITEM_CONTAINER_SIMPLE_DYNAMIC.',
	},
	ownership: {
		responsibleContributor: 'Sekkmer <sekkmer@gmail.com>',
		credits: ['Sekkmer'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Free to use',
		licensing: [],
	},
});
