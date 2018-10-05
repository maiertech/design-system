/* eslint-disable no-underscore-dangle, class-methods-use-this */
const { join } = require("path");
const { copySync, ensureDirSync } = require("fs-extra");

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
    ensureDirSync(join(process.cwd(), "screenshots"));
    copySync(
      join(process.cwd(), ...segments, "__image_snapshots__"),
      join(process.cwd(), "screenshots", ...segments.slice(2)),
      {
        filter: file => !file.match(/__diff_output__/)
      }
    );

    // Copy anything in __diff_output__ to storybook-static/diff/<componentName>.
    copySync(
      join(
        process.cwd(),
        ...segments,
        "__image_snapshots__",
        "__diff_output__"
      ),
      join(process.cwd(), "storybook-static", "diff", ...segments.slice(2))
    );
  }
}

module.exports = ImageReporter;
