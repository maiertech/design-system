import * as deviceDescriptors from "puppeteer/DeviceDescriptors";
import devices from "../../devices";
import {
  createCustomSnapshotIdentifier,
  downloadScreenshot
} from "../../helpers";

const file = `file://${process.cwd()}/storybook-static/index.html?selectedKind=Composites%2FFooter&selectedStory=last%20updated&full=1`;

describe("Footer", () => {
  devices.forEach(device => {
    const customSnapshotIdentifier = createCustomSnapshotIdentifier(device);
    test(customSnapshotIdentifier, async () => {
      await downloadScreenshot({
        componentName: "Footer",
        customSnapshotIdentifier,
        cwd: __dirname
      });
      const { userAgent, viewport } = deviceDescriptors[device];
      await page.emulate({ userAgent, viewport });
      await page.goto(file);
      const image = await page.screenshot();
      expect(image).toMatchImageSnapshot({
        customSnapshotIdentifier
      });
    });
  });
});
