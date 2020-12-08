import preset from '@theme-ui/preset-base';

// https://tailwindcss.com/docs/customizing-colors
const blue300 = '#93C5FD';
const blue800 = '#1E40AF';
const coolGray50 = '#F9FAFB';
const coolGray500 = '#6B7280';
const coolGray800 = '#1F2937';

/**
 * This file accomplishes 5 things:
 * 1 - Set defaults (from @theme-ui/preset-base).
 * 2 - Define colors.
 * 3 - Customize theme scales.
 * 4 - Customize variants for Theme UI components.
 * 5 - Customize variants for @maiertech/components.
 * 6 - Customize styles for MDX content.
 */
const theme = {
  // 1 - Set defaults (from @theme-ui/preset-base).
  ...preset,

  // 2 - Define colors.
  colors: {
    ...preset.colors,
    text: coolGray800,
    background: coolGray50,
    primary: blue800,
    secondary: coolGray500,
    highlight: blue300,
  },

  // 3 - Customize theme scales.

  // 4 - Customize variants for Theme UI components.

  // Container.
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

  // Link.
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

  // 5 - Customize variants for @maiertech/components.

  // Header.
  header: {
    container: {
      variant: 'layout.wide',
    },
  },

  // Footer.
  footer: {
    container: {
      variant: 'layout.wide',
    },
  },

  // Tags.
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

  // 6 - Customize styles for MDX content.
  styles: {
    ...preset.styles,
    h1: {
      ...preset.styles.h1,
      mt: 0,
      mb: 4,
    },
    h2: {
      ...preset.styles.h2,
      mt: 0,
      mb: 3,
    },
    h3: {
      ...preset.styles.h3,
      mt: 0,
      mb: 2,
    },
    h4: {
      ...preset.styles.h4,
      mt: 0,
      mb: 2,
    },
    h5: {
      ...preset.styles.h5,
      mt: 0,
      mb: 2,
    },
    h6: {
      ...preset.styles.h6,
      mt: 0,
      mb: 2,
    },
    p: {
      ...preset.styles.p,
      // Set color to inherit to allow adapting to parent text color.
      color: 'inherit',
      mt: 0,
      mb: 3,
      '&:last-child': {
        mb: 0,
      },
    },
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
