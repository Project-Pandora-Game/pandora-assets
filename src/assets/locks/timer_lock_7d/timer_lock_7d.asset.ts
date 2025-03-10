DefineLockAsset({
	name: 'Timer Lock (7d)',
	assetPreferenceDefault: 'prevent',
	lockSetup: {
		timer: {
			maxDuration: 7 * 24 * 60 * 60 * 1000,
		},
	},
	chat: {
		chatDescriptor: 'a 7 days max timer lock',
		actionLock: 'SOURCE_CHARACTER clicked ITEM_ASSET_NAME on ITEM_CONTAINER_SIMPLE_DYNAMIC shut.',
		actionUnlock: 'SOURCE_CHARACTER unlocked ITEM_ASSET_NAME on ITEM_CONTAINER_SIMPLE_DYNAMIC.',
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
		],
	},
});
