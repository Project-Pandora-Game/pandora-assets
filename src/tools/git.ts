import { GetLogger, Logger } from 'pandora-common';
import { simpleGit } from 'simple-git';
import { BASE_DIR, IS_PRODUCTION_BUILD } from '../constants.js';

let GitDataAvailable = false;
let Contributors = new Set<string>();
let CurrentCommitter = '';

const logger = GetLogger('Git');

export async function LoadGitData(): Promise<void> {
	try {
		const git = simpleGit(BASE_DIR, { timeout: { block: 10_000 } });

		const contributors = (await git.raw([
			'shortlog',
			'-se',
			'--group=committer',
			'--group=author',
			'--group=trailer:co-authored-by',
			'HEAD',
		]))
			.replace(/^\s*\d+\s*/gm, '')
			.split('\n')
			.map((l) => l.trim().toLowerCase())
			.filter((l) => !!l);
		Contributors = new Set(contributors);

		const name = (await git.getConfig('user.name', undefined)).value;
		const email = (await git.getConfig('user.email', undefined)).value;

		if (name && email) {
			CurrentCommitter = `${name} <${email}>`;
		} else {
			CurrentCommitter = '';
		}

		GitDataAvailable = true;
	} catch (error) {
		Contributors = new Set();
		CurrentCommitter = '';
		GitDataAvailable = false;
		logger.warning('Failed to load Git data, Git checks will be skipped.\n', error);
	}
}

export function GitValidateResponsibleContributor(log: Logger, responsibleContributor: string): void {
	const contributor = responsibleContributor.toLowerCase();
	if (GitDataAvailable &&
		!Contributors.has(contributor) &&
		(!CurrentCommitter || CurrentCommitter.toLowerCase() !== contributor)
	) {
		if (IS_PRODUCTION_BUILD || !CurrentCommitter) {
			log.warning('The responsible contributor was not found in the Git history.');
		} else {
			log.warning(
				'The responsible contributor was not found in the Git history.\n' +
				`If you commit with current settings, this is your commit signature: '${CurrentCommitter}'`,
			);
		}
	}
}
