import { ItemInteractionType } from 'pandora-common';
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
		{
			name: 'Socket',
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
					poseLimits: {
						forcePose: {
							sitting: 0,
							kneeling: 0,
						},
					},
					effects: {
						blockRoomMovement: true,
					},
				},
				{
					id: 'fixedKneeling',
					name: 'Chained To Floor Kneeling',
					poseLimits: {
						forcePose: {
							sitting: 0,
							kneeling: 180,
						},
					},
					effects: {
						blockRoomMovement: true,
					},
				},
			],
		},
		collarType: {
			type: 'typed',
			name: 'Collar Type',
			interactionType: ItemInteractionType.ADD_REMOVE,
			variants: [
				{
					id: 'normal',
					name: 'Normal Collar',
					default: true,
				},
				{
					id: 'thick',
					name: 'Thick Collar',
				},
			],
		},
	},
	actionMessages: {
		itemAdd: 'SOURCE_CHARACTER fitted and closed a Metal Collar securely around TARGET_CHARACTER_DYNAMIC neck.',
		itemRemove: 'SOURCE_CHARACTER opened and then removed the Metal Collar from TARGET_CHARACTER_DYNAMIC neck.',
	},
});
