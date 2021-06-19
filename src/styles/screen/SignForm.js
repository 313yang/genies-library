import styled from "styled-components";
import { BorderBottom, flexCenter, maxWidth } from "../variables";
export const SignInUp = styled.main`
  ${flexCenter}
  align-items: center;
  ${maxWidth}
`;
export const SignForm = styled.form`
  ${flexCenter}
  flex-direction:column;
  width: 400px;
  margin-top: 50px;
  input {
    margin: 10px 0;
    padding: 10px 10px;
    border: none;
    &:not([type="submit"]) {
      border-bottom: 1px solid #e1e1e1;
      transition: border-bottom 0.2s ease-in;
      &:hover {
        ${BorderBottom}
      }
    }
    &:focus,
    &:active {
      outline: none;
    }
  }
  input[type="submit"] {
    background-color: #a451f7;
    color: white;
    border-radius: 5px;
  }
`;
export const SignSocial = styled.div`
  ${flexCenter}
  flex-direction:column;
  width: 400px;
  margin: 20px;
  p {
    text-align: center;
    font-size: 12px;
    margin-bottom: 20px;
  }
`;
export const SocialBtn = styled.button`
  background-color: ${(props) => (props.kakao ? "#f7d800" : "#ea4335")};
  color: ${(props) => (props.kakao ? "#363433" : "white")};
  border-radius: 5px;
  padding: 10px 10px;
  border: none;
  margin-bottom: 10px;
`;
