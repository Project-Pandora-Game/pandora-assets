import * as fs from 'fs';
import { Assert, GetLogger, LogLevel, SetConsoleOutput, logConfig } from 'pandora-common';
import sharp, { type PngOptions, type Sharp } from 'sharp';

const logger = GetLogger('Main');
SetConsoleOutput(LogLevel.DEBUG);

async function CalculateMaxColors(image: Sharp): Promise<[number, number, number]> {
	let maxR = 1;
	let maxG = 1;
	let maxB = 1;

	const { data, info } = await image
		.ensureAlpha(1)
		.raw()
		.toBuffer({ resolveWithObject: true });

	Assert(data.length === (info.width * info.height * 4));

	for (let iy = 0; iy < info.height; iy++) {
		for (let ix = 0; ix < info.width; ix++) {
			const index = (iy * info.width + ix) * 4;

			// Ignore pixels under certain opacity
			if (data[index + 3] < 64)
				continue;

			maxR = Math.max(maxR, data[index + 0]);
			maxG = Math.max(maxG, data[index + 1]);
			maxB = Math.max(maxB, data[index + 2]);
		}
	}

	return [maxR, maxG, maxB];
}

function ColorsToTint(r: number, g: number, b: number): string {
	return `#${(0x10000 * r + 0x100 * g + b).toString(16).padStart(6, '0').toUpperCase()}`;
}

async function Normalize(image: Sharp, maxR: number, maxG: number, maxB: number): Promise<Sharp> {
	const multiplierR = 0xFF / maxR;
	const multiplierG = 0xFF / maxG;
	const multiplierB = 0xFF / maxB;

	// apply value transformations
	const { data, info } = await image
		.ensureAlpha(1)
		.raw()
		.toBuffer({ resolveWithObject: true });

	Assert(data.length === (info.width * info.height * 4));

	for (let iy = 0; iy < info.height; iy++) {
		for (let ix = 0; ix < info.width; ix++) {
			const index = (iy * info.width + ix) * 4;

			// Just skip completely transparent pixels
			if (data[index + 3] < 1)
				continue;

			const r = data[index + 0] || 1;
			const g = data[index + 1] || 1;
			const b = data[index + 2] || 1;

			data[index + 0] = Math.min(255, Math.round(r * multiplierR));
			data[index + 1] = Math.min(255, Math.round(g * multiplierG));
			data[index + 2] = Math.min(255, Math.round(b * multiplierB));
		}
	}

	return sharp(data, {
		raw: {
			channels: 4,
			width: info.width,
			height: info.height,
		},
	});
}

async function Run() {

	const images: {
		image: () => Sharp;
		originalSize: number;
		resultPath: string;
	}[] = [];

	let maxR = 1;
	let maxG = 1;
	let maxB = 1;
	let isForced = false;

	for (const target of process.argv.slice(2)) {
		if (target.startsWith('#')) {
			const rgb = Number.parseInt(target.slice(1), 16);
			maxR = Math.floor(rgb / 0x10000) % 0x100;
			maxG = Math.floor(rgb / 0x100) % 0x100;
			maxB = Math.floor(rgb / 0x1) % 0x100;
			isForced = true;
			continue;
		}

		try {
			if (!fs.existsSync(target) || !fs.statSync(target).isFile()) {
				logger.fatal('File not found:', target);
				continue;
			}

			logger.info('Loading:', target);

			const originalSize = fs.statSync(target).size;
			const image = () => sharp(target);
			const resultPath = target; //.replace(/\.[^.]+$|$/, (v) => `.processed${v}`);

			images.push({
				image,
				originalSize,
				resultPath,
			});

			const [r, g, b] = await CalculateMaxColors(image());
			logger.debug(`\tMaxcolor: ${ColorsToTint(r, g, b)}`);

			if (!isForced) {
				maxR = Math.max(maxR, r);
				maxG = Math.max(maxG, g);
				maxB = Math.max(maxB, b);
			}
		} catch (error) {
			logger.fatal(`Error processing file '${target}':\n`, error);
		}
	}

	if (maxR === 0xFF && maxG === 0xFF && maxB === 0xFF) {
		logger.warning('The image(s) cannot be whitened further without loosing color precision. Nothing to do.');
		return;
	}

	logger.alert('');
	logger.alert(`Tint: ${ColorsToTint(maxR, maxG, maxB)}`);
	logger.alert('');

	for (const { image, originalSize, resultPath } of images) {
		try {

			logger.info('Processing:', resultPath);

			const normalizedImage = await Normalize(image(), maxR, maxG, maxB);

			const PNG_OPTIONS: PngOptions = {
				compressionLevel: 9,
			};
			await normalizedImage
				.toFormat('png', PNG_OPTIONS)
				.toFile(resultPath + '.tmp');

			// We save to temporary file as sharp cannot overwrite in-place. Replace old file with new one afterwards.
			fs.renameSync(resultPath + '.tmp', resultPath);

			const resultSize = fs.statSync(resultPath).size;
			logger.info(`\tDone; ${originalSize} -> ${resultSize}`);

		} catch (error) {
			logger.fatal(`Error processing file '${resultPath}':\n`, error);
		}
	}

	logger.info('Done!');
}

// On fatal error in non-watch environment set failure exit code
logConfig.onFatal.push(() => {
	process.exitCode = 1;
});
// Run
Run().catch((error) => {
	logger.fatal('Error:\n', error);
});
