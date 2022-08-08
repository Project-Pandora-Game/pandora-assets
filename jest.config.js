/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
module.exports = {
	testPathIgnorePatterns: ['/node_modules/', '<rootDir>/dist/', '<rootDir>/pandora/'],
	clearMocks: true,
	collectCoverageFrom: ['src/**/*.ts', 'src/**/*.tsx'],
	coverageDirectory: 'coverage',
	errorOnDeprecated: true,
	transform: {
		'^.+\\.(t|j)sx?$': ['@swc/jest'],
	},
};
