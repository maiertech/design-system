import * as deviceDescriptors from "puppeteer/DeviceDescriptors";
import devices from "../../devices";
import {
  createCustomSnapshotIdentifier,
  downloadScreenshot
} from "../../helpers";

const file = `file://${process.cwd()}/storybook-static/index.html?selectedKind=Composites%2FHeader&selectedStory=default%20link&full=1`;

describe("Header", () => {
  devices.forEach(device => {
    const customSnapshotIdentifier = createCustomSnapshotIdentifier(device);
    test(customSnapshotIdentifier, async () => {
      await downloadScreenshot({
        componentName: "Header",
        customSnapshotIdentifier,
        cwd: __dirname
      });
      await page.emulate(deviceDescriptors[device]);
      await page.goto(file);
      const image = await page.screenshot();
      expect(image).toMatchImageSnapshot({
        customSnapshotIdentifier
      });
    });
  });
});
