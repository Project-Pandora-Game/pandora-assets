import {
	AssetDefinitionPoseLimit,
	AssetDefinitionPoseLimits,
	AssetProperties,
	BONE_MIN,
	BONE_MAX,
	Logger,
} from 'pandora-common';
import { ATTRIBUTES_DEFINITION, AttributeNames } from '../../attributes';

export interface PropertiesValidationMetadata {
	getModuleNames: () => readonly string[];
	getBaseAttributes: () => readonly AttributeNames[];
}

export function ValidateAssetProperties(
	logger: Logger,
	context: string,
	metadata: PropertiesValidationMetadata,
	properties: AssetProperties<AssetRepoExtraArgs>,
): void {
	if (properties.poseLimits) {
		ValidateAssetDefinitionPoseLimits(logger, `${context}.poseLimits`, properties.poseLimits);
	}

	if (properties.attributes) {
		const includedAttributes = new Set<string>(metadata.getBaseAttributes().concat(properties.attributes.provides ?? []));
		for (const attribute of (properties.attributes.provides ?? [])) {
			const attributeData = ATTRIBUTES_DEFINITION[attribute];
			// Check that attribute parents are included
			for (const parentAttribute of (attributeData.parentAttributes ?? [])) {
				if (!includedAttributes.has(parentAttribute)) {
					logger.warning(`[Attributes] ${context}.attributes.provides:\n\tAttribute '${attribute}' requires parent attribute '${parentAttribute}'. Add it either to the same or higher attribute list.`);
				}
			}
		}
	}

	for (const moduleName of properties.blockModules ?? []) {
		if (!metadata.getModuleNames().includes(moduleName)) {
			logger.warning(`Invalid configuration: ${context}.blockModules:\n\tUnknown module '${moduleName}'`);
		}
	}

	for (const moduleName of properties.blockSelfModules ?? []) {
		if (!metadata.getModuleNames().includes(moduleName)) {
			logger.warning(`Invalid configuration: ${context}.blockSelfModules:\n\tUnknown module '${moduleName}'`);
		}
	}
}

//#region Pose limits
function ValidateAssetDefinitionPoseLimits(logger: Logger, context: string, limits: AssetDefinitionPoseLimits): void {
	ValidateAssetDefinitionPoseLimit(logger, context, limits);
	if (!limits.options) {
		return;
	}
	for (let i = 0; i < limits.options.length; i++) {
		ValidateAssetDefinitionPoseLimits(logger, `${context}[${i}]`, limits.options[i]);
	}
}

function ValidateAssetDefinitionPoseLimit(logger: Logger, context: string, { bones, arms, leftArm, rightArm }: AssetDefinitionPoseLimit): void {
	for (const [name, range] of Object.entries(bones ?? {})) {
		if (typeof range === 'number') {
			if (range < BONE_MIN || range > BONE_MAX) {
				logger.error(`Invalid pose limit:\n\t${context}.bones.${name} is not a valid bone range, must be in range [${BONE_MIN}, ${BONE_MAX}]`);
			}
			continue;
		} else if (!range) {
			logger.error(`Invalid pose limit:\n\t${context}.bones.${name} is not a valid bone range, must be an array or number`);
			continue;
		}
		let lastMax = BONE_MIN - 1;
		for (const [min, max] of range) {
			if (!Number.isInteger(min) || min < BONE_MIN || min > BONE_MAX) {
				logger.error(`Invalid pose limit:\n\t${context}.bones.${name} is not a valid bone range, must be in range [${BONE_MIN}, ${BONE_MAX}] of integers`);
			}
			if (!Number.isInteger(max) || max < BONE_MIN || max > BONE_MAX) {
				logger.error(`Invalid pose limit:\n\t${context}.bones.${name} is not a valid bone range, must be in range [${BONE_MIN}, ${BONE_MAX}] of integers`);
			}
			if (min > max) {
				logger.error(`Invalid pose limit:\n\t${context}.bones.${name} is not a valid bone range, min must not be greater than max`);
			}
			if (min <= lastMax) {
				logger.error(`Invalid pose limit:\n\t${context}.bones.${name} is not a valid bone range, ranges must not overlap`);
			}
			lastMax = max;
		}
	}
	if (arms && Object.keys(arms).length === 0) {
		logger.error(`Invalid pose limit:\n\t${context}.arms must be a non-empty object`);
	}
	if (leftArm && Object.keys(leftArm).length === 0) {
		logger.error(`Invalid pose limit:\n\t${context}.leftArm must be a non-empty object`);
	}
	if (rightArm && Object.keys(rightArm).length === 0) {
		logger.error(`Invalid pose limit:\n\t${context}.rightArm must be a non-empty object`);
	}
	for (const key of Object.keys(arms ?? {})) {
		if (leftArm && key in leftArm) {
			logger.error(`Invalid pose limit:\n\t${context}.arms.${key} and ${context}.leftArm.${key} are both defined`);
		}
		if (rightArm && key in rightArm) {
			logger.error(`Invalid pose limit:\n\t${context}.arms.${key} and ${context}.rightArm.${key} are both defined`);
		}
	}
}
//#endregion

