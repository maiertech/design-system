import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  color,
  flexDirection,
  fontSize,
  fontWeight,
  justifyContent,
  lineHeight
} from "styled-system";
import { anchorStyle } from "../style";
import Box from "../Box";
import Container from "../Container";
import Heading from "../Heading";

const Wrapper = styled.header`
  ${color};
  ${lineHeight};
`;

const Navigation = styled.div`
  display: flex;
  width: 100%;
  ${flexDirection};
  ${justifyContent};
  align-items: center;
  ${anchorStyle};
`;

const Links = styled.div`
  display: flex;
  ${fontSize};
  ${fontWeight};
`;

const Header = ({ anchor, links, title }) => (
  <Wrapper color="brandedText" bg="brandedBackground" lineHeight="copy">
    <Container maxWidth={9} pt={[2, 3]} pb={[2, 3]}>
      <Navigation
        flexDirection={["column", "row"]}
        justifyContent={["center", "space-between"]}
      >
        <Heading link={{ anchor, href: "/" }} fontSize={[4, 3, 2]} mr={[0, 3]}>
          {title}
        </Heading>
        <Links fontSize={[6, 5, 4]} fontWeight={6}>
          {links.map(({ href, text }) => (
            <Box key={text} ml={[2, 3, 4]} mr={[2, 0]}>
              {anchor({ href, children: text })}
            </Box>
          ))}
        </Links>
      </Navigation>
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
  title: PropTypes.string.isRequired
};

Header.defaultProps = {
  anchor: ({ href, children }) => <a href={href}>{children}</a>
};

export default Header;
