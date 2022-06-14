import { DefineAsset } from '../../../tools';
import { LoadAssetsGraphics } from '../../../tools/graphics';
import { layers } from './front_hair3.layers';

const graphics = LoadAssetsGraphics(layers);

DefineAsset({
	name: 'Front hair 3',
	graphics,
});
