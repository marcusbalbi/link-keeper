const { pathsToModuleNameMapper } = require('ts-jest/utils');

const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  rootDir: './src',
  testEnvironment: 'node',
  globalSetup: './common/tests/globalSetup.ts',
  setupFilesAfterEnv: ['./common/tests/setup.ts'],
  coverageDirectory: './tests/coverage',
  preset: 'ts-jest',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/src/' }),
};
