import styled from "styled-components";
import { maxWidth } from "../variables";

export const MainTitle = styled.div`
  ${maxWidth}
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #a451f7;
  margin: 40px 0;
  h2,
  i {
    padding: 20px;
  }
  h2 {
    font-size: 24px;
    font-weight: 700;
  }
  i {
    font-size: 20px;
  }
`;
