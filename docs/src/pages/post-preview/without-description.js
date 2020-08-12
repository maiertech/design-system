import React from 'react';
import { Heading, ThemeProvider } from 'theme-ui';
import preset from '@theme-ui/preset-base';
import { PostPreview } from '@maiertech/components';

const VisualRegressionTest = () => (
  <ThemeProvider theme={preset}>
    <PostPreview
      post={{
        title: (
          <Heading as="h2" mb={3}>
            Et voluptate nisi deserunt consectetur esse fugiat velit occaecat
            veniam esse
          </Heading>
        ),
        author: 'Thilo Maier',
        date: 'July 4, 2018',
      }}
      m={2}
    />
  </ThemeProvider>
);

export default VisualRegressionTest;
