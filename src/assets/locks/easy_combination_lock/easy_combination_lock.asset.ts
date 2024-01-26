DefineLockAsset({
	name: 'Easy Combination Lock',
	assetPreferenceDefault: 'prevent',
	chat: {
		chatDescriptor: 'an easy combination lock',
		actionLock: 'SOURCE_CHARACTER clicked the easy combination lock on ITEM_CONTAINER_SIMPLE_DYNAMIC shut.',
		actionUnlock: 'SOURCE_CHARACTER unlocked the easy combination lock on ITEM_CONTAINER_SIMPLE_DYNAMIC.',
	},
	password: {
		length: 3,
		format: 'numeric',
	},
	ownership: {
		responsibleContributor: 'Sekkmer <sekkmer@gmail.com>',
		credits: ['Sekkmer'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Free to use',
		licensing: [],
	},
});
