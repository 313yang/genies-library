import styled from "styled-components";
import { flexCenter, maxWidth } from "../variables";

export const NavPC = styled.nav`
  ${flexCenter},
  ${maxWidth}
  ul {
    display: flex;
    li {
      margin: 10px 50px 0;
      padding: 8px 5px;
      cursor: pointer;
      &:hover {
        border-bottom: 3px solid #a451f7;
      }
    }
  }
`;
