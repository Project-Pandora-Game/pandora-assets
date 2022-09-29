import { join } from 'path';

export const BASE_DIR = join(__dirname, '..');

export const SRC_DIR = join(BASE_DIR, 'src');
export const ASSET_SRC_DIR = join(SRC_DIR, 'assets');
export const BACKGROUNDS_SRC_DIR = join(SRC_DIR, 'backgrounds');

export const DEST_DIR = join(BASE_DIR, 'dist');
export const ASSET_DEST_DIR = join(DEST_DIR, 'assets');

export const OUT_DIR = join(BASE_DIR, 'out');

export const IS_PRODUCTION_BUILD = process.env.NODE_ENV === 'production' || process.argv.includes('--prod');
