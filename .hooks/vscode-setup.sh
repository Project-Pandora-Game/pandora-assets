#!/bin/bash

set -ueo pipefail

echo "Running setup..."

echo "Initializing Git submodule..."

git submodule update --init --recursive --progress

if [ -d node_modules ]; then
	echo
	echo "Skip pnpm install - node_modules detected"

	# Install always reinstalls local dependencies, which can break typescript if a file is opened before compilation finishes
else
	echo
	echo "Running pnpm install..."

	# Update npm keys (ignoring any failures)
	local npm_keys="$(curl -s https://registry.npmjs.org/-/npm/v1/keys | jq -c '{npm: .keys}' || echo '')"
	if [[ "$npm_keys" ]]; then
		export COREPACK_INTEGRITY_KEYS="$npm_keys"
	fi

	# Do not prompt for user confirmation if downloading new pnpm version
	export COREPACK_ENABLE_DOWNLOAD_PROMPT=0

	pnpm install --frozen-lockfile --prefer-offline
fi

echo
echo "Done!"
