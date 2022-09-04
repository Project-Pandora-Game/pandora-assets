import { DefineAsset } from '../../../tools';

DefineAsset({
	name: 'Base body',
	bodypart: 'base',
	graphics: 'graphics.json',
	colorization: [
		{
			name: 'Skin',
			default: '#FFFFFF',
		},
		{
			name: 'Nipples',
			default: '#FFFFFF',
		},
	],
});
