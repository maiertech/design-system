import React from 'react';
import { storiesOf } from '@storybook/react';
import { Image } from 'rebass';
import NewTabLink from '../../primitives/NewTabLink';
import rawPosts from '../../posts';
import PostList from './PostList';

const posts = rawPosts.map(({ image: { alt, src }, ...props }) => ({
  ...props,
  image: function image() {
    return <Image css={{ display: 'block' }} alt={alt} src={src} />;
  },
}));

storiesOf('Composites/PostList', module)
  .add('default link', () => <PostList values={posts} m={3} />)
  .add('custom link', () => (
    <PostList values={posts} link={NewTabLink} m={3} />
  ));
