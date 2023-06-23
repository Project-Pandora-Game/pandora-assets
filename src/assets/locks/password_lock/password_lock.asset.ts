DefineLockAsset({
	name: 'Password Lock',
	chat: {
		chatDescriptor: 'a password lock',
		actionLock: 'SOURCE_CHARACTER clicked the password lock on ITEM_CONTAINER_SIMPLE_DYNAMIC shut.',
		actionUnlock: 'SOURCE_CHARACTER unlocked the password lock on ITEM_CONTAINER_SIMPLE_DYNAMIC.',
	},
	password: {
		length: [3, 8],
		format: 'alphanumeric',
	},
	ownership: {
		responsibleContributor: 'Sekkmer <sekkmer@gmail.com>',
		credits: ['Sekkmer'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Free to use',
		licensing: [],
	},
});
