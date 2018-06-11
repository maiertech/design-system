import React from "react";
import styled, { injectGlobal, ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import defaultTheme from "../../themes/default";

injectGlobal`body {
  margin: 0;
}`;

export const Base = styled.div`
  font-family: ${props => props.theme.font.sansSerif};
  line-height: 1.4;
  * {
    box-sizing: border-box;
  }
`;

const Provider = ({ theme, ...props }) => (
  <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
    <Base {...props} />
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
