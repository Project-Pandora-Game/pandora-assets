import { CharacterSize, GetLogger, IChatroomBackgroundInfo } from 'pandora-common';
import { SetCurrentContext } from './context';
import { join } from 'path';
import { Contributors, CurrentCommitter, GitDataAvailable } from './git';
import { BACKGROUNDS_SRC_DIR, IS_PRODUCTION_BUILD } from '../constants';
import * as fs from 'fs';
import { RoomDatabase } from './roomDatabase';
import { DefineJpgResource } from './resources';

export function DefineRoomBackground(def: IntermediateRoomBackgroundDefinition): void {
	const id = def.id;

	const logger = GetLogger('DefineRoomBackground', `[Background ${id}]`);
	SetCurrentContext('[Backgrounds]', id, BACKGROUNDS_SRC_DIR);

	let definitionValid = true;

	if (
		!Number.isInteger(def.size[0]) ||
		!Number.isInteger(def.size[1]) ||
		def.size[0] < CharacterSize.WIDTH ||
		def.size[1] < CharacterSize.HEIGHT
	) {
		definitionValid = false;
		logger.error(`Invalid size: Size must be whole number and at least ${CharacterSize.WIDTH}x${CharacterSize.HEIGHT}`);
	}

	if (def.scaling < 0) {
		definitionValid = false;
		logger.error(`Invalid scaling: Scaling can't be negative`);
	}

	if (def.maxY != null && (!Number.isInteger(def.maxY) || def.maxY > def.size[1])) {
		definitionValid = false;
		logger.error(`Invalid maxY: maxY must be an integer no larger than the height of the room`);
	}

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

	const background: IChatroomBackgroundInfo = {
		id,
		name: def.name,
		image: DefineJpgResource(def.image, 'background').resultName,
		size: def.size,
		scaling: def.scaling,
		maxY: def.maxY,
	};

	RoomDatabase.registerBackground(background);
}
