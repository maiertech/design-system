import preset from '@theme-ui/preset-base';
import merge from 'deepmerge';

// Palette generated with https://palx.jxnblk.com/ with base color #0366d6.
const gray0 = '#f9f9fa';
const gray9 = '#374047';
const blue9 = '#004170';
const teal8 = '#007d34';

const theme = merge(preset, {
  // contrast(text, background) = 10.05 AAA
  // contrast(primary, background) = 10.03 AAA
  colors: {
    text: gray9,
    background: gray0,
    primary: blue9,
    secondary: teal8,
  },

  // Variants for Container.
  layout: {
    container: {
      px: [2, 3, 4],
      maxWidth: '64rem',
    },
    narrow: {
      variant: 'layout.container',
      maxWidth: '48rem',
    },
    wide: {
      variant: 'layout.container',
      maxWidth: '96rem',
    },
  },

  // Customizations.

  // Customize Header.
  header: {
    container: {
      variant: 'layout.wide',
    },
  },

  // Customize Footer.
  footer: {
    container: {
      variant: 'layout.wide',
    },
  },

  styles: {
    a: {
      // Deep merge with a from @theme-ui/preset-base.
      textDecoration: 'none',
      '@media (hover: hover)': {
        '&:hover': {
          textDecoration: 'underline',
        },
      },
      WebkitTapHighlightColor: 'transparent',
    },
  },
});

export default theme;
