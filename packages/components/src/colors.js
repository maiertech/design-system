// https://tachyons.io/docs/themes/skins/

// Universal colors.
const black = '#000000';

// Colors for light mode.
const darkBlue = '#00449E';
const darkGreen = '#137752;';
const lightestBlue = '#CDECFF';
const washedGreen = '#E8FDF5';
const white = '#FFFFFF';

// Colors for dark mode.
const darkPink = '#D5008F';
const lightPink = '#FFA3D7';
const lightPurple = '#A463F2';
const purple = '#5E2CA5';
const yellow = '#FFFF00';

const light = {
  text: black,
  background: white,
  primary: darkBlue,
  primaryInverse: lightestBlue,
  secondary: darkGreen,
  secondaryInverse: washedGreen,
};

const dark = {
  text: yellow,
  background: black,
  primary: lightPink,
  primaryInverse: darkPink,
  secondary: lightPurple,
  secondaryInverse: purple,
};

const colors = {
  // contrast(text, background): 21.0 (AAA)
  // contrast(accent, background): 9.05 (AAA)
  // contrast(alternate, background): 5.54 (AA)
  text: light.text,
  background: light.background,
  accent: light.primary,
  alternate: light.secondary,

  // contrast(brandedText, brandedBackground): 9.05 (AAA)
  // contrast(brandedAccent, brandedBackground): 8.53 (AAA)
  brandedText: light.background,
  brandedBackground: light.primary,
  brandedAccent: light.secondaryInverse,

  // contrast(inverseText, inverseBackground): 17.04 (AAA)
  inverseText: light.text,
  inverseBackground: light.primaryInverse,

  modes: {
    dark: {
      // contrast(text, background): 19.55 (AAA)
      // contrast(accent, background): 11.47 (AAA)
      // contrast(alternate, background): 5.64 (AA)
      text: dark.text,
      background: dark.background,
      accent: dark.primary,
      alternate: dark.secondary,

      // contrast(brandedText, brandedBackground): 11.47 (AAA)
      // contrast(brandedAccent, brandedBackground): 4.82 (AA)
      brandedText: dark.background,
      brandedBackground: dark.primary,
      brandedAccent: dark.secondary,

      // contrast(inverseText, inverseBackground): 4.62 (AA)
      inverseBackground: dark.primaryInverse,
      inverseText: dark.text,
    },
  },
};

export default colors;
