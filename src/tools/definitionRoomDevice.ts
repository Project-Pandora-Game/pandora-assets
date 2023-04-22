import { AssertNever, AssetId, GetLogger, RoomDeviceAssetDefinition, RoomDeviceWearablePartAssetDefinition } from 'pandora-common';
import { AssetDatabase } from './assetDatabase';
import { AssetSourcePath, DefaultId } from './context';
import { LoadAssetsGraphics } from './graphics';
import { GraphicsDatabase } from './graphicsDatabase';
import { join } from 'path';
import { Contributors, CurrentCommitter, GitDataAvailable } from './git';
import { IS_PRODUCTION_BUILD } from '../constants';
import * as fs from 'fs';
import { pick } from 'lodash';
import { DefinePngResource } from './resources';
import { ValidateAssetDefinitionPoseLimits } from './definition';

const ROOM_DEVICE_WEARABLE_PART_DEFINITION_FALLTHOUGH_PROPERTIES = [
	// Properties
	'poseLimits',
	'effects',
	'attributes',
	'requirements',
	'hides',
	'blockAddRemove',
	'blockSelfAddRemove',
	'blockModules',
	'blockSelfModules',
	'blockSlots',
	'coverSlots',
	'occupySlots',
	'overrideColorKey',
	'excludeFromColorInheritance',

	// Asset definition
	'name',
	'size',
	'chat',
] as const satisfies readonly (keyof RoomDeviceWearablePartAssetDefinition)[];

export type RoomDeviceWearablePartAssetDefinitionFallthoughProperties = (typeof ROOM_DEVICE_WEARABLE_PART_DEFINITION_FALLTHOUGH_PROPERTIES)[number] & string;

const ROOM_DEVICE_DEFINITION_FALLTHOUGH_PROPERTIES = [
	// Asset definition
	'name',
	'size',

	// Graphics definition
	'pivot',
	'graphicsLayers',
] as const satisfies readonly (keyof RoomDeviceAssetDefinition)[];

export type AssetRoomDeviceDefinitionFallthoughProperties = (typeof ROOM_DEVICE_DEFINITION_FALLTHOUGH_PROPERTIES)[number] & string;

function DefineRoomDeviceWearablePart(baseId: AssetId, slot: string, def: IntermediateRoomDeviceWearablePartDefinition): AssetId | null {
	const id: AssetId = `${baseId}/${slot}` as const;

	const logger = GetLogger('RoomDeviceWearablePart', `[Asset ${id}]`);

	let definitionValid = true;

	if (def.size === 'bodypart') {
		definitionValid = false;
		logger.error(`Invalid size: Only bodyparts can use the 'bodypart' size`);
	}

	if (def.poseLimits) {
		ValidateAssetDefinitionPoseLimits(logger, 'poseLimits', def.poseLimits);
	}

	if (!definitionValid) {
		logger.error('Invalid asset definition, asset skipped');
		return null;
	}

	const asset: RoomDeviceWearablePartAssetDefinition<AssetRepoExtraArgs> = {
		...pick(def, ROOM_DEVICE_WEARABLE_PART_DEFINITION_FALLTHOUGH_PROPERTIES),
		type: 'roomDeviceWearablePart',
		id,
		hasGraphics: def.graphics !== undefined,
	};

	// Load and verify graphics
	if (def.graphics) {
		const graphics = LoadAssetsGraphics(join(AssetSourcePath, def.graphics));

		const loggerGraphics = logger.prefixMessages('[Graphics]');

		for (let i = 0; i < graphics.layers.length; i++) {
			const layer = graphics.layers[i];

			if (layer.colorizationKey != null) {
				loggerGraphics.warning(`Layer #${i} has colorizationKey ${layer.colorizationKey}, but room devices don't support colorization yet.`);
			}
		}

		GraphicsDatabase.registerAsset(id, graphics);
	}
	AssetDatabase.registerAsset(id, asset);

	return id;
}

export function GlobalDefineRoomDeviceAsset(def: IntermediateRoomDeviceDefinition): void {
	const id: AssetId = `a/${def.id ?? DefaultId()}` as const;

	const logger = GetLogger('DefineRoomDeviceAsset', `[Asset ${id}]`);

	let definitionValid = true;

	const slots: RoomDeviceAssetDefinition<AssetRepoExtraArgs>['slots'] = {};
	const slotIds = new Set<string>();

	//#region Load slots

	for (const [k, v] of Object.entries(def.slots)) {
		slotIds.add(k);

		const slotWearableId = DefineRoomDeviceWearablePart(id, k, v.asset);
		if (slotWearableId == null) {
			definitionValid = false;
			logger.error(`Failed to process asset for slot '${k}'`);
			continue;
		}

		slots[k] = {
			name: v.name,
			wearableAsset: slotWearableId,
		};
	}

	//#endregion

	//#region Load graphics layers

	def.graphicsLayers.forEach((layer, index) => {
		if (layer.type === 'sprite') {
			layer.image = layer.image && DefinePngResource(layer.image, 'asset').resultName;
		} else if (layer.type === 'slot') {
			if (!slotIds.has(layer.slot)) {
				definitionValid = false;
				logger.error(`Layer #${index + 1} links to unknown slot '${layer.slot}'`);
			}
		} else {
			AssertNever(layer);
		}
	});

	//#endregion

	//#region Validate ownership data

	// Validate responsible contributor
	const contributor = def.ownership.responsibleContributor.toLowerCase();
	if (GitDataAvailable &&
		!Contributors.has(contributor) &&
		(!CurrentCommitter || CurrentCommitter.toLowerCase() !== contributor)
	) {
		if (IS_PRODUCTION_BUILD || !CurrentCommitter) {
			logger.warning('The responsible contributor was not found in the Git history.');
		} else {
			logger.warning(
				'The responsible contributor was not found in the Git history.\n' +
				`If you commit with current settings, this is your commit signature: '${CurrentCommitter}'`,
			);
		}
	}

	// Validate presence of licensing data
	if (def.ownership.licensing.length === 0) {
		logger.warning('Asset is missing licensing info');
	}

	for (const license of def.ownership.licensing) {
		// Validate that custom license exists and is a file
		if (license.license.startsWith('./')) {
			const path = join(AssetSourcePath, license.license);
			if (!fs.existsSync(path) || !fs.statSync(path).isFile()) {
				logger.warning(`Custom license '${license.license}' doesn't exist or is not a file.`);
			}
		}
	}
	// Check that CHANGE_ME was replaced
	if (def.ownership.licensing
		.flatMap((l) => [l.part, l.copyrightHolder, l.editedBy])
		.includes('CHANGE_ME')
	) {
		logger.warning(`Licensing data includes fields with 'CHANGE_ME' template data that need to be changed.`);
	}

	//#endregion

	if (!definitionValid) {
		logger.error('Invalid asset definition, asset skipped');
		return;
	}

	const asset: RoomDeviceAssetDefinition<AssetRepoExtraArgs> = {
		...pick(def, ROOM_DEVICE_DEFINITION_FALLTHOUGH_PROPERTIES),
		type: 'roomDevice',
		id,
		slots,
	};

	AssetDatabase.registerAsset(id, asset);
}
