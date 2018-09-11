import * as deviceDescriptors from "puppeteer/DeviceDescriptors";
import devices from "../../devices";

const file = `file://${process.cwd()}/storybook-static/index.html?selectedKind=Composites%2FHeader&selectedStory=default%20link&full=1`;

describe("Header", () => {
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
