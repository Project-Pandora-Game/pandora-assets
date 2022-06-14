import { DefineAsset } from '../../../tools';
import { LoadAssetsGraphics } from '../../../tools/graphics';
import { layers } from './eyebrows2.layers';

const graphics = LoadAssetsGraphics(layers);

DefineAsset({
	name: 'Eyebrows 2',
	graphics,
});
