import { join } from 'path';
import axios from 'axios';
import { tests, pixeldiffApiUrl, screenshotUrl } from '../tests';

// Test deployment against screenshots.

const component = 'header';
const deploymentUrl = process.env.DEPLOYMENT_URL;
const deploymentPath = 'iframe.html?id=header--knobs';

describe('Header', () => {
  tests.forEach(test => {
    it(`${component} (${test.device})`, async () => {
      const url = new URL(deploymentPath, deploymentUrl).href;
      const benchmarkImgUrl = new URL(
        join(component, test.image),
        screenshotUrl
      ).href;
      const result = await axios.post(pixeldiffApiUrl, {
        url,
        benchmarkImgUrl,
        device: test.device,
      });
      expect(result.data).toStrictEqual({ diff: false });
    });
  });
});
