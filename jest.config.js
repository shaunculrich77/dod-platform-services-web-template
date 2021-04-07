const baseConfig = require('@doctorondemand/dod-webclient-shared/configs.js')
    .jest;

module.exports = {
    ...baseConfig,
    // TODO: These probably shouldn't exist
    collectCoverageFrom: [
        ...baseConfig.collectCoverageFrom,
        // Exclusing Vue JS coverage from modules
        '!src/modules/**/components/**/*.js',
        '!src/modules/**/pages/**/*.js',
    ],
    globals: {
        dodEnvironment: null,
        inject: () => {},
    },
    // TODO: Move this into SHWEB as this is a common pattern
    moduleNameMapper: {
        '@/(.*)$': '<rootDir>/src/$1',
    },
    isolatedModules: true,
    testMatch: ['**/*.jest.js'],
    setupFilesAfterEnv: ['<rootDir>jest-setup.js'],
};
