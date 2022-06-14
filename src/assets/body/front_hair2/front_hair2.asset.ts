import { DefineAsset } from '../../../tools';
import { LoadAssetsGraphics } from '../../../tools/graphics';
import { layers } from './front_hair2.layers';

const graphics = LoadAssetsGraphics(layers);

DefineAsset({
	name: 'Front hair 2',
	graphics,
});
