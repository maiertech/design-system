import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  borderColor,
  borders,
  flexDirection,
  fontFamily,
  fontSize,
  lineHeight,
  order,
  space,
  width
} from "styled-system";
import Heading from "../Heading";
import { anchorStyle } from "../../style";

const Wrapper = styled.article`
  ${anchorStyle};
  ${borders};
  ${borderColor};
  ${space};
  &:last-child {
    border: 0;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

const Padding = styled.div`
  ${space};
`;

const Preview = styled.div`
  display: flex;
  ${flexDirection};
  ${space};
`;

const Text = styled.div`
  ${order};
  ${space};
  ${width};
`;

const Excerpt = styled.div`
  ${fontFamily};
  ${fontSize};
  ${lineHeight};
`;

const Image = styled.div`
  img {
    display: block;
    max-width: 100%;
  }
  ${order};
  ${space};
  ${width};
`;

const Author = styled.div`
  ${fontSize};
  ${lineHeight};
`;

const Date = styled.time`
  display: block;
  ${fontSize};
`;

const PostPreview = ({
  anchor,
  author,
  color,
  date,
  excerpt,
  href,
  image,
  title,
  ...props
}) => (
  <Wrapper borderColor={color} borderBottom="2px solid" {...props}>
    {anchor({
      href,
      children: (
        <Padding px={[2, 3, 0]}>
          <Preview flexDirection={["column", "row"]} mb={excerpt ? 3 : 2}>
            <Text order={[2, 1]} pr={[0, 3]} width={[1, image ? 0.6 : 1]}>
              <Heading
                fontSize={3}
                lineHeight="title"
                mt={0}
                mb={excerpt ? 3 : 0}
              >
                {title}
              </Heading>
              {excerpt && (
                <Excerpt fontFamily="serif" fontSize={[6, 5]} lineHeight="copy">
                  {excerpt}
                </Excerpt>
              )}
            </Text>
            {image && (
              <Image mb={[3, 0]} order={[1, 2]} pl={[0, 3]} width={[1, 0.4]}>
                <img src={image.src} alt={image.alt} />
              </Image>
            )}
          </Preview>
          <Author fontSize={6} lineHeight="copy">
            {author}
          </Author>
          <Date fontSize={6}>{date}</Date>
        </Padding>
      )
    })}
  </Wrapper>
);

PostPreview.propTypes = {
  /** Render prop for anchors. */
  anchor: PropTypes.func,
  author: PropTypes.string.isRequired,
  color: PropTypes.string,
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  href: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }),
  title: PropTypes.string.isRequired
};

PostPreview.defaultProps = {
  // eslint-disable-next-line react/prop-types
  anchor: ({ href, children }) => <a href={href}>{children}</a>,
  color: "accent",
  excerpt: "",
  image: undefined
};

export default PostPreview;
