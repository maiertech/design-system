import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { Box } from 'rebass';
import PostPreview from '../PostPreview';
import { postType } from '../../types';

const PostList = ({ values, ...props }) => (
  <Box {...props}>
    {values.map(({ id, post }) => (
      <PostPreview key={id} post={post} mb={[4, 4, 3]} />
    ))}
  </Box>
);

PostList.propTypes = {
  values: arrayOf(
    shape({
      id: string.isRequired,
      post: postType.isRequired,
    })
  ).isRequired,
};

export default PostList;
