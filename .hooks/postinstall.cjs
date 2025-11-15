/* Scripts are run in Node, so don't make use of the logger or ES imports */
/* eslint-disable no-console, @typescript-eslint/no-require-imports */
const { constants } = require('fs');
const { copyFile } = require('fs/promises');
const { resolve } = require('path');
const { spawnSync } = require('child_process');
const { simpleGit } = require('simple-git');

postinstall();

async function postinstall() {
	const isCI = process.env.CI === 'true';
	await copyDotenv('.');
	if (!isCI) {
		configureGitHooks();
		await configureGitUpstream();
	}
}

async function copyDotenv(basePath) {
	try {
		await copyFile(
			resolve(basePath, '.env.template'),
			resolve(basePath, '.env'),
			constants.COPYFILE_EXCL,
		);
		console.log(`${basePath !== '.' ? `${basePath}: ` : ''}No .env file found - template copied`);
	} catch (error) {
		if (error.code !== 'EEXIST' && error.code !== 'ENOENT') {
			throw error;
		}
	}
}

function configureGitHooks() {
	const requiredPath = './.hooks';
	const { stdout } = spawnSync('git', ['config', 'core.hooksPath']);
	const hooksPath = stdout.toString().trim();
	if (hooksPath === requiredPath)
		return;

	const { error } = spawnSync('git', ['config', 'core.hooksPath', requiredPath]);
	if (error)
		throw error;

	console.log('Git hooks path configured');
}

async function configureGitUpstream() {
	const git = simpleGit('.', { timeout: { block: 60_000 } });

	const remotes = await git.getRemotes();
	if (remotes.some((r) => r.name.toLowerCase() === 'upstream'))
		return;

	const { error } = spawnSync('git', [
		'remote',
		'add',
		'-t', 'master',
		'-m', 'master',
		'-f',
		'--tags',
		'upstream',
		'https://github.com/Project-Pandora-Game/pandora-assets.git',
	]);
	if (error)
		throw error;

	console.log('Added upstream repository link');
}
