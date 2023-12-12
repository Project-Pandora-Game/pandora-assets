import { GetLogger, SetConsoleOutput, LogLevel, logConfig } from 'pandora-common';
import * as fs from 'fs';
import Jimp from 'jimp';

const logger = GetLogger('Main');
SetConsoleOutput(LogLevel.DEBUG);

function CalculateMaxColors(image: Jimp): [number, number, number] {
	let maxR = 1;
	let maxG = 1;
	let maxB = 1;

	image.scanQuiet(0, 0, image.bitmap.width, image.bitmap.height, (_x, _y, index) => {
		// Ignore pixels under certain opacity
		if (image.bitmap.data[index + 3] < 64)
			return;
		maxR = Math.max(maxR, image.bitmap.data[index + 0]);
		maxG = Math.max(maxG, image.bitmap.data[index + 1]);
		maxB = Math.max(maxB, image.bitmap.data[index + 2]);
	});

	return [maxR, maxG, maxB];
}

function ColorsToTint(r: number, g: number, b: number): string {
	return `#${(0x10000 * r + 0x100 * g + b).toString(16).padStart(6, '0').toUpperCase()}`;
}

function Normalize(image: Jimp, maxR: number, maxG: number, maxB: number): void {
	const multiplierR = 0xFF / maxR;
	const multiplierG = 0xFF / maxG;
	const multiplierB = 0xFF / maxB;

	// apply value transformations
	image.scanQuiet(0, 0, image.bitmap.width, image.bitmap.height, (_x, _y, index) => {
		// Just skip completely transparent pixels
		if (image.bitmap.data[index + 3] < 1)
			return;
		const r = image.bitmap.data[index + 0] || 1;
		const g = image.bitmap.data[index + 1] || 1;
		const b = image.bitmap.data[index + 2] || 1;

		image.bitmap.data[index + 0] = Math.min(255, Math.round(r * multiplierR));
		image.bitmap.data[index + 1] = Math.min(255, Math.round(g * multiplierG));
		image.bitmap.data[index + 2] = Math.min(255, Math.round(b * multiplierB));
	});
}

async function Run() {

	const images: {
		image: Jimp;
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
			const image = await Jimp.read(target);
			const resultPath = target; //.replace(/\.[^.]+$|$/, (v) => `.processed${v}`);

			images.push({
				image,
				originalSize,
				resultPath,
			});

			const [r, g, b] = CalculateMaxColors(image);
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

	logger.alert('');
	logger.alert(`Tint: ${ColorsToTint(maxR, maxG, maxB)}`);
	logger.alert('');

	for (const { image, originalSize, resultPath } of images) {
		try {

			logger.info('Processing:', resultPath);

			Normalize(image, maxR, maxG, maxB);

			image.filterType(Jimp.PNG_FILTER_AUTO);
			image.deflateStrategy(0);
			image.deflateLevel(9);
			await image.writeAsync(resultPath);
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
