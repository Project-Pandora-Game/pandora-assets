import * as fs from 'fs';
import type { Logger } from 'pandora-common';
import { join } from 'path';
import { AssetSourcePath } from './context.ts';
import { GitValidateResponsibleContributor } from './git.ts';

export function ValidateOwnershipData(ownership: AssetOwnershipData, logger: Logger, requireLicensing: boolean): void {
	// Validate responsible contributor
	GitValidateResponsibleContributor(logger, ownership.responsibleContributor);

	// Validate presence of licensing data
	if (requireLicensing && ownership.licensing.length === 0) {
		logger.warning('Asset has graphics, but no licensing info');
	}

	for (const license of ownership.licensing) {
		// Validate that custom license exists and is a file
		if (license.license.startsWith('./')) {
			const path = join(AssetSourcePath, license.license);
			if (!fs.existsSync(path) || !fs.statSync(path).isFile()) {
				logger.warning(`Custom license '${license.license}' doesn't exist or is not a file.`);
			}
		}
	}
	// Check that CHANGE_ME was replaced
	if (ownership.licensing
		.flatMap((l) => [l.part, l.copyrightHolder, l.editedBy])
		.includes('CHANGE_ME')
	) {
		logger.warning(`Licensing data includes fields with 'CHANGE_ME' template data that need to be changed.`);
	}
}
