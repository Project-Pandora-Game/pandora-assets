import { DefineAsset } from '../../../tools';
import { LoadAssetsGraphics } from '../../../tools/graphics';
import { layers } from './eyebrows1.layers';

const graphics = LoadAssetsGraphics(layers);

DefineAsset({
	name: 'Eyebrows 1',
	graphics,
});
