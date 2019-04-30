import colors from './colors';

const theme = {
  breakpoints: ['30em', '60em'],

  colors,

  fonts: {
    serif: 'Merriweather, serif',
    sans: 'Lato, sans-serif',
    mono: 'Inconsolata, monospace',
  },

  fontSizes: [
    '.75rem',
    '.875rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '2.25rem',
    '3rem',
    '4rem',
  ],

  fontWeights: {
    normal: 400,
    bold: 700,
  },

  letterSpacings: {
    tracked: '.1em',
    trackedTight: '-.05em',
    trackedMega: '.25em',
  },

  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5,
  },

  radii: {
    none: 0,
    circle: '100%',
    pill: '9999px',
    rounded: '1rem',
  },

  shadows: {
    small: `0 0 8px ${colors.text}`,
    medium: `0 0 16px ${colors.text}`,
    large: `0 0 24px ${colors.text}`,
  },

  space: [0, '.25rem', '.5rem', '1rem', '2rem', '4rem', '8rem', '16rem'],

  // Rebass Link styling.
  Link: {
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
  },
};

export default theme;
