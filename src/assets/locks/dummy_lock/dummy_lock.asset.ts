DefineAsset({
	name: 'Dummy lock',
	size: 'small',
	wearable: false,
	attributes: ['Lock'],
	modules: {
		state: {
			type: 'typed',
			name: 'State',
			variants: [
				{
					id: 'unlocked',
					name: 'Unlocked',
					default: true,
				},
				{
					id: 'locked',
					name: 'Locked',
					blockAddRemove: true,
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
