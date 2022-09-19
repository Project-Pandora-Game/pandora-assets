import { join } from 'path';

export const ASSET_DEST_DIR = join(__dirname, 'assets');
export const SRC_DIR = join(__dirname, '..', 'src');
export const ASSET_SRC_DIR = join(SRC_DIR, 'assets');
export const DEST_DIR = join(__dirname, '..', 'out');

export const IS_PRODUCTION_BUILD = process.env.NODE_ENV === 'production' || process.argv.includes('--prod');
