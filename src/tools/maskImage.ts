import sharp, { type Sharp } from 'sharp';

/** Preserve the sampled red and alpha bytes; grayscale conversion of RGB would change red. */
export async function CreateMaskImage(image: Sharp): Promise<Sharp> {
	const { data, info } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
	const grayAlpha = Buffer.allocUnsafe(info.width * info.height * 2);
	for (let pixel = 0; pixel < info.width * info.height; pixel++) {
		grayAlpha[pixel * 2] = data[pixel * info.channels];
		grayAlpha[pixel * 2 + 1] = data[pixel * info.channels + info.channels - 1];
	}
	return sharp(grayAlpha, { raw: { width: info.width, height: info.height, channels: 2 } })
		.toColourspace('b-w')
		.png({ compressionLevel: 9 });
}
