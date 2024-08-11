#!/bin/bash

if [ -f "./.hooks/.env" ]; then
	source "./.hooks/.env"
fi

function pnpm_helper() {
	if [ "${CI:-}" == "true" ]; then
		return
	fi
	if [ "${SKIP_PNPM_INSTALL:-}" == "true" ]; then
		return
	fi
	pnpm install --prefer-offline --frozen-lockfile
}

function submodule_update() {
	if [ "${SKIP_SUBMODULE_UPDATE:-}" == "true" ]; then
		return
	fi
	# Cleanup old submodule
	if [ -d ".git/modules/pandora" ]; then
		git config -f .git/config --remove-section "submodule.pandora"
		rm -rf .git/modules/pandora
		git clean -Xdf pandora
	fi
	git submodule update --init --recursive
}
