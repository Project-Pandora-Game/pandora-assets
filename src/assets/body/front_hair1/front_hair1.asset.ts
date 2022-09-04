import { DefineAsset } from '../../../tools';

DefineAsset({
	name: 'Front hair 1',
	bodypart: 'fronthair',
	graphics: 'graphics.json',
	colorization: [
		{
			name: 'Hair',
			default: '#555555',
		},
		{
			name: 'Hair shine',
			default: '#AAAAAA',
		},
	],
});
