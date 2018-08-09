import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { space } from "styled-system";
import PostPreview from "../PostPreview";

const Wrapper = styled.div`
  ${space};
`;

const PostList = ({ anchor, values, mt, mb }) => (
  <Wrapper mt={mt} mb={mb}>
    {values.map(({ href, ...post }) => (
      <PostPreview
        key={href}
        anchor={anchor}
        href={href}
        px={[2, 3, 0]}
        pb={3}
        mb={3}
        {...post}
      />
    ))}
  </Wrapper>
);

PostList.propTypes = {
  anchor: PropTypes.func,
  mt: space.propTypes.mt,
  mb: space.propTypes.mb,
  values: PropTypes.arrayOf(
    PropTypes.shape({
      ...PostPreview.propTypes
    })
  ).isRequired
};

PostList.defaultProps = {
  // eslint-disable-next-line react/prop-types
  anchor: ({ href, children }) => <a href={href}>{children}</a>,
  mt: 0,
  mb: 0
};

export default PostList;
