/* eslint-disable no-underscore-dangle, class-methods-use-this */
const { join } = require("path");
const { copySync, ensureDirSync, pathExistsSync } = require("fs-extra");

class ImageReporter {
  constructor(globalConfig, options) {
    this._globalConfig = globalConfig;
    this._options = options;
  }

  // Runs for each test suite.
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

    // If there is __diff_output__ copy content to storybook-static/diff/<componentName>.
    source = join(source, "__diff_output__");
    if (pathExistsSync(source)) {
      target = join(
        process.cwd(),
        "storybook-static",
        "diff",
        ...segments.slice(2)
      );
      copySync(source, target);
    }
  }
}

module.exports = ImageReporter;
