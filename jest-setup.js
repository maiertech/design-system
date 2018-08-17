// eslint-disable-next-line import/no-extraneous-dependencies
const { toMatchImageSnapshot } = require("jest-image-snapshot");

expect.extend({ toMatchImageSnapshot });
