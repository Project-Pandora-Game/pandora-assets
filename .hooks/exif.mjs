import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { rename } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const BASE_DIR = join(__dirname, '..');

const [mode, input] = process.argv.slice(2);

const path = join(BASE_DIR, input);

/**
 * @param {sharp.Sharp} image
 * @returns {Promise<boolean>}
 */
async function HasMeta(image) {
	const { exif, icc, xmp } = await image.metadata();
	return exif || icc || xmp;
}

try {
	switch (mode) {
		case '-c':
		case '--check': {
			const image = sharp(path);
			const hasExif = await HasMeta(image);
			if (hasExif) {
				console.error(`Image ${path} has meta data (EXIF or ICC or XMP)`);
				process.exit(1);
			}
			break;
		}
		case '-r':
		case '--remove': {
			const image = sharp(path);
			if (await HasMeta(image)) {
				const tempName = path.replace(/\.([^.]+)$/, '.tmp.$1');
				await image.toFile(tempName);
				await rename(tempName, path);
			}
			break;
		}
		default:
			console.error(`Unknown mode ${mode}`);
			process.exit(1);
	}
} catch (error) {
	console.error(error);
	process.exit(1);
}
