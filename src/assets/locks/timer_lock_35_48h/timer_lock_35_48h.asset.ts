DefineLockAsset({
	id: 'a/locks/timer_lock', //different for backward compatibility reasons
	name: 'Timer Lock (48h)',
	assetPreferenceDefault: 'maybe',
	lockSetup: {
		timer: {
			maxDuration: 2 * 24 * 60 * 60 * 1000,
		},
	},
	chat: {
		chatDescriptor: 'a timer lock',
	},
	ownership: {
		responsibleContributor: 'Livie53 <itsalive53.cr1mson@gmail.com>',
		credits: ['Livie53'],
		modificationPolicy: 'Free to change',
		reusePolicy: 'Free to use',
		licensing: [],
	},
});
