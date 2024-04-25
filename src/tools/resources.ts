import { Assert, GetLogger, SplitStringFirstOccurrence } from 'pandora-common';
import { createHash } from 'crypto';
import { readFileSync, statSync } from 'fs';
import { writeFile, copyFile, unlink, readdir, stat } from 'fs/promises';
import { join, basename } from 'path';
import { AssetSourcePath } from './context';
import { WatchFile } from './watch';
import sharp, { type AvifOptions, type Sharp } from 'sharp';
import { GENERATE_AVIF } from '../constants';

export type ImageCategory = 'asset' | 'roomDevice' | 'background' | 'preview';

const MAX_SIZES = {
	asset: 1 * 1024 * 1024,
	roomDevice: 4 * 1024 * 1024,
	background: 4 * 1024 * 1024,
	preview: 1 * 1024 * 1024,
} as const satisfies Record<ImageCategory, number>;

const SIZE_UNITS = ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB'];

/** Vertical and horizontal size of preview image in pixels */
export const PREVIEW_SIZE = 256;

const logger = GetLogger('Resources');

let resources: Resource[] = [];
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

const AVIF_OPTIONS: AvifOptions = {
	quality: 80,
};
export const AVIF_SUFFIX = GetResourceBufferHash(Buffer.from(JSON.stringify(AVIF_OPTIONS))).substring(0, 8);

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
		resources.push(this);
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
		this.addAVIFConversion('', (s) => s);
	}

	public addResizedImage(maxWidth: number, maxHeight: number, suffix: string): string {
		this.addAVIFConversion(`_${suffix}`, (s) => s.resize(maxWidth, maxHeight));

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

	public addSizeCheck(exactWidth: number, exactHeight: number): void {
		this.addProcess(async () => {
			const { width, height } = await sharp(this.sourcePath).metadata();
			if (width !== exactWidth || height !== exactHeight) {
				logger.warning(`Image '${this.sourcePath}' has size ${width}x${height}, expected ${exactWidth}x${exactHeight}.`);
			}
		});
	}

	private addAVIFConversion(suffix: string, process: (s: Sharp) => Sharp): void {
		if (!GENERATE_AVIF)
			return;

		const name = `${this.baseName}${suffix}_${AVIF_SUFFIX}.avif`;
		if (resourceFiles.has(name))
			return;

		resourceFiles.add(name);
		this.addProcess(async () => {
			const dest = join(destinationDirectory, name);
			if (await IsFile(dest))
				return;

			await process(sharp(this.sourcePath))
				.toFormat('avif', AVIF_OPTIONS)
				.toFile(dest);
		});
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
	const maxBytes = MAX_SIZES[category];
	if (resource.size > maxBytes) {
		let limitSize = maxBytes;
		let unitIndex = 0;
		while (limitSize >= 1024 && (limitSize % 1024) === 0 && unitIndex < (SIZE_UNITS.length - 1)) {
			limitSize /= 1024;
			unitIndex++;
		}
		logger.warning(`Image '${name}' is larger than maximum allowed size of ${limitSize} ${SIZE_UNITS[unitIndex]}`);
	}
}

export function ProcessImageResource(resource: IImageResource, args: string = ''): string {
	let resultName = resource.resultName;

	if (args) {
		const resizeMatch = /^(\d+)x(\d+)$/.exec(args);
		if (resizeMatch) {
			const sizeX = Number.parseInt(resizeMatch[1]);
			const sizeY = Number.parseInt(resizeMatch[2]);
			Assert(Number.isInteger(sizeX));
			Assert(Number.isInteger(sizeY));

			resultName = resource.addResizedImage(sizeX, sizeY, args);
		} else {
			throw new Error(`Invalid arguments '${args}' for resource.`);
		}
	}

	return resultName;
}

export function DefineImageResource(name: string, category: ImageCategory, expectedFormat: 'png' | 'jpg'): ImageResource {
	if (!name.endsWith('.' + expectedFormat)) {
		throw new Error(`Resource ${name} is not a ${expectedFormat.toUpperCase()} file.`);
	}

	const resource = new ImageResource(name, category);

	return resource;
}

export function DefinePngResource(name: string, category: ImageCategory): string {
	const [baseName, args] = SplitStringFirstOccurrence(name, '@');

	if (!baseName.endsWith('.png')) {
		throw new Error(`Resource ${name} is not a PNG file.`);
	}

	const resource = new ImageResource(baseName, category);

	return ProcessImageResource(resource, args);
}

export function DefineJpgResource(name: string, category: ImageCategory): string {
	const [baseName, args] = SplitStringFirstOccurrence(name, '@');

	if (!baseName.endsWith('.jpg')) {
		throw new Error(`Resource ${name} is not a JPG file.`);
	}
	const resource = new ImageResource(baseName, category);

	if (category === 'preview') {
		resource.addSizeCheck(PREVIEW_SIZE, PREVIEW_SIZE);
	}

	return ProcessImageResource(resource, args);
}

export function ClearAllResources(): void {
	resources = [];
	resourceFiles.clear();
}

export async function ExportAllResources(): Promise<void> {
	await Promise.all(resources
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
