/** @jsx jsx */
import { node, shape, string } from 'prop-types';
import { jsx, Box, Text } from 'theme-ui';

const PostPreview = ({ post, ...props }) => (
  <Box {...props} as="article">
    {post.title}
    {post.description}
    {post.author && <Text sx={{ fontSize: 1 }}>{post.author}</Text>}
    {post.date && (
      <time dateTime={post.date.datetime} sx={{ fontSize: 1 }}>
        {post.date.formatted}
      </time>
    )}
  </Box>
);

PostPreview.propTypes = {
  post: shape({
    title: node.isRequired,
    description: node,
    author: string,
    date: shape({ formatted: string.isRequired, datetime: string.isRequired }),
  }).isRequired,
};

export default PostPreview;
