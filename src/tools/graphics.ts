import { readFileSync } from 'fs';
import { diffString } from 'json-diff';
import { isEqual } from 'lodash';
import {
	AssetGraphicsDefinition,
	AssetGraphicsDefinitionSchema,
	GetLogger,
	LayerDefinition,
	LayerImageOverride,
	LayerImageSetting,
	ModuleNameSchema,
	SCHEME_OVERRIDE,
} from 'pandora-common';
import { relative } from 'path';
import { z } from 'zod';
import { SRC_DIR } from '../constants';
import { GraphicsDatabase } from './graphicsDatabase';
import { DefineImageResource } from './resources';
import { AssetGraphicsValidate } from './validation/assetGraphics';
import { WatchFile } from './watch';

export const GENERATED_RESOLUTIONS: readonly number[] = [0.5, 0.25];

export function LoadAssetsGraphics(path: string, assetModules: readonly string[]): AssetGraphicsDefinition {
	const logger = GetLogger('GraphicsValidation').prefixMessages(`Graphics definition '${relative(SRC_DIR, path)}':\n\t`);

	WatchFile(path);

	const definition = JSON.parse(
		readFileSync(path, { encoding: 'utf-8' })
			.split('\n')
			.filter((line) => !line.trimStart().startsWith('//'))
			.join('\n'),
	) as AssetGraphicsDefinition;

	ModuleNameSchema[SCHEME_OVERRIDE]((module, ctx) => {
		if (!assetModules.includes(module)) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: `Module '${module}' is not a valid module name`,
			});
		}
	});

	const parseResult = AssetGraphicsDefinitionSchema.safeParse(definition);

	if (!parseResult.success) {
		logger.error(
			`Not AssetGraphicsDefinition:\n`,
			parseResult.error.toString(),
		);
		throw new Error(`Graphics in '${path}' are not AssetGraphicsDefinition`);
	} else if (!isEqual(definition, parseResult.data)) {
		const diff = diffString(definition, parseResult.data, { color: false });
		logger.warning('Definition updated during parse:\n', diff);
	}

	AssetGraphicsValidate(parseResult.data, logger);

	return {
		layers: parseResult.data.layers.map(LoadAssetLayer),
	};
}

function LoadLayerImage(image: string): string {
	const resource = DefineImageResource(image, 'asset', 'png');

	for (const resolution of GENERATED_RESOLUTIONS) {
		resource.addDownscaledImage(resolution);
	}

	return resource.resultName;
}

function LoadLayerImageSetting(setting: LayerImageSetting): LayerImageSetting {
	const overrides: LayerImageOverride[] = setting.overrides
		.map((override) => ({
			...override,
			image: override.image && LoadLayerImage(override.image),
		}));
	const alphaOverrides: LayerImageOverride[] | undefined = setting.alphaOverrides
		?.map((override) => ({
			...override,
			image: override.image && LoadLayerImage(override.image),
		}));
	return {
		...setting,
		image: setting.image && LoadLayerImage(setting.image),
		alphaImage: setting.alphaImage && LoadLayerImage(setting.alphaImage),
		overrides,
		alphaOverrides,
	};
}

function LoadAssetLayer(layer: LayerDefinition): LayerDefinition {
	if (typeof layer.points === 'string' && !GraphicsDatabase.hasPointTemplate(layer.points)) {
		throw new Error(`Layer ${layer.name ?? '[unnamed]'} refers to unknown template '${layer.points}'`);
	}
	return {
		...layer,
		image: LoadLayerImageSetting(layer.image),
		scaling: layer.scaling && {
			scaleBone: layer.scaling.scaleBone,
			stops: layer.scaling.stops.map((stop) => [stop[0], LoadLayerImageSetting(stop[1])]),
		},
	};
}
