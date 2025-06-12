import { pathsToModuleNameMapper } from 'ts-jest'
import tsconfig from './tsconfig.json' assert { type: 'json' }

/** @type {import('ts-jest').JestConfigWithTsJest} */
const config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: pathsToModuleNameMapper(tsconfig.compilerOptions.paths, { prefix: '<rootDir>/' } )
};

export default config; 