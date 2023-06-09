import type { Logger } from 'pandora-common';
import { Contributors, CurrentCommitter, GitDataAvailable } from './git';
import { IS_PRODUCTION_BUILD } from '../constants';
import { AssetSourcePath } from './context';
import { join } from 'path';
import * as fs from 'fs';

export function ValidateOwnershipData(ownership: AssetOwnershipData, logger: Logger, requireLicensing: boolean): void {
	// Validate responsible contributor
	const contributor = ownership.responsibleContributor.toLowerCase();
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
