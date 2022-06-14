import { DefineAsset } from '../../../tools';
import { LoadAssetsGraphics } from '../../../tools/graphics';
import { layers } from './back_hair3.layers';

const graphics = LoadAssetsGraphics(layers);

DefineAsset({
	name: 'Back hair 3',
	graphics,
});
