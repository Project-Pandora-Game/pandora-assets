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

	pnpm install --frozen-lockfile --prefer-offline
fi

echo
echo "Done!"
