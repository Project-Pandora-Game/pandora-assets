import { DefineAsset } from '../../../tools';
import { LoadAssetsGraphics } from '../../../tools/graphics';
import { layers } from './lips1.layers';

const graphics = LoadAssetsGraphics(layers);

DefineAsset({
	name: 'Lips 1',
	graphics,
});
