import { ItemInteractionType } from 'pandora-common';
import { DefineAsset } from '../../../tools';

DefineAsset({
	name: 'Eyes 4',
	bodypart: 'eyes',
	graphics: 'graphics.json',
	colorization: [
		{
			name: 'Eye color',
			default: '#7e6ae0',
		},
		{
			name: 'Lashes',
			default: '#555555',
		},
		{
			name: 'Eye background',
			default: '#FFFFFF',
		},
		{
			name: 'Shine',
			default: '#FFFFFF',
		},
	],
	modules: {
		pupilType: {
			type: 'typed',
			name: 'Pupil Type',
			expression: 'Eye pupil',
			interactionType: ItemInteractionType.ACCESS_ONLY,
			variants: [
				{
					id: 'largePupils',
					name: 'Large Pupils',
					default: true,
				},
				{
					id: 'smallPupils',
					name: 'Small Pupils',
				},
				{
					id: 'starPupils',
					name: 'Star-shaped Pupils',
				},
				{
					id: 'crossPupils',
					name: 'Cross-shaped Pupils',
				},
				{
					id: 'noPupils',
					name: 'No Pupils',
				},
			],
		},
		eyeState: {
			type: 'typed',
			name: 'Eye State',
			expression: 'Eyes',
			interactionType: ItemInteractionType.ACCESS_ONLY,
			variants: [
				{
					id: 'normal',
					name: 'Normal',
					default: true,
				},
				{
					id: 'closed',
					name: 'Closed',
				},
			],
		},
	},
});
