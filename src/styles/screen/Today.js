import styled from "styled-components";
import { author } from "../variables";

export const TodayWrappers = styled.div`
  display: flex;
  font-size: 14px;
  line-height: 1.2;
  padding: 20px;
  i {
    margin: 0 3px;
  }
  div {
    p:not(:last-child) {
      margin-bottom: 5px;
    }
  }
`;
export const TodayWrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
export const TodayWrapper = styled.div`
  display: flex;
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  padding: 20px;
  align-items: flex-end;
  img {
    height: 210px;
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
export const TodayInfo = styled(TodayWrapper)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;
export const TodayUser = styled.div`
  width: 100%;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;
