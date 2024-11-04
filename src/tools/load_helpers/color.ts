import { HexRGBAColorStringSchema, Logger } from 'pandora-common';
import { COLOR_GROUP_DEFINITION } from '../../colorGroups.js';

function ParseMinAlpha(logger: Logger, key: string, inputMinAlpha: number | `${number}%` | undefined): {
	minAlpha: number | undefined;
	minAlphaValid: boolean;
} {
	let minAlphaValid = true;
	let minAlpha: number | undefined;
	if (inputMinAlpha != null) {
		if (typeof inputMinAlpha === 'string') {
			minAlpha = Math.round(parseInt(inputMinAlpha.slice(0, -1)) / 100 * 255);
		} else if (inputMinAlpha > 0 && inputMinAlpha < 1) {
			minAlpha = Math.round(inputMinAlpha * 255);
		} else {
			minAlpha = Math.round(inputMinAlpha);
		}
		if (minAlpha < 0 || minAlpha > 255) {
			minAlphaValid = false;
			logger.error(`Invalid minAlpha in colorization.${key}: '${inputMinAlpha}' is not a valid alpha value, accepted range is 0-255 or 0-1 or 0%-100%`);
		}
	}
	return {
		minAlpha,
		minAlphaValid,
	};
}

export function LoadAssetColorization(logger: Logger, data: Record<string, IntermediateAssetColorization> | undefined): {
	valid: boolean;
	colorization: Record<string, AssetColorization> | undefined;
} {
	let colorization: Record<string, AssetColorization> | undefined;
	let valid = true;
	if (data) {
		colorization = {};
		for (const [key, value] of Object.entries(data)) {
			const {
				minAlpha,
				minAlphaValid,
			} = ParseMinAlpha(logger, key, value.minAlpha);
			valid &&= minAlphaValid;

			if (value.group) {
				colorization[key] = {
					...value,
					minAlpha,
					default: COLOR_GROUP_DEFINITION[value.group],
				};
			} else {
				if (!HexRGBAColorStringSchema.safeParse(value.default).success) {
					valid = false;
					logger.error(`Invalid default in colorization.${key}: '${value.default}' is not a valid color, use full hex format, like '#ffffff'`);
				}
				colorization[key] = {
					...value,
					minAlpha,
				};
			}
		}
	}
	return {
		valid,
		colorization,
	};
}

export function LoadRoomDeviceColorization(logger: Logger, data: IntermediateRoomDeviceDefinition['colorization']): {
	valid: boolean;
	colorization: Record<string, AssetColorization> | undefined;
} {
	let colorization: Record<string, AssetColorization> | undefined;
	let valid = true;
	if (data) {
		colorization = {};
		for (const [key, value] of Object.entries(data)) {
			const {
				minAlpha,
				minAlphaValid,
			} = ParseMinAlpha(logger, key, value.minAlpha);
			valid &&= minAlphaValid;

			if (!HexRGBAColorStringSchema.safeParse(value.default).success) {
				valid = false;
				logger.error(`Invalid default in colorization.${key}: '${value.default}' is not a valid color, use full hex format, like '#ffffff'`);
			}
			colorization[key] = {
				...value,
				minAlpha,
			};
		}
	}
	return {
		valid,
		colorization,
	};
}
