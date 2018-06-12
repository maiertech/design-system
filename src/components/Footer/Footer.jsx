import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { color, fontSize, space } from "styled-system";
import Icon from "../Icon";
import Container from "../Container";

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: ${props => props.theme.font.sansSerif};
  ${color};
  ${space};
`;

const Title = styled.h1`
  text-align: center;
  ${space};
  ${fontSize};
`;

const FooterLinks = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  a {
    display: block;
    height: 100%;
    color: inherit;
    text-decoration: none;
    transition: all 1s ease-out;

    &:hover {
      opacity: 0.5;
      transition: all 0.2s ease-in;
    }

    &:active {
      transition: all 0.2s ease-in;
      outline: 2px dotted currentColor;
    }
  }
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

const Footer = ({ title, name, links, render, ...props }) => (
  <Wrapper color="inverseText" bg="inverseBackground" {...props}>
    <Container maxWidth={8} px={[1, 2, 3]} py={3}>
      <Title fontSize={4} mt={0} mb={3}>
        {title}
      </Title>
      <FooterLinks fontSize={2} mb={3}>
        {links.map(link => <Box px={2}>{render(link.href, link.text)}</Box>)}
      </FooterLinks>
      <SocialIcons mb={3}>
        <Icon type="github" username="mdotasia" />
        <Icon type="twitter" username="mdotasia" />
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
  render: PropTypes.func
};

Footer.defaultProps = {
  render: (href, text) => <a href={href}>{text}</a>
};

export default Footer;
