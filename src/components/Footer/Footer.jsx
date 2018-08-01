import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { color, fontFamily, fontSize, lineHeight, space } from "styled-system";
import { anchorStyle } from "../../style";
import Icon from "../Icon";
import Container from "../Container";
import Heading from "../Heading";

const Wrapper = styled.footer`
  ${color};
  ${fontFamily};
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

const Footer = ({
  externalAnchor,
  internalAnchor,
  lastUpdated,
  links,
  name,
  title
}) => (
  <Wrapper fontFamily="sansSerif" color="inverseText" bg="inverseBackground">
    <Container maxWidth={8} pt={3} pb={3}>
      <Heading
        link={{ anchor: internalAnchor, href: "/" }}
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
            {internalAnchor({ href, children: text })}
          </Box>
        ))}
      </Links>
      <SocialIcons mb={3}>
        <Icon
          anchor={externalAnchor}
          type="github"
          username="mdotasia"
          key="github-mdotasia"
        />
        <Icon
          anchor={externalAnchor}
          type="twitter"
          username="mdotasia"
          key="twitter-mdotasia"
        />
      </SocialIcons>
      {lastUpdated && (
        <LastUpdated
          fontSize={7}
          mb={3}
        >{`Last updated: ${lastUpdated}`}</LastUpdated>
      )}
      <Copyright fontSize={6}>
        © {new Date().getFullYear()} by {name}
      </Copyright>
    </Container>
  </Wrapper>
);

Footer.propTypes = {
  /** Render prop for external anchors. */
  externalAnchor: PropTypes.func,
  /** Render prop for internal anchors. */
  internalAnchor: PropTypes.func,
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

const defaultAnchor = ({ href, children }) => <a href={href}>{children}</a>;

Footer.defaultProps = {
  externalAnchor: defaultAnchor,
  internalAnchor: defaultAnchor
};

export default Footer;
