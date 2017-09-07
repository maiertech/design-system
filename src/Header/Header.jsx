import React from 'react';
import styled, { ThemeProvider, withTheme } from 'styled-components';
import { Container, Box, Flex, Heading } from 'rebass';
import PropTypes from 'prop-types';
import { color, fontSize, space } from 'styled-system';
import { merge } from '../theme';

const Header = props => {
  const NavLink = styled(props.element)`
    ${color} ${fontSize} ${space} text-decoration: none;
    font-weight: bold;
    border-bottom: solid 4px
      ${navLinkProps => navLinkProps.theme.colors.primary};
  `;

  return (
    <ThemeProvider theme={merge}>
      <Box bg="primary">
        <Container>
          <Flex
            direction={['column', 'row']}
            justify={['center', 'space-between']}
            align="center"
            color="bg"
          >
            <Heading py={[2, 3]}>{props.title}</Heading>
            <Flex justify="space-around" align="center" wrap>
              {props.links.map(link => (
                <NavLink
                  to={link.to}
                  key={link.to}
                  color="bg"
                  p={1}
                  my={[2, 3]}
                  ml={[3, 4]}
                  mr={[3, 0]}
                  activeStyle={{
                    borderBottom: `solid 4px ${props.theme.colors.bg}`,
                  }}
                  exact
                >
                  {link.text}
                </NavLink>
              ))}
            </Flex>
          </Flex>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

Header.propTypes = {
  /**
   * Title for header.
   */
  title: PropTypes.string.isRequired,
  /**
   * Constructor for navigation link element with properties `to` (string) and
   * `activeStyle` (object). For instance
   * [React Router <NavLink>](https://reacttraining.com/react-router/web/api/NavLink)
   * or [Gatsby <Link>](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-link).
   */
  element: PropTypes.func.isRequired,
  /**
   * Array of navigation links.
   */
  links: PropTypes.arrayOf(
    PropTypes.shape({ to: PropTypes.string, text: PropTypes.string })
  ).isRequired,
  /**
   * Use [Rebass Provider](http://jxnblk.com/rebass/theming) to inject default or custom theme.
   * Alternatively use
   * [styled-components ThemeProvider](https://www.styled-components.com/docs/advanced#theming)
   * to add custom theme.
   */
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      bg: PropTypes.string,
    }),
  }).isRequired,
};

export default withTheme(Header);
