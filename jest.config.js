// const baseConfig = require('@doctorondemand/dod-webclient-shared/configs.js')
//     .jest;

module.exports = {
    ...baseConfig,
    // TODO: These probably shouldn't exist
    collectCoverageFrom: [
        'src/**/*.{js,vue}',
        '!**/node_modules/**',
        '!**/.eslintrc.js',
        '!**/*.stories.js',
        // Temporarily excluding vue js from coverage as it's broken, see https://github.com/vuejs/vue-jest/issues/244
        '!src/components/**/*.js',
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
