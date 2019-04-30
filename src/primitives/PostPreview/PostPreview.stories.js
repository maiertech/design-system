import React from 'react';
import { storiesOf } from '@storybook/react';
import NewTabLink from '../NewTabLink';
import posts, { normalize } from '../../posts';
import PostPreview from './PostPreview';

storiesOf('Primitives/PostPreview', module)
  .add('default link', () => (
    <PostPreview post={normalize(posts[0])} m={[0, 0, 3]} />
  ))
  .add('custom link', () => {
    const post = { ...normalize(posts[1]), link: NewTabLink };
    return <PostPreview post={post} m={[0, 0, 3]} />;
  });
