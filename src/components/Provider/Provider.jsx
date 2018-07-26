import React from "react";
import PropTypes from "prop-types";
import { injectGlobal, ThemeProvider } from "styled-components";
import { normalize } from "polished";
import defaultTheme from "../../themes/default";

// https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/
injectGlobal`
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

// ThemeProvider can have one child only.
// You can use <React.Fragment> around multiple children.
const Provider = ({ theme, children }) => (
  <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
    {children}
  </ThemeProvider>
);

Provider.propTypes = {
  /** Custom theme to be shallow merged into default theme. */
  theme: PropTypes.object.isRequired
};

// Undefined theme cannot be merged.
Provider.defaultProps = {
  theme: {}
};

export default Provider;
