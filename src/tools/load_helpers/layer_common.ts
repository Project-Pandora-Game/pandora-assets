import { DefineImageResource, type IImageResource } from '../resources.ts';

export function LoadLayerImageResource(image: string): IImageResource {
	return DefineImageResource(image, 'asset', 'png');
}
