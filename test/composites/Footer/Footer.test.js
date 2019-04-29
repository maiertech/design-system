import * as deviceDescriptors from 'puppeteer/DeviceDescriptors';
import devices from '../../devices';
import {
  createCustomSnapshotIdentifier,
  downloadScreenshot,
} from '../../helpers';

const file = `file://${process.cwd()}/storybook-static/iframe.html?id=composites-footer--last-updated`;

describe('Footer', () => {
  devices.forEach(device => {
    const customSnapshotIdentifier = createCustomSnapshotIdentifier(device);
    it(customSnapshotIdentifier, async () => {
      await downloadScreenshot({
        componentName: 'Footer',
        customSnapshotIdentifier,
        cwd: __dirname,
      });
      const { userAgent, viewport } = deviceDescriptors[device];
      await page.emulate({ userAgent, viewport });
      await page.goto(file, { waitUntil: ['load', 'networkidle0'] });
      const image = await page.screenshot();
      expect(image).toMatchImageSnapshot({
        customSnapshotIdentifier,
      });
    });
  });
});
