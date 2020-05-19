import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import PostHeader from './PostHeader';

storiesOf('PostHeader', module)
  .addDecorator(withKnobs)
  .add('short title', () => (
    <PostHeader
      author={text('author', 'Thilo Maier')}
      date={text('date', 'Aug 1, 2017')}
      title={text('title', 'Cras ut malesuada')}
      m={2}
    />
  ))
  .add('long title', () => (
    <PostHeader
      author={text('author', 'Thilo Maier')}
      date={text('date', 'Aug 1, 2017')}
      title={text(
        'title',
        'Sed rhoncus mi eu quam varius rutrum morbi eget condimentum velit nam sit amet est non tortor ullamcorper fringilla.'
      )}
      m={2}
    />
  ));
