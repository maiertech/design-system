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
import { anchorStyle } from "../style";

const Border = styled.div`
  ${anchorStyle};
  ${borders};
  ${borderColor};
  ${space};
`;

// `borderColor` only works if defined after `borders`.
const Wrapper = styled.article`
  ${space};
`;
const Head = styled.div`
  display: flex;
  ${flexDirection};
`;

const HeadlineAndExcerpt = styled.div`
  ${order};
  ${space};
  ${width};
`;

const Excerpt = styled.div`
  p {
    margin-top: 0;
    margin-bottom: ${({ theme: { space } }) => space[3]};
  }
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
  title,
  excerpt,
  image: { src, alt },
  date,
  author,
  borderColor,
  anchor,
  href,
  mb,
  ...props
}) => (
  <Border borderColor={borderColor} borderBottom="2px solid" mb={mb}>
    {anchor(
      href,
      <Wrapper {...props}>
        <Head flexDirection={["column", "row"]}>
          <HeadlineAndExcerpt order={[2, 1]} pr={[0, 3]} width={[1, 0.6]}>
            <Heading fontSize={3} lineHeight="title" mt={0} mb={3}>
              {title}
            </Heading>
            <Excerpt
              fontFamily="serif"
              fontSize={[6, 5]}
              lineHeight="copy"
              dangerouslySetInnerHTML={{ __html: excerpt }}
            />
          </HeadlineAndExcerpt>
          <Image mb={[3, 0]} order={[1, 2]} pl={[0, 3]} width={[1, 0.4]}>
            <img src={src} alt={alt} />
          </Image>
        </Head>
        <Author fontSize={6} lineHeight="copy">
          {author}
        </Author>
        <Date fontSize={6}>{date}</Date>
      </Wrapper>
    )}
  </Border>
);

PostPreview.propTypes = {
  /** Render prop for anchors. */
  anchor: PropTypes.func,
  href: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  borderColor: PropTypes.string,
  /** Published date. */
  date: PropTypes.string.isRequired,
  /** Blog post summary. */
  excerpt: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }),
  title: PropTypes.string.isRequired
};

PostPreview.defaultProps = {
  anchor: (href, text) => <a href={href}>{text}</a>,
  borderColor: "accent"
};

export default PostPreview;
