import preset from '@theme-ui/preset-base';

// Palette generated with https://palx.jxnblk.com/ with base color #0366d6.
const gray0 = '#f9f9fa';
const gray9 = '#374047';
const blue9 = '#004170';
const teal8 = '#007d34';

/**
 * This file accomplishes 5 things:
 * 1 - Set defaults (from @theme-ui/preset-base).
 * 2 - Define colors.
 * 3 - Customize variants for Theme UI components.
 * 4 - Customize variants for @maiertech/components.
 * 5 - Customize styles for MDX content.
 */
const theme = {
  ...preset,

  // 2 - Define colors.
  // contrast(text, background) = 10.05 AAA
  // contrast(primary, background) = 10.03 AAA
  colors: {
    ...preset.colors,
    text: gray9,
    background: gray0,
    primary: blue9,
    secondary: teal8,
  },

  // 3 - Customize variants for Theme UI components.

  // Container
  layout: {
    ...preset.layout,
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

  // Link
  links: {
    ...preset.links,
    tag: {
      textDecoration: 'none',
      '@media (hover: hover)': {
        '&:hover': {
          textDecoration: 'none',
        },
      },
    },
  },

  // 4 - Customize variants for @maiertech/components.

  // Header
  header: {
    container: {
      variant: 'layout.wide',
    },
  },

  // Footer
  footer: {
    container: {
      variant: 'layout.wide',
    },
  },

  // Tags
  tags: {
    primary: {
      color: 'background',
      bg: 'primary',
    },
    secondary: {
      color: 'background',
      bg: 'secondary',
    },
  },

  // 5 - Customize styles for MDX content.

  styles: {
    ...preset.styles,
    a: {
      textDecoration: 'none',
      '@media (hover: hover)': {
        '&:hover': {
          textDecoration: 'underline',
        },
      },
      WebkitTapHighlightColor: 'transparent',
    },
  },
};

export default theme;
