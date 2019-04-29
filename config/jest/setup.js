const { configureToMatchImageSnapshot } = require('jest-image-snapshot');

// Increase from 5000ms to 25000ms to give enough time test to complete.
// Downloading large screenshots and making diffs of big screenshot files takes some time.
jest.setTimeout(25000);

const toMatchImageSnapshot = configureToMatchImageSnapshot({
  // Permit 0.1% difference.
  failureThreshold: '0.001',
  failureThresholdType: 'percent',
});

expect.extend({ toMatchImageSnapshot });
