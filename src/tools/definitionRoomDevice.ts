import { existsSync, readFileSync, unlinkSync, writeFileSync } from 'fs';
import { freeze, type Immutable } from 'immer';
import { cloneDeep, omit, pick } from 'lodash-es';
import { Assert, AssetId, AssetSourceGraphicsDefinitionSchema, GetLogger, ModuleNameSchema, RoomDeviceAssetDefinition, RoomDeviceModuleStaticData, RoomDeviceProperties, RoomDeviceWearablePartAssetDefinition, SCHEME_OVERRIDE, type AssetCreditsInfo, type AssetSourceGraphicsRoomDeviceDefinition, type GraphicsBuildContextRoomDeviceData } from 'pandora-common';
import { join } from 'path';
import { AssetDatabase } from './assetDatabase.ts';
import { AssetSourcePath, DefaultId, GetAssetRepositoryPath } from './context.ts';
import { GraphicsDatabase } from './graphicsDatabase.ts';
import { LoadRoomDeviceAssetGraphicsFile } from './graphicsRoomDevice.ts';
import { RegisterImportContextProcess } from './importContext.ts';
import { ValidateOwnershipData } from './licensing.ts';
import { LoadRoomDeviceColorization } from './load_helpers/color.ts';
import { DefinePngResource, PREVIEW_SIZE } from './resources.ts';
import { ValidateAssetChatMessages } from './validation/chatMessages.ts';
import { ValidateAllModules } from './validation/modules.ts';
import { ValidateAssetProperties, ValidateAssetPropertiesFinalize } from './validation/properties.ts';
import { RoomDevicePropertiesValidationMetadata, ValidateRoomDeviceProperties } from './validation/roomDeviceProperties.ts';

const ROOM_DEVICE_WEARABLE_PART_DEFINITION_FALLTHROUGH_PROPERTIES = [
	// Properties
	'poseLimits',
	'effects',
	'attributes',
	'stateFlags',
	'blockAddRemove',
	'blockModules',
	'overrideColorKey',
	'excludeFromColorInheritance',

	// Asset definition
	'name',
	'size',
	'chat',
	'posePresets',
	'assetPreferenceDefault',
] as const satisfies readonly (keyof RoomDeviceWearablePartAssetDefinition)[];

export type RoomDeviceWearablePartAssetDefinitionFallthroughProperties = (typeof ROOM_DEVICE_WEARABLE_PART_DEFINITION_FALLTHROUGH_PROPERTIES)[number] & string;

const ROOM_DEVICE_DEFINITION_FALLTHROUGH_PROPERTIES = [
	// Asset definition
	'name',
	'size',
	'chat',
	'modules',
	'storageModule',
	'staticAttributes',
	'posePresets',
	'preview',
	'assetPreferenceDefault',
	'requireFreeHandsToUseDefault',

	// Graphics definition
	'colorization',
	'colorRibbonGroup',
	'pivot',
] as const satisfies readonly (keyof RoomDeviceAssetDefinition)[];

export type AssetRoomDeviceDefinitionFallthroughProperties = (typeof ROOM_DEVICE_DEFINITION_FALLTHROUGH_PROPERTIES)[number] & string;

function DefineRoomDeviceWearablePart(
	baseId: AssetId,
	slot: string,
	def: IntermediateRoomDeviceWearablePartDefinition,
	propertiesValidationMetadata: RoomDevicePropertiesValidationMetadata,
	preview: string | null,
	credits: AssetCreditsInfo,
): AssetId | null {
	const id: AssetId = `${baseId}/${slot}` as const;

	const logger = GetLogger('RoomDeviceWearablePart', `[Asset ${id}]`);

	let definitionValid = true;

	if (def.size === 'bodypart') {
		definitionValid = false;
		logger.error(`Invalid size: Only bodyparts can use the 'bodypart' size`);
	}

	// All room device parts must be marked as a room device
	def.attributes ??= {};
	def.attributes.provides ??= [];
	if (!def.attributes.provides.includes('Room_device')) {
		def.attributes.provides.push('Room_device');
	}

	propertiesValidationMetadata = {
		...propertiesValidationMetadata,
		getBaseAttributes: () => (def.attributes?.provides ?? []),
	};

	ValidateAssetProperties(logger, '#', propertiesValidationMetadata, def);
	ValidateAssetChatMessages(logger, '#.chat', omit(def.chat, ['chatDescriptor']));

	if (!definitionValid) {
		logger.error('Invalid asset definition, asset skipped');
		return null;
	}

	const asset: RoomDeviceWearablePartAssetDefinition<AssetRepoExtraArgs> = {
		...pick(def, ROOM_DEVICE_WEARABLE_PART_DEFINITION_FALLTHROUGH_PROPERTIES),
		type: 'roomDeviceWearablePart',
		id,
		preview,
		credits,
	};

	AssetDatabase.registerAsset(id, asset);

	return id;
}

export function GlobalDefineRoomDeviceAsset(def: IntermediateRoomDeviceDefinition): IntermediateRoomDeviceDefinition {
	freeze(def, true);
	RegisterImportContextProcess(() => GlobalDefineRoomDeviceAssetProcess(cloneDeep(def)));
	return def;
}

async function GlobalDefineRoomDeviceAssetProcess(def: IntermediateRoomDeviceDefinition): Promise<void> {
	const id: AssetId = `a/${def.id ?? DefaultId()}` as const;

	const logger = GetLogger('DefineRoomDeviceAsset', `[Asset ${id}]`);

	let definitionValid = true;

	const slots: RoomDeviceAssetDefinition<AssetRepoExtraArgs>['slots'] = {};
	const slotIds = new Set<string>();

	const propertiesValidationMetadata: RoomDevicePropertiesValidationMetadata = {
		getModuleNames: () => Object.keys(def.modules ?? {}),
		getBaseAttributes: () => [],
		getSlotNames: () => Object.keys(def.slots),
		context: 'base',
		providedStateFlags: new Set(),
		requiredStateFlags: new Set(),
	};

	if (def.preview === undefined) {
		logger.warning(`Missing preview. It should be a ${PREVIEW_SIZE}x${PREVIEW_SIZE} png image or \`null\` if the asset shouldn't have one.`);
	}
	const preview = def.preview != null ? DefinePngResource(def.preview, 'preview') : null;

	const credits: AssetCreditsInfo = {
		credits: def.ownership.credits,
		sourcePath: GetAssetRepositoryPath(),
	};

	//#region Load slots

	for (const [k, v] of Object.entries(def.slots)) {
		slotIds.add(k);

		const slotWearableId = DefineRoomDeviceWearablePart(id, k, v.asset, propertiesValidationMetadata, preview, credits);
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

	const {
		colorization,
		valid: colorizationValid,
	} = LoadRoomDeviceColorization(logger, def.colorization);
	def.colorization = colorization;
	definitionValid &&= colorizationValid;

	if (def.colorRibbonGroup != null && colorization?.[def.colorRibbonGroup] == null) {
		definitionValid = false;
		logger.error(`Invalid color ribbon group: It must match one of the colorization groups.`);
	}

	if (!definitionValid) {
		logger.error('Invalid asset definition, asset skipped');
		return;
	}

	const asset: RoomDeviceAssetDefinition<AssetRepoExtraArgs> = {
		...pick(def, ROOM_DEVICE_DEFINITION_FALLTHROUGH_PROPERTIES),
		type: 'roomDevice',
		id,
		preview,
		slots,
		credits,
	};

	// Validate properties
	ValidateAssetChatMessages(logger, '#.chat', omit(def.chat, ['chatDescriptor']));

	// Validate all modules
	propertiesValidationMetadata.context = 'module';
	ValidateAllModules<RoomDeviceProperties<AssetRepoExtraArgs>, RoomDeviceModuleStaticData, RoomDevicePropertiesValidationMetadata>(logger, '#.modules', {
		baseAssetDefinition: asset,
		validateProperties: ValidateRoomDeviceProperties,
		propertiesValidationMetadata,
	}, def.modules);
	if (def.storageModule != null) {
		if (def.modules?.[def.storageModule] == null) {
			logger.warning(`#.storageModule refers to an unknown module '${def.storageModule}'`);
		}
	}

	for (const module of Object.values(def.modules ?? {})) {
		if (module.staticConfig.slotName == null) {
			continue;
		}
		if (!slotIds.has(module.staticConfig.slotName)) {
			logger.error(`Module '${module.name}' references unknown slot '${module.staticConfig.slotName}'`);
		}
	}

	ValidateAssetPropertiesFinalize(logger, propertiesValidationMetadata);

	// Validate ownership data
	ValidateOwnershipData(def.ownership, logger, true);

	asset.staticAttributes ??= [];
	if (!asset.staticAttributes.includes('Room_device')) {
		asset.staticAttributes.push('Room_device');
	}

	// Load and verify graphics
	{
		const builtAssetData: Immutable<GraphicsBuildContextRoomDeviceData> = {
			modules: asset.modules,
			colorizationKeys: new Set(Object.keys(colorization ?? {})),
			slotIds,
		};

		// Migrate existing graphics if needed
		/* eslint-disable @typescript-eslint/no-deprecated */
		const graphicsPath = join(AssetSourcePath, def.graphics);
		if (!existsSync(graphicsPath) && def.graphicsLayers !== undefined) {
			logger.alert('Migrating graphics definitions to graphics file. Please remove \'graphicsLayers\' from the definition after this completes.');
			const migratedDefinition: AssetSourceGraphicsRoomDeviceDefinition = {
				layers: def.graphicsLayers,
				slots: {},
			};

			ModuleNameSchema[SCHEME_OVERRIDE](() => { /* NOOP */ });
			for (const [k, v] of Object.entries(def.slots)) {
				if (v.asset.graphics) {
					const rawDefinition = readFileSync(join(AssetSourcePath, v.asset.graphics), { encoding: 'utf-8' });
					const slotDefinition = AssetSourceGraphicsDefinitionSchema.parse(JSON.parse(
						rawDefinition
							.split('\n')
							.filter((line) => !line.trimStart().startsWith('//'))
							.join('\n'),
					));

					migratedDefinition.slots[k] = {
						layers: slotDefinition.layers,
					};
				}
			}

			// Write the new definition
			const canonizedExport = JSON.stringify(migratedDefinition, undefined, '\t').trim() + '\n';
			writeFileSync(graphicsPath, canonizedExport, { encoding: 'utf-8' });

			// Remove slot graphics
			for (const [, v] of Object.entries(def.slots)) {
				if (v.asset.graphics) {
					unlinkSync(join(AssetSourcePath, v.asset.graphics));
				}
			}
		}

		if (def.graphicsLayers !== undefined) {
			logger.warning('Deprecated property \'graphicsLayers\' is used. Please remove it after migration to JSON graphics definition completes.');
		}
		for (const [k, v] of Object.entries(def.slots)) {
			if (v.asset.graphics) {
				logger.warning(`[slot '${k}'] Deprecated property 'graphics' is used. Please remove it after migration to JSON graphics definition completes.`);
			}
		}
		/* eslint-enable @typescript-eslint/no-deprecated */

		const { graphics, graphicsSource, slotGraphics } = await LoadRoomDeviceAssetGraphicsFile(
			graphicsPath,
			builtAssetData,
		);

		GraphicsDatabase.registerAssetGraphics(id, graphics, graphicsSource);

		const usedSlots = new Set<string>();
		for (const [k, v] of Object.entries(asset.slots)) {
			if (Object.hasOwn(slotGraphics, k)) {
				Assert(slotGraphics[k] != null);
				usedSlots.add(k);
				GraphicsDatabase.registerAssetGraphics(v.wearableAsset, slotGraphics[k], null);
			}
		}

		for (const k of Object.keys(slotGraphics)) {
			if (!usedSlots.has(k)) {
				logger.warning(`Graphics contains entry for unknown slot '${k}'`);
			}
		}
	}

	AssetDatabase.registerAsset(id, asset);
}
