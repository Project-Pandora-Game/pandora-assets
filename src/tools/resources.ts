import { GetLogger } from 'pandora-common';
import { createHash } from 'crypto';
import { readFileSync, statSync } from 'fs';
import { writeFile, copyFile, unlink, readdir, stat } from 'fs/promises';
import { join, basename } from 'path';
import { AssetSourcePath } from './context';
import { WatchFile } from './watch';
import sharp from 'sharp';

export type ImageCategory = 'asset' | 'roomDevice' | 'background';

const MAX_SIZES: Record<ImageCategory, { bytes: number; text: string; }> = {
	asset: {
		bytes: 1 * 1024 * 1024,
		text: '1MiB',
	},
	roomDevice: {
		bytes: 4 * 1024 * 1024,
		text: '4MiB',
	},
	background: {
		bytes: 4 * 1024 * 1024,
		text: '4MiB',
	},
};

const logger = GetLogger('Resources');

const resources: Map<string, Resource> = new Map();
const resourceFiles: Set<string> = new Set();

let destinationDirectory = '';

async function IsFile(path: string): Promise<boolean> {
	try {
		const result = await stat(path);
		return result.isFile();
	} catch {
		return false;
	}
}

export function SetResourceDestinationDirectory(path: string): void {
	destinationDirectory = path;
}

export abstract class Resource {
	public readonly resultName: string;
	public readonly size: number;
	public readonly hash: string;

	constructor(resultName: string, size: number, hash: string) {
		this.resultName = resultName;
		this.size = size;
		this.hash = hash;
		resources.set(resultName, this);
	}

	public abstract finalize(): Promise<void>;
}

export interface IImageResource extends Resource {
	addResizedImage(maxWidth: number, maxHeight: number, suffix: string): string;
}

class FileResource extends Resource {
	private process: Promise<void>[] = [];
	protected readonly baseName: string;
	protected readonly extension: string;
	protected readonly sourcePath: string;

	constructor(path: string) {
		const sourcePath = join(AssetSourcePath, path);

		if (!statSync(sourcePath).isFile()) {
			throw new Error(`Resource ${path} not found (looking for '${sourcePath}')`);
		}

		const hash = GetResourceFileHash(sourcePath);
		const size = GetResourceFileSize(sourcePath);
		const resultName = basename(sourcePath).replace(/(?=(?:\.[^.]*)?$)/, `_${hash}`);

		super(resultName, size, hash);

		this.sourcePath = sourcePath;
		this.baseName = resultName.replace(/\.[^.]*$/, '');
		this.extension = resultName.replace(/^.*\.([^.]+)$/, '$1');

		if (resourceFiles.has(resultName)) {
			return;
		}

		resourceFiles.add(resultName);
		WatchFile(sourcePath);

		const dest = join(destinationDirectory, resultName);
		this.addProcess(IsFile(dest)
			.then(async (isFile) => {
				if (!isFile) {
					await copyFile(sourcePath, dest);
				}
			}));

		this.addProcess(async () => {
			const { exif, icc, xmp } = await sharp(sourcePath).metadata();
			if (exif || icc || xmp) {
				logger.warning(`Image '${sourcePath}' contains metadata, which is not allowed.`);
			}
		});
	}

	public async finalize(): Promise<void> {
		await Promise.all(this.process);
	}

	protected addProcess(process: Promise<void> | (() => Promise<void>)): void {
		if (typeof process === 'function') {
			process = process();
		}
		this.process.push(process);
	}
}

class InlineResource extends Resource {
	private readonly finished: Promise<void>;

	constructor(resultName: string, hash: string, value: Buffer) {
		super(resultName, value.byteLength, hash);
		if (resourceFiles.has(this.resultName)) {
			this.finished = Promise.resolve();
		} else {
			resourceFiles.add(this.resultName);
			this.finished = writeFile(join(destinationDirectory, this.resultName), value);
		}
	}

	public async finalize(): Promise<void> {
		await this.finished;
	}
}

class ImageResource extends FileResource implements IImageResource {
	constructor(path: string, category: ImageCategory) {
		super(path);
		CheckMaxSize(this, path, category);
	}

	public addResizedImage(maxWidth: number, maxHeight: number, suffix: string): string {
		const name = `${this.baseName}_${suffix}.${this.extension}`;
		if (resourceFiles.has(name))
			return name;

		// Prevent the generated source from being deleted
		resourceFiles.add(name);

		this.addProcess(async () => {
			const dest = join(destinationDirectory, name);
			if (await IsFile(dest))
				return;

			await sharp(this.sourcePath)
				.resize(maxWidth, maxHeight)
				.toFile(dest);
		});
		return name;
	}
}

export function GetResourceBufferHash(value: Buffer): string {
	return createHash('sha256').update(value).digest('base64url');
}

export function GetResourceFileHash(path: string): string {
	return createHash('sha256').update(readFileSync(path)).digest('base64url');
}

export function GetResourceFileSize(path: string): number {
	return statSync(path).size;
}

export function DefineResource(path: string): Resource {
	const resource = new FileResource(path);
	logger.debug(`Registered resource ${resource.resultName}`);
	return resource;
}

export function DefineResourceInline(name: string, value: string | Buffer, resultName?: string): Resource {
	if (typeof value === 'string') {
		value = Buffer.from(value, 'utf8');
	}

	const hash = GetResourceBufferHash(value);
	resultName ??= name.replace(/(?=(?:\.[^.]*)?$)/, `_${hash}`);

	const resource = new InlineResource(resultName, hash, value);

	logger.debug(`Registered resource ${resultName}`);
	return resource;
}

function CheckMaxSize(resource: Resource, name: string, category: ImageCategory) {
	const maxSize = MAX_SIZES[category];
	if (resource.size > maxSize.bytes) {
		logger.warning(`Image '${name}' is larger than maximum allowed size of ${maxSize.text}.`);
	}
}

export function DefinePngResource(name: string, category: ImageCategory): IImageResource {
	if (!name.endsWith('.png')) {
		throw new Error(`Resource ${name} is not a PNG file.`);
	}

	const resource = new ImageResource(name, category);

	logger.debug(`Registered resource ${resource.resultName}`);

	return resource;
}

export function DefineJpgResource(name: string, category: ImageCategory): IImageResource {
	if (!name.endsWith('.jpg')) {
		throw new Error(`Resource ${name} is not a JPG file.`);
	}
	const resource = new ImageResource(name, category);

	logger.debug(`Registered resource ${resource.resultName}`);

	return resource;
}

export function ClearAllResources(): void {
	resources.clear();
	resourceFiles.clear();
}

export async function ExportAllResources(): Promise<void> {
	await Promise.all([...resources.values()]
		.map((resource) => resource.finalize()));
}

export async function CleanOldResources(): Promise<void> {
	const files = await readdir(destinationDirectory);
	const cleanup = files
		.filter((file) => !resourceFiles.has(file));

	logger.debug(`Cleaning old resources: ${cleanup.map((r) => '\n - ' + r).join('')}`);

	await Promise.allSettled(cleanup
		.map((file) => join(destinationDirectory, file))
		.map((path) => unlink(path)),
	);
}
