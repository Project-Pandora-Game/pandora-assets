import {
	Logger,
	RoomDeviceProperties,
} from 'pandora-common';
import { PropertiesValidationMetadata, ValidateAssetProperties } from './properties.ts';

export interface RoomDevicePropertiesValidationMetadata extends PropertiesValidationMetadata {
	getSlotNames: () => readonly string[];
}

export function ValidateRoomDeviceProperties(
	logger: Logger,
	context: string,
	metadata: RoomDevicePropertiesValidationMetadata,
	properties: RoomDeviceProperties<AssetRepoExtraArgs>,
): void {

	for (const [slotName, slotProperties] of Object.entries(properties.slotProperties ?? {})) {
		if (!metadata.getSlotNames().includes(slotName)) {
			logger.warning(`Invalid configuration:\n\t${context}..slotProperties: Unknown slot '${slotName}'`);
		}

		if (slotProperties !== undefined) {
			ValidateAssetProperties(logger, `${context}.slotProperties.${slotName}`, metadata, slotProperties);
		}
	}

	if (properties.stateFlags !== undefined) {
		if (metadata.context === 'base') {
			logger.warning(`[State flags] ${context}.stateFlags:\n\tState flags shouldn't be used directly on the asset.`);
		}
		properties.stateFlags.provides?.forEach((flag) => metadata.providedStateFlags.add(flag));
		Object.keys(properties.stateFlags.requires ?? {}).forEach((flag) => metadata.requiredStateFlags.add(flag));
	}

	for (const moduleName of properties.blockModules ?? []) {
		if (!metadata.getModuleNames().includes(moduleName)) {
			logger.warning(`Invalid configuration: ${context}.blockModules:\n\tUnknown module '${moduleName}'`);
		}
	}

	for (const slotName of properties.blockSlotsEnterLeave ?? []) {
		if (!metadata.getSlotNames().includes(slotName)) {
			logger.warning(`Invalid configuration: ${context}.blockSlotsEnterLeave:\n\tUnknown slot '${slotName}'`);
		}
	}
}
