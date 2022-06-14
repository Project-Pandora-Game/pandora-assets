import { DefineAsset } from '../../../tools';
import { LoadAssetsGraphics } from '../../../tools/graphics';
import { layers } from './back_hair2.layers';

const graphics = LoadAssetsGraphics(layers);

DefineAsset({
	name: 'Back hair 2',
	graphics,
});
