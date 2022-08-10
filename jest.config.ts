/**
 * @ComondJS
// module.exports = {
// 	moduleNameMapper: {
// 		'^@/(.*)$': '<rootDir>/src/$1',
// 		'~components': '<rootDir>/src/components',
// 		'~interfaces': '<rootDir>/src/interfaces',
// 		'~lib': '<rootDir>/src/lib',
// 		'~constants': '<rootDir>/src/constants',
// 		'~pages': '<rootDir>/src/pages',
// 	},
// };

/**
 * @ESModule
 */
export {};
export default {
	moduleNameMapper: {
		'~components': '<rootDir>/src/components',
		'~interfaces': '<rootDir>/src/interfaces',
		'~lib': '<rootDir>/src/lib',
		'~constants': '<rootDir>/src/constants',
		'~pages': '<rootDir>/src/pages',
		'^@/(.*)$': '<rootDir>/src/$1',
	},
	testEnvironment: 'jsdom',
	testMatch: ['**/__tests__/**/*.test.ts', '**/?(*.)(spec|test|tests).ts'],
	setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};
