import fsPromises from 'fs/promises';
import { AnyToString, logConfig, LogLevel } from 'pandora-common';

export async function AddFileOutput(fileName: string, append: boolean, logLevel: LogLevel | false, logLevelOverrides: Record<string, LogLevel | false> = {}): Promise<void> {
	const writeStream = (await fsPromises.open(fileName, append ? 'a' : 'w'))
		.createWriteStream({
			encoding: 'utf8',
		});
	logConfig.logOutputs.push({
		logLevel,
		logLevelOverrides,
		supportsColor: false,
		onMessage: (prefix, message) => {
			const line = [prefix, ...message.map((v) => AnyToString(v))].join(' ') + '\n';
			writeStream.write(line, 'utf8');
		},
		flush: () => {
			return new Promise((resolve, reject) => {
				writeStream.write('', (error) => {
					if (error != null) {
						reject(error);
					}
					resolve();
				});
			});
		},
	});
}
