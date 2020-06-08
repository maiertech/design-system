import React from 'react';
import { Heading, Text } from 'theme-ui';
import { PostPreview } from '@maiertech/components';

const WithDescription = () => (
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
          pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra
          eget, congue eget, semper rutrum, nulla. Nunc purus.
        </Text>
      ),
      author: 'Thilo Maier',
      date: 'July 4, 2018',
    }}
    m={2}
  />
);

export default WithDescription;
