import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { space } from "styled-system";

const Wrapper = styled.div`
  & > h1,
  & > h2,
  & > h3,
  & > h4,
  & > h5,
  & > h6 {
    margin: ${props => props.theme.space[0]};
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

const LinkedHeading = ({ heading, anchor, href, children, ...props }) => (
  <Wrapper {...props}>{heading(anchor(href, children))}</Wrapper>
);

LinkedHeading.propTypes = {
  /** Render prop for title. */
  heading: PropTypes.func,
  /** Render prop for anchor. */
  anchor: PropTypes.func,
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

LinkedHeading.defaultProps = {
  heading: children => <h1>{children}</h1>,
  anchor: (href, text) => <a href={href}>{text}</a>
};

export default LinkedHeading;
