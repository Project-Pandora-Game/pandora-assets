import { DefineAsset } from '../../../tools';
import { LoadAssetsGraphics } from '../../../tools/graphics';
import { layers } from './body.layers';

const graphics = LoadAssetsGraphics(layers);

DefineAsset({
	name: 'Body',
	graphics,
});
