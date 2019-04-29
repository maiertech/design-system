const { join } = require('path');
const { copySync, ensureDirSync, pathExistsSync } = require('fs-extra');
const shell = require('shelljs');

class ImageReporter {
  constructor(globalConfig, options) {
    this._globalConfig = globalConfig;
    this._options = options;
    this.diff = false;
  }

  // Runs after each test suite.
  onTestResult(test, testResult) {
    if (!process.env.NOW) {
      return;
    }

    // test/composites/Footer/Footer.test.js results in segments ["test", "composites", "Footer"].
    const segments = testResult.testFilePath
      .match(/\/(\w+)\/(\w+)\/(\w+)\/\w+\./)
      .slice(1);
    let sourceDir = join(process.cwd(), ...segments, '__image_snapshots__');
    let targetDir;

    // When screenshots are updated, copy them to screenshots/<componentName>.
    if (process.env.UPDATE_SCREENSHOTS) {
      targetDir = join(process.cwd(), 'screenshots');
      ensureDirSync(targetDir);
      targetDir = join(targetDir, ...segments.slice(2));
      copySync(sourceDir, targetDir);
    } else {
      // If sub-folder __diff_output__ exists, copy its content to diff/<componentName>.
      sourceDir = join(sourceDir, '__diff_output__');
      if (pathExistsSync(sourceDir)) {
        this.diff = true;
        targetDir = join(process.cwd(), 'diff');
        ensureDirSync(targetDir);
        targetDir = join(targetDir, ...segments.slice(2));
        copySync(sourceDir, targetDir);
      }
    }
  }

  // Runs after all test suites.
  onRunComplete() {
    if (!process.env.NOW) {
      return;
    }

    if (process.env.UPDATE_SCREENSHOTS) {
      // Publish updated screenshots without creating alias.
      shell.exec(
        `now ./screenshots --local-config=./test/now.screenshots.json --token ${
          process.env.NOW_TOKEN
        }`
      );
    }

    if (this.diff) {
      // Publish diffs and create alias.
      shell.exec(
        `now ./diff --local-config=./test/now.diff.json --token ${
          process.env.NOW_TOKEN
        } && now alias --local-config=./test/now.diff.json --token ${
          process.env.NOW_TOKEN
        }`
      );
    }
  }
}

module.exports = ImageReporter;
