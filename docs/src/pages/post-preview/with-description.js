import React from 'react';
import { Heading, Text, ThemeProvider } from 'theme-ui';
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
        description: (
          <Text as="p" mb={3}>
            Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla
            facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas
            tincidunt lacus at velit. Vivamus vel nulla eget eros elementum
            pellentesque. Quisque porta volutpat erat. Quisque erat eros,
            viverra eget, congue eget, semper rutrum, nulla. Nunc purus.
          </Text>
        ),
        author: 'Thilo Maier',
        date: { formatted: 'July 4, 2018', datetime: '2018-07-04' },
      }}
      m={2}
    />
  </ThemeProvider>
);

export default VisualRegressionTest;
