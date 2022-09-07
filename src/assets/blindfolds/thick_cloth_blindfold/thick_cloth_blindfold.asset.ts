import { DefineAsset } from '../../../tools';

DefineAsset({
	name: 'Thick Cloth Blindfold',
	graphics: 'graphics.json',
	colorization: [
		{
			name: 'Cloth',
			default: '#FDF3EA',
		},
	],
	actionMessages: {
		itemAdd: 'SOURCE_CHARACTER wrapped many layers of cloth around TARGET_CHARACTER_DYNAMIC head, covering the eyes fully.',
		itemRemove: 'SOURCE_CHARACTER unwrapped the thickly layered cloth blindfold from around TARGET_CHARACTER_DYNAMIC head.',
	},
});
