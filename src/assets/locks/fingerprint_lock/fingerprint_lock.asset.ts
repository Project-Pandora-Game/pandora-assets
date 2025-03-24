DefineLockAsset({
	name: 'Fingerprint Lock',
	assetPreferenceDefault: 'maybe',
	lockSetup: {
		fingerprint: {
			maxFingerprints: 10,
		},
	},
	chat: {
		chatDescriptor: 'a fingerprint lock',
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
