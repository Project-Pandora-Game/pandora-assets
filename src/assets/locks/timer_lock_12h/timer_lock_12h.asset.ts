DefineLockAsset({
	name: 'Timer Lock (12h)',
	assetPreferenceDefault: 'maybe',
	lockSetup: {
		timer: {
			maxDuration: 12 * 60 * 60 * 1000,
		},
	},
	chat: {
		chatDescriptor: 'a timer lock',
		actionLock: 'SOURCE_CHARACTER clicked ITEM_ASSET_NAME on ITEM_CONTAINER_SIMPLE_DYNAMIC shut.',
		actionUnlock: 'SOURCE_CHARACTER unlocked ITEM_ASSET_NAME on ITEM_CONTAINER_SIMPLE_DYNAMIC.',
	},
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [],
	},
});
