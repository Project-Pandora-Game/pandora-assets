import { DefineAsset } from '../../../tools';
import { LoadAssetsGraphics } from '../../../tools/graphics';
import { layers } from './base.layers';

const graphics = LoadAssetsGraphics(layers);

DefineAsset({
	name: 'Base body',
	graphics,
});
