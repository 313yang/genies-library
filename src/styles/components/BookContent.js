import styled from "styled-components";
import { author, maxWidth } from "../variables";
export const Booksection = styled.section`
  display: flex;
  flex-direction: column;
`;
export const BookList = styled.div`
  display: flex;
  justify-content: space-between;
  ${maxWidth}
  overflow-x: scroll;
  padding: 0 20px;
  &::-webkit-scrollbar {
    width: 5px;
    background: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #bebebe7a;
    background-clip: padding-box;
    border: 6px solid transparent;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: none;
  }
`;
export const BookContent = styled.div`
  width: 120px;
  margin-right: 20px;
  margin-bottom: 10px;
  img {
    margin-bottom: 8px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.1);
    border: 1px solid #4646461c;
  }
  h1,
  h3 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  h3 {
    ${author}
    margin-top:5px;
  }
`;
