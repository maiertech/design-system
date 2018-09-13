// Color pallette.
// https://tachyons.io/docs/themes/skins/
const black = "#000000";
const darkPink = "#D5008F";
const lightPink = "#FFA3D7";
const lightPurple = "#A463F2";
const purple = "#5E2CA5";
const yellow = "#FFFF00";

// Theme colors.
const primary = lightPink;
const primaryInverse = darkPink;
const secondary = lightPurple;
const secondaryInverse = purple;
const highContrastText = yellow;
const highContrastBackground = black;

const colors = {
  // Default colors:
  // contrast(text, background): 19.55 (AAA)
  // contrast(accent, background): 11.47 (AAA)
  // contrast(alternate, background): 5.64 (AA)
  background: highContrastBackground,
  text: highContrastText,
  accent: primary,
  alternate: secondary,

  // Branded colors:
  // contrast(brandedText, brandedBackground): 11.47 (AAA)
  // contrast(brandedAccent, brandedBackground): 4.82 (AA)
  brandedBackground: primary,
  brandedText: highContrastBackground,
  brandedAccent: secondaryInverse,

  // Inverse colors:
  // contrast(inverseText, inverseBackground): 4.62 (AA)
  inverseBackground: primaryInverse,
  inverseText: highContrastText
};

const theme = { colors };

export default theme;
