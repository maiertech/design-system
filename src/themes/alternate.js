// Color pallette.
// https://tachyons.io/docs/themes/skins/
const black = "#000000";
const darkPink = "#D5008F";
const lightPink = "#FFA3D7";
const lightPurple = "#A463F2";
const purple = "#5E2CA5";
const yellow = "#FFFF00";

/**
 * Primary branding colors:
 * - contrast(primary default, high contrast inverse) = contrast(light pink, black) = 11.47 (AAA)
 * - contrast(primary default, secondary inverse) = contrast(light pink, purple) = 4.82 (AA)
 * - contrast(primary inverse, high contrast default) = contrast(dark pink, yellow) = 4.62 (AA)
 */
const primaryColors = {
  default: lightPink,
  inverse: darkPink
};

/**
 * Secondary branding colors:
 * - contrast(secondary default, high contrast inverse) = contrast(light purple, black): 5.64 (AA)
 */
const secondaryColors = {
  default: lightPurple,
  inverse: purple
};

/**
 * High contrast colors for easy reading:
 * - contrast(high contrast default, high contrast inverse) = contrast(yellow, black) = 19.55 (AAA)
 */
const highContrastColors = {
  default: yellow,
  inverse: black
};

export default {
  colors: {
    default: {
      background: highContrastColors.inverse,
      text: highContrastColors.default,
      accent: primaryColors.default,
      alternate: secondaryColors.default
    },
    branded: {
      background: primaryColors.default,
      text: highContrastColors.inverse,
      accent: secondaryColors.inverse
    },
    inverse: {
      background: primaryColors.inverse,
      text: highContrastColors.default
    }
  }
};
