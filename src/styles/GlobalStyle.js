import { createGlobalStyle } from "styled-components";
import { flexCenter, maxWidth } from "./variables";

import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset};
*, *::before, *::after {
    box-sizing: border-box;
    margin:0;
    padding:0;
  
  }
body{
  font-family: 'Noto Sans KR', sans-serif;
  color: #3d3d3d;
}
a{
  text-decoration: none;
  color: inherit;
  &:hover{
    color:white;
  }
}
main{
  ${flexCenter}
  flex-direction:column;
  ${maxWidth}
}
`;
export default GlobalStyle;
