import React from 'react';
import { Header } from '@maiertech/components';
import { ThemeProvider } from 'theme-ui';
import preset from '@maiertech/preset';

const VisualRegressionTest = () => (
  <ThemeProvider theme={preset}>
    <Header
      title="Header title"
      links={[
        { href: '/blog', text: 'Blog' },
        { href: '/notes', text: 'Notes' },
        { href: '/about', text: 'About' },
      ]}
    />
  </ThemeProvider>
);

export default VisualRegressionTest;
