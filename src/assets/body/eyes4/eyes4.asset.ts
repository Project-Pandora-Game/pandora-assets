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
});
