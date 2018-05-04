import styled from "styled-components";
import { linkStyle } from "../globals";

const Link = styled.a`
  ${linkStyle};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${props => props.theme.spacing[2]};
`;

Link.displayName = "Link";

export { Link };

const Svg = styled.svg`
  height: ${props => props.theme.height[1]};
  width: ${props => props.theme.width[1]};
`;

Svg.displayName = "Svg";

export { Svg };

const Label = styled.span`
  display: block;
  font-size: ${props => props.theme.fontSize[1]};
`;

Label.displayName = "Label";

export { Label };
