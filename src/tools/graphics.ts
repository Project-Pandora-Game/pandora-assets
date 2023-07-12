import {
	AssetGraphicsDefinition,
	AssetGraphicsDefinitionSchema,
	FAKE_BONES,
	GetLogger,
	LayerDefinition,
	LayerImageOverride,
	LayerImageSetting,
	SetAttributeSchemaForAtomicCondition,
	SetBoneSchemaForAtomicCondition,
	SetModuleSchemaForAtomicCondition,
	SetTransformDefinitionBoneSchema,
} from 'pandora-common';
import { DefinePngResource } from './resources';
import { readFileSync } from 'fs';
import { GraphicsDatabase } from './graphicsDatabase';
import { WatchFile } from './watch';
import { z } from 'zod';
import { boneDefinition } from '../bones';
import { ATTRIBUTES_DEFINITION } from '../attributes';

const BONES: readonly string[] = Object.keys(boneDefinition);
const ALL_BONES: readonly string[] = [...BONES, ...FAKE_BONES];
const ATTRIBUTES: readonly string[] = Object.keys(ATTRIBUTES_DEFINITION);

export function LoadAssetsGraphics(path: string, assetModules: string[]): AssetGraphicsDefinition {
	WatchFile(path);

	const definition = JSON.parse(
		readFileSync(path, { encoding: 'utf-8' })
			.split('\n')
			.filter((line) => !line.trimStart().startsWith('//'))
			.join('\n'),
	) as AssetGraphicsDefinition;

	SetBoneSchemaForAtomicCondition(InArray(ALL_BONES, 'Bone not found', {
		verify: (value: string) => {
			if (!BONES.includes(value) && value !== 'backView')
				GetLogger(`Graphics [${path}]`).warning(`Bone ${value} is a fake bone and shouldn't be used in conditions.`);
		}
	}));
	SetModuleSchemaForAtomicCondition(InArray(assetModules, 'Module not found'));
	SetAttributeSchemaForAtomicCondition(InArray(ATTRIBUTES, 'Attribute not found', { allowNegate: true }));
	SetTransformDefinitionBoneSchema(InArray(ALL_BONES, 'Bone not found'));
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

function LoadLayerImageSetting(setting: LayerImageSetting): LayerImageSetting {
	const overrides: LayerImageOverride[] = setting.overrides
		.map((override) => ({
			...override,
			image: override.image && DefinePngResource(override.image, 'asset').resultName,
		}));
	const alphaOverrides: LayerImageOverride[] | undefined = setting.alphaOverrides
		?.map((override) => ({
			...override,
			image: override.image && DefinePngResource(override.image, 'asset').resultName,
		}));
	return {
		image: setting.image && DefinePngResource(setting.image, 'asset').resultName,
		alphaImage: setting.alphaImage && DefinePngResource(setting.alphaImage, 'asset').resultName,
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

function InArray(array: readonly string[], message: string, { allowNegate = false, verify }: { allowNegate?: boolean, verify?: (value: string) => void; } = {}) {
	return z.string().refine((value) => {
		if (allowNegate && value.startsWith('!'))
			value = value.slice(1);

		if (!array.includes(value))
			return false;

		verify?.(value);

		return true;
	}, (value) => ({ message: `${message}: ${value}` }));
}
