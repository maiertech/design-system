const { configureToMatchImageSnapshot } = require('jest-image-snapshot');

// Increase from 60000ms to give tests enough time to complete.
// Downloading large screenshots and making diffs of big screenshot files takes some time.
jest.setTimeout(60000);

const toMatchImageSnapshot = configureToMatchImageSnapshot({
  // Permit 0.1% difference.
  failureThreshold: '0.001',
  failureThresholdType: 'percent',
});

expect.extend({ toMatchImageSnapshot });
