module.exports = {
  rootDir: "../../",
  preset: "jest-puppeteer",
  setupTestFrameworkScriptFile: "<rootDir>/config/jest/setup.js",
  reporters: ["default", "<rootDir>/config/jest/image-reporter.js"]
};
