import styled from "styled-components";
import { space } from "styled-system";

const Box = styled.div`
  ${space};
`;

Box.propTypes = {
  ...space.propTypes
};

export default Box;
