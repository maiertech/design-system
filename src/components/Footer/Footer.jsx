import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { color, fontSize, space } from "styled-system";
import { anchorStyle } from "../style";
import Icon from "../Icon";
import Container from "../Container";
import LinkedHeading from "../LinkedHeading";

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: ${props => props.theme.font.sansSerif};
  ${color};
  ${space};
`;

const FooterLinks = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  ${anchorStyle};
  ${fontSize};
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

const Copyright = styled.small`
  display: block;
  text-align: center;
  ${fontSize};
`;

const Footer = ({ anchor, title, name, links, ...props }) => (
  <Wrapper color="inverseText" bg="inverseBackground" {...props}>
    <Container maxWidth={8} px={[1, 2, 3]} py={3}>
      <LinkedHeading
        anchor={anchor}
        align="center"
        href="/"
        fontSize={4}
        mt={0}
        mb={3}
      >
        {title}
      </LinkedHeading>
      <FooterLinks fontSize={2} mb={3}>
        {links.map(link => <Box px={2}>{anchor(link.href, link.text)}</Box>)}
      </FooterLinks>
      <SocialIcons mb={3}>
        <Icon anchor={anchor} type="github" username="mdotasia" />
        <Icon anchor={anchor} type="twitter" username="mdotasia" />
      </SocialIcons>
      <Copyright fontSize={1}>
        © {new Date().getFullYear()} by {name}
      </Copyright>
    </Container>
  </Wrapper>
);

Footer.propTypes = {
  /** Footer title. */
  title: PropTypes.string.isRequired,
  /** Copyright name. */
  name: PropTypes.string.isRequired,
  /** Footer links. */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ),
  /** Render prop for link component. */
  anchor: PropTypes.func
};

Footer.defaultProps = {
  anchor: (href, text) => <a href={href}>{text}</a>
};

export default Footer;
