import React from "react";
import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import defaultTheme from "../../themes/default";

const Provider = ({ theme, children }) => (
  <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
    {children}
  </ThemeProvider>
);

Provider.propTypes = {
  theme: PropTypes.object.isRequired
};

Provider.defaultProps = {
  theme: {}
};

Provider.displayName = "Provider";

export default Provider;
