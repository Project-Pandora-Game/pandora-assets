import { DefineAsset } from '../../../tools';

DefineAsset({
	name: 'Base body',
	bodypart: 'base',
	graphics: 'graphics.json',
	colorization: [
		{
			name: 'Skin',
			default: '#FFECDF',
		},
		{
			name: 'Nipples',
			default: '#FED1CB',
		},
	],
});
