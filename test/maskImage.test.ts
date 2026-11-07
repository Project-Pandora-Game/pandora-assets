import { describe, expect, it } from '@jest/globals';
import sharp from 'sharp';
import { CreateMaskImage } from '../src/tools/maskImage.ts';

async function Verify(redAlpha: Buffer, width: number, height: number): Promise<void> {
	const rgba = Buffer.alloc(width * height * 4);
	for (let i = 0; i < width * height; i++) {
		rgba[i * 4] = redAlpha[i * 2];
		rgba[i * 4 + 1] = (i * 71) % 256;
		rgba[i * 4 + 2] = 255 - rgba[i * 4];
		rgba[i * 4 + 3] = redAlpha[i * 2 + 1];
	}
	const source = await sharp(rgba, { raw: { width, height, channels: 4 } }).png().toBuffer();
	const mask = await (await CreateMaskImage(sharp(source))).toBuffer();
	expect(mask[25]).toBe(4); // PNG grayscale + alpha; no palette or quantization.
	const { data, info } = await sharp(mask).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
	expect([info.width, info.height, info.channels]).toEqual([width, height, 4]);
	for (let i = 0; i < width * height; i++) {
		if (data[i * 4] !== redAlpha[i * 2] || data[i * 4 + 3] !== redAlpha[i * 2 + 1])
			throw new Error(`Changed mask byte at pixel ${i}`);
	}
}

describe('lossless red and alpha mask images', () => {
	it('preserves every possible red/alpha pair, including red under fully transparent pixels', async () => {
		const pairs = Buffer.alloc(256 * 256 * 2);
		for (let red = 0; red < 256; red++) {
			for (let alpha = 0; alpha < 256; alpha++) {
				const offset = (red * 256 + alpha) * 2;
				pairs[offset] = red;
				pairs[offset + 1] = alpha;
			}
		}
		await Verify(pairs, 256, 256);
	});

	it('adds fully opaque alpha to RGB masks without changing their red channel', async () => {
		const source = await sharp(Buffer.from([17, 255, 0, 201, 0, 255]), { raw: { width: 2, height: 1, channels: 3 } }).png().toBuffer();
		const mask = await (await CreateMaskImage(sharp(source))).toBuffer();
		const { data } = await sharp(mask).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
		expect([...data]).toEqual([17, 17, 17, 255, 201, 201, 201, 255]);
	});
});

it('keeps existing crop and resize results exact and leaves ordinary exports unchanged', async () => {
	const { mkdtemp, readFile, rm, writeFile } = await import('fs/promises');
	const { tmpdir } = await import('os');
	const path = await import('path');
	const context = await import('../src/tools/context.ts');
	const resources = await import('../src/tools/resources.ts');
	const directory = await mkdtemp(path.join(tmpdir(), 'pandora-mask-png-'));
	try {
		const pixels = Buffer.alloc(64 * 48 * 4);
		for (let i = 0; i < 64 * 48; i++) {
			pixels[i * 4] = (i * 47) % 256;
			pixels[i * 4 + 1] = (i * 109) % 256;
			pixels[i * 4 + 2] = (i * 13) % 256;
			pixels[i * 4 + 3] = i % 256;
		}
		const source = await sharp(pixels, { raw: { width: 64, height: 48, channels: 4 } }).png().toBuffer();
		await writeFile(path.join(directory, 'source.png'), source);
		context.SetCurrentContext('test', 'mask', directory);
		resources.SetResourceDestinationDirectory(directory);
		resources.ClearAllResources();
		const original = resources.DefineImageResource('source.png', 'asset', 'png');
		const cropped = original.addCutImageRelative(0.125, 0.25, 0.875, 0.75);
		const ordinary = cropped.addDownscaledImage(0.5);
		const mask = cropped.addMaskImage().addDownscaledImage(0.5);
		expect(mask.resultName.endsWith('_mask_v1_r0.5.png')).toBe(true);
		await resources.ExportAllResources(false);
		expect(await readFile(path.join(directory, original.resultName))).toEqual(source);
		const expected = await sharp(await readFile(path.join(directory, ordinary.resultName))).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
		const config = await import('../src/config.ts');
		if (config.GENERATE_AVIF) {
			const legacyAlias = await readFile(path.join(directory, `${mask.baseName}_${resources.AVIF_SUFFIX}.avif`));
			expect(legacyAlias.length).toBeGreaterThan(0);
		}
		const actualPng = await readFile(path.join(directory, mask.resultName));
		expect(actualPng[25]).toBe(4);
		const actual = await sharp(actualPng).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
		expect([actual.info.width, actual.info.height]).toEqual([expected.info.width, expected.info.height]);
		for (let i = 0; i < expected.info.width * expected.info.height; i++) {
			if (actual.data[i * 4] !== expected.data[i * 4] || actual.data[i * 4 + 3] !== expected.data[i * 4 + 3])
				throw new Error(`Resampling changed mask red/alpha at pixel ${i}`);
		}
	} finally {
		resources.ClearAllResources();
		await rm(directory, { recursive: true, force: true });
	}
});
