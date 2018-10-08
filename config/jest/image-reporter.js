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
    // /path/to/project/test/composites/Footer/Footer.test.js results in
    // ["test", "composites", "Footer"]
    const segments = testResult.testFilePath
      .match(/\/(\w+)\/(\w+)\/(\w+)\/\w+\./)
      .slice(1);
    // Copy *-snap.png files to screenshots/<componentName>.
    // Filter anything in __diff_output__.
    let source = join(process.cwd(), ...segments, "__image_snapshots__");
    let target = join(process.cwd(), "screenshots");
    ensureDirSync(target);
    target = join(target, ...segments.slice(2));
    copySync(source, target, {
      filter: file => !file.match(/__diff_output__/)
    });

    if (process.env.NOW) {
      // While running on Now, if there is __diff_output__ copy content to /public.
      // Now does not support publishing /public if build script fails.
      // Copy to Now anyway because this might be supported in the future.
      source = join(source, "__diff_output__");
      if (pathExistsSync(source)) {
        this.diff = true;
        target = join("/public", ...segments.slice(2));
        copySync(source, target);
      }
    }
  }

  // Runs after all test suites.
  onRunComplete() {
    if (process.env.NOW && this.diff) {
      copySync(
        join(process.cwd(), "test", "now.diff.json"),
        join("/public", "now.json")
      );
      shell.cd("/public");
      shell.exec(
        `now --token ${process.env.NOW_TOKEN} && now alias --token ${
          process.env.NOW_TOKEN
        }`
      );
    }
  }
}

module.exports = ImageReporter;
