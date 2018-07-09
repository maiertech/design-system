import React from "react";
import styled from "styled-components";
import { maxWidth, space } from "styled-system";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  ${maxWidth};
  ${space};
`;

const Container = ({ children, ...props }) => (
  <Wrapper {...props}>{children}</Wrapper>
);

export default Container;
