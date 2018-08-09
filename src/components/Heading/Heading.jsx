import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { fontFamily, fontSize, lineHeight, space } from "styled-system";
import { anchorStyle } from "../../style";

// Reset default browser margins.
const Wrapper = styled.div`
  & > h1,
  & > h2,
  & > h3,
  & > h4,
  & > h5,
  & > h6 {
    margin: 0;
    text-align: ${({ align }) => align};
    ${fontSize};
    ${lineHeight};
  }
  ${anchorStyle};
  ${fontFamily};
  ${space};
`;

const Heading = ({ link, children, heading, href, ...props }) => (
  <Wrapper fontFamily="sansSerif" {...props}>
    {link
      ? heading(link.anchor({ href: link.href, children }))
      : heading(children)}
  </Wrapper>
);

Heading.propTypes = {
  /** Align heading. */
  align: PropTypes.oneOf(["left", "right", "center", "justify"]),
  /** Optionsl render prop for anchor element. */
  link: PropTypes.shape({
    anchor: PropTypes.func.isRequired,
    href: PropTypes.string.isRequired
  }),
  children: PropTypes.string.isRequired,
  /** Override default font-size of heading. */
  fontSize: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array
  ]),
  /** Render prop for heading element. */
  heading: PropTypes.func,
  lineHeight: PropTypes.string,
  ...space.propTypes
};

Heading.defaultProps = {
  align: "left",
  fontSize: undefined,
  heading: children => <h1>{children}</h1>,
  lineHeight: "title",
  link: undefined
};

export default Heading;
