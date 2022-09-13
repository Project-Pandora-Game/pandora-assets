import { DefineAsset } from '../../../tools';

DefineAsset({
	name: 'Metal Collar',
	graphics: 'graphics.json',
	colorization: [
		{
			name: 'Collar',
			default: '#FFFFFF',
		},
		{
			name: 'Ring',
			default: '#FFFFFF',
		},
		{
			name: 'Chains',
			default: '#FFFFFF',
		},
	],
	modules: {
		collarConfig: {
			type: 'typed',
			name: 'Collar Configuration',
			variants: [
				{
					id: 'collar',
					name: 'Collar Only',
					default: true,
				},
				{
					id: 'ring',
					name: 'Collar + Ring',
				},
				{
					id: 'left',
					name: 'Chain Leash Left',
				},
				{
					id: 'right',
					name: 'Chain Leash Right',
				},
				{
					id: 'fixed',
					name: 'Chained To Floor',
					effects: {
						blockRoomMovement: true,
					},
				},
			],
		},
	},
	actionMessages: {
		itemAdd: 'SOURCE_CHARACTER fitted and closed a Metal Collar securely around TARGET_CHARACTER_DYNAMIC neck.',
		itemRemove: 'SOURCE_CHARACTER opened and then removed the Metal Collar from TARGET_CHARACTER_DYNAMIC neck.',
	},
});
