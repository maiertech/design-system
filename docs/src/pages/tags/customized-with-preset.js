import React from 'react';
import { ThemeProvider } from 'theme-ui';
import preset from '@maiertech/preset';
import { Tags } from '@maiertech/components';

const CustomizedWithPreset = () => (
  <ThemeProvider theme={preset}>
    <Tags
      values={[
        { tag: 'css', path: '/tags/css/' },
        { tag: 'gatsby', path: '/tags/gatsby/' },
        { tag: 'nextjs', path: '/tags/nextjs/' },
        { tag: 'react', path: '/tags/react/' },
      ]}
      variant="tags.secondary"
      m={2}
    />
  </ThemeProvider>
);

export default CustomizedWithPreset;
