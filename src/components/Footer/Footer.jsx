import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { color, fontFamily, fontSize, lineHeight, space } from "styled-system";
import { anchorStyle } from "../style";
import Icon from "../Icon";
import Container from "../Container";
import Heading from "../Heading";

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${color};
  ${fontFamily};
  ${space};
`;

const Links = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  ${anchorStyle};
  ${fontSize};
  ${lineHeight};
  ${space};
`;

const Box = styled.div`
  ${space};
`;

const SocialIcons = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  ${space};
`;

const LastUpdated = styled.div`
  text-align: center;
  ${fontSize};
  ${space};
`;

const Copyright = styled.div`
  text-align: center;
  ${fontSize};
`;

const Footer = ({ anchor, lastUpdated, links, name, title, ...props }) => (
  <Wrapper
    fontFamily="sansSerif"
    color="inverseText"
    bg="inverseBackground"
    py={3}
    {...props}
  >
    <Container maxWidth={8}>
      <Heading
        link={{ anchor, href: "/" }}
        align="center"
        fontSize={3}
        mt={0}
        mb={3}
      >
        {title}
      </Heading>
      <Links fontSize={5} lineHeight="copy" mb={3}>
        {links.map(({ href, text }, index) => (
          <Box px={2} key={index}>
            {anchor({ href, children: text })}
          </Box>
        ))}
      </Links>
      <SocialIcons mb={3}>
        <Icon
          anchor={anchor}
          type="github"
          username="mdotasia"
          key="github-mdotasia"
        />
        <Icon
          anchor={anchor}
          type="twitter"
          username="mdotasia"
          key="twitter-mdotasia"
        />
      </SocialIcons>
      {lastUpdated && (
        <LastUpdated
          fontSize={7}
          mb={1}
        >{`Last updated: ${lastUpdated}`}</LastUpdated>
      )}
      <Copyright fontSize={6}>
        © {new Date().getFullYear()} by {name}
      </Copyright>
    </Container>
  </Wrapper>
);

Footer.propTypes = {
  /** Render prop for link component. */
  anchor: PropTypes.func,
  lastUpdated: PropTypes.string,
  /** Footer links. */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired,
  /** Copyright name. */
  name: PropTypes.string.isRequired,
  /** Footer title. */
  title: PropTypes.string.isRequired
};

Footer.defaultProps = {
  anchor: ({ href, children }) => <a href={href}>{children}</a>
};

export default Footer;
