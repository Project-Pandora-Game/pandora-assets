DefineLockAsset({
	name: 'Combination Lock',
	assetPreferenceDefault: 'prevent',
	lockSetup: {
		password: {
			length: 4,
			format: 'numeric',
		},
	},
	chat: {
		chatDescriptor: 'a combination lock',
	},
	ownership: {
		responsibleContributor: 'Sekkmer <sekkmer@gmail.com>',
		credits: ['Sekkmer'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Free to use',
		licensing: [],
	},
});
