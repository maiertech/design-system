export const screenshotUrl = 'https://screenshots.maier.tech';
export const pixeldiffApiUrl = 'https://pixeldiff.maier.tech/api';

// The following devices are supported for visual regression testing.
// Names must be be valid names from Puppeteer's DeviceDescriptors module:
// https://github.com/GoogleChrome/puppeteer/blob/master/lib/DeviceDescriptors.js
export const tests = [
  { device: 'iPhone 8', image: 'iphone-8.png' },
  { device: 'iPhone 8 landscape', image: 'iphone-8-landscape.png' },
  { device: 'iPhone 8 Plus', image: 'iphone-8-plus.png' },
  {
    device: 'iPhone 8 Plus landscape',
    image: 'iphone-8-plus-landscape.png',
  },
  { device: 'iPhone X', image: 'iphone-x.png' },
  { device: 'iPhone X landscape', image: 'iphone-x-landscape.png' },
  { device: 'iPad', image: 'ipad.png' },
  { device: 'iPad landscape', image: 'ipad-landscape.png' },
  { device: 'iPad Pro', image: 'ipad-pro.png' },
  { device: 'iPad Pro landscape', image: 'ipad-pro-landscape.png' },
];
