import * as deviceDescriptors from "puppeteer/DeviceDescriptors";
import devices from "../devices";

const file = `file://${process.cwd()}/storybook-static/index.html?selectedKind=components%2FPostList&selectedStory=default%20anchor&full=1`;

describe("Footer", () => {
  devices.forEach(device => {
    test(device, async () => {
      await page.emulate(deviceDescriptors[device]);
      await page.goto(file);
      // Full page screenshot is broken.
      const image = await page.screenshot({ fullPage: true });
      expect(image).toMatchImageSnapshot({
        customSnapshotIdentifier: device.toLocaleLowerCase().replace(/ /g, "-")
      });
    });
  });
});
