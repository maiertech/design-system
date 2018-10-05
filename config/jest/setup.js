const { configureToMatchImageSnapshot } = require("jest-image-snapshot");

// Increase from 5000ms to 15000ms to give enough time for screenshot downloads.
jest.setTimeout(15000);

const toMatchImageSnapshot = configureToMatchImageSnapshot({
  // Permit 0.5% difference.
  failureThreshold: "0.005",
  failureThresholdType: "percent"
});

expect.extend({ toMatchImageSnapshot });
