// Color palette.
// https://tachyons.io/docs/themes/skins/
const black = "#000000";
const darkBlue = "#00449E";
const darkGreen = "#137752;";
const lightestBlue = "#CDECFF";
const washedGreen = "#E8FDF5";
const white = "#FFFFFF";

/**
 * Primary branding colors:
 * - contrast(primary default, high contrast inverse) = contrast(dark blue, white) = 9.04 (AAA)
 * - contrast(primary default, secondary inverse) = contrast(dark blue, washed green) = 8.53 (AAA)
 * - contrast(primary inverse, high contrast default) = contrast(lightest blue, black) = 17.03 (AAA)
 */
const primaryColors = {
  default: darkBlue,
  inverse: lightestBlue
};

// Secondary branding colors:
// - contrast(secondary default, high contrast inverse) = contrast(dark green, white): 5.54 (AA)
const secondaryColors = {
  default: darkGreen,
  inverse: washedGreen
};

// High contrast colors for easy reading:
// - contrast(high contrast default, high contrast inverse) = contrast(black, white) = 21.0 (AAA)
const highContrastColors = {
  default: black,
  inverse: white
};

export default {
  breakpoints: {
    medium: "30em",
    large: "60em"
  },
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
  },
  fontSize: [
    ".75rem",
    ".875rem",
    "1rem",
    "1.25rem",
    "1.5rem",
    "2.25rem",
    "3rem"
  ],
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial, sans-serif",
  height: ["1rem", "2rem", "4rem", "8rem", "16rem"],
  spacing: [0, ".25rem", ".5rem", "1rem", "2rem", "4rem", "8rem", "16rem"],
  width: ["1rem", "2rem", "4rem", "8rem", "16rem"]
};
