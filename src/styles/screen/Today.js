import styled from "styled-components";
import { author, flexCenter } from "../variables";

export const Today = styled.section`
  ${flexCenter};
`;
export const TodayWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  padding: 20px;
  margin: 0 20px 20px;
  img {
    height: 200px;
    margin-right: 10px;
  }
  div {
    h4 {
      margin-bottom: 5px;
    }
    h6 {
      ${author}
    }
  }
`;
export const TodayTag = styled.div`
  font-size: 14px;
  line-height: 1.2;
  i {
    margin: 0 3px;
  }
  div {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const TodayUser = styled.div`
  div {
    div {
      display: flex;
      flex-direction: column;
    }
    display: flex;
  }
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;
