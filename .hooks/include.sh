#!/bin/bash

function pnpm_helper() {
	if [ "${CI:-}" == "true" ]; then
		return
	fi
	pnpm install --force --frozen-lockfile --prefer-offline
}
