import React from 'react';
import { storiesOf } from '@storybook/react';
import PostHeader from './PostHeader';

storiesOf('Primitives/PostHeader', module)
  .add('short title', () => (
    <PostHeader
      author="Thilo Maier"
      date="Aug 1, 2017"
      title="Cras ut malesuada"
      m={2}
    />
  ))
  .add('long title', () => (
    <PostHeader
      author="Thilo Maier"
      date="Aug 1, 2017"
      title="Sed rhoncus mi eu quam varius rutrum morbi eget condimentum velit nam sit amet est non tortor ullamcorper fringilla."
      m={2}
    />
  ));
