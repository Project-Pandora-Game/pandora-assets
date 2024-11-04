import {
	AssertNever,
	AssetBaseDefinition,
	AssetModuleDefinition,
	AssetSizeMapping,
	AssetType,
	IsObject,
	Logger,
} from 'pandora-common';
import { IModuleConfigLockSlot } from 'pandora-common/dist/assets/modules/lockSlot.js';
import { IModuleConfigStorage } from 'pandora-common/dist/assets/modules/storage.js';
import { IModuleConfigTyped } from 'pandora-common/dist/assets/modules/typed.js';

interface ModuleValidationMetadata<TProperties, TPropertiesValidationMetadata> {
	baseAssetDefinition: AssetBaseDefinition<AssetType, AssetRepoExtraArgs>;
	validateProperties: (logger: Logger, context: string, metadata: TPropertiesValidationMetadata, properties: TProperties) => void;
	propertiesValidationMetadata: TPropertiesValidationMetadata;
}

export function ValidateAllModules<TProperties, TStaticData, TPropertiesValidationMetadata>(
	logger: Logger,
	context: string,
	metadata: ModuleValidationMetadata<TProperties, TPropertiesValidationMetadata>,
	modules: Record<string, AssetModuleDefinition<TProperties, TStaticData>> | undefined,
): void {
	for (const [k, v] of Object.entries(modules ?? {})) {
		ValidateModule(logger, `${context}.${k}`, metadata, v);
	}
}

export function ValidateModule<TProperties, TStaticData, TPropertiesValidationMetadata>(
	logger: Logger,
	context: string,
	metadata: ModuleValidationMetadata<TProperties, TPropertiesValidationMetadata>,
	moduleDefinition: AssetModuleDefinition<TProperties, TStaticData>,
): void {
	if (moduleDefinition.type === 'typed') {
		ValidateTypedModule(logger, context, metadata, moduleDefinition);
	} else if (moduleDefinition.type === 'lockSlot') {
		ValidateLockSlotModule(logger, context, metadata, moduleDefinition);
	} else if (moduleDefinition.type === 'storage') {
		ValidateStorageModule(logger, context, metadata, moduleDefinition);
	} else {
		AssertNever(moduleDefinition);
	}
}

export function ValidateTypedModule<TProperties, TStaticData, TPropertiesValidationMetadata>(
	logger: Logger,
	context: string,
	metadata: ModuleValidationMetadata<TProperties, TPropertiesValidationMetadata>,
	moduleDefinition: IModuleConfigTyped<TProperties, TStaticData>,
): void {
	const seenIds = new Set<string>();

	// Validate and collect ids
	for (let i = 0; i < moduleDefinition.variants.length; i++) {
		const variant = moduleDefinition.variants[i];
		const variantCtx = `${context}.variants[${i}]`;

		if (seenIds.has(variant.id)) {
			logger.error(`Invalid module id:\n\t${variantCtx} has duplicate id, all ids must be unique`);
		}
		seenIds.add(variant.id);
	}

	// Validate rest
	const explicitDefault = moduleDefinition.variants.findIndex(((v) => v.default));
	for (let i = 0; i < moduleDefinition.variants.length; i++) {
		const variant = moduleDefinition.variants[i];
		const variantCtx = `${context}.variants[${i}]`;

		if (variant.default && i !== explicitDefault) {
			logger.warning(`Invalid module config:\n\t${variantCtx} is set as default, but earlier variant takes precedence`);
		}

		if (variant.properties !== undefined) {
			metadata.validateProperties(logger, `${variantCtx}.properties`, metadata.propertiesValidationMetadata, variant.properties);
		}

		if (IsObject(variant.switchMessage)) {
			for (const k of Object.keys(variant.switchMessage)) {
				if (k === '_')
					continue;
				if (!seenIds.has(k)) {
					logger.warning(`Invalid module config:\n\t${variantCtx}.switchMessage: Unknown variant '${k}'`);
				}
			}
		}
	}
}

export function ValidateLockSlotModule<TProperties, TStaticData, TPropertiesValidationMetadata>(
	logger: Logger,
	context: string,
	metadata: ModuleValidationMetadata<TProperties, TPropertiesValidationMetadata>,
	moduleDefinition: IModuleConfigLockSlot<TProperties, TStaticData>,
): void {
	if (moduleDefinition.emptyProperties !== undefined) {
		metadata.validateProperties(logger, `${context}.emptyProperties`, metadata.propertiesValidationMetadata, moduleDefinition.emptyProperties);
	}
	if (moduleDefinition.occupiedProperties !== undefined) {
		metadata.validateProperties(logger, `${context}.occupiedProperties`, metadata.propertiesValidationMetadata, moduleDefinition.occupiedProperties);
	}
	if (moduleDefinition.lockedProperties !== undefined) {
		metadata.validateProperties(logger, `${context}.lockedProperties`, metadata.propertiesValidationMetadata, moduleDefinition.lockedProperties);
	}
}

export function ValidateStorageModule<TProperties, TStaticData, TPropertiesValidationMetadata>(
	logger: Logger,
	context: string,
	metadata: ModuleValidationMetadata<TProperties, TPropertiesValidationMetadata>,
	moduleDefinition: IModuleConfigStorage<TProperties, TStaticData>,
): void {
	if (!Number.isInteger(moduleDefinition.maxCount) || moduleDefinition.maxCount < 1) {
		logger.error(`Invalid module config: ${context}.maxCount: Expected positive integer, found '${moduleDefinition.maxCount}'`);
	}

	const maxContentSize = AssetSizeMapping[moduleDefinition.maxAcceptedSize];
	const assetSize = AssetSizeMapping[metadata.baseAssetDefinition.size];
	if (!(maxContentSize < assetSize)) {
		logger.error(`Invalid module config: ${context}.maxAcceptedSize:\n\tSize of accepted content must be strictly smaller than the asset itself ('${moduleDefinition.maxAcceptedSize}' >= '${metadata.baseAssetDefinition.size}')`);
	}
}
