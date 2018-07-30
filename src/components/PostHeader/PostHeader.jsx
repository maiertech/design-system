import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { fontFamily, fontSize, lineHeight, space } from "styled-system";
import Heading from "../Heading";

const Wrapper = styled.article`
  ${fontFamily};
  ${space};
`;

const Author = styled.div`
  ${fontSize};
  ${lineHeight};
`;

const Date = styled.time`
  display: block;
  ${fontSize};
`;

const PostHeader = ({ author, date, mb, title }) => (
  <Wrapper fontFamily="sansSerif" mb={mb}>
    <Heading fontSize={[3, 2, 1]} lineHeight="solid" mt={0} mb={[2, 3, 4]}>
      {title}
    </Heading>
    <Author fontSize={[7, 6, 5]} lineHeight="copy">
      {author}
    </Author>
    <Date fontSize={[7, 6, 5]}>{date}</Date>
  </Wrapper>
);

PostHeader.propTypes = {
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  mb: space.propTypes.mb,
  title: PropTypes.string.isRequired
};

PostHeader.defaultProps = {
  mb: 3
};

export default PostHeader;
