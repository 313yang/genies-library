import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
font-family: 'Cookie', cursive;
font-family: 'Lato', sans-serif;
*, *::before, *::after {
    box-sizing: border-box;
    margin:0;
    padding:0;
  
  }
body{
  font-family: 'Noto Sans KR', sans-serif;
}
a{
  text-decoration: none;
  color:#f2f2f2;
  &:hover{
    color:white;
  }
}
`;
export default GlobalStyle;
