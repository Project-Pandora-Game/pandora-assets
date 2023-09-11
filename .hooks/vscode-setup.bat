@echo off

echo Running setup...

echo Initializing Git submodule...

git submodule update --init --recursive --progress

if exist node_modules (
	echo.
	echo Skip pnpm install - node_modules detected

	rem Install always reinstalls local dependencies, which can break typescript if a file is opened before compilation finishes
) else (
	echo.
	echo Running pnpm install...

	pnpm.cmd install --frozen-lockfile --prefer-offline
)

echo.
echo Done!