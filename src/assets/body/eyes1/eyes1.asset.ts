import { DefineAsset } from '../../../tools';
import { LoadAssetsGraphics } from '../../../tools/graphics';
import { layers } from './eyes1.layers';

const graphics = LoadAssetsGraphics(layers);

DefineAsset({
	name: 'Eyes 1',
	graphics,
});
