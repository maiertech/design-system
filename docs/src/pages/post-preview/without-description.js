import React from 'react';
import { Heading } from 'theme-ui';
import { PostPreview } from '@maiertech/components';

const WithoutDescription = () => (
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
);

export default WithoutDescription;
