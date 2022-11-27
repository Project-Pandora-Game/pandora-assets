DefineAsset({
	name: 'Exclusive Lock',
	size: 'small',
	wearable: false,
	attributes: ['Lock'],
	chat: {
		chatDescriptor: 'an exclusive lock',
	},
	modules: {
		state: {
			type: 'typed',
			name: 'State',
			variants: [
				{
					id: 'unlocked',
					name: 'Unlocked',
					default: true,
					switchMessage: 'SOURCE_CHARACTER unlocked the exclusive lock on ITEM_CONTAINER_SIMPLE_DYNAMIC',
				},
				{
					id: 'locked',
					name: 'Locked',
					blockAddRemove: true,
					blockSelfModules: ['state'],
					switchMessage: 'SOURCE_CHARACTER clicked the exclusive lock on ITEM_CONTAINER_SIMPLE_DYNAMIC shut',
				},
			],
		},
	},
	ownership: {
		responsibleContributor: 'Jomshir98 <jomshir98@protonmail.com>',
		credits: ['Jomshir'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Free to use',
		licensing: [],
	},
});
