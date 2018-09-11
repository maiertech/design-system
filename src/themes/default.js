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

export default {
  breakpoints: ["30em", "60em"],

  colors: {
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
  },

  fonts: {
    sans: "system-ui, sans-serif",
    sansSerif:
      "-apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial, sans-serif",
    mono: "Menlo, monospace",
    serif: "georgia, times, serif"
  },

  fontSizes: [
    "medium",
    "3rem",
    "2.25rem",
    "1.5rem",
    "1.25rem",
    "1rem",
    ".875rem",
    ".75rem"
  ],

  fontWeights: ["normal", 100, 200, 300, 400, 500, 600, 700, 800, 900],

  letterSpacings: {
    normal: "normal",
    tracked: ".1em",
    trackedTight: "-.05em",
    trackedMega: ".25em"
  },

  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5
  },

  heights: [0, "1rem", "2rem", "4rem", "8rem", "16rem"],

  space: [0, ".25rem", ".5rem", "1rem", "2rem", "4rem", "8rem", "16rem"],

  Link: {
    height: "100%",
    color: "inherit",
    "text-decoration": "none",
    transition: "all 0.2s ease-out",
    "&:hover": {
      opacity: "0.5",
      transition: "all 0.2s ease-in"
    },
    "&:active": {
      transition: "all 0.2s ease-in",
      outline: "2px dotted currentColor"
    }
  }
};
