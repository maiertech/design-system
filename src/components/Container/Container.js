import styled from "styled-components";
import { space, style } from "styled-system";

const maxWidth = style({
  prop: "maxWidth",
  cssProperty: "maxWidth",
  key: "maxWidth"
});

const Container = styled.div`
  ${maxWidth};
  ${space};
`;

export default Container;
