import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import PostPreview from "../PostPreview";
import Container from "../Container";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RemoveLastChildBorder = styled.div`
  div:last-child {
    border: 0;
  }
`;

const PostList = ({ anchor, posts }) => (
  <Wrapper>
    <Container maxWidth={7}>
      <RemoveLastChildBorder>
        {posts.map((post, index) => (
          <PostPreview
            key={index}
            anchor={anchor}
            px={[2, 3, 0]}
            pb={3}
            mb={3}
            {...post}
          />
        ))}
      </RemoveLastChildBorder>
    </Container>
  </Wrapper>
);

PostList.propTypes = {
  anchor: PropTypes.func,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      excerpt: PropTypes.string.isRequired,
      image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired
      }).isRequired
    })
  )
};

PostList.defaultProps = {
  anchor: (href, text) => <a href={href}>{text}</a>
};

export default PostList;
