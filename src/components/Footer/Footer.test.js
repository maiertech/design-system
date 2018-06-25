import puppeteer from "puppeteer";
import * as devices from "puppeteer/DeviceDescriptors";
import path from "path";

const url =
  "http://localhost:9009/?selectedKind=Footer&selectedStory=default%20anchor&full=1&addons=1&stories=1&panelRight=0";

const platform = process.platform;

describe("Footer", () => {
  let browser;

  beforeAll(async () => {
    // https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
    browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"]
    });
  });

  const tests = [
    { device: "iPhone 6" },
    { device: "iPhone 6 landscape" },
    { device: "iPhone 6 Plus" },
    { device: "iPhone 6 Plus landscape" },
    { device: "iPad" },
    { device: "iPad landscape" }
  ];

  tests.forEach(({ device }) => {
    test(device, async () => {
      const page = await browser.newPage();
      await page.emulate(devices[device]);
      await page.goto(url);
      const image = await page.screenshot();
      expect(image).toMatchImageSnapshot({
        customSnapshotsDir: path.join(
          __dirname,
          "__image_snapshots__",
          platform
        ),
        customSnapshotIdentifier: device.toLocaleLowerCase().replace(/ /g, "-")
      });
    });
  });

  afterAll(async () => {
    await browser.close();
  });
});
