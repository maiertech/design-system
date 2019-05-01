import * as deviceDescriptors from 'puppeteer/DeviceDescriptors';
import devices from '../../devices';
import {
  createCustomSnapshotIdentifier,
  downloadScreenshot,
} from '../../helpers';

const file = `file://${process.cwd()}/storybook-static/iframe.html?id=postlist--knobs`;

describe('Footer', () => {
  devices.forEach(device => {
    const customSnapshotIdentifier = createCustomSnapshotIdentifier(device);
    it(customSnapshotIdentifier, async () => {
      await downloadScreenshot({
        componentName: 'PostList',
        customSnapshotIdentifier,
        cwd: __dirname,
      });
      await page.emulate(deviceDescriptors[device]);
      await page.goto(file, { waitUntil: ['load', 'networkidle0'] });
      const image = await page.screenshot({ fullPage: true });
      expect(image).toMatchImageSnapshot({
        customSnapshotIdentifier,
      });
    });
  });
});
