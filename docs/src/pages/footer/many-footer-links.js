import React from 'react';
import { Footer } from '@maiertech/components';
import { ThemeProvider } from 'theme-ui';
import preset from '@maiertech/preset';

const VisualRegressionTest = () => (
  <ThemeProvider theme={preset}>
    <Footer
      title="This is the Footer title"
      name="Thilo Maier"
      links={[
        {
          href: '/one',
          text: 'One',
        },
        {
          href: '/two',
          text: 'Two',
        },
        {
          href: '/three',
          text: 'Three',
        },
        {
          href: '/four',
          text: 'Four',
        },
        {
          href: '/five',
          text: 'Five',
        },
        {
          href: '/six',
          text: 'Six',
        },
        {
          href: '/seven',
          text: 'Seven',
        },
        {
          href: '/eight',
          text: 'Eight',
        },
        {
          href: '/nine',
          text: 'Nine',
        },
        {
          href: '/ten',
          text: 'Ten',
        },
        {
          href: '/eleven',
          text: 'Eleven',
        },
        {
          href: '/twelve',
          text: 'Twelve',
        },
        {
          href: '/thirteen',
          text: 'Thirteen',
        },
        {
          href: '/fourteen',
          text: 'Fourteen',
        },
        {
          href: '/fifteen',
          text: 'Fifteen',
        },
        {
          href: '/sixteen',
          text: 'Sixteen',
        },
        {
          href: '/seventeen',
          text: 'Seventeen',
        },
        {
          href: '/eighteen',
          text: 'Eighteen',
        },
        {
          href: '/nineteen',
          text: 'Nineteen',
        },
        {
          href: '/twenty',
          text: 'Twenty',
        },
      ]}
    />
  </ThemeProvider>
);

export default VisualRegressionTest;
