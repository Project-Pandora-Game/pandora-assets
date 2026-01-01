import { spawnSync } from 'child_process';
import * as fs from 'fs';
import ignore from 'ignore';
import type { Immutable } from 'immer';
import { AssetSourceGraphicsDefinitionSchema, AssetSourceGraphicsRoomDeviceDefinitionSchema, AssetsDefinitionFile, GetLogger, LogLevel, PointTemplateSourceSchema, SetConsoleOutput, logConfig, type GraphicsDefinitionFile, type GraphicsSourceDefinitionFile } from 'pandora-common';
import { join, relative } from 'path';
import { pathToFileURL } from 'url';
import * as z from 'zod';
import { LoadAttributeNameValidation, LoadAttributes } from './attributes.ts';
import { LoadBackgroundTags, LoadBackgrounds } from './backgrounds/backgrounds.ts';
import { BODYPARTS, ValidateBodyparts } from './bodyparts.ts';
import { LoadBoneNameValidation, boneDefinition } from './bones.ts';
import { LoadCharacterModifierTemplates } from './characterModifierTemplates.ts';
import { ASSET_DEST_DIR, ASSET_SRC_DIR, BASE_DIR, BUILD_FOR_TEST, IS_PRODUCTION_BUILD, OUT_DIR, PRETTY_OUTPUT } from './config.ts';
import { POSE_PRESETS } from './posePresets.ts';
import { APPEARANCE_RANDOMIZATION_CONFIG } from './presets.ts';
import { LoadTemplates } from './templates/index.ts';
import { LoadTileTextures } from './tileTextures/_tileTextures.ts';
import { AssetDatabase } from './tools/assetDatabase.ts';
import { GlobalDefineBodypart } from './tools/definitionBodypart.ts';
import { GlobalDefineLockAsset } from './tools/definitionLock.ts';
import { GlobalDefineRoomDeviceAsset } from './tools/definitionRoomDevice.ts';
import { LoadGitData } from './tools/git.ts';
import { GraphicsDatabase } from './tools/graphicsDatabase.ts';
import { AssetImportContext, SetCurrentImportContext } from './tools/importContext.ts';
import { GlobalDefineAsset, SetCurrentContext } from './tools/index.ts';
import { AddFileOutput } from './tools/logging.ts';
import { CleanOldResources, ClearAllResources, DefineResourceInline, ExportAllResources, SetResourceDestinationDirectory } from './tools/resources.ts';
import { RoomDatabase } from './tools/roomDatabase.ts';
import { RunDev } from './tools/watch.ts';

const logger = GetLogger('Main');
SetConsoleOutput(LogLevel.VERBOSE);
await AddFileOutput('./build.log', false, LogLevel.VERBOSE);

let hadErrors = false;
let hadWarnings = false;
logConfig.logOutputs.push({
	logLevel: LogLevel.DEBUG,
	logLevelOverrides: {},
	supportsColor: false,
	onMessage(_prefix, _message, level) {
		if (level === LogLevel.FATAL || level === LogLevel.ERROR) {
			hadErrors = true;
		} else if (level === LogLevel.WARNING) {
			hadWarnings = true;
		}
	},
});

function CheckErrors(printWarnings: boolean = true) {
	if (hadErrors) {
		logger.fatal(`Some assets had errors while building, build failed.`);
		return false;
	}
	if (hadWarnings) {
		if (IS_PRODUCTION_BUILD) {
			logger.fatal(`Some assets had warnings while building, build failed.`);
			return false;
		} else if (printWarnings) {
			logger.warning();
			logger.warning(`Some assets had warnings while building, these need to be fixed before PR.`);
			logger.warning();
		}
	}
	return true;
}

const assetProcesses: AssetImportContext[] = [];

async function Run() {
	logger.info('Building...');

	const ig = ignore();
	ig.add(fs.readFileSync(join(BASE_DIR, '.gitignore'), 'utf-8'));

	// Setup environment
	globalThis.DefineAsset = GlobalDefineAsset;
	globalThis.DefineBodypart = GlobalDefineBodypart;
	globalThis.DefineRoomDeviceAsset = GlobalDefineRoomDeviceAsset;
	globalThis.DefineLockAsset = GlobalDefineLockAsset;
	SetResourceDestinationDirectory(OUT_DIR);

	// Clear old data
	hadErrors = false;
	hadWarnings = false;
	GraphicsDatabase.clear();
	AssetDatabase.clear();
	RoomDatabase.clear();
	ClearAllResources();

	if (!fs.existsSync(OUT_DIR))
		fs.mkdirSync(OUT_DIR);

	// Load extra validation
	LoadBoneNameValidation();
	LoadAttributeNameValidation();

	// Load common data
	await LoadGitData();
	LoadTemplates();
	const attributes = LoadAttributes();

	// Load backgrounds
	logger.info('Loading backgrounds...');
	const backgroundTags = LoadBackgroundTags();
	LoadBackgrounds();
	LoadTileTextures();

	// Do not repeat the import phase on re-run
	if (assetProcesses.length === 0) {
		logger.info('Loading assets...');
		for (const category of fs.readdirSync(ASSET_SRC_DIR)) {
			const categorySrcPath = join(ASSET_SRC_DIR, category);
			const categoryDestPath = join(ASSET_DEST_DIR, category);

			// Ignore non-directories in assets
			if (!IsDirectory(categorySrcPath))
				continue;

			if (!IsDirectory(categoryDestPath)) {
				throw new Error(`assets/${category} is not directory`);
			}

			for (const asset of fs.readdirSync(categorySrcPath)) {
				const assetDestPath = join(categoryDestPath, asset);
				const assetSrcPath = join(categorySrcPath, asset);

				if (ig.ignores(relative(process.cwd(), assetSrcPath))) {
					logger.verbose(`Ignoring assets/${category}/${asset}...`);
					continue;
				}
				if (!IsDirectory(assetSrcPath)) {
					logger.warning(`assets/${category}/${asset} is not directory`);
					continue;
				}
				if (!IsFile(join(assetSrcPath, `${asset}.asset.ts`))) {
					logger.error(`assets/${category}/${asset} expected asset file '${asset}.asset.ts' not found`);
					continue;
				}
				if (!IsDirectory(assetDestPath)) {
					throw new Error(`assets/${category}/${asset} is not directory`);
				}

				const assetContext: AssetImportContext = {
					category,
					asset,
					assetSourcePath: assetSrcPath,
					processes: [],
				};

				SetCurrentImportContext(assetContext);

				try {
					const moduleName = pathToFileURL(join(assetDestPath, `${asset}.asset.js`)).href;
					await import(moduleName);

					if (assetContext.processes.length > 0) {
						assetProcesses.push(assetContext);
					} else if (!BUILD_FOR_TEST) {
						// This warning is ignored when building for tests, because tests intentionally skip most assets.
						logger.warning(`Asset file assets/${category}/${asset} registered no assets for processing`);
					}
				} catch (error) {
					logger.error(`Error while importing assets/${category}/${asset}\n`, error);
				}
			}
		}
	}

	if (!CheckErrors(false))
		return;

	SetCurrentImportContext(null);

	logger.info('Processing assets...');
	for (const { category, asset, assetSourcePath, processes } of assetProcesses) {
		logger.verbose(`Processing assets/${category}/${asset}...`);
		SetCurrentContext(category, asset, assetSourcePath);

		const pending = processes.map((p) => p());
		const results = await Promise.allSettled(pending);
		for (const result of results) {
			if (result.status === 'rejected') {
				GetLogger('Processing').error('Processing failed:\n', result.reason);
			}
		}
	}

	const characterModifierTemplates = LoadCharacterModifierTemplates();

	if (!CheckErrors(false))
		return;

	logger.info('Exporting result...');

	const graphics: Immutable<GraphicsDefinitionFile> = GraphicsDatabase.export();
	const graphicsFile = DefineResourceInline('graphics.json', JSON.stringify(graphics, undefined, PRETTY_OUTPUT ? '\t' : undefined) + (PRETTY_OUTPUT ? '\n' : ''));

	const graphicsSource: Immutable<GraphicsSourceDefinitionFile> = GraphicsDatabase.exportSource();
	const graphicsSourceFile = DefineResourceInline('graphicsSource.json', JSON.stringify(graphicsSource, undefined, PRETTY_OUTPUT ? '\t' : undefined) + (PRETTY_OUTPUT ? '\n' : ''));

	const definitions: AssetsDefinitionFile = {
		assets: AssetDatabase.export(),
		bones: boneDefinition,
		posePresets: POSE_PRESETS,
		bodyparts: BODYPARTS,
		backgroundTags,
		backgrounds: RoomDatabase.exportBackgrounds(),
		tileTextures: RoomDatabase.exportTileTextures(),
		graphicsId: graphicsFile.hash,
		graphicsSourceId: graphicsSourceFile.hash,
		attributes,
		randomization: APPEARANCE_RANDOMIZATION_CONFIG,
		characterModifierTemplates,
	};
	// Check bodyparts are valid
	ValidateBodyparts(definitions);

	const definitionsFile = DefineResourceInline('assets.json', JSON.stringify(definitions, undefined, PRETTY_OUTPUT ? '\t' : undefined) + (PRETTY_OUTPUT ? '\n' : ''));

	// JSON schemas for nicer editing
	const assetGraphicsWornSchema = z.toJSONSchema(AssetSourceGraphicsDefinitionSchema, { target: 'draft-7' });
	DefineResourceInline('graphicsSource-worn.schema.json', JSON.stringify(assetGraphicsWornSchema, undefined, '\t') + '\n', 'graphicsSource-worn.schema.json');

	const assetGraphicsRoomDeviceSchema = z.toJSONSchema(AssetSourceGraphicsRoomDeviceDefinitionSchema, { target: 'draft-7' });
	DefineResourceInline('graphicsSource-roomDevice.schema.json', JSON.stringify(assetGraphicsRoomDeviceSchema, undefined, '\t') + '\n', 'graphicsSource-roomDevice.schema.json');

	const pointTemplateSchema = z.toJSONSchema(PointTemplateSourceSchema, { target: 'draft-7' });
	DefineResourceInline('graphicsSource-pointTemplate.schema.json', JSON.stringify(pointTemplateSchema, undefined, '\t') + '\n', 'graphicsSource-pointTemplate.schema.json');

	// Do export of all resources pending so far
	await ExportAllResources();

	// Defer exporting the "current" file until after all previous files were processed (to avoid race condition of shard reloading before it should)
	DefineResourceInline('current', `${definitionsFile.hash}\n`, 'current');

	// Do export all again to wait for the "current" file
	await ExportAllResources(false);

	// Perform cleanup only after all resources are exported (this allows shard to still use old data before new data is ready)
	await CleanOldResources();

	if (!CheckErrors())
		return;

	if (BUILD_FOR_TEST) {
		// Create final archive
		if (process.platform !== 'linux') {
			logger.alert('Creating final test archive is only supported on linux');
		} else {
			const tarArchivePath = join(BASE_DIR, 'out-for-test.tar');

			// Create tar archive, making it as reproducible as possible
			const { error, stdout } = spawnSync('tar', [
				'--sort=name',
				'--format=posix', '--pax-option=exthdr.name=%d/PaxHeaders/%f', '--pax-option=delete=atime,delete=ctime',
				`--mtime=@0`,
				'--numeric-owner', '--owner=0', '--group=0',
				'--mode=go+u,go-w',
				'-cf', '-',
				'-C', OUT_DIR,
				'.',
			], {
				stdio: ['ignore', 'pipe', 'inherit'],
				maxBuffer: 64 * 1024 * 1024,
			});
			if (error)
				throw error;

			fs.writeFileSync(tarArchivePath, stdout);
		}
	}

	logger.info('Done!');
}

if (process.argv.includes('--watch')) {
	// Reduce verbosity during watch to make errors more visible
	SetConsoleOutput(LogLevel.INFO);
	RunDev(Run).catch((error) => {
		logger.fatal('Error starting dev server:\n', error);
		process.exit(2);
	});
} else {
	// On fatal error in non-watch environment set failure exit code
	logConfig.onFatal.push(() => {
		process.exitCode = 1;
	});
	// Run
	Run().catch((error) => {
		logger.fatal('Error:\n', error);
	});
}

function AssertErrorEnoent(error: unknown) {
	if (!(error instanceof Error && 'code' in error && error.code === 'ENOENT'))
		throw error;
}

function IsDirectory(path: string) {
	try {
		return fs.statSync(path).isDirectory();
	} catch (error) {
		AssertErrorEnoent(error);
		return false;
	}
}

function IsFile(path: string) {
	try {
		return fs.statSync(path).isFile();
	} catch (error) {
		AssertErrorEnoent(error);
		return false;
	}
}
