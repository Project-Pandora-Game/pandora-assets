DefineLockAsset({
	name: 'Password Lock',
	assetPreferenceDefault: 'prevent',
	lockSetup: {
		password: {
			length: [3, 8],
			format: 'alphanumeric',
		},
	},
	chat: {
		chatDescriptor: 'a password lock',
	},
	ownership: {
		responsibleContributor: 'Sekkmer <sekkmer@gmail.com>',
		credits: ['Sekkmer'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Free to use',
		licensing: [],
	},
});
