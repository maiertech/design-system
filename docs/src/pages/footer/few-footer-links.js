import React from 'react';
import { Footer } from '@maiertech/components';
import { ThemeProvider } from 'theme-ui';
import preset from '@maiertech/preset';

const VisualRegressionTest = () => (
  <ThemeProvider theme={preset}>
    <Footer
      title="This is the Footer title"
      name="Thilo Maier"
      lastUpdated="Aug 1, 2018"
      links={[
        {
          href: '/blog',
          text: 'Blog',
        },
        {
          href: '/about',
          text: 'About',
        },
        {
          href: '/archive',
          text: 'Archive',
        },
      ]}
    />
  </ThemeProvider>
);

export default VisualRegressionTest;
