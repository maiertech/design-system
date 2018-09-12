import React from "react";
import PropTypes from "prop-types";
import { Box } from "rebass";
import PostPreview from "../../primitives/PostPreview";

const PostList = ({ values, link, ...props }) => (
  <Box {...props}>
    {values.map(({ href, ...post }) => (
      <PostPreview
        key={href}
        {...post}
        href={href}
        link={link}
        mb={[4, 4, 3]}
      />
    ))}
  </Box>
);

PostList.propTypes = {
  values: PropTypes.arrayOf(
    PropTypes.shape({
      ...PostPreview.propTypes
    })
  ).isRequired,
  link: PropTypes.func
};

PostList.defaultProps = {
  link: undefined
};

export default PostList;
