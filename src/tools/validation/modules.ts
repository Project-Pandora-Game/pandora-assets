import {
	AssertNever,
	AssetBaseDefinition,
	AssetModuleDefinition,
	AssetSizeMapping,
	AssetType,
	LIMIT_ITEM_MODULE_TEXT_LENGTH,
	Logger,
} from 'pandora-common';
import type { IModuleConfigLockSlot } from 'pandora-common/assets/modules/lockSlot';
import type { IModuleConfigStorage } from 'pandora-common/assets/modules/storage';
import type { ModuleConfigText } from 'pandora-common/assets/modules/text';
import type { IModuleConfigTyped } from 'pandora-common/assets/modules/typed';

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
	} else if (moduleDefinition.type === 'text') {
		ValidateTextModule(logger, context, metadata, moduleDefinition);
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
	}

	// Validate migration
	if (moduleDefinition.variantMigration != null) {
		for (const [from, to] of Object.entries(moduleDefinition.variantMigration)) {
			if (seenIds.has(from)) {
				logger.warning(`Invalid module variant migration:\n\tMigration '${from}'→'${to}' is attempting to migrate from an existing variant and will never be used.`);
			}
			if (!seenIds.has(to)) {
				logger.warning(`Invalid module variant migration:\n\tMigration '${from}'→'${to}' is attempting to migrate to an unknown variant.`);
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
	if (moduleDefinition.unlockedProperties !== undefined) {
		metadata.validateProperties(logger, `${context}.unlockedProperties`, metadata.propertiesValidationMetadata, moduleDefinition.unlockedProperties);
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

export function ValidateTextModule<TProperties, TStaticData, TPropertiesValidationMetadata>(
	logger: Logger,
	context: string,
	_metadata: ModuleValidationMetadata<TProperties, TPropertiesValidationMetadata>,
	moduleDefinition: ModuleConfigText<TProperties, TStaticData>,
): void {
	if (moduleDefinition.maxLength != null) {
		if (!Number.isInteger(moduleDefinition.maxLength) || moduleDefinition.maxLength < 1) {
			logger.error(`Invalid module config: ${context}.maxLength: Expected positive integer, found '${moduleDefinition.maxLength}'`);
		}

		if (moduleDefinition.maxLength > LIMIT_ITEM_MODULE_TEXT_LENGTH) {
			logger.warning(`Invalid module config: ${context}.maxLength: Length will be limited to platform maximum ${LIMIT_ITEM_MODULE_TEXT_LENGTH}`);
		}
	}
}
