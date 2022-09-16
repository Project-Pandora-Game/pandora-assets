DefineAsset({
	name: 'Cloth Blindfold',
	graphics: 'graphics.json',
	colorization: [
		{
			name: 'Cloth',
			default: '#FDF3EA',
		},
	],
	actionMessages: {
		itemAdd: 'SOURCE_CHARACTER wrapped a layer of cloth around TARGET_CHARACTER_DYNAMIC head, covering the eyes.',
		itemRemove: 'SOURCE_CHARACTER unwrapped the cloth blindfold from around TARGET_CHARACTER_DYNAMIC head.',
	},
});
