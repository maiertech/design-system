// Color palette.
// https://tachyons.io/docs/themes/skins/
const black = "#000000";
const darkBlue = "#00449E";
const darkGreen = "#137752;";
const lightestBlue = "#CDECFF";
const washedGreen = "#E8FDF5";
const white = "#FFFFFF";

// Theme colors.
const primary = darkBlue;
const primaryInverse = lightestBlue;
const secondary = darkGreen;
const secondaryInverse = washedGreen;
const highContrastText = black;
const highContrastBackground = white;

const breakpoints = ["30em", "60em"];

const colors = {
  // Default theme colors:
  // contrast(text, background): 21.0 (AAA)
  // contrast(accent, background): 9.05 (AAA)
  // contrast(alternate, background): 5.54 (AA)
  background: highContrastBackground,
  text: highContrastText,
  accent: primary,
  alternate: secondary,

  // Branded theme colors:
  // contrast(brandedText, brandedBackground): 9.05 (AAA)
  // contrast(brandedAccent, brandedBackground): 8.53 (AAA)
  brandedBackground: primary,
  brandedText: highContrastBackground,
  brandedAccent: secondaryInverse,

  // Inverse theme color:
  // contrast(inverseText, inverseBackground): 17.04 (AAA)
  inverseBackground: primaryInverse,
  inverseText: highContrastText
};

const fonts = {
  sansSerif:
    "-apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial, sans-serif",
  serif: "georgia, times, serif"
};

const fontSizes = [
  "medium",
  "3rem",
  "2.25rem",
  "1.5rem",
  "1.25rem",
  "1rem",
  ".875rem",
  ".75rem"
];

const fontWeights = ["normal", 100, 200, 300, 400, 500, 600, 700, 800, 900];

const letterSpacings = {
  normal: "normal",
  tracked: ".1em",
  trackedTight: "-.05em",
  trackedMega: ".25em"
};

const lineHeights = {
  solid: 1,
  title: 1.25,
  copy: 1.5
};

const heights = [0, "1rem", "2rem", "4rem", "8rem", "16rem"];

const maxWidths = [
  0,
  "1rem",
  "2rem",
  "4rem",
  "8rem",
  "16rem",
  "32rem",
  "48rem",
  "64rem",
  "96rem"
];

const space = [0, ".25rem", ".5rem", "1rem", "2rem", "4rem", "8rem", "16rem"];

const theme = {
  breakpoints,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  heights,
  maxWidths,
  space
};

export default theme;
