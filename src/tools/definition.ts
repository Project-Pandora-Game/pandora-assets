import { AssetDefinition, AssetId, BONE_MAX, BONE_MIN, GetLogger, HexColorStringSchema } from 'pandora-common';
import { AssetDatabase } from './assetDatabase';
import { AssetSourcePath, DefaultId } from './context';
import { LoadAssetsGraphics } from './graphics';
import { GraphicsDatabase } from './graphicsDatabase';
import { join } from 'path';

export function DefineAsset(def: IntermediateAssetDefinition): void {
	const id: AssetId = `a/${def.id ?? DefaultId()}` as const;

	const logger = GetLogger('DefineAsset', `[Asset ${id}]`);

	let definitionValid = true;

	if (def.colorization) {
		for (let i = 0; i < def.colorization.length; i++) {
			const valid = HexColorStringSchema.safeParse(def.colorization[i].default).success;
			if (!valid) {
				definitionValid = false;
				logger.error(`Invalid default in colorization[${i}]: '${def.colorization[i].default}' is not a valid color, use full hex format, like '#ffffff'`);
			}
		}
	}

	if (def.poseLimits) {
		if (def.poseLimits.forcePose) {
			for (const [bone, value] of Object.entries(def.poseLimits.forcePose)) {
				if (value == null)
					continue;
				let limit = typeof value === "number" ? [value, value] : value;

				if (!Number.isInteger(limit[0]) || limit[0] < BONE_MIN || limit[1] > BONE_MAX) {
					logger.error(`Invalid min limit for poseLimits.forcePose.${bone}, must be a whole number in range [${BONE_MIN}, ${BONE_MAX}]`);
					definitionValid = false;
				}
				if (!Number.isInteger(limit[1]) || limit[1] < BONE_MIN || limit[1] > BONE_MAX) {
					logger.error(`Invalid max limit for poseLimits.forcePose.${bone}, must be a whole number in range [${BONE_MIN}, ${BONE_MAX}]`);
					definitionValid = false;
				}
				if (limit[0] > limit[1]) {
					logger.error(`Invalid range for poseLimits.forcePose.${bone}, min must not be greater than max`);
					definitionValid = false;
				}
			}
		}
	}

	if (!definitionValid) {
		throw new Error('Invalid definition');
	}

	const asset: AssetDefinition = {
		id,
		name: def.name,
		actionMessages: def.actionMessages,
		bodypart: def.bodypart,
		colorization: def.colorization,
		poseLimits: def.poseLimits,
		effects: def.effects,
		hasGraphics: def.graphics !== undefined,
	};

	if (def.graphics) {
		GraphicsDatabase.registerAsset(id, LoadAssetsGraphics(join(AssetSourcePath, def.graphics)));
	}
	AssetDatabase.registerAsset(id, asset);
}
