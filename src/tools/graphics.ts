import { readFileSync, writeFileSync } from 'fs';
import { Immutable, freeze } from 'immer';
import { diffString } from 'json-diff';
import { isEqual } from 'lodash-es';
import {
	Assert,
	AssetGraphicsDefinition,
	AssetSourceGraphicsDefinitionSchema,
	GetLogger,
	LoadAssetLayer,
	Logger,
	ModuleNameSchema,
	SCHEME_OVERRIDE,
	type AssetModuleDefinition,
	type AssetSourceGraphicsDefinition,
	type AssetSourceGraphicsInfo,
	type GraphicsBuildContext,
} from 'pandora-common';
import { relative } from 'path';
import { z } from 'zod';
import { IS_PRODUCTION_BUILD, OPTIMIZE_TEXTURES, SRC_DIR, TRY_AUTOCORRECT_WARNINGS } from '../config.ts';
import { AUTOMESH_TEMPLATES } from '../templates/automeshTemplates.ts';
import { GENERATED_RESOLUTIONS } from './graphicsConstants.ts';
import { GraphicsDatabase } from './graphicsDatabase.ts';
import { LoadLayerImageResource } from './load_helpers/layer_common.ts';
import { AssetGraphicsValidate } from './validation/assetGraphics.ts';
import { WatchFile } from './watch.ts';

export async function LoadAssetGraphicsFile(
	path: string,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	modules: Record<string, AssetModuleDefinition<unknown, any>> | undefined,
	colorizationKeys: ReadonlySet<string>,
): Promise<{ graphics: Immutable<AssetGraphicsDefinition>; graphicsSource: AssetSourceGraphicsInfo; }> {
	const logger = GetLogger('GraphicsValidation').prefixMessages(`Graphics definition '${relative(SRC_DIR, path)}':\n\t`);

	WatchFile(path);

	const rawDefinition = readFileSync(path, { encoding: 'utf-8' });
	const definition: unknown = JSON.parse(
		rawDefinition
			.split('\n')
			.filter((line) => !line.trimStart().startsWith('//'))
			.join('\n'),
	);

	ModuleNameSchema[SCHEME_OVERRIDE]((module, ctx) => {
		if (modules?.[module] == null) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: `Module '${module}' is not a valid module name`,
			});
		}
	});

	const parseResult = AssetSourceGraphicsDefinitionSchema.safeParse(definition);

	if (!parseResult.success) {
		logger.error(
			`File is not valid AssetSourceGraphicsDefinition:\n`,
			parseResult.error.toString(),
		);
		throw new Error(`Graphics in '${path}' are not AssetSourceGraphicsDefinition`);
	}

	const canonizedExport = `// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.\n`
		+ JSON.stringify(parseResult.data, undefined, '\t').trim()
		+ '\n';
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

	const graphicsSource: AssetSourceGraphicsDefinition = freeze(parseResult.data, true);

	AssetGraphicsValidate(graphicsSource, logger, colorizationKeys);

	const { graphics, originalImagesMap } = await LoadAssetGraphics(graphicsSource, modules, logger);

	return {
		graphics,
		graphicsSource: {
			definition: graphicsSource,
			originalImagesMap,
		},
	};
}

async function LoadAssetGraphics(
	source: Immutable<AssetSourceGraphicsDefinition>,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	modules: Record<string, AssetModuleDefinition<unknown, any>> | undefined,
	logger: Logger,
): Promise<{ graphics: Immutable<AssetGraphicsDefinition>; originalImagesMap: Record<string, string>; }> {
	const originalImagesMap: Record<string, string> = {};

	const assetLoadContext: GraphicsBuildContext = {
		runImageBasedChecks: IS_PRODUCTION_BUILD || OPTIMIZE_TEXTURES,
		generateOptimizedTextures: OPTIMIZE_TEXTURES,
		generateResolutions: GENERATED_RESOLUTIONS,
		getPointTemplate(name) {
			return GraphicsDatabase.getPointTemplate(name);
		},
		getAutomeshTemplate(name) {
			return AUTOMESH_TEMPLATES[name];
		},
		bufferToBase64(buffer) {
			return Buffer.from(buffer).toString('base64');
		},
		loadImage(image) {
			const resource = LoadLayerImageResource(image);
			originalImagesMap[image] = resource.resultName;
			return resource;
		},
		builtAssetData: {
			modules,
		},
	};

	const layers = (await Promise.all(source.layers.map((l) => LoadAssetLayer(l, assetLoadContext, logger)))).flat();

	return {
		graphics: {
			layers,
		},
		originalImagesMap,
	};
}
