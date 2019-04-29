module.exports = {
  rootDir: '../../',
  preset: 'jest-puppeteer',
  setupFilesAfterEnv: ['<rootDir>/config/jest/setup.js'],
  reporters: ['default', '<rootDir>/config/jest/image-reporter.js'],
};
