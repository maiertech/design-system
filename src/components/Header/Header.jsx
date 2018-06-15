import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  color,
  flexDirection,
  fontSize,
  fontWeight,
  justifyContent,
  letterSpacing,
  space
} from "styled-system";
import { anchorStyle } from "../style";
import Container from "../Container";
import LinkedHeading from "../LinkedHeading";

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${color};
  ${space};
`;

const FlexBox = styled.div`
  display: flex;
  ${flexDirection};
  ${justifyContent};
  align-items: center;
  ${anchorStyle};
  ${letterSpacing};
`;

const Links = styled.div`
  display: flex;
  ${fontSize};
  ${fontWeight};
`;

const LinkBox = styled.div`
  ${space};
`;

const Header = ({ anchor, links, title: { href, text } }) => (
  <Wrapper
    color="brandedText"
    bg="brandedBackground"
    letterSpacing="tracked"
    py={[2, 3]}
  >
    <Container wide>
      <FlexBox
        flexDirection={["column", "row"]}
        justifyContent={["center", "space-between"]}
      >
        <LinkedHeading
          fontSize={[3, 4, 5]}
          anchor={anchor}
          href={href}
          mr={[0, 3]}
        >
          {text}
        </LinkedHeading>
        <Links fontSize={[1, 2, 3]} fontWeight={6}>
          {links.map(({ href, text }) => (
            <LinkBox key={text} ml={[2, 3, 4]} mr={[2, 0]}>
              {anchor(href, text)}
            </LinkBox>
          ))}
        </Links>
      </FlexBox>
    </Container>
  </Wrapper>
);

Header.propTypes = {
  /** Render prop for anchors. */
  anchor: PropTypes.func,
  /** Header links. */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired,
  title: PropTypes.shape({
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
};

Header.defaultProps = {
  anchor: (href, text) => <a href={href}>{text}</a>
};

export default Header;
