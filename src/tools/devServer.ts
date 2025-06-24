import * as express from 'express';
import * as fs from 'fs';
import { Server as HttpServer } from 'http';
import { Server as HttpsServer } from 'https';
import { GetLogger } from 'pandora-common';
import { OUT_DIR, SERVER_BIND, SERVER_HTTPS_CERT, SERVER_HTTPS_KEY, SERVER_PORT } from '../config.ts';

const logger = GetLogger('Server');

let server: HttpServer;

/** Create request handler for serving assets */
export function AssetsServe(): express.RequestHandler {
	return express.static(OUT_DIR, {
		dotfiles: 'ignore',
		lastModified: true,
		cacheControl: true,
		maxAge: 1000,
		immutable: false,
		etag: false,
	});
}

/** Setup HTTP server and everything related to it */
export function StartHttpServer(): Promise<void> {
	const port = Number.parseInt(SERVER_PORT);
	if (!Number.isInteger(port)) {
		throw new Error('Invalid SERVER_PORT');
	}

	// Setup Express application
	const expressApp = express.default()
		.disable('x-powered-by');

	expressApp.use(function (req, res, next) {
		res.header('Access-Control-Allow-Origin', req.get('Origin') || '*');
		res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
		res.header('Access-Control-Expose-Headers', 'Content-Length');
		res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');

		// This is a development server - caching is not necessary or wanted
		res.header('Cache-Control', 'no-store');

		if (req.method === 'OPTIONS') {
			res.sendStatus(200);
			return;
		} else {
			return next();
		}
	});

	// Setup HTTP(S) server
	if (SERVER_HTTPS_CERT || SERVER_HTTPS_KEY) {
		// Read cert+key files in case of HTTPS
		if (!SERVER_HTTPS_CERT || !SERVER_HTTPS_KEY) {
			throw new Error('Only one of SERVER_HTTPS_CERT and SERVER_HTTPS_KEY supplied');
		}
		let certData: string;
		try {
			certData = fs.readFileSync(SERVER_HTTPS_CERT, { encoding: 'utf-8' });
		} catch (e) {
			GetLogger('StartHttpServer').error('Failed to read SERVER_HTTPS_CERT file', e);
			throw new Error('Failed to read SERVER_HTTPS_CERT file');
		}
		let keyData: string;
		try {
			keyData = fs.readFileSync(SERVER_HTTPS_KEY, { encoding: 'utf-8' });
		} catch (e) {
			GetLogger('StartHttpServer').error('Failed to read SERVER_HTTPS_KEY file', e);
			throw new Error('Failed to read SERVER_HTTPS_KEY file');
		}
		server = new HttpsServer({
			cert: certData,
			key: keyData,
		}, (req, res) => {
			expressApp(req, res);
		});
	} else {
		server = new HttpServer((req, res) => {
			expressApp(req, res);
		});
	}
	// Host assets
	expressApp.use('/assets', AssetsServe());

	// Error handling
	const expressErrorHandler: express.ErrorRequestHandler = (err: unknown, req, res, _next): void => {
		logger.error(`Error during handling of '${req.method} ${req.url}':\n`, err);
		res.sendStatus(500);
	};
	expressApp.use(expressErrorHandler);

	// Start listening
	return new Promise((resolve, reject) => {
		// Catch error during port open
		server.once('error', reject);
		server.listen(port, SERVER_BIND, () => {
			// Port open didn't error
			server.off('error', reject);
			// Setup error logging
			server.on('error', (error) => {
				logger.error('HTTP server Error:', error);
			});
			// Finalize start
			server.unref();
			logger.info(`HTTP server started on port ${port}`);
			resolve();
		});
	});
}
