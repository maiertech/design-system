// Color palette.
// https://tachyons.io/docs/themes/skins/
const black = '#000000';
const darkBlue = '#00449E';
const darkGreen = '#137752;';
const lightestBlue = '#CDECFF';
const washedGreen = '#E8FDF5';
const white = '#FFFFFF';

// Theme colors.
const primary = darkBlue;
const primaryInverse = lightestBlue;
const secondary = darkGreen;
const secondaryInverse = washedGreen;
const highContrastText = black;
const highContrastBackground = white;

const breakpoints = ['30em', '60em'];

const colors = {
  // Default colors:
  // contrast(text, background): 21.0 (AAA)
  // contrast(accent, background): 9.05 (AAA)
  // contrast(alternate, background): 5.54 (AA)
  background: highContrastBackground,
  text: highContrastText,
  accent: primary,
  alternate: secondary,

  // Branded colors:
  // contrast(brandedText, brandedBackground): 9.05 (AAA)
  // contrast(brandedAccent, brandedBackground): 8.53 (AAA)
  brandedBackground: primary,
  brandedText: highContrastBackground,
  brandedAccent: secondaryInverse,

  // Inverse colors:
  // contrast(inverseText, inverseBackground): 17.04 (AAA)
  inverseBackground: primaryInverse,
  inverseText: highContrastText,
};

const fonts = {
  serif: 'Merriweather, serif',
  sans: 'Lato, sans-serif',
  mono: 'Inconsolata, monospace',
};

const fontSizes = [
  '.75rem',
  '.875rem',
  '1rem',
  '1.25rem',
  '1.5rem',
  '2.25rem',
  '3rem',
  '4rem',
];

const fontWeights = {
  normal: 400,
  bold: 700,
};

const letterSpacings = {
  tracked: '.1em',
  trackedTight: '-.05em',
  trackedMega: '.25em',
};

const lineHeights = {
  solid: 1,
  title: 1.25,
  copy: 1.5,
};

const radii = {
  none: 0,
  circle: '100%',
  pill: '9999px',
  rounded: '1rem',
};

const shadows = {
  small: `0 0 8px ${colors.text}`,
  medium: `0 0 16px ${colors.text}`,
  large: `0 0 24px ${colors.text}`,
};

const space = [0, '.25rem', '.5rem', '1rem', '2rem', '4rem', '8rem', '16rem'];

const Link = {
  height: '100%',
  'text-decoration': 'none',
  transition: 'all 0.2s ease-out',
  '&:hover': {
    opacity: '0.5',
    transition: 'all 0.2s ease-in',
  },
  '&:active': {
    transition: 'all 0.2s ease-in',
    outline: '2px dotted currentColor',
  },
};

const theme = {
  breakpoints,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  radii,
  shadows,
  space,
  Link,
};

export default theme;
