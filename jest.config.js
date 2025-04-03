// @ts-check
/* eslint-env node */
/**
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 * @type { import('ts-jest').JestConfigWithTsJest }
 */
export default {
	testPathIgnorePatterns: ['/node_modules/', '<rootDir>/dist/'],
	clearMocks: true,
	collectCoverageFrom: [
		'src/**/*.ts',
		'src/**/*.tsx',
	],
	coverageDirectory: 'coverage',
	coverageReporters: [
		'html',
		'json',
		'text-summary',
	],
	errorOnDeprecated: true,
	extensionsToTreatAsEsm: ['.ts', '.tsx', '.mts'],
	transform: {
		'^.+\\.tsx?$': ['ts-jest', {
			tsconfig: './test/tsconfig.json',
			useESM: true,
		}],
	},
};
