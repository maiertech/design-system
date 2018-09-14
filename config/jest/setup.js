const { configureToMatchImageSnapshot } = require("jest-image-snapshot");

const toMatchImageSnapshot = configureToMatchImageSnapshot({
  // Permit 0.5% difference.
  failureThreshold: "0.005",
  failureThresholdType: "percent"
});

expect.extend({ toMatchImageSnapshot });
