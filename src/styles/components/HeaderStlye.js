import styled from "styled-components";

export const HeaderPC = styled.header`
  border-bottom: 1px solid #a451f7;
  
  }
`;
export const HeaderCenter = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  div {
    width: 33%;
    display: flex;
    margin: 0 20px;
    &:first-child {
      h1 {
        font-family: "Cookie", cursive;
        font-size: 36px;
      }
    }
    &:last-child {
      justify-content: flex-end;
    }
  }
  form {
    width: 33%;
    display: flex;

    justify-content: center;
    position: relative;
    input {
      width: 400px;
      border: 1px solid #dfdfdf;
      padding: 10px;
      border-radius: 3px;
      &:focus,
      &:active {
        outline: none;
      }
      &::placeholder {
        font-family: "Lato", sans-serif;
      }
    }
    button {
      position: absolute;
      right: 5px;
      top: 3px;
      border: none;
      background-color: transparent;
      cursor: pointer;
      padding: 7px 12px;
    }
  }
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
`;
