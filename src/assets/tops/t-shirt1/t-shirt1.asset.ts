import { DefineAsset } from '../../../tools';

DefineAsset({
	name: 'T-Shirt',
	graphics: 'graphics.json',
	colorization: [
		{
			name: 'Shirt',
			default: '#FFFFFF',
		},
		{
			name: 'Print',
			default: '#FFFF00',
		},
	],
});
