import styled from "styled-components";
import { author, maxWidth } from "../variables";

export const FooterStlye = styled.footer`
  display: flex;
  align-items: center;
  border-top: 1px solid #a451f7;
  margin-top: 20px;
`;
export const FooterWrapper = styled.div`
  ${maxWidth}
  display:flex;
  justify-content: space-between;
  padding: 20px;

  div {
    h5 {
      font-weight: 700;
      font-size: 20px;
      margin: 20px 0 40px;
    }
    a {
      ${author}
      margin-right: 14px;
    }
    h6 {
      color: #6d6d6d;
      font-size: 12px;
      margin: 20px 0;
    }
    margin: 20px 0 40px;
  }
  div:last-child {
    display: flex;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      color: #3d3d3d;
      border: 1px solid #3d3d3d;
      border-radius: 50%;
      margin-left: 5px;
      font-size: 12px;
      cursor: pointer;
    }
  }
  @media (max-width: 780px) {
    div {
      h5 {
        font-size: 16px;
      }
      a {
        font-size: 12px;
        margin-right: 8px;
      }
      h6 {
        font-size: 10px;
      }
    }
  }
`;
