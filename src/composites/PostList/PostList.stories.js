import React from 'react';
import { storiesOf } from '@storybook/react';
import NewTabLink from '../../primitives/NewTabLink';
import posts, { normalize } from '../../posts';
import PostList from './PostList';

const normalizedPosts = posts.map(({ id, ...post }) => ({
  id,
  post: normalize(post),
}));

storiesOf('Composites/PostList', module)
  .add('default link', () => <PostList values={normalizedPosts} m={3} />)
  .add('custom link', () => (
    <PostList
      values={normalizedPosts.map(post => ({ ...post, link: NewTabLink }))}
      m={3}
    />
  ));
