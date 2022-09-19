import { GetLogger } from 'pandora-common';
import simpleGit from 'simple-git';
import { BASE_DIR } from '../constants';

export let GitDataAvailable = false;
export let Contributors = new Set<string>();
export let CurrentCommitter = '';

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
