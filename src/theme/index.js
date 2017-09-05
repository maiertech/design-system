import breakpoints from './breakpoints';
import colors from './colors';
import fontSizes from './fontSizes';
import space from './space';

export { breakpoints };
export { colors };
export { fontSizes };
export { space };

const theme = {
  breakpoints,
  colors,
  fontSizes,
  space,
};

export default theme;

/**
 * By default a theme provided to ThemeProvider overrides an upper theme.    
 * This is the desired behavior for
 * - breakpoints,
 * - fontSizes,
 * - space.
 * but not for
 * - colors.
 * For colors the upper theme should the theme.
 * This can be achieved with this merge function.
 */
const merge = ({ colors: upperColors }) => ({
  breakpoints,
  colors: upperColors || colors,
  fontSizes,
  space,
});

export { merge };
