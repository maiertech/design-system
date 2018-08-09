import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { themeGet } from "styled-system";
import { anchorStyle } from "../../style";

const Wrapper = styled.span`
  ${anchorStyle};
  color: ${({ color }) => themeGet(`colors.${color}`)};
  a {
    display: inline;
  }
`;

const A = ({ anchor, children, href, ...props }) => (
  <Wrapper {...props}>{anchor({ href, children })}</Wrapper>
);

A.propTypes = {
  anchor: PropTypes.func,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  href: PropTypes.string.isRequired
};

A.defaultProps = {
  // eslint-disable-next-line react/prop-types
  anchor: ({ href, children }) => <a href={href}>{children}</a>,
  color: "accent"
};

export default A;
