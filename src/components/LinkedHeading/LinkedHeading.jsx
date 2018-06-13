import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { fontSize, space } from "styled-system";

const Wrapper = styled.div`
  & > h1,
  & > h2,
  & > h3,
  & > h4,
  & > h5,
  & > h6 {
    margin: ${props => props.theme.space[0]};
    ${fontSize};
    text-align: ${props => props.align};
  }

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

  ${space};
`;

const LinkedHeading = ({ anchor, children, heading, href, ...props }) => (
  <Wrapper {...props}>{heading(anchor(href, children))}</Wrapper>
);

LinkedHeading.propTypes = {
  /** Align heading. */
  align: PropTypes.oneOf(["left", "right", "center", "justify"]),
  /** Render prop for anchor element. */
  anchor: PropTypes.func,
  /** Override default font-size of heading. */
  fontSize: PropTypes.string,
  /** Render prop for heading element. */
  heading: PropTypes.func,
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

LinkedHeading.defaultProps = {
  align: "left",
  anchor: (href, text) => <a href={href}>{text}</a>,
  heading: children => <h1>{children}</h1>
};

export default LinkedHeading;
