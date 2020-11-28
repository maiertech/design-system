import React from 'react';
import { ThemeProvider } from 'theme-ui';
import preset from '@theme-ui/preset-base';
import { Tags } from '@maiertech/components';

const FewTags = () => (
  <ThemeProvider theme={preset}>
    <Tags
      values={[
        { tag: 'css', path: '/tags/css/' },
        { tag: 'gatsby', path: '/tags/gatsby/' },
        { tag: 'nextjs', path: '/tags/nextjs/' },
        { tag: 'react', path: '/tags/react/' },
      ]}
      m={2}
    />
  </ThemeProvider>
);

export default FewTags;
