import React from 'react';
import { Header } from '@maiertech/components';
import { ThemeProvider } from 'theme-ui';
import preset from '@theme-ui/preset-base';

const VisualRegressionTest = () => (
  <ThemeProvider theme={preset}>
    <Header
      title="Header title"
      links={[
        { href: '/1', text: 'One' },
        { href: '/2', text: 'Two' },
        { href: '/3', text: 'Three' },
        { href: '/4', text: 'Four' },
        { href: '/5', text: 'Five' },
        { href: '/6', text: 'Six' },
        { href: '/7', text: 'Seven' },
        { href: '/8', text: 'Eight' },
        { href: '/9', text: 'Nine' },
        { href: '/10', text: 'Ten' },
        { href: '/11', text: 'Eleven' },
        { href: '/12', text: 'Twelve' },
      ]}
    />
  </ThemeProvider>
);

export default VisualRegressionTest;
