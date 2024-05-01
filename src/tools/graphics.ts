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
import { DefineImageResource } from './resources';
import { readFileSync } from 'fs';
import { GraphicsDatabase } from './graphicsDatabase';
import { WatchFile } from './watch';
import { z } from 'zod';

export const GENERATED_RESOLUTIONS: readonly number[] = [0.5, 0.25];

export function LoadAssetsGraphics(path: string, assetModules: readonly string[]): AssetGraphicsDefinition {
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
		GetLogger('GraphicsValidation').error(
			`Graphics in '${path}' are not AssetGraphicsDefinition:\n`,
			parseResult.error.toString(),
		);
		throw new Error(`Graphics in '${path}' are not AssetGraphicsDefinition`);
	}

	return {
		layers: definition.layers.map(LoadAssetLayer),
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
