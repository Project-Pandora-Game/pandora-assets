import {
	Logger,
	RoomDeviceProperties,
} from 'pandora-common';
import { PropertiesValidationMetadata, ValidateAssetProperties } from './properties';

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
			logger.warning(`Invalid configuration: ${context}..slotProperties: Unknown slot '${slotName}'`);
		}

		if (slotProperties !== undefined) {
			ValidateAssetProperties(logger, `${context}.slotProperties.${slotName}`, metadata, slotProperties);
		}
	}

	for (const moduleName of properties.blockModules ?? []) {
		if (!metadata.getModuleNames().includes(moduleName)) {
			logger.warning(`Invalid configuration: ${context}.blockModules: Unknown module '${moduleName}'`);
		}
	}
	for (const moduleName of properties.blockSelfModules ?? []) {
		if (!metadata.getModuleNames().includes(moduleName)) {
			logger.warning(`Invalid configuration: ${context}.blockSelfModules: Unknown module '${moduleName}'`);
		}
	}

	for (const slotName of properties.blockSlotsEnterLeave ?? []) {
		if (!metadata.getSlotNames().includes(slotName)) {
			logger.warning(`Invalid configuration: ${context}.blockSlotsEnterLeave: Unknown slot '${slotName}'`);
		}
	}
	for (const slotName of properties.blockSlotsSelfEnterLeave ?? []) {
		if (!metadata.getSlotNames().includes(slotName)) {
			logger.warning(`Invalid configuration: ${context}.blockSlotsSelfEnterLeave: Unknown slot '${slotName}'`);
		}
	}
}