// @ts-check
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import zlib, { zstdCompressSync } from 'node:zlib';
import { GetLogger } from 'pandora-common';

const logger = GetLogger('Main');

const BASE_PATH = resolve(import.meta.dirname, '../../');
const BUNDLE_PATH = resolve(BASE_PATH, 'out-for-test.tar');
const FINAL_BUNDLE_PATH = resolve(BASE_PATH, '../test-assets-%v.tar.zst');
const VERSION_FILE_PATH = resolve(BASE_PATH, '../pandora/pandora-common/test/testAssetsVersion.txt');

if (!existsSync(BUNDLE_PATH)) {
	throw new Error('out-for-test.tar not found, build test assets first');
}

const bundleData = readFileSync(BUNDLE_PATH);
const bundleHash = createHash('sha256').update(bundleData).digest('base64url');
logger.info('Bundle has hash:', bundleHash);

const compressedBundle = zstdCompressSync(bundleData, {
	params: {
		[zlib.constants.ZSTD_c_compressionLevel]: 19,
		[zlib.constants.ZSTD_c_windowLog]: 31,
	},
});

writeFileSync(FINAL_BUNDLE_PATH.replace('%v', bundleHash), compressedBundle);

if (existsSync(VERSION_FILE_PATH)) {
	writeFileSync(VERSION_FILE_PATH, bundleHash, { encoding: 'utf-8' });
} else {
	logger.warning('Pandora common version file not found, skipping update.');
}
