import * as fs from 'fs';
import { isEqual } from 'lodash-es';
import { Assert, CalculateBackgroundDataFromCalibrationData, GetLogger, RoomBackgroundCalibrationDataSchema, RoomBackgroundInfo } from 'pandora-common';
import { join } from 'path';
import { BACKGROUNDS_SRC_DIR } from '../constants.js';
import { SetCurrentContext } from './context.js';
import { GitValidateResponsibleContributor } from './git.js';
import { GENERATED_RESOLUTIONS } from './graphics.js';
import { DefineImageResource, DefineJpgResource } from './resources.js';
import { RoomDatabase } from './roomDatabase.js';

const PREVIEW_WIDTH = 200;
const PREVIEW_HEIGHT = 100;

export function DefineRoomBackground(def: IntermediateRoomBackgroundDefinition): void {
	const id = def.id;

	const logger = GetLogger('DefineRoomBackground', `[Background ${id}]`);
	SetCurrentContext('[Backgrounds]', id, BACKGROUNDS_SRC_DIR);

	let definitionValid = true;

	const parsedCalibration = RoomBackgroundCalibrationDataSchema.safeParse(def.calibration);

	if (!parsedCalibration.success) {
		definitionValid = false;
		logger.error('Invalid calibration data:\n', JSON.stringify(parsedCalibration.error.issues, undefined, 4));
	} else if (!isEqual(parsedCalibration.data, def.calibration)) {
		logger.warning('Invalid calibration data: Data changed during parsing:', '\nOriginal:', def.calibration, '\nAfter load:', parsedCalibration.data);
	}

	//#region Validate ownership data

	// Validate responsible contributor
	GitValidateResponsibleContributor(logger, def.ownership.responsibleContributor);

	// Validate presence of licensing data
	if (def.ownership.licensing.length === 0) {
		logger.warning('Missing licensing info');
	}

	for (const license of def.ownership.licensing) {
		// Validate that custom license exists and is a file
		if (license.license.startsWith('./')) {
			const path = join(BACKGROUNDS_SRC_DIR, license.license);
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
		logger.error('Invalid background definition, background skipped');
		return;
	}
	Assert(parsedCalibration.success);

	const imageResource = DefineImageResource(def.image, 'background', 'jpg');
	imageResource.addSizeCheck(def.calibration.imageSize[0], def.calibration.imageSize[1]);

	for (const resolution of GENERATED_RESOLUTIONS) {
		imageResource.addDownscaledImage(resolution);
	}

	const preview = DefineJpgResource(`${def.image}@${PREVIEW_WIDTH}x${PREVIEW_HEIGHT}`, 'background');

	const background: RoomBackgroundInfo = {
		...CalculateBackgroundDataFromCalibrationData(imageResource.resultName, parsedCalibration.data),
		id,
		name: def.name,
		preview,
		tags: def.tags,
	};

	RoomDatabase.registerBackground(background);
}
