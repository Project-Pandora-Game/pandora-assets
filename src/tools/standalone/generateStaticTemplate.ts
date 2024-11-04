import { GetLogger, SetConsoleOutput, LogLevel, logConfig, PointTemplate, Assert, CharacterSize, PointDefinition } from 'pandora-common';
import * as fs from 'fs';
import { join } from 'path';

const logger = GetLogger('Main');
SetConsoleOutput(LogLevel.DEBUG);

// eslint-disable-next-line @typescript-eslint/require-await
async function Run() {
	const STEP = 125;

	const sizeMiddle = CharacterSize.WIDTH / 2;
	Assert(sizeMiddle % STEP === 0);
	Assert(CharacterSize.HEIGHT % STEP === 0);

	const result: PointTemplate = [];
	for (let y = 0; y <= CharacterSize.HEIGHT; y += STEP) {
		// Outer points
		for (let x = 0; x < sizeMiddle; x += STEP) {
			const outerPoint: PointDefinition = {
				pos: [
					x,
					y,
				],
				mirror: true,
				pointType: 'static_r',
				transforms: [],
			};
			result.push(outerPoint);
		}
		// Middle point
		const midPoint: PointDefinition = {
			pos: [
				sizeMiddle,
				y,
			],
			mirror: false,
			pointType: 'static',
			transforms: [],
		};
		result.push(midPoint);
	}

	logger.info('Generated template size: ', result.length);

	fs.writeFileSync(join(import.meta.dirname, '../../../src/templates/static.json'), JSON.stringify(result, undefined, '\t') + '\n', { encoding: 'utf-8' });
}

// On fatal error in non-watch environment set failure exit code
logConfig.onFatal.push(() => {
	process.exitCode = 1;
});
// Run
Run().catch((error) => {
	logger.fatal('Error:\n', error);
});

