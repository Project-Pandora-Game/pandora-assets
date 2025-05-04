import * as fs from 'fs';
import { GetLogger, type AssetsTileTextureInfo } from 'pandora-common';
import { join } from 'path';
import { TILE_TEXTURES_SRC_DIR } from '../config.ts';
import { SetCurrentContext } from './context.ts';
import { GitValidateResponsibleContributor } from './git.ts';
import { GENERATED_RESOLUTIONS } from './graphicsConstants.ts';
import { DefineImageResource } from './resources.ts';
import { RoomDatabase } from './roomDatabase.ts';

export function DefineTileTexture(def: IntermediateTileTextureDefinition): void {
	const id = def.id;

	const logger = GetLogger('DefineTileTexture', `[TileTexture ${id}]`);
	SetCurrentContext('[TileTextures]', id, TILE_TEXTURES_SRC_DIR);

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
			const path = join(TILE_TEXTURES_SRC_DIR, license.license);
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

	const imageResource = DefineImageResource(def.image, 'textureTile', 'png');

	for (const resolution of GENERATED_RESOLUTIONS) {
		imageResource.addDownscaledImage(resolution);
	}

	const result: AssetsTileTextureInfo = {
		id,
		name: def.name,
		image: imageResource.resultName,
	};

	RoomDatabase.registerTileTexture(result);
}
