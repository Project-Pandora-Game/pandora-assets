import { join } from 'path';

//#region Networking
/** Port on which will HTTP server listen */
export const SERVER_PORT = process.env.SERVER_PORT ?? '26969';
/** Address the HTTP server will bind to */
export const SERVER_BIND = process.env.SERVER_BIND ?? '127.0.0.1';
/** Path to HTTPS certificate file */
export const SERVER_HTTPS_CERT = process.env.SERVER_HTTPS_CERT ?? '';
/** Path to HTTPS key file */
export const SERVER_HTTPS_KEY = process.env.SERVER_HTTPS_KEY ?? '';
//#endregion

export const GENERATE_AVIF = process.env.GENERATE_AVIF === 'true';
export const OPTIMIZE_TEXTURES = process.env.OPTIMIZE_TEXTURES === 'true';

export const BASE_DIR = join(import.meta.dirname, '..');

export const SRC_DIR = join(BASE_DIR, 'src');
export const ASSET_SRC_DIR = join(SRC_DIR, 'assets');
export const BACKGROUNDS_SRC_DIR = join(SRC_DIR, 'backgrounds');

export const DEST_DIR = join(BASE_DIR, 'dist');
export const ASSET_DEST_DIR = join(DEST_DIR, 'assets');

export const OUT_DIR = join(BASE_DIR, 'out');

export const IS_PRODUCTION_BUILD = process.env.NODE_ENV === 'production' || process.argv.includes('--prod');

export const TRY_AUTOCORRECT_WARNINGS = !IS_PRODUCTION_BUILD && process.env.TRY_AUTOCORRECT_WARNINGS === 'true';
