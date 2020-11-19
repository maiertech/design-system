import React from 'react';
import { node, shape, string } from 'prop-types';
import { Box, Text } from 'theme-ui';

const PostPreview = ({ post, ...props }) => (
  <Box {...props} as="article">
    {post.title}
    {post.description}
    {post.author && <Text sx={{ fontSize: 1 }}>{post.author}</Text>}
    <Text as="time" sx={{ fontSize: 1 }}>
      {post.date}
    </Text>
  </Box>
);

PostPreview.propTypes = {
  post: shape({
    title: node.isRequired,
    description: node,
    author: string,
    date: string.isRequired,
  }).isRequired,
};

export default PostPreview;
