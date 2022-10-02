import { GetLogger } from 'pandora-common';
import { createHash } from 'crypto';
import { readFileSync, writeFileSync, statSync, copyFileSync } from 'fs';
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

export abstract class Resource {
	readonly resultName: string;
	readonly size: number;
	readonly hash: string;

	constructor(resultName: string, size: number, hash: string) {
		this.resultName = resultName;
		this.size = size;
		this.hash = hash;
	}

	abstract export(destinationDirectory: string): void;
}

class FileResource extends Resource {
	readonly sourcePath: string;

	constructor(resultName: string, size: number, hash: string, sourcePath: string) {
		super(resultName, size, hash);
		this.sourcePath = sourcePath;
	}

	override export(destinationDirectory: string): void {
		copyFileSync(this.sourcePath, join(destinationDirectory, this.resultName));
	}
}

class InlineResource extends Resource {
	readonly value: Buffer;

	constructor(resultName: string, hash: string, value: Buffer) {
		super(resultName, value.byteLength, hash);
		this.value = value;
	}

	override export(destinationDirectory: string): void {
		writeFileSync(join(destinationDirectory, this.resultName), this.value);
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
	const sourcePath = join(AssetSourcePath, path);
	if (!statSync(sourcePath).isFile()) {
		throw new Error(`Resource ${path} not found (looking for '${sourcePath}')`);
	}

	WatchFile(sourcePath);

	const hash = GetResourceFileHash(sourcePath);
	const size = GetResourceFileSize(sourcePath);
	const resultName = basename(sourcePath).replace(/(?=(?:\.[^.]*)?$)/, `_${hash}`);

	const resource = new FileResource(resultName, size, hash, sourcePath);
	resources.set(resultName, resource);

	logger.debug(`Registered resource ${resultName}`);
	return resource;
}

export function DefineResourceInline(name: string, value: string | Buffer): Resource {
	if (typeof value === 'string') {
		value = Buffer.from(value, 'utf8');
	}

	const hash = GetResourceBufferHash(value);
	const resultName = name.replace(/(?=(?:\.[^.]*)?$)/, `_${hash}`);

	const resource = new InlineResource(resultName, hash, value);
	resources.set(resultName, resource);

	logger.debug(`Registered resource ${resultName}`);
	return resource;
}

function CheckMaxSize(resource: Resource, name: string, category: ImageCategory) {
	const maxSize = MAX_SIZES[category];
	if (resource.size > maxSize.bytes) {
		logger.warning(`Image '${name}' is larger than maximum allowed size of ${maxSize.text}.`);
	}
}

export function DefinePngResource(name: string, category: ImageCategory): Resource {
	const resource = DefineResource(name);

	CheckMaxSize(resource, name, category);

	return resource;
}

export function DefineJpgResource(name: string, category: ImageCategory): Resource {
	const resource = DefineResource(name);

	CheckMaxSize(resource, name, category);

	return resource;
}

export function ClearAllResources(): void {
	resources.clear();
}

export function ExportAllResources(destinationDirectory: string): void {
	for (const resource of resources.values()) {
		resource.export(destinationDirectory);
	}
}
