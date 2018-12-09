const { join } = require("path");
const { copySync, ensureDirSync, pathExistsSync } = require("fs-extra");
const shell = require("shelljs");

class ImageReporter {
  constructor(globalConfig, options) {
    // eslint-disable-next-line
    this._globalConfig = globalConfig;
    // eslint-disable-next-line
    this._options = options;
    this.diff = false;
  }

  // Runs after each test suite.
  onTestResult(test, testResult) {
    // test/composites/Footer/Footer.test.js results in segments ["test", "composites", "Footer"].
    const segments = testResult.testFilePath
      .match(/\/(\w+)\/(\w+)\/(\w+)\/\w+\./)
      .slice(1);
    // Copy *-snap.png files to screenshots/<componentName>.
    let sourceDir = join(process.cwd(), ...segments, "__image_snapshots__");
    let targetDir = join(process.cwd(), "screenshots");
    ensureDirSync(targetDir);
    targetDir = join(targetDir, ...segments.slice(2));
    // Filter out anything in __diff_output__.
    copySync(sourceDir, targetDir, {
      filter: file => !file.match(/__diff_output__/)
    });

    // If folder __diff_output__ exists, copy its content to diff/<componentName>.
    sourceDir = join(sourceDir, "__diff_output__");
    if (pathExistsSync(sourceDir)) {
      this.diff = true;
      targetDir = join(process.cwd(), "diff");
      ensureDirSync(targetDir);
      targetDir = join(targetDir, ...segments.slice(2));
      copySync(sourceDir, targetDir);
    }
  }

  // Runs after all test suites.
  onRunComplete() {
    if (process.env.NOW) {
      // Publish content of "screenshots" without creating alias.
      shell.exec(
        `now ./screenshots --local-config=./test/now.screenshots.json --token ${
          process.env.NOW_TOKEN
        }`
      );

      if (this.diff) {
        // Publish content of "diff" and create alias.
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
}

module.exports = ImageReporter;
