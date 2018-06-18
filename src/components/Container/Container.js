import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  max-width: ${({ theme: { maxWidths }, wide }) =>
    wide ? maxWidths[9] : maxWidths[8]};
  width: 100%;
  padding-left: ${({ theme: { space } }) => space[2]};
  padding-right: ${({ theme: { space } }) => space[2]};

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints[0]}) {
    padding-left: ${({ theme: { space } }) => space[3]};
    padding-right: ${({ theme: { space } }) => space[3]};
  }
`;

Container.propTypes = {
  /**
   * Default maxWidth is theme.maxWidth[8] = 64rem.
   * With wide flag: theme.maxWidth[9] = 96rem.
   */
  wide: PropTypes.bool
};

Container.defaultProps = {
  wide: false
};

export default Container;
