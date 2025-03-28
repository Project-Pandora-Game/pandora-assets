DefineLockAsset({
	name: 'Timer Lock (7d)',
	assetPreferenceDefault: 'prevent',
	lockSetup: {
		timer: {
			maxDuration: 7 * 24 * 60 * 60 * 1000,
		},
	},
	chat: {
		chatDescriptor: 'a timer lock',
	},
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [],
	},
});
