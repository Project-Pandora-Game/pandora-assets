import { DefineAsset } from '../../../tools';
import { LoadAssetsGraphics } from '../../../tools/graphics';
import { layers } from './nose1.layers';

const graphics = LoadAssetsGraphics(layers);

DefineAsset({
	name: 'Nose 1',
	graphics,
});
