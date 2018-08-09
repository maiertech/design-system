import { css } from "styled-components";

// eslint-disable-next-line import/prefer-default-export
export const anchorStyle = css`
  a {
    display: block;
    height: 100%;
    color: inherit;
    text-decoration: none;
    transition: all 0.2s ease-out;

    &:hover {
      opacity: 0.5;
      transition: all 0.2s ease-in;
    }

    &:active {
      transition: all 0.2s ease-in;
      outline: 2px dotted currentColor;
    }
  }
`;
