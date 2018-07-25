import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { space } from "styled-system";
import PostPreview from "../PostPreview";
import Container from "../Container";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostList = ({ anchor, values, ...props }) => (
  <Wrapper {...props}>
    <Container maxWidth={7}>
      {values.map((post, index) => (
        <PostPreview
          key={index}
          anchor={anchor}
          px={[2, 3, 0]}
          pb={3}
          mb={3}
          {...post}
        />
      ))}
    </Container>
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
  )
};

PostList.defaultProps = {
  anchor: ({ href, children }) => <a href={href}>{children}</a>,
  mt: 0,
  mb: 0
};

export default PostList;
