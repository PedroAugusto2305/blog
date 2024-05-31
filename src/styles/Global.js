import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme.colors.dark10};
  }
`;

export default GlobalStyle;
