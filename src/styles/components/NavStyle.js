import styled from "styled-components";
import { flexCenter, maxWidth } from "../variables";

export const NavPC = styled.nav`
  ${flexCenter},
  ${maxWidth}
  ul {
    display: flex;
    li {
      margin: 10px 50px 3px;
      padding: 8px 5px;
      cursor: pointer;
      &:hover {
        margin-bottom: 0;
        border-bottom: 3px solid #a451f7;
      }
    }
  }
`;
export const NavMobile = styled.nav`
  position: absolute;
  top: 0px;
  transform: translateY(100px);
  transition: all 0.3s ease-in;
  display: flex;
  align-items: flex-end;
  background-color: #a451f7;
  width: 100%;
  height: 80px;
  padding: 0 5%;
  z-index: 5;
  ul {
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 14px;
    color: white;
    cursor: pointer;
    li {
      padding: 20px;
      &:hover {
        padding-bottom: 17px;
        border-bottom: 3px solid white;
      }
    }
  }
`;
