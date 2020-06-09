import preset from '@theme-ui/preset-base';
import merge from 'deepmerge';

const theme = merge(preset, {
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

  // Variants for Link.
  links: {
    text: {
      color: 'text',
      textDecoration: 'none',
    },
  },
});

export default theme;
