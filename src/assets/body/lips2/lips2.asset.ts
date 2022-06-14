import { DefineAsset } from '../../../tools';
import { LoadAssetsGraphics } from '../../../tools/graphics';
import { layers } from './lips2.layers';

const graphics = LoadAssetsGraphics(layers);

DefineAsset({
	name: 'Lips 2',
	graphics,
});
