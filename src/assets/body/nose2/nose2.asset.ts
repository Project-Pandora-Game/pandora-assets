import { DefineAsset } from '../../../tools';
import { LoadAssetsGraphics } from '../../../tools/graphics';
import { layers } from './nose2.layers';

const graphics = LoadAssetsGraphics(layers);

DefineAsset({
	name: 'Nose 2',
	graphics,
});
