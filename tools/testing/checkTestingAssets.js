// @ts-check
import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { GetLogger } from 'pandora-common';

/*
This script checks whether the built testing assets match the current version in pandora-common.
If they do not, it means that the version in pandora-common should be updated to match, to avoid tests getting out of sync or breaking.
*/

const logger = GetLogger('Main');

const BASE_PATH = resolve(import.meta.dirname, '../../');
const BUNDLE_PATH = resolve(BASE_PATH, 'out-for-test.tar');
const PANDORA_COMMON_VERSION_FILE = resolve(BASE_PATH, './node_modules/pandora-common/test/testAssetsVersion.txt');

if (!existsSync(BUNDLE_PATH)) {
	throw new Error('out-for-test.tar not found, build test assets first');
}

const bundleData = readFileSync(BUNDLE_PATH);
const bundleHash = createHash('sha256').update(bundleData).digest('base64url');
logger.info('Bundle has hash:', bundleHash);

const currentBundleHash = readFileSync(PANDORA_COMMON_VERSION_FILE, { encoding: 'utf-8' }).trim();

if (currentBundleHash !== bundleHash) {
	process.exitCode = 1;

	logger.warning('The testing bundle hash differs from what Pandora runs automatic tests against.');
	logger.warning('This indicates a change to core assets, which are also used for testing.');
	logger.warning('Please discuss the change with Lead Developers on Discord and get their help with updating the tests to test against the updated assets.');
}
