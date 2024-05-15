import { createHash } from 'crypto';
import { readFileSync, statSync } from 'fs';
import { copyFile, readdir, stat, unlink, writeFile } from 'fs/promises';
import { availableParallelism } from 'os';
import { Assert, GetLogger, SplitStringFirstOccurrence } from 'pandora-common';
import { basename, join } from 'path';
import sharp, { type AvifOptions, type Sharp } from 'sharp';
import { GENERATE_AVIF } from '../constants';
import { AssetSourcePath } from './context';
import { WatchFile } from './watch';

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
	public readonly baseName: string;
	public readonly extension: string;

	public readonly size: number;
	public readonly hash: string;
	private _processes: (() => Promise<void>)[] = [];

	constructor(resultName: string, size: number, hash: string) {
		this.resultName = resultName;
		this.baseName = resultName.replace(/\.[^.]*$/, '');
		this.extension = resultName.replace(/^.*\.([^.]+)$/, '$1');
		this.size = size;
		this.hash = hash;
		resources.push(this);
	}

	protected addProcess(process: (() => Promise<void>)): void {
		this._processes.push(process);
	}

	public getProcesses(): readonly (() => Promise<void>)[] {
		return this._processes;
	}
}

export interface IImageResource extends Resource {
	addResizedImage(maxWidth: number, maxHeight: number, suffix: string): IImageResource;
	addDownscaledImage(resolution: number): string;
	addSizeCheck(exactWidth: number, exactHeight: number): void;
	loadImageSharp(): Sharp | Promise<Sharp>;
}

class FileResource extends Resource {
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

		WatchFile(sourcePath);

		this.addProcess(async () => {
			if (resourceFiles.has(resultName)) {
				return;
			}
			resourceFiles.add(resultName);
			const dest = join(destinationDirectory, resultName);

			if (await IsFile(dest))
				return;

			await copyFile(sourcePath, dest);
		});

		this.addProcess(async () => {
			const { exif, icc, xmp } = await sharp(sourcePath).metadata();
			if (exif || icc || xmp) {
				logger.warning(`Image '${sourcePath}' contains metadata, which is not allowed.`);
			}
		});
	}
}

class InlineResource extends Resource {
	private readonly value: Buffer;

	constructor(resultName: string, hash: string, value: Buffer) {
		super(resultName, value.byteLength, hash);
		this.value = value;
		this.addProcess(() => this._process());
	}

	private _process(): Promise<void> {
		if (resourceFiles.has(this.resultName)) {
			return Promise.resolve();
		}
		resourceFiles.add(this.resultName);
		return writeFile(join(destinationDirectory, this.resultName), this.value);
	}
}

type SharpImageGenerator = (sharp: Sharp) => Sharp | Promise<Sharp>;

class ImageResource extends FileResource implements IImageResource {
	constructor(path: string, category: ImageCategory) {
		super(path);
		CheckMaxSize(this, path, category);
		this._addAVIFConversion('', (s) => s);
	}

	public addResizedImage(maxWidth: number, maxHeight: number, suffix: string): IImageResource {
		return new GeneratedImageResource(this, `_${suffix}`, (s) => s.resize(maxWidth, maxHeight));
	}

	public addDownscaledImage(resolution: number): string {
		const process: SharpImageGenerator = async (s) => {
			const meta = await s.metadata();
			Assert(meta.width != null, 'Failed to get image width');
			Assert(meta.height != null, 'Failed to get image height');

			return s
				.resize(Math.ceil(resolution * meta.width), Math.ceil(resolution * meta.height), {
					fit: 'fill',
					kernel: 'lanczos3',
					fastShrinkOnLoad: false,
				})
				.sharpen();
		};

		this._addAVIFConversion(`_r${resolution}`, process);

		const name = `${this.baseName}_r${resolution}.${this.extension}`;
		if (resourceFiles.has(name))
			return name;

		// Prevent the generated source from being deleted
		resourceFiles.add(name);

		this.addProcess(async () => {
			const dest = join(destinationDirectory, name);
			if (await IsFile(dest))
				return;

			await (await process(this.loadImageSharp()))
				.toFile(dest);
		});
		return name;
	}

	public addSizeCheck(exactWidth: number, exactHeight: number): void {
		this.addProcess(async () => {
			const { width, height } = await this.loadImageSharp().metadata();
			if (width !== exactWidth || height !== exactHeight) {
				logger.warning(`Image '${this.sourcePath}' has size ${width}x${height}, expected ${exactWidth}x${exactHeight}.`);
			}
		});
	}

	private _addAVIFConversion(suffix: string, process: SharpImageGenerator): void {
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

			await (await process(this.loadImageSharp()))
				.toFormat('avif', AVIF_OPTIONS)
				.toFile(dest);
		});
	}

	public loadImageSharp(): Sharp {
		return sharp(this.sourcePath);
	}
}

class GeneratedImageResource extends Resource implements IImageResource {
	private readonly _baseImage: IImageResource;
	private readonly _generator: SharpImageGenerator;

	constructor(baseImage: IImageResource, suffix: string, generator: SharpImageGenerator) {
		super(baseImage.baseName + suffix + baseImage.extension, baseImage.size, baseImage.hash);
		this._baseImage = baseImage;
		this._generator = generator;

		// Base export

		if (!resourceFiles.has(this.resultName)) {
			// Prevent the generated source from being deleted
			resourceFiles.add(this.resultName);

			this.addProcess(async () => {
				const dest = join(destinationDirectory, this.resultName);
				if (await IsFile(dest))
					return;

				const result = await generator(await this.loadImageSharp());
				await result.toFile(dest);
			});
		}

		this._addAVIFConversion('', (s) => s);
	}

	public addResizedImage(maxWidth: number, maxHeight: number, suffix: string): IImageResource {
		return new GeneratedImageResource(this, `_${suffix}`, (s) => s.resize(maxWidth, maxHeight));
	}

	public addDownscaledImage(resolution: number): string {
		const generator = async (s: Sharp): Promise<Sharp> => {
			const meta = await s.metadata();
			Assert(meta.width != null, 'Failed to get image width');
			Assert(meta.height != null, 'Failed to get image height');

			// Skip downscaling in CI to speed things up by a lot.
			if (process.env.CI_SKIP_DOWNSCALE === 'true') {
				return s;
			}

			return s
				.resize(Math.ceil(resolution * meta.width), Math.ceil(resolution * meta.height), {
					fit: 'fill',
					kernel: 'lanczos3',
					fastShrinkOnLoad: false,
				})
				.sharpen();
		};

		this._addAVIFConversion(`_r${resolution}`, generator);

		const name = `${this.baseName}_r${resolution}.${this.extension}`;
		if (resourceFiles.has(name))
			return name;

		// Prevent the generated source from being deleted
		resourceFiles.add(name);

		this.addProcess(async () => {
			const dest = join(destinationDirectory, name);
			if (await IsFile(dest))
				return;

			await (await generator(await this.loadImageSharp()))
				.toFile(dest);
		});
		return name;
	}

	public addSizeCheck(exactWidth: number, exactHeight: number): void {
		this.addProcess(async () => {
			const { width, height } = await (await this.loadImageSharp()).metadata();
			if (width !== exactWidth || height !== exactHeight) {
				logger.warning(`Image '${this.resultName}' has size ${width}x${height}, expected ${exactWidth}x${exactHeight}.`);
			}
		});
	}

	private _addAVIFConversion(suffix: string, process: SharpImageGenerator): void {
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

			await (await process(await this.loadImageSharp()))
				.toFormat('avif', AVIF_OPTIONS)
				.toFile(dest);
		});
	}

	public async loadImageSharp(): Promise<Sharp> {
		return await this._generator(await this._baseImage.loadImageSharp());
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

export function ProcessImageResource(resource: IImageResource, args: string = ''): IImageResource {
	if (args) {
		const resizeMatch = /^(\d+)x(\d+)$/.exec(args);
		if (resizeMatch) {
			const sizeX = Number.parseInt(resizeMatch[1]);
			const sizeY = Number.parseInt(resizeMatch[2]);
			Assert(Number.isInteger(sizeX));
			Assert(Number.isInteger(sizeY));

			return resource.addResizedImage(sizeX, sizeY, args);
		} else {
			throw new Error(`Invalid arguments '${args}' for resource.`);
		}
	}

	return resource;
}

export function DefineImageResource(name: string, category: ImageCategory, expectedFormat: 'png' | 'jpg'): IImageResource {
	const [baseName, args] = SplitStringFirstOccurrence(name, '@');

	if (!baseName.endsWith('.' + expectedFormat)) {
		throw new Error(`Resource ${name} is not a ${expectedFormat.toUpperCase()} file.`);
	}

	const resource = new ImageResource(baseName, category);

	return ProcessImageResource(resource, args);
}

export function DefinePngResource(name: string, category: ImageCategory): string {
	return DefineImageResource(name, category, 'png').resultName;
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

	return ProcessImageResource(resource, args).resultName;
}

export function ClearAllResources(): void {
	resources = [];
	resourceFiles.clear();
}

export async function ExportAllResources(printProgress: boolean = true): Promise<void> {
	const tasks = resources.flatMap((r) => r.getProcesses());
	const totalTasks = tasks.length;
	let finishedTasks = 0;
	const digitLen = Math.max(Math.log10(totalTasks)) + 1;

	if (process.env.CI === 'true') {
		printProgress = false;
	}

	const updateProgress = () => {
		if (!printProgress)
			return;
		process.stdout.write(`\r${finishedTasks.toString().padStart(digitLen)}/${totalTasks} (${Math.floor(100 * finishedTasks / totalTasks).toString().padStart(3)}%)`);
	};

	updateProgress();

	const taskRunner = async () => {
		for (; ;) {
			const task = tasks.shift();
			if (!task)
				return;

			try {
				await task();
			} catch (error) {
				logger.fatal(`Error processing resource:`, error);
			}
			finishedTasks++;
			updateProgress();
		}
	};

	const runners: Promise<void>[] = [];

	for (let i = 0; i < availableParallelism(); i++) {
		runners.push(taskRunner());
	}

	await Promise.allSettled(runners);

	updateProgress();
	// Add a final newline
	if (printProgress) {
		process.stdout.write('\n');
	}
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
