import * as fs from 'fs';
import { join } from 'path';
import { GetLogger, SetConsoleOutput, LogLevel, AssetsDefinitionFile, AssetsGraphicsDefinitionFile, logConfig } from 'pandora-common';
import { GlobalDefineAsset, SetCurrentContext } from './tools';
import { AssetDatabase } from './tools/assetDatabase';
import { CleanOldResources, ClearAllResources, DefineResourceInline, ExportAllResources, SetResourceDestinationDirectory } from './tools/resources';
import { RunDev } from './tools/watch';
import { boneDefinition } from './bones';
import { GraphicsDatabase } from './tools/graphicsDatabase';
import { BODYPARTS, ValidateBodyparts } from './bodyparts';
import { ASSET_DEST_DIR, ASSET_SRC_DIR, OUT_DIR, IS_PRODUCTION_BUILD } from './constants';
import { LoadTemplates } from './templates';
import { POSE_PRESETS } from './posePresets';
import { LoadGitData } from './tools/git';
import { RoomDatabase } from './tools/roomDatabase';
import { LoadBackgrounds } from './backgrounds/backgrounds';
import { LoadAttributes } from './attributes';
import { APPEARANCE_RANDOMIZATION_CONFIG } from './presets';
import { ASSET_SLOTS } from './slots';

const logger = GetLogger('Main');
SetConsoleOutput(LogLevel.VERBOSE);
SetResourceDestinationDirectory(OUT_DIR);

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

async function Run() {
	logger.info('Building...');

	// Setup environment
	globalThis.DefineAsset = GlobalDefineAsset;

	// Clear old data
	hadErrors = false;
	hadWarnings = false;
	GraphicsDatabase.clear();
	AssetDatabase.clear();
	RoomDatabase.clear();
	ClearAllResources();

	if (!fs.existsSync(OUT_DIR))
		fs.mkdirSync(OUT_DIR);

	// Load common data
	await LoadGitData();
	LoadTemplates();
	const attributes = LoadAttributes();

	// Load backgrounds
	logger.info('Loading backgrounds...');
	LoadBackgrounds();

	logger.info('Loading assets...');
	for (const category of fs.readdirSync(ASSET_SRC_DIR)) {
		const categorySrcPath = join(ASSET_SRC_DIR, category);
		const categoryDestPath = join(ASSET_DEST_DIR, category);

		// Ignore non-directories in assets
		if (!fs.statSync(categorySrcPath).isDirectory())
			continue;

		if (!fs.statSync(categoryDestPath).isDirectory()) {
			throw new Error(`assets/${category} is not directory`);
		}
		if (!fs.statSync(categorySrcPath).isDirectory()) {
			throw new Error(`assets/${category} missing in source path`);
		}

		for (const asset of fs.readdirSync(categorySrcPath)) {
			const assetDestPath = join(categoryDestPath, asset);
			const assetSrcPath = join(categorySrcPath, asset);

			if (!fs.statSync(assetDestPath).isDirectory()) {
				throw new Error(`assets/${category}/${asset} is not directory`);
			}
			if (!fs.statSync(assetSrcPath).isDirectory()) {
				throw new Error(`assets/${category}/${asset} missing in source path`);
			}
			if (!fs.statSync(join(assetSrcPath, `${asset}.asset.ts`)).isFile()) {
				throw new Error(`assets/${category}/${asset} expected asset file '${asset}.asset.ts' not found`);
			}

			SetCurrentContext(category, asset, assetSrcPath);

			logger.verbose(`Processing assets/${category}/${asset}...`);

			try {
				const moduleName = join(assetDestPath, `${asset}.asset`);
				delete require.cache[require.resolve(moduleName)];
				await require(moduleName);
			} catch (error) {
				logger.fatal(`Error while importing assets/${category}/${asset}\n`, error);
				process.exit(1);
			}
		}
	}

	if (hadErrors) {
		logger.fatal(`Some assets had errors while building, build failed.`);
		return;
	}
	if (hadWarnings) {
		if (IS_PRODUCTION_BUILD) {
			logger.fatal(`Some assets had warnings while building, build failed.`);
			return;
		} else {
			logger.warning();
			logger.warning(`Some assets had warnings while building, these need to be fixed before PR.`);
			logger.warning();
		}
	}

	logger.info('Exporting result...');

	const graphics: AssetsGraphicsDefinitionFile = GraphicsDatabase.export();
	const graphicsFile = DefineResourceInline('graphics.json', JSON.stringify(graphics));

	const definitions: AssetsDefinitionFile = {
		assets: AssetDatabase.export(),
		assetSlots: ASSET_SLOTS,
		bones: boneDefinition,
		posePresets: POSE_PRESETS,
		bodyparts: BODYPARTS,
		backgrounds: RoomDatabase.export(),
		graphicsId: graphicsFile.hash,
		attributes,
		randomization: APPEARANCE_RANDOMIZATION_CONFIG,
	};
	// Check bodyparts are valid
	ValidateBodyparts(definitions);

	const definitionsFile = DefineResourceInline('assets.json', JSON.stringify(definitions));
	DefineResourceInline('current', `${definitionsFile.hash}\n`);

	await Promise.all([
		ExportAllResources(),
		CleanOldResources(),
	]);

	logger.info('Done!');
}

if (process.argv.includes('--watch')) {
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
