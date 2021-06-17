import styled from "styled-components";
import { maxWidth } from "../variables";

export const BookList = styled.div`
  display: flex;
  justify-content: space-between;
  ${maxWidth}
  overflow-x: scroll;
`;
