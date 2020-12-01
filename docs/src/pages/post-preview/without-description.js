import React from 'react';
import { Heading, ThemeProvider } from 'theme-ui';
import preset from '@maiertech/preset';
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
        date: { formatted: 'July 4, 2018', datetime: '2018-07-04' },
      }}
      m={2}
    />
  </ThemeProvider>
);

export default VisualRegressionTest;
