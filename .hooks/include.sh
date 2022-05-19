#!/bin/sh

function yarn_helper() {
	yarn install --prefer-offline --frozen-lockfile
}

function lfs_helper() {
	if command -v git-lfs >/dev/null 2>&1; then
		local lsf_command="${1}"
		shift
		git lfs "${lsf_command}" "$@"
	else
		echo >&2 "\nThis repository is configured for Git LFS but 'git-lfs' was not found on your path."
		exit 2
	fi
}
