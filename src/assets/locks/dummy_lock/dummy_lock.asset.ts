DefineAsset({
	name: 'Dummy Lock',
	size: 'small',
	wearable: false,
	attributes: ['Lock'],
	chat: {
		chatDescriptor: 'a dummy lock',
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
					switchMessage: 'SOURCE_CHARACTER unlocked the dummy lock on ITEM_CONTAINER_SIMPLE_DYNAMIC.',
				},
				{
					id: 'locked',
					name: 'Locked',
					blockAddRemove: true,
					switchMessage: 'SOURCE_CHARACTER clicked the dummy lock on ITEM_CONTAINER_SIMPLE_DYNAMIC shut.',
					storeTime: true,
					storeCharacter: true,
					customText: [
						'Locked by CHARACTER at TIME',
					],
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
