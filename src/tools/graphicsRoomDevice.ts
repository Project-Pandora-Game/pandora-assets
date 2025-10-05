import { readFileSync, writeFileSync } from 'fs';
import { Immutable, freeze } from 'immer';
import { diffString } from 'json-diff';
import { isEqual } from 'lodash-es';
import {
	Assert,
	AssetManager,
	AssetSourceGraphicsRoomDeviceDefinitionSchema,
	GetLogger,
	LoadAssetRoomDeviceLayer,
	Logger,
	ModuleNameSchema,
	SCHEME_OVERRIDE,
	type AssetGraphicsRoomDeviceDefinition,
	type AssetGraphicsWornDefinition,
	type AssetSourceGraphicsInfo,
	type AssetSourceGraphicsRoomDeviceDefinition,
	type GraphicsBuildContext,
	type GraphicsBuildContextRoomDeviceData,
} from 'pandora-common';
import { basename, relative } from 'path';
import * as z from 'zod';
import { boneDefinition } from '../bones.ts';
import { IS_PRODUCTION_BUILD, OPTIMIZE_TEXTURES, SRC_DIR, TRY_AUTOCORRECT_WARNINGS } from '../config.ts';
import { LoadAssetGraphics } from './graphics.ts';
import { GENERATED_RESOLUTIONS } from './graphicsConstants.ts';
import { GraphicsDatabase } from './graphicsDatabase.ts';
import { DefineImageResource } from './resources.ts';
import { WatchFile } from './watch.ts';

export type RoomDeviceAssetGraphicsLoadResult = {
	graphics: Immutable<AssetGraphicsRoomDeviceDefinition>;
	slotGraphics: Immutable<Record<string, AssetGraphicsWornDefinition>>;
	graphicsSource: Immutable<AssetSourceGraphicsInfo>;
};

export async function LoadRoomDeviceAssetGraphicsFile(
	path: string,
	builtAssetData: Immutable<GraphicsBuildContextRoomDeviceData>,
): Promise<RoomDeviceAssetGraphicsLoadResult> {
	const logger = GetLogger('RoomDeviceGraphics').prefixMessages(`Graphics definition '${relative(SRC_DIR, path)}':\n\t`);

	WatchFile(path);

	const fileBasename = basename(path);
	if (fileBasename !== 'roomDeviceGraphics.json') {
		logger.warning(`Room device graphics should be stored in files named 'roomDeviceGraphics.json', found '${fileBasename}'`);
	}

	const rawDefinition = readFileSync(path, { encoding: 'utf-8' });
	const definition: unknown = JSON.parse(
		rawDefinition
			.split('\n')
			.filter((line) => !line.trimStart().startsWith('//'))
			.join('\n'),
	);

	ModuleNameSchema[SCHEME_OVERRIDE]((module, ctx) => {
		if (builtAssetData.modules?.[module] == null) {
			ctx.addIssue({
				code: 'custom',
				message: `Module '${module}' is not a valid module name`,
			});
		}
	});

	const parseResult = AssetSourceGraphicsRoomDeviceDefinitionSchema.safeParse(definition);

	if (!parseResult.success) {
		logger.error(
			`File is not valid AssetSourceGraphicsRoomDeviceDefinition:\n`,
			z.prettifyError(parseResult.error),
		);
		throw new Error(`Graphics in '${path}' are not AssetSourceGraphicsRoomDeviceDefinition`);
	}

	const canonizedExport = JSON.stringify(parseResult.data, undefined, '\t').trim() + '\n';
	if (!isEqual(definition, parseResult.data)) {
		Assert(rawDefinition !== canonizedExport);
		const diff = diffString(definition, parseResult.data, { color: false });
		logger.warning('Definition updated during parse:\n', diff);
	} else if (rawDefinition !== canonizedExport) {
		logger.warning(`Definition is not in its canonic form. Please use editor to correct this.`);
	}

	if (rawDefinition !== canonizedExport && TRY_AUTOCORRECT_WARNINGS) {
		writeFileSync(path, canonizedExport, { encoding: 'utf-8' });
		logger.info('The above warning has been auto-corrected; re-run to check if successful.');
	}

	const graphicsSource: AssetSourceGraphicsRoomDeviceDefinition = freeze(parseResult.data, true);

	return await LoadRoomDeviceAssetGraphics(graphicsSource, builtAssetData, logger);
}

export async function LoadRoomDeviceAssetGraphics(
	source: Immutable<AssetSourceGraphicsRoomDeviceDefinition>,
	builtAssetData: Immutable<GraphicsBuildContextRoomDeviceData>,
	logger: Logger,
): Promise<RoomDeviceAssetGraphicsLoadResult> {
	const originalImagesMap: Record<string, string> = {};

	const assetLoadContext: GraphicsBuildContext<Immutable<GraphicsBuildContextRoomDeviceData>> = {
		runImageBasedChecks: IS_PRODUCTION_BUILD || OPTIMIZE_TEXTURES,
		generateOptimizedTextures: OPTIMIZE_TEXTURES,
		generateResolutions: GENERATED_RESOLUTIONS,
		getBones() {
			return Array.from(AssetManager.loadBones(boneDefinition).values());
		},
		getPointTemplate(name) {
			return GraphicsDatabase.getPointTemplate(name);
		},
		bufferToBase64(buffer) {
			return Buffer.from(buffer).toString('base64');
		},
		loadImage(image) {
			const resource = DefineImageResource(image, 'roomDevice', 'png');
			originalImagesMap[image] = resource.resultName;
			return resource;
		},
		builtAssetData,
	};

	const layers = (await Promise.all(source.layers.map((l) => LoadAssetRoomDeviceLayer(l, assetLoadContext, logger)))).flat();

	const slotGraphics: Record<string, Immutable<AssetGraphicsWornDefinition>> = {};
	for (const [slot, slotGraphicsSource] of Object.entries(source.slots)) {
		const slotLogger = logger.prefixMessages(`Slot '${slot}':\n\t\t`);
		if (slotGraphicsSource.layers.length === 0) {
			slotLogger.warning('Slot has no layers. Either add layers or remove slot graphics altogether.');
		}

		const slotResult = await LoadAssetGraphics(
			slotGraphicsSource,
			{
				modules: builtAssetData.modules,
				colorizationKeys: builtAssetData.colorizationKeys,
			},
			slotLogger,
		);

		for (const [image, resultName] of Object.entries(slotResult.originalImagesMap)) {
			if (!Object.hasOwn(originalImagesMap, image)) {
				originalImagesMap[image] = resultName;
			} else {
				Assert(originalImagesMap[image] === resultName);
			}
		}

		slotGraphics[slot] = slotResult.graphics;
	}

	return {
		graphics: {
			type: 'roomDevice',
			layers,
		},
		slotGraphics,
		graphicsSource: {
			type: 'roomDevice',
			definition: source,
			originalImagesMap,
		},
	};
}
