DefineLockAsset({
	name: 'Timer Lock',
	assetPreferenceDefault: 'maybe',
	lockSetup: {
		timer: {
			maxMinutes: 24 * 60,
		},
	},
	chat: {
		chatDescriptor: 'a timer lock',
		actionLock: 'SOURCE_CHARACTER clicked ITEM_ASSET_NAME on ITEM_CONTAINER_SIMPLE_DYNAMIC shut.',
		actionUnlock: 'SOURCE_CHARACTER unlocked ITEM_ASSET_NAME on ITEM_CONTAINER_SIMPLE_DYNAMIC.',
	},
	ownership: {
		responsibleContributor: 'Livie53 <itsalive53.cr1mson@gmail.com>',
		credits: ['Livie53'],
		modificationPolicy: 'Free to change',
		reusePolicy: 'Free to use',
		licensing: [],
	},
});
