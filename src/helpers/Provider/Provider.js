import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { normalize } from 'polished';
import defaultTheme from '../../themes/default';

// https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/
const GlobalStyle = createGlobalStyle`
  ${normalize()};
  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`;

const Provider = ({ theme, children }) => (
  <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
    <>
      <GlobalStyle />
      {children}
    </>
  </ThemeProvider>
);

Provider.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.object,
};

// Undefined theme cannot be merged.
Provider.defaultProps = {
  theme: {},
};

export default Provider;
