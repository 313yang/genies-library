import styled from "styled-components";
import { maxWidth, flexCenter, BorderBottom } from "../variables";

export const HeaderPC = styled.header`
  ${BorderBottom};
  }
`;
export const HeaderCenter = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${maxWidth}
  div {
    width: 33%;
    display: flex;
    margin: 0 20px;
    &:first-child {
      h1 {
        font-family: "Cookie", cursive;
        font-size: 34px;
        cursor: pointer;
      }
    }
    &:last-child {
      justify-content: flex-end;
      button[type="submit"] {
        border: none;
        background-color: transparent;
        cursor: pointer;
        padding: 6px;
        font-size: 16px;
      }
    }
  }
`;
export const HeaderForm = styled.form`
  ${flexCenter},
  width: 33%;
  position: relative;
`;
export const Button = styled.button`
  font-family: "Noto Sans KR", sans-serif;
  height: 30px;
  width: 70px;
  border-radius: 3px;
  margin-left: 10px;
  color: ${(props) => (props.black ? "white" : "#3d3d3d")};
  background-color: ${(props) => (props.black ? "#3d3d3d" : "white")};
  border: 1px solid #3d3d3d;
  cursor: pointer;
`;
export const HeaderMobile = styled.header`
  display: flex;
  flex-direction: column;
  position: relative;
  div {
    z-index: 8;
    background-color: white;
    ${BorderBottom};
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      font-family: "Cookie", cursive;
      font-size: 24px;
      cursor: pointer;
      &:first-child {
        margin-left: 20px;
      }
      &:nth-child(2) {
        font-size: 30px;
      }
      &:last-child {
        margin-right: 20px;
        button[type="submit"] {
          border: none;
          background-color: transparent;
          cursor: pointer;
          padding: 6px;
          font-size: 16px;
        }
      }
    }
  }
  
  }
  .fa-times {
    font-size: 28px;
    width: 24px;
  }
`;
