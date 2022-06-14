import { DefineAsset } from '../../../tools';
import { LoadAssetsGraphics } from '../../../tools/graphics';
import { layers } from './eyes2.layers';

const graphics = LoadAssetsGraphics(layers);

DefineAsset({
	name: 'Eyes 2',
	graphics,
});
