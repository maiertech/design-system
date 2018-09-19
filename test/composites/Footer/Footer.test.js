import * as deviceDescriptors from "puppeteer/DeviceDescriptors";
import devices from "../../../src/devices";

const file = `file://${process.cwd()}/storybook-static/index.html?selectedKind=Composites%2FFooter&selectedStory=last%20updated&full=1`;

describe("Footer", () => {
  devices.forEach(device => {
    test(device, async () => {
      await page.emulate(deviceDescriptors[device]);
      await page.goto(file);
      const image = await page.screenshot();
      expect(image).toMatchImageSnapshot({
        customSnapshotIdentifier: device.toLocaleLowerCase().replace(/ /g, "-")
      });
    });
  });
});
