import React from "react";
import { Box, Container, Flex, Lead, Link, Text } from "rebass";
import PropTypes from "prop-types";
import styled, { ThemeProvider, withTheme } from "styled-components";
import { color, fontSize, space } from "styled-system";
import { merge } from "../../theme";

const Footer = props => {
  const InternalLink = styled(props.internalLinkComponent)`
    ${color} ${fontSize} ${space} text-decoration: none;
  `;
  const ExternalLink = styled(Link)`
    ${color} ${fontSize} ${space} text-decoration: none;
  `;

  return (
    <ThemeProvider theme={merge}>
      <Box
        is="footer"
        bg="primaryDarker"
        color="bgAlt"
        className={props.className}
      >
        <Container>
          <Flex direction="column" justify="center" align="center">
            <Lead py={[2, 3]}>
              <InternalLink to="/" color="bgAlt">
                {props.title}
              </InternalLink>
            </Lead>
            <Flex
              direction={["column", "row"]}
              justify="space-around"
              align="center"
              wrap
              width={1}
            >
              {props.internalLinks.map(link => (
                <Box key={link.to} p={[1, 2]}>
                  <InternalLink to={link.to} color="bgAlt" exact>
                    {link.text}
                  </InternalLink>
                </Box>
              ))}
              {props.externalLinks.map(link => (
                <Box key={link.to} p={[1, 2]}>
                  <ExternalLink href={link.to} color="bgAlt">
                    {link.text}
                  </ExternalLink>
                </Box>
              ))}
            </Flex>
            <Text py={[2, 3]}>Made by @mdotasia</Text>
          </Flex>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

Footer.propTypes = {
  /**
   * Title for footer.
   */
  title: PropTypes.string.isRequired,
  /**
   * Constructor for internal link component:
   * [React Router <NavLink>](https://reacttraining.com/react-router/web/api/NavLink) or any link
   * component based on it, e.g.
   * [Gatsby <Link>](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-link).
   */
  internalLinkComponent: PropTypes.func.isRequired,
  /**
   * Array of internal links.
   */
  internalLinks: PropTypes.arrayOf(
    PropTypes.shape({ to: PropTypes.string, text: PropTypes.string })
  ),
  /**
   * Array of external links.
   */
  externalLinks: PropTypes.arrayOf(
    PropTypes.shape({ to: PropTypes.string, text: PropTypes.string })
  ),
  /**
   * This property is used when using `styled` from styled-components.
   * Can also be used to apply your own CSS (not recommended).
   */
  className: PropTypes.string
};

Footer.defaultProps = {
  internalLinks: [],
  externalLinks: [],
  className: ""
};

export default withTheme(Footer);
