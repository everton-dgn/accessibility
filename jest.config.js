module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/components/**/*.tsx',
    'src/hooks/**/*.ts(x)?',
    '!src/layouts/index.ts(x)?',
    '!src/components/index.tsx',
    '!src/**/stories.(ts|md)x',
    '!src/pages/**/*.ts(x)?',
    '!src/styles/**/*',
    '!src/types/**/*.d.ts'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  transform: {
    '^.+\\.[jt]sx?$': ['babel-jest', { presets: ['next/babel'] }]
  },
  moduleNameMapper: {
    '^styled-components':
      '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js'
  }
}
