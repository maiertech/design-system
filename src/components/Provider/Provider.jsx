import React from "react";
import PropTypes from "prop-types";
import styled, { injectGlobal, ThemeProvider } from "styled-components";
import { fontFamily, lineHeight } from "styled-system";
import defaultTheme from "../../themes/default";

injectGlobal`
  body {
    margin: 0;
  }
`;

const Base = styled.div`
  * {
    box-sizing: border-box;
  }
  ${fontFamily};
  ${lineHeight};
`;

const Provider = ({ theme, children }) => (
  <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
    <Base fontFamily="sansSerif" lineHeight="copy">
      {children}
    </Base>
  </ThemeProvider>
);

Provider.propTypes = {
  /** Custom theme, which is shallow merged into default theme. */
  theme: PropTypes.object.isRequired
};

Provider.defaultProps = {
  theme: {}
};

export default Provider;
