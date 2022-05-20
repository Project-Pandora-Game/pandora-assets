import { GetLogger } from 'pandora-common';
import { createHash } from 'crypto';
import { readFileSync, writeFileSync, statSync, copyFileSync } from 'fs';
import { join, basename } from 'path';
import { AssetSourcePath } from './context';
import { WatchFile } from './watch';

const logger = GetLogger('Resources');

const resources: Map<string, Resource> = new Map();

export abstract class Resource {
	readonly resultName: string;
	readonly hash: string;

	constructor(resultName: string, hash: string) {
		this.resultName = resultName;
		this.hash = hash;
	}

	abstract export(destinationDirectory: string): void;
}

class FileResource extends Resource {
	readonly sourcePath: string;

	constructor(resultName: string, hash: string, sourcePath: string) {
		super(resultName, hash);
		this.sourcePath = sourcePath;
	}

	override export(destinationDirectory: string): void {
		copyFileSync(this.sourcePath, join(destinationDirectory, this.resultName));
	}
}

class InlineResource extends Resource {
	readonly value: Buffer;

	constructor(resultName: string, hash: string, value: Buffer) {
		super(resultName, hash);
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

export function DefineResource(path: string): Resource {
	const sourcePath = join(AssetSourcePath, path);
	if (!statSync(sourcePath).isFile()) {
		throw new Error(`Resource ${path} not found (looking for '${sourcePath}')`);
	}

	WatchFile(sourcePath);

	const hash = GetResourceFileHash(sourcePath);
	const resultName = basename(sourcePath).replace(/(?=(?:\.[^.]*)?$)/, `_${hash}`);

	const resource = new FileResource(resultName, hash, sourcePath);
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

const images = new Map<string, Resource>();
export function DefinePngResource(name: string): Resource {
	const key = join(AssetSourcePath, `${name}.png`);
	let image = images.get(key);
	if (!image) images.set(key, image = DefineResource(`${name}.png`));
	return image;
}

export function ExportAllResources(destinationDirectory: string): void {
	for (const resource of resources.values()) {
		resource.export(destinationDirectory);
	}
}
