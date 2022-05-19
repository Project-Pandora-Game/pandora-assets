#!/bin/bash

function yarn_helper() {
	yarn install --prefer-offline --frozen-lockfile
}

function lfs_helper() {
	if [ "${NO_GIT_LFS:-}" == "1" ]; then
		return
	fi
	if command -v git-lfs >/dev/null 2>&1; then
		local lsf_command="${1}"
		shift
		git lfs "${lsf_command}" "$@"
	else
		echo "This repository is configured for Git LFS but 'git-lfs' was not found on your path." >&2
		exit 2
	fi
}
