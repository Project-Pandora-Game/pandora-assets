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
	},
	ownership: {
		responsibleContributor: 'Sekkmer <sekkmer@gmail.com>',
		credits: ['Sekkmer'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Free to use',
		licensing: [],
	},
});
