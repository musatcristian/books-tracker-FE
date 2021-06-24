import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  bail: 1,
  collectCoverage: true,
  collectCoverageFrom: ['../src/*'],
  coverageDirectory: '../__coverage__',
  displayName: 'CLIENT',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '^@App': '<rootDir>/src/app/App.tsx',
    '^@Components/(.*)$': '<rootDir>/src/components/$1',
    '^@Theming/(.*)$': '<rootDir>/src/material/$1',
  },
  prettierPath: '<rootDir>/node_modules/prettier',
  rootDir: '../',
  roots: ['<rootDir>/__tests__'],
  testRegex: '^.*test\\.(ts|tsx)$',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  verbose: true,
};
export default config;
