import { GetLogger } from 'pandora-common';
import { createHash } from 'crypto';
import { readFileSync, statSync } from 'fs';
import { writeFile, copyFile, unlink, readdir, stat } from 'fs/promises';
import { join, basename } from 'path';
import { AssetSourcePath } from './context';
import { WatchFile } from './watch';

export type ImageCategory = 'asset' | 'background';

const MAX_SIZES: Record<ImageCategory, { bytes: number; text: string; }> = {
	asset: {
		bytes: 1 * 1024 * 1024,
		text: '1MiB',
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
	}
	catch
	{
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
	public abstract readonly finished: Promise<void>;

	constructor(resultName: string, size: number, hash: string) {
		this.resultName = resultName;
		this.size = size;
		this.hash = hash;
		resources.set(resultName, this);
		resourceFiles.add(resultName);
	}
}

export interface IImageResource extends Resource {
	AddResizedImage(maxWidth: number, maxHeight: number, suffix: string): void;
}

class FileResource extends Resource {
	private process: Promise<void>[] = [];
	protected readonly baseName: string;
	protected readonly extension: string;

	public get finished(): Promise<void> {
		return Promise.all(this.process).then(() => { });
	}

	constructor(path: string) {
		const sourcePath = join(AssetSourcePath, path);

		if (!statSync(sourcePath).isFile()) {
			throw new Error(`Resource ${path} not found (looking for '${sourcePath}')`);
		}

		WatchFile(sourcePath);

		const hash = GetResourceFileHash(sourcePath);
		const size = GetResourceFileSize(sourcePath);
		const resultName = basename(sourcePath).replace(/(?=(?:\.[^.]*)?$)/, `_${hash}`);

		super(resultName, size, hash);

		this.baseName = resultName.replace(/(?=(?:\.[^.]*)?$)/, '');
		this.extension = resultName.replace(/^[^.]*\./, '');

		const dest = join(destinationDirectory, this.resultName);

		this.process.push(IsFile(dest)
			.then(async (isFile) => {
				if (!isFile) {
					await copyFile(sourcePath, join(destinationDirectory, this.resultName));
				}
			}));
	}

	protected AddProcess(process: () => Promise<void>): void {
		this.process.push(process());
	}
}

class InlineResource extends Resource {
	public readonly finished: Promise<void>;

	constructor(resultName: string, hash: string, value: Buffer) {
		super(resultName, value.byteLength, hash);
		this.finished = writeFile(join(destinationDirectory, this.resultName), value);
	}
}

class ImageResource extends FileResource implements IImageResource {
	constructor(path: string, category: ImageCategory) {
		super(path);
		CheckMaxSize(this, path, category);
	}

	public AddResizedImage(_maxWidth: number, _maxHeight: number, suffix: string) {
		const name = `${this.baseName}_${suffix}.${this.extension}`;
		resourceFiles.add(name);
		this.AddProcess(async () => {
			const dest = join(destinationDirectory, name);
			if (await IsFile(dest)) return;
			// TODO: Resize image
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

export function DefineResourceInline(name: string, value: string | Buffer): Resource {
	if (typeof value === 'string') {
		value = Buffer.from(value, 'utf8');
	}

	const hash = GetResourceBufferHash(value);
	const resultName = name.replace(/(?=(?:\.[^.]*)?$)/, `_${hash}`);

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
}

export async function ExportAllResources(): Promise<void> {
	await Promise.all([...resources.values()]
		.map((resource) => resource.finished));
}

export async function CleanOldResources(): Promise<void> {
	const files = await readdir(destinationDirectory);
	const cleanup = files
		.filter((file) => !resources.has(file));

	logger.debug(`Cleaning old resources: [\n\t${cleanup.join('\n\t')}\n]`);

	await Promise.all(cleanup
		.map((file) => join(destinationDirectory, file))
		.map((file) => unlink(join(destinationDirectory, file)))
	);
}
