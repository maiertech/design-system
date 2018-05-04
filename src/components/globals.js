import { css } from "styled-components";

export const linkStyle = css`
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
`;
