import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const BASE_DIR = join(__dirname, '..');

const [mode, input] = process.argv.slice(2);

const path = join(BASE_DIR, input);

/**
 * @param {sharp.Sharp} image
 * @returns {Promise<boolean>}
 */
async function HasExif(image) {
	const { exif } = await image.metadata();
	return exif != null;
}

try {
	switch (mode) {
		case '-c':
		case '--check': {
			const image = sharp(path);
			const hasExif = await HasExif(image);
			if (hasExif) {
				console.error(`Image ${path} has EXIF data`);
				process.exit(1);
			}
			break;
		}
		case '-r':
		case '--remove': {
			const image = sharp(path);
			const hasExif = await HasExif(image);
			if (hasExif) {
				await image.toFile(path);
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
