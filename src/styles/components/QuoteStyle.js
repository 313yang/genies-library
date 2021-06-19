import styled from "styled-components";
import { flexCenter } from "../variables";

export const QuoteStyle = styled.div`
  ${flexCenter}
  align-items: center;
  background: center / cover no-repeat
    url("https://images.millie.co.kr/postimage/20190722/15637624575473.jpg");
  width: 100%;
  height: 380px;
  margin-bottom: 20px;
  div {
    ${flexCenter}
    flex-direction: column;
    align-items: center;
    width: 50%;
    background-color: rgba(255, 255, 255, 0.6);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1), 0 0px 3px rgba(0, 0, 0, 0.13);
    padding: 30px;
    border-radius: 10px;
    p {
      font-size: 22px;
      font-weight: 700;
      text-align: center;
      margin: 10px 20px;
      line-height: 1.4;
    }
    span {
      width: 100%;
      color: #6d6d6d;
      font-size: 24px;
    }
    .last {
      text-align: right;
    }
    h6 {
      font-size: 18px;
      margin-top: 15px;
    }
  }
  @media (max-width: 780px) {
    div {
      width: 80%;
      span,
      p {
        font-size: 16px;
      }
      h6 {
        font-size: 14px;
      }
    }
  }
`;
