/* Scripts are run in Node, so don't make use of the logger or ES imports */
/* eslint-disable no-console, @typescript-eslint/no-var-requires*/
const { constants } = require('fs');
const { copyFile } = require('fs/promises');
const { resolve } = require('path');
const { spawnSync, execSync } = require('child_process');

function commandExists(commandName) {
	try {
		const stdout = process.platform === 'win32' ?
			execSync(`where ${commandName}`, { stdio: [] }) :
			execSync(`command -v ${commandName} 2>/dev/null && { echo >&1 ${commandName}; exit 0; }`);
		return !!stdout;
	} catch (error) {
		return false;
	}
}

postinstall();

async function postinstall() {
	const isCI = process.env.CI === 'true';
	await copyDotenv();
	if (!isCI) {
		configureGitHooks();
		configureGitLFS();
	}
}

async function copyDotenv() {
	try {
		await copyFile(
			resolve(__dirname, '..', '.env.template'),
			resolve(__dirname, '..', '.env'),
			constants.COPYFILE_EXCL,
		);
		console.log('No .env file found - template copied');
	} catch (error) {
		if (error.code !== 'EEXIST' && error.code !== 'ENOENT') {
			throw error;
		}
	}
}

function configureGitHooks() {
	const requiredPath = resolve(__dirname, '..', '.hooks');
	const { stdout } = spawnSync('git', ['config', 'core.hooksPath']);
	const hooksPath = stdout.toString().trim();
	if (hooksPath === requiredPath)
		return;

	const { error } = spawnSync('git', ['config', 'core.hooksPath', requiredPath]);
	if (error)
		throw error;

	console.log('Git hooks path configured');
}

function configureGitLFS() {
	if (process.env.NO_GIT_LFS)
		return;

	{
		const { status, stdout } = spawnSync('git', ['config', '--local', '--get', 'filter.lfs.clean']);
		if (status === 0 && stdout.toString().trim().length > 0)
			return;
	}

	if (!commandExists('git-lfs')) {
		console.error(`\n[ERROR] This repository is configured for Git LFS but 'git-lfs' was not found on your path.\n`);
		process.exitCode = 2;
		return;
	}

	console.log('Setting up Git LFS');
	{
		const { error, status, stderr } = spawnSync('git', ['lfs', 'install', '--local', '--manual']);
		if (error)
			throw error;
		if (status !== 0) {
			throw new Error(`Git LFS install failed:\n${stderr.toString().trim()}`);
		}
	}
	{
		const { error, status } = spawnSync('git', ['lfs', 'pull'], { stdio: 'inherit' });
		if (error)
			throw error;
		if (status !== 0) {
			throw new Error(`Git LFS pull failed`);
		}
	}
}
